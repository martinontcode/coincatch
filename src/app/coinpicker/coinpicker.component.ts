import { Component, OnInit } from '@angular/core';
import { POTENTIALCOIN } from "../mock-potentialcoin";

@Component({
  selector: 'app-coinpicker',
  templateUrl: './coinpicker.component.html',
  styleUrls: ['./coinpicker.component.css']
})
export class CoinpickerComponent implements OnInit {

  potentialcoin = POTENTIALCOIN;

  constructor() { }

  ngOnInit(): void {
  }

}
