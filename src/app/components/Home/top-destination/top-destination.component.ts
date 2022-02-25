import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.scss']
})
export class TopDestinationComponent implements OnInit {
  @Input() destination:any;
  constructor() { }

  ngOnInit(): void {
  }

}
