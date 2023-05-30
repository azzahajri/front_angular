import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clientservice';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listClients: any[] = [];
  public hotels: any[] = [];
  public selectedClient: any = null;

  constructor(private empService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
    this.getHotels();
  }

  getClients(): void {
    this.empService.getClients().subscribe(
      (data) => {
        console.log(data);
        this.listClients.push(...data);
      },
      (err) => console.log(err)
    );
  }
  getHotelName(id: number): string {
    const hotel = this.hotels.find(d => d.id === id);
    return hotel ? hotel.hotelName : '';
  }
  getHotels(): void {
    this.empService.getHotels().subscribe(
      data => {
        console.log(data);
        this.hotels = data;
      },
      err => console.log(err)
    );
  }
  openEditForm(client: any): void {
    this.selectedClient = client;
  }
  closeEditForm(): void {
    this.selectedClient = null;
  }
  submitEditForm(): void {
    this.empService.updateClient(this.selectedClient.id, this.selectedClient )
      .subscribe(
        (data) => {
          console.log(data);
          
          this.closeEditForm();
          const index = this.listClients.findIndex(e => e.id === this.selectedClient.id);
          if (index !== -1) {
            this.listClients[index] = data;
          }
          this.empService.getClients().subscribe((data) => {
            this.hotels = data;  });
        },
        (err) => console.log(err)
      );
  }
  

  deleteClient(client: any): void {
    if (confirm('Are you sure you want to delete this client?')) {
      this.empService.deleteClient(client.id).subscribe(
        () => {
          console.log('client deleted successfully');
          const index = this.listClients.indexOf(client);
          if (index !== -1) {
            this.listClients.splice(index, 1);
          }
        },
        (err) => console.log(err)
      );
    }
  }
}
