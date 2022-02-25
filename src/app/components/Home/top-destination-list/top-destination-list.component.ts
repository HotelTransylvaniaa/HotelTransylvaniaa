import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-destination-list',
  templateUrl: './top-destination-list.component.html',
  styleUrls: ['./top-destination-list.component.scss']
})
export class TopDestinationListComponent implements OnInit {
  destinations:any=[
    {
      "image":"//pix6.agoda.net/geo/city/7923/1_7923_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      "title":"Cairo",
      "description":"887 accommodations"
    },
    {
      "image":"https://pix6.agoda.net/geo/city/18749/1_18749_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      "title":"Giza",
      "description":"757 accommodations"
    },
    {
      "image":"https://pix6.agoda.net/geo/city/6700/1_6700_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      "title":"Hurghada",
      "description":"1,439 accommodations"
    },
    {
      "image":"https://pix6.agoda.net/geo/city/2199/1_2199_02.jpg?s=345x345&ar=1x1",
      "title":"Alexandria",
      "description":"592 accommodations"
    },
    {
      "image":"https://pix6.agoda.net/geo/city/15897/1_15897_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      "title":"Sharm El sheikh",
      "description":"573 accommodations"
    },
    {
      "image":"https://pix6.agoda.net/geo/city/10643/1_10643_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      "title":"Luxor",
      "description":"343 accommodations"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
