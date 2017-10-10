import { Subscription } from 'rxjs/Rx';
import { HotelsService } from '../service/hotels.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnDestroy {

  hotels: {name: string}[];
  filteredHotels: any[];
  subscription: Subscription;


  constructor(private hotelService: HotelsService) {
   
    this.subscription =  this.hotelService.getHotels()
      .subscribe(hotel => {
       this.filteredHotels= this.hotels = hotel;
        console.log((this.hotels));
      })
  }

  filter(query: string) {
    this.filteredHotels= (query) ? 
      this.hotels.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) :
      this.hotels;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
