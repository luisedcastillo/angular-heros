import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe } from '../../Interfaces/IHeroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html'
})
export class HeroeDetailComponent implements OnInit {

  heroe: IHeroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
