import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Risque } from '../../model/risque';
import { RisqueService } from '../../services/risque.service';
import { ActionRisqueService } from '../../services/actionRisque.service';
import { ActionRisque } from '../../model/actionRisque';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'details-risque',
  templateUrl: './details-risque.component.html',
  styleUrls: ['./details-risque.component.css']
})
export class DetailsRisqueComponent implements OnInit {
  public risquesForm:FormGroup
  public actionFormGroup:FormGroup
  public actionFormGroupEdit:FormGroup
  private id:number
  public risque:Risque
  public actionRisque:ActionRisque[]=[]
  displayStyleAdd:String
  displayStyleEdit:String

  pageSize: number = 1000000;
  pageNumber:number =0 ;
  pageSizeT= 10;
  idAction=null
  modalTite:String
  constructor(private formBuilder: FormBuilder,private risqueService:RisqueService,private route: ActivatedRoute,private actioRisqueService:ActionRisqueService) { }
  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');

    this.risquesForm = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
      evolution:['', [Validators.required]],
      pieceJointe:['', [Validators.required]],

    });
    this.actionFormGroup= this.formBuilder.group({
      cin: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      dateDecision: ['', [Validators.required]],
      libelle: ['', [Validators.required]],
      risque:['',Validators.required]
    });
    this.actionFormGroupEdit= this.formBuilder.group({
      cin: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      dateDecision: ['', [Validators.required]],
      libelle: ['', [Validators.required]],
      risque:['',Validators.required]
    });
    this.getRisque(this.id)
    this.getActionRisque(this.id)
  }
  getRisque(id:number)
  {
      this.risqueService.getRisqueById(id).subscribe((data:Risque)=>{
        this.risquesForm.controls['dateDetection'].setValue(data.dateDetection)
        this.risquesForm.controls['type'].setValue(data.type)
        this.risquesForm.controls['description'].setValue(data.description)
        this.risquesForm.controls['lieuOuPromotion'].setValue(data.lieuOuPromotion)
        this.risquesForm.controls['evolution'].setValue(data.evolution)
        this.risquesForm.controls['niveau'].setValue(data.niveau)
        this.actionFormGroup.controls['risque'].setValue(data)
        this.actionFormGroupEdit.controls['risque'].setValue(data)

     })
    
     
   
  }
  openPopupAdd() {
    this.displayStyleAdd = "block";
    this.modalTite="Ajouter une Action"
    const bodyTag = document.body;
    bodyTag.classList.add('modal-open');
  }
  closePopupAdd() {
    this.displayStyleAdd = "none";

  }

  
  getActionRisque(id:number){
    this.actioRisqueService.getActionRisques().subscribe((data:ActionRisque[])=>{
      this.actionRisque=data.filter(item=>item.risque.idRisque==id)
      console.log(this.actionRisque)
    })
  }
  onSubmitAddActionRisque(){
   
      this.actioRisqueService.addActionRisque(this.actionFormGroup.value).subscribe(data=>{
        this.actionFormGroup.reset()
         this.closePopupAdd()
        this.getActionRisque(this.id)
      })
    

  }
  onSubmitEditActionRisque()
  {
    this.actioRisqueService.editActionRisque(this.actionFormGroupEdit.value,this.idAction).subscribe(data=>{
      this.actionFormGroupEdit.reset()
      this.closePopupEdit()
      this.getActionRisque(this.id)
  })
  }
  onDeleteActionRisque(id:number){
     this.actioRisqueService.deleteActionRisque(id).subscribe(data=>{
      this.getActionRisque(this.id)
     })
  }
  openPopupEdit(id:number) {
    this.idAction=id
    this.getActionRisqueById(id)
    this.displayStyleEdit = "block";
    const bodyTag = document.body;
    bodyTag.classList.add('modal-open');

  }
 

  getActionRisqueById(id:number){
    this.idAction=id
    this.modalTite="Modifier une Action"
    this.actioRisqueService.getActionRisqueById(id).subscribe((data:ActionRisque)=>{
          this.actionFormGroupEdit.controls['cin'].setValue(data.cin)
          this.actionFormGroupEdit.controls['dateDecision'].setValue(data.dateDecision)
          this.actionFormGroupEdit.controls['libelle'].setValue(data.libelle)
          this.actionFormGroupEdit.controls['responsable'].setValue(data.responsable)
          
    })
  }
  closePopupEdit() {
    this.displayStyleEdit = "none";

  }
}