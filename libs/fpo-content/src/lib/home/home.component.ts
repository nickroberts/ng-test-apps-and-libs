import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
