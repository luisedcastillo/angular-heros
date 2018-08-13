import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../Interfaces/IHeroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  goHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
