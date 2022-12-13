import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Reclamation } from '../../model/reclamation';
import { ReclamationService } from '../../services/reclamation.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {

  public reclamationFrom!:FormGroup
  private reclamation:Reclamation
  private id:number
  constructor(private formBuilder: FormBuilder,private reclamationService:ReclamationService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.reclamationFrom = this.formBuilder.group({
      dateDetection: ["", [Validators.required]],
      type: ["", [Validators.required]],
      gravite: ["", [Validators.required]],
      description: ["", [Validators.required]],
      lieuOuPromotion: ["", [Validators.required]],
      pieceJointe:['', [Validators.required]],
      acteur:['', [Validators.required]],

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
      this.reclamationFrom.controls['acteur'].setValue(data.acteur)

     })
  }
  onSubmit(){
    this.reclamationService.editReclamation(this.reclamationFrom.value,this.id).subscribe((data:any)=>{
      this.getAllReclamation()
    })
    }
    getAllReclamation(): void {
      
      this.router.navigate(['/reclamations']);
    }
}
