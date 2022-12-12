import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { Reclamation } from '../../model/reclamation';
import { ReclamationService } from '../../services/reclamation.service';
import { PieceJointeService } from '../../services/pieceJointe.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
   public reclamationFrom!:FormGroup
   private reclamation:Reclamation
   file:File
  constructor(private reclamationService:ReclamationService, private formBuilder: FormBuilder, private pieceJointeService:PieceJointeService) { }

  ngOnInit(): void {
    this.reclamationFrom = this.formBuilder.group({
      dateDetection: ['', [Validators.required]],
      type: ['', [Validators.required]],
      gravite: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieuOuPromotion: ['', [Validators.required]],
     // pieceJointe:['', [Validators.required]],
    });
  }
  onSubmit(){
  
    this.reclamationService.addReclamation(this.reclamationFrom.value).subscribe((data:any)=>{
    
    })
  }
  
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    //this.name=files[0].name;
    for (const file of files) { formData.append('files', file, file.name); }
    this.pieceJointeService.upload(formData).subscribe(
      event => {
        console.log(event);
       // this.resportProgress(event);
        
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
