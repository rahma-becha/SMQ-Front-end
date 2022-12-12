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
  pageSize: number = 1000000;
  pageNumber:number =0 ;
  pageSizeT= 10;
  filenames: string[] = [];
  pageSizes = [3, 6, 9];
  tableSizes: number[] = [3, 6, 9, 12];
  constructor(private risqueService:RisqueService) { }

  ngOnInit() {
    this.pageSizeT= 10;

    this.getListRisques(this.pageNumber ,this. pageSize);
  }
  getListRisques(pageNumber,pageSize){
    this.risqueService.getRisques(pageNumber,pageSize).subscribe((data:Risque[])=>{
      this.risques=data
      console.log(this.risques)

    })
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.pageNumber = 1;
    this.getListRisques(this.pageNumber ,this. pageSize);
  }
  onTableDataChange(event: any) {
    this.pageNumber = event;
    this.getListRisques(this.pageNumber ,this. pageSize);
  }
  retrieveRisques(): void {
    this.risqueService.getRisques(this.pageNumber , this.pageSize).subscribe({
        next: (data) => {
          this.risques = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  onDeleteRisque(id: any): void {
    this.risqueService.deleteRisque(id)
      .subscribe({
        next: (res) => {
          this.retrieveRisques()
        },
        error: (e) => console.error(e)
      });
  }
}
