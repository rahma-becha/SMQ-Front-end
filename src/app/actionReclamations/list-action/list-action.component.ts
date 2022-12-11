import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ActionReclamation } from '../../model/actionReclamation';
import { ActionReclamationService } from '../../services/actionReclamation.service';
@Component({
  selector: 'list-action',
  templateUrl: './list-action.component.html',
  styleUrls: ['./list-action.component.css']
})
export class ListActionComponent implements OnInit {
  displayStyle:String
  public actionFormGroup:FormGroup

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private actionReclamationService:ActionReclamationService) { }

  ngOnInit(): void {
    this.actionFormGroup = this.formBuilder.group({
      cin: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      dateDecision: ['', [Validators.required]],
      libelle: ['', [Validators.required]],
    });
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
