import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Reclamation } from '../../model/reclamation';
import { ReclamationService } from '../../services/reclamation.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'details-reclamtion',
  templateUrl: './details-reclamtion.component.html',
  styleUrls: ['./details-reclamtion.component.css']
})
export class DetailsReclamtionComponent implements OnInit {

  public reclamationFrom!:FormGroup
  public causeForm:FormGroup
  public consequenceForm:FormGroup
  private reclamation:Reclamation
  private id:number
  constructor(private formBuilder: FormBuilder,private reclamationService:ReclamationService,private route: ActivatedRoute) { }
  displayStyleCause:String
  displayStyleConsequeance:String

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.reclamationFrom = this.formBuilder.group({
      dateDetection: ["", [Validators.required]],
      type: ["", [Validators.required]],
      gravite: ["", [Validators.required]],
      description: ["", [Validators.required]],
      lieuOuPromotion: ["", [Validators.required]],
      pieceJointe:['', [Validators.required]],

    });
    this.causeForm = this.formBuilder.group({
      dateCreation: ["", [Validators.required]],
      descriptionCause: ["", [Validators.required]],
      nature: ["", [Validators.required]],
    });
    this.consequenceForm = this.formBuilder.group({
      dateCreation: ["", [Validators.required]],
      descriptionCause: ["", [Validators.required]],
    });
    this.getReclamation(this.id)

  }
  getReclamation(id:number)
  {
     this.reclamationService.getReclamationById(id).subscribe((data:Reclamation)=>{
      this.reclamationFrom.controls['dateDetection'].setValue(data.dateDetection)
      this.reclamationFrom.controls['type'].setValue(data.type)
      this.reclamationFrom.controls['gravite'].setValue(data.gravite)
      this.reclamationFrom.controls['description'].setValue(data.description)
      this.reclamationFrom.controls['lieuOuPromotion'].setValue(data.lieuOuPromotion)
     })
  }
  onSubmit(){
    this.reclamationService.editReclamation(this.reclamationFrom.value,this.id).subscribe((data:any)=>{

  })
  }
  openPopupCause() {
    this.displayStyleCause = "block";
    const bodyTag = document.body;
    bodyTag.classList.add('modal-open');
  }
  closePopupCause() {
    this.displayStyleCause = "none";
  }
  openPopupConsequeance() {
    this.displayStyleConsequeance = "block";
    const bodyTag = document.body;
    bodyTag.classList.add('modal-open');
  }
  closePopuConsequeance() {
    this.displayStyleConsequeance = "none";
  }
}
