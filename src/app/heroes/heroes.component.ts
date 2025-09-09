import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../mock';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  imports: [
    UpperCasePipe,
    FormsModule,
    NgForOf,
    NgIf,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;
  heroes:Hero[] = [];

  constructor(private heroService:HeroService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
