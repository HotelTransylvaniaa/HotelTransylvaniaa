import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.scss']
})
export class SearchNavbarComponent implements OnInit {
  minDate: Date = new Date;
  maxDate: Date = new Date;
  constructor() { }

  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  selectedOption: number = 1 ;

    options = [
        { id: 1, name: 'Solo traveler' },
        { id: 2, name: 'Couple/Pair' },
        { id: 3, name: 'Family trevelers' },
        { id: 4, name: 'Group Travelers' },
    ];

}
