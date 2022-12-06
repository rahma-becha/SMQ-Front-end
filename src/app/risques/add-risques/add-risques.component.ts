import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'add-risques',
  templateUrl: './add-risques.component.html',
  styleUrls: ['./add-risques.component.css']
})
export class AddRisquesComponent implements OnInit {
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
