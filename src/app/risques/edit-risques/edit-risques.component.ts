import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'edit-risques',
  templateUrl: './edit-risques.component.html',
  styleUrls: ['./edit-risques.component.css']
})
export class EditRisquesComponent implements OnInit {

  risquesForm:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.risquesForm = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
      evolution:['', [Validators.required]]
    });
  }
  onSubmit(){}

}
