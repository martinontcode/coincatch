import { Component, OnInit } from '@angular/core';
import { PORTFOLIOCOIN } from "../mock-portfoliocoin";

@Component({
  selector: 'app-coinportfolio',
  templateUrl: './coinportfolio.component.html',
  styleUrls: ['./coinportfolio.component.css']
})
export class CoinportfolioComponent implements OnInit {

  portfoliocoin = PORTFOLIOCOIN;

  constructor() { }

  ngOnInit(): void {
  }

}
