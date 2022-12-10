import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Risque } from '../../model/risque';
import { RisqueService } from '../../services/risque.service';
@Component({
  selector: 'add-risques',
  templateUrl: './add-risques.component.html',
  styleUrls: ['./add-risques.component.css']
})
export class AddRisquesComponent implements OnInit {
  risquesForm:FormGroup
  constructor(private formBuilder: FormBuilder,private risqueService:RisqueService) { }

  ngOnInit(): void {
    this.risquesForm = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
      evolution:['', [Validators.required]],
      pieceJointe:['', [Validators.required]],

    });
  }
  onSubmit(){
    this.risqueService.addRisque(this.risquesForm.value).subscribe((data:any)=>{
    
    })
  }

}
