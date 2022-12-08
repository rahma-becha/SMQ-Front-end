import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
   public reclamationFrom!:FormGroup
  constructor(private formBuilder: FormBuilder) { }

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
  onSubmit(){}

}
