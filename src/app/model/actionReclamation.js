import{Causes} from './causes';
export interface actionReclamation{
     idDecision?:number;
     libelle?:String;
     responsable?:String;
     cin?:String;
     dateDecision?:Date;
     causes?:Causes;
}