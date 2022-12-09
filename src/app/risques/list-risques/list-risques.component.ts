import { Component } from '@angular/core';
import { Risque } from '../../model/risque';
import { RisqueService } from '../../services/risque.service';
@Component({
  selector: 'app-list-risques',
  templateUrl: './list-risques.component.html',
  styleUrls: ['./list-risques.component.css']
})
export class ListRisquesComponent {
  risques:Risque[]
  constructor(private risqueService:RisqueService) { }

  ngOnInit() {
    this.getListRisques()
  }
  getListRisques(){
    this.risqueService.getRisques(0,3).subscribe((data:Risque[])=>{
      this.risques=data
    })
  }

}
