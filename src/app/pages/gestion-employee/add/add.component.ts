import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../services/clientservice';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formClient!: FormGroup;
submitted: boolean=false;
listHotels: any[]=[];
  constructor(private clientService: ClientService, private fb: FormBuilder, private hotelService: HotelService) { }

  ngOnInit(): void {
this.getDepartment();
this.formClient = this.fb.group({
  ClientFirstName: ['', Validators.required],
  ClientLastName: ['', Validators.required],
  ClientPhone: ['', Validators.required],
 hotelId: ['', Validators.required]
})}
getDepartment():void{
  this.hotelService.getListHotels().subscribe(data => {
 this.listHotels.push(...data);
//  console.log(data)
  },error =>{
console.log(error)
  })}
get f() {
  return this.formClient.controls;
}
submit(): void{
    this.clientService.postClients(this.formClient.value).subscribe(data => {
      window.location.reload();
    console.log(this.formClient.value);},err =>{
    console.log(err)
    });
  }
}

