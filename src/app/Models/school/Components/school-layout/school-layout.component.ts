import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {School} from "../../Models/School";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SchoolService} from '../../Service/school.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateSchoolComponent} from "../create-school/create-school.component";
import {UpdateSchoolComponent} from "../update-school/update-school.component";

@Component({
  selector: 'app-school-layout',
  templateUrl: './school-layout.component.html',
  styleUrls: ['./school-layout.component.scss']
})
export class SchoolLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<School>();
  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(
    private schoolService: SchoolService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllSchools()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.sort.disableClear = true;
    this.dataSource.sort = this.sort
  }

  getAllSchools() {
    this.schoolService.getAllSchools().subscribe(res => {
      if (res) {
        this.dataSource.data = res
      }
      console.log(this.dataSource.data)
    })
  }

  openCreateSchoolDialog() {
    this.dialog.open(CreateSchoolComponent).afterClosed().subscribe(res => {
      if (res) {
        this.getAllSchools()
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openUpdateSchoolDialog(school: School) {
    this.dialog.open(UpdateSchoolComponent, {data: school}).afterClosed().subscribe(res => {
      if (res) {
        this.getAllSchools()
      }
    })
  }

  deleteSchool(id: number) {
    let result = confirm("Bạn có chắc chắn xóa không ?")
    if (result) {
      this.schoolService.deleteSchool(id).subscribe(res => {
        if (res) {
          this.getAllSchools()
        }
      })
    }
  }
}
