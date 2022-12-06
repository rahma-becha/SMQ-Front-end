import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {

  public reclamationFrom!:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reclamationFrom = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      gravite: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
    });
  }
  onSubmit(){}

}
