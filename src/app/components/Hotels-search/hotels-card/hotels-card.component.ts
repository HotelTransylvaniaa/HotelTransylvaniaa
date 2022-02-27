import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels-card',
  templateUrl: './hotels-card.component.html',
  styleUrls: ['./hotels-card.component.scss']
})
export class HotelsCardComponent implements OnInit {
counter(i: number) {
    return new Array(i);
}
  constructor() { }

  ngOnInit(): void {
  }

}
