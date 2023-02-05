import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../Models/User";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../Services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateUserComponent} from "../create-user/create-user.component";
import {UpdateUserComponent} from "../update-user/update-user.component";


@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[]= ['Id','Name', 'Email', 'PhoneNumber', 'Update','Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(
    private userService: UserService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
    this.sort.disableClear = true
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(res=>{
      if (res){
        this.dataSource.data = res
      }
    })
  }

  openCreateUserDialog() {
    this.dialog.open(CreateUserComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllUsers()
      }
    })
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

  openUpdateUserDialog(user : User) {
    this.dialog.open(UpdateUserComponent,{data:user}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllUsers()
      }
    })
  }

  deleteUser(id : any) {
    let result = confirm("Bạn có chắc chắn xóa không ?")
    if(result){
      this.userService.deleteUser(id).subscribe(res=>{
        if(res){
          this.getAllUsers()
        }
      })
    }
  }

  showAlert = () => {
    setInterval(()=>{
      alert('I show every 5 seconds')
    },5000)
  }
}
