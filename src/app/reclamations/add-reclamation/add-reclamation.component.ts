import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Reclamation } from '../../model/reclamation';
import { ReclamationService } from '../../services/reclamation.service';
@Component({
  selector: 'add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
   public reclamationFrom!:FormGroup
   private reclamation:Reclamation
  constructor(private reclamationService:ReclamationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reclamationFrom = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      gravite: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
      pieceJointe:['', [Validators.required]],
    });
  }
  onSubmit(){
  
    this.reclamationService.addReclamation(this.reclamationFrom.value).subscribe((data:any)=>{
    
    })
  }

}
