import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-hotel',
  templateUrl: './top-hotel.component.html',
  styleUrls: ['./top-hotel.component.scss']
})
export class TopHotelComponent implements OnInit {
  Products:any=[
    {
    "id": 1,
    "image": "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg",
    "title": "Apartments",
    "description": "156,765 properties",
    

    
   
    },
    {
      "id": 2,
      "image": "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg",
      "title": "Vacations Rentals",
      "description": "171,765 properties",
    },
    {
      "id": 3,
      "image": "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg",
      "title": "Private Villas",
      "description": "183,715 properties",
    },
    {
      "id": 4,
      "image": "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg",
      "title": "Bungalows",
      "description": "199,245 properties",
    },
   
    
  
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
