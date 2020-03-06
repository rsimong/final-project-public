import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simplify-logo',
  templateUrl: './simplify-logo.component.html',
  styleUrls: ['./simplify-logo.component.css']
})
export class SimplifyLogoComponent implements OnInit {

  @Input() size = 'medium';

  constructor() { }

  ngOnInit() {
  }

}
