import { Component, OnInit, Input } from '@angular/core';
import { IHeroe } from '../../Interfaces/IHeroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: IHeroe;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHeroe() {
    this.router.navigate(['/heroe', this.index]);
  }
}
