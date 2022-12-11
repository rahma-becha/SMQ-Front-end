import { Component } from '@angular/core';
import { Reclamation } from '../../model/reclamation';
import { ReclamationService } from '../../services/reclamation.service';
@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent {
  public reclamations!:Reclamation[]
  pageSize: number = 1000000;
  pageNumber:number =0 ;
  pageSizeT= 10;
  filenames: string[] = [];
  pageSizes = [3, 6, 9];
  tableSizes: number[] = [3, 6, 9, 12];
  constructor(private reclamationService:ReclamationService) { }


  getListReclamtions(pageNumber,pageSize){
    this.reclamationService.getReclamations(pageNumber,pageSize).subscribe((data:Reclamation[])=>{
       /*data.forEach(d=>{
        this.reclamations.push(d)
       })*/
       this.reclamations=data
    })

  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.pageNumber = 1;
    this.getListReclamtions(this.pageNumber ,this. pageSize);
  }
  onTableDataChange(event: any) {
    this.pageNumber = event;
    this.getListReclamtions(this.pageNumber ,this. pageSize);
  }
  retrieveReclalations(): void {
    this.reclamationService.getReclamations(this.pageNumber , this.pageSize).subscribe({
        next: (data) => {
          this.reclamations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  onDeleteReclamation(id: any): void {
    this.reclamationService.deleteReclamation(id)
      .subscribe({
        next: (res) => {
          this.retrieveReclalations()
        },
        error: (e) => console.error(e)
      });
  }
  ngOnInit() {
    this.pageSizeT= 10;
    this.getListReclamtions(this.pageNumber ,this. pageSize)
    console.log(this.reclamations)

  }
}
