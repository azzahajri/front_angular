import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {
  hotels: any[] = [];
    selectedHotel: any;
  showUpdateForm: boolean = false;
  form!: FormGroup;
  submitted: boolean=false;

  constructor(private fb: FormBuilder,private depService: HotelService) {

   }

  ngOnInit(): void {
   // this.loadListHotels();
    this.form = this.fb.group({
      hotelName: ['', Validators.required]
    });
  }
  onUpdate(hotel: any) {
    this.selectedHotel = hotel;
    this.form.controls['hotelName'].setValue(this.selectedHotel.hotelName);
    this.showUpdateForm = true;
  }
  
loadListDepartments(): void {
  this.depService.getListHotels().subscribe(data=>{
    console.log(data);
  this.hotels.push(...data);},
  err=>console.log(err));
}
onSubmit(): void {
  
    const hotelName = this.form.value.hotelName;
    this.depService.postHotels({ hotelName })
      .subscribe((newHotel) => {
        this.depService.getListHotels().subscribe((data) => {
          this.hotels = data;  });
      }, (error) => {
      });
  
}
onUpdateSubmit() {
  const hotel = { id: this.selectedHotel.id,hotelName: this.form.value.hotelName };
  this.depService.updateHotel(hotel).subscribe(() => {
    this.showUpdateForm = false;
        this.depService.getListHotels().subscribe((data) => {
      this.hotels = data;  });
  });
}
editHotel(hotel: any): void {
  this.selectedHotel = hotel;
  this.form.setValue({
    id: hotel.id,
    hotelName: hotel.hotelName
  });
}

}
