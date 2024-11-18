
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

    getTextoPrioridad():string{
        switch(this.priority){
            case "H": return "Alta";break;
            case "M": return "Media"; break;
            case "L": return "Baja";break;
            default: return "";
        }
    }

    getPriorityColor(){
        switch(this.priority){
            case "H": return "yellow";break;
            case "M": return "red"; break;
            case "L": return "black";break;
            default: return "";
        }
    }

    getStatusColor(){
        switch(this.status){
            case "IP": "yellow";break;
            case "C": "red"; break;
            case "P":"black";break;
        }
    }
    
}