import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Specialization} from "../../Models/Specialization";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {SpecializationService} from "../../Services/specialization.service";
import {CreateSpecializationComponent} from "../create-specialization/create-specialization.component";
import {UpdateSpecializationComponent} from "../update-specialization/update-specialization.component";

@Component({
  selector: 'app-specialization-layout',
  templateUrl: './specialization-layout.component.html',
  styleUrls: ['./specialization-layout.component.scss']
})
export class SpecializationLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<Specialization>();
  displayedColumns: string[] = ['Id','Name','Description','Student','Update','Delete'];
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  constructor(
    private dialog : MatDialog,
    private specializationService : SpecializationService
  ) { }

  ngOnInit(): void {
    this.getAllSpecialization()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
    this.sort.disableClear = true
  }

  getAllSpecialization(){
    this.specializationService.getAllSpecialization().subscribe(res=>{
      if(res){
        this.dataSource.data = res
      }
    })
  }

  openCreateSpecializationDialog() {
    this.dialog.open(CreateSpecializationComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllSpecialization()
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  openUpdateSpecializationDialog(specialization:Specialization) {
    this.dialog.open(UpdateSpecializationComponent,{data:specialization}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllSpecialization()
      }
    })
  }

  deleteSpecialization(id:number) {
    let result = confirm("Bạn có chắc chắn xóa không ?")
    if (result){
      this.specializationService.deleteSpecialization(id).subscribe(res=>{
        if(res){
          this.getAllSpecialization()
        }
      })
    }
  }
}
