import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-top-hotel-item',
  templateUrl: './top-hotel-item.component.html',
  styleUrls: ['./top-hotel-item.component.scss']
})
export class TopHotelItemComponent implements OnInit {
  @Input() Product:any;
  constructor() { }

  ngOnInit(): void {
  }

}
