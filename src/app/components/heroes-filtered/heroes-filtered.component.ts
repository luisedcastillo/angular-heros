import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../Interfaces/IHeroe';

@Component({
  selector: 'app-heroes-filtered',
  templateUrl: './heroes-filtered.component.html'
})
export class HeroesFilteredComponent implements OnInit {

  heroes: IHeroe[] = [];
  filterText: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.filterText = params['filter'];
      this.heroes = this.heroesService.getHeroeByFilter(this.filterText);
      console.log(this.heroes);
    });
  }

}
