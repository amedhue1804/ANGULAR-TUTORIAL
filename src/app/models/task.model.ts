
export enum TaskStatus{
    COMPLETED="C",
    IN_PROGRESS="IP",
    PENDING="P"
}

export enum TaskPriority{
    HIGH="H",
    MEDIUM="M",
    LOW="L"
}

export class Task {
    id:number;
    name:string;
    description:string;
    priority:TaskPriority;
    status:TaskStatus;
    fechaCreacion:Date;
    fechaExpiracion:Date;
    isDelete:boolean;

    constructor (id:number,name:string,description:string,priority:TaskPriority,status:TaskStatus,fechaCreacion:Date,fechaExpiracion:Date,isDelete:boolean){
        this.id = id;
        this.name = name;
        this.description=description;
        this.priority=priority;
        this.status = status;
        this.fechaCreacion = fechaCreacion;
        this.fechaExpiracion =fechaExpiracion;
        this.isDelete = isDelete;
    }

    getTextoEstado():string{
        let text="";
        switch(this.status){
            case "IP": text="En proceso";break;
            case "C": text="Realizada"; break;
            case "P": text="Pendiente";break;
        }
        return text;
    }

    getStatusText():string{
        let text="";
        switch(this.status){
            case "IP": text="En proceso";break;
            case "C": text="Realizada"; break;
            case "P": text="Pendiente";break;
        }
        return text;
    }

    getPriorityText():string{
        switch(this.priority){
            case "H": return "Alta";break;
            case "M": return "Media"; break;
            case "L": return "Baja";break;
            default: return "";
        }
    }
    
    raisePriority(){
        switch(this.priority){
          case TaskPriority.LOW: this.priority=TaskPriority.MEDIUM;break;
          case TaskPriority.MEDIUM: this.priority=TaskPriority.HIGH;break;
        }
    }
    
    lowerPriority(){
        switch(this.priority){
            case TaskPriority.MEDIUM: this.priority=TaskPriority.LOW;break;
            case TaskPriority.HIGH: this.priority=TaskPriority.MEDIUM;break;
        }
    }

    changeStatus(){
        switch(this.status){
            case TaskStatus.COMPLETED: this.status=TaskStatus.IN_PROGRESS;break;
            case TaskStatus.IN_PROGRESS: this.status=TaskStatus.COMPLETED;break;
            case TaskStatus.PENDING: this.status=TaskStatus.IN_PROGRESS;break;

        }
    }

    isExpiringSoon(): boolean {
        const now = new Date();
        const diff = this.fechaExpiracion.getTime() - now.getTime();
        return diff > 0 && diff <= 3 * 24 * 60 * 60 * 1000; 
    }

    isExpired(): boolean {
        const now = new Date();
        return now > this.fechaExpiracion;
    }
}