import { Component } from '@angular/core';
import { Reclamation } from '../../model/reclamation';
import { ReclamationService } from '../../services/reclamation.service';
@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent {
  reclamations:Reclamation[]
  constructor(private reclamationService:ReclamationService) { }

  ngOnInit() {
    this.getListReclamtions()
  }
  getListReclamtions(){
    this.reclamationService.getReclamations(0,3).subscribe((data:Reclamation[])=>{
      this.reclamations=data
    })
  }

}
