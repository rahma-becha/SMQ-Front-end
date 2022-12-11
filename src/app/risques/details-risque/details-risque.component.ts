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
  private id:number
  public risque:Risque
  public actionRisque:ActionRisque[]=[]
  displayStyle
  constructor(private formBuilder: FormBuilder,private risqueService:RisqueService,private route: ActivatedRoute,private actioRisqueService:ActionRisqueService) { }

 
  getRisque(id:number)
  {
      this.risqueService.getRisqueById(id).subscribe((data:Risque)=>{
        this.risquesForm.controls['dateDetection'].setValue(data.dateDetection)
        this.risquesForm.controls['type'].setValue(data.type)
        this.risquesForm.controls['description'].setValue(data.description)
        this.risquesForm.controls['lieuOuPromotion'].setValue(data.lieuOuPromotion)
        this.risquesForm.controls['evolution'].setValue(data.evolution)
        this.risquesForm.controls['niveau'].setValue(data.niveau)
     })
    
     
   
  }
 

 
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
    this.actionFormGroup = this.formBuilder.group({
      cin: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      dateDecision: ['', [Validators.required]],
      libelle: ['', [Validators.required]],
    });
    this.getRisque(this.id)
    
  }
  openPopup() {
    this.displayStyle = "block";
    const bodyTag = document.body;
    bodyTag.classList.add('modal-open');
  }
  closePopup() {
    this.displayStyle = "none";
  }
}