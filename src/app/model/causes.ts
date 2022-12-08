import {ActionReclamation} from './actionReclamation';
import {Reclamation} from './reclamation';
export interface Causes{
    idCauses?:number;
    descriptionCause?:String;
    nature?:String;
    dateCreation?:Date;
    reclamation?:Reclamation;
    actionReclamation?:ActionReclamation[];
}
