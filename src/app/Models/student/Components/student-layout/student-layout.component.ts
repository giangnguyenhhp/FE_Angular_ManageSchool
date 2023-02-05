import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../Models/Student";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {StudentService} from '../../Services/student.service';
import {MatDialog} from "@angular/material/dialog";
import {CreateStudentComponent} from "../create-student/create-student.component";
import {UpdateStudentComponent} from "../update-student/update-student.component";

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']
})
export class StudentLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<Student>();
  displayedColumns: string[] = ['Id', 'Name', 'DateOfBirth', 'Gender', 'Specialization', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getStudents()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.sort.disableClear = true;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStudents() {
    this.studentService.getStudents().subscribe(res => {
      if (res) {
        this.dataSource.data = res
        console.log(this.dataSource.data)
      }
    })
  }

  openCreateStudentDialog() {
    this.dialog.open(CreateStudentComponent).afterClosed().subscribe(res => {
      if (res) {
        this.getStudents()
      }
    })
  }

  openUpdateStudentDialog(student: Student) {
    this.dialog.open(UpdateStudentComponent, {data: student}).afterClosed().subscribe(res => {
      if (res) {
        this.getStudents()
      }
    })
    console.log(student)
  }

  deleteStudent(id: number) {
    let result = confirm("Bạn có chắc chắn muốn xóa không ?")
    if (result) {
      this.studentService.deleteStudent(id).subscribe(res => {
        if (res) {
          this.getStudents()
        }
      })
    }
  }
}
