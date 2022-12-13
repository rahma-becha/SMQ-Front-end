import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Risque } from '../../model/risque';
import { RisqueService } from '../../services/risque.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'edit-risques',
  templateUrl: './edit-risques.component.html',
  styleUrls: ['./edit-risques.component.css']
})
export class EditRisquesComponent implements OnInit {

  risquesForm:FormGroup
  private id:number
  constructor(private formBuilder: FormBuilder,private risqueService:RisqueService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id');

    this.risquesForm = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
      evolution:['', [Validators.required]],
      acteur:['', [Validators.required]],
      pieceJointe:['', [Validators.required]],

    });
    this.getRisque(this.id)
  }
  getRisque(id:number)
  {
     this.risqueService.getRisqueById(id).subscribe((data:Risque)=>{
      this.risquesForm.controls['dateDetection'].setValue(data.dateDetection)
      this.risquesForm.controls['type'].setValue(data.type)
      this.risquesForm.controls['description'].setValue(data.description)
      this.risquesForm.controls['lieuOuPromotion'].setValue(data.lieuOuPromotion)
      this.risquesForm.controls['evolution'].setValue(data.evolution)
      this.risquesForm.controls['niveau'].setValue(data.niveau)
      this.risquesForm.controls['acteur'].setValue(data.acteur)

     })
  }
  onSubmit(){
    this.risqueService.editRisque(this.risquesForm.value,this.id).subscribe((data:any)=>{
    this.getAllRisque()
  })
  }
  getAllRisque(): void {
    
    this.router.navigate(['/risques']);
  }
}
