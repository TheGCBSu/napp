import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../heroList';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  
  heroes:Hero[] = [];
  selected?: Hero;
  constructor(private heroservice:HeroService, private mss:MessagesService){
    
  }
  View(hero: Hero){
    this.selected = hero;
    this.mss.add(`HeroesComponent: Viewed Hero id:${hero.id}`);
  }
  clearView(){
    this.selected=undefined;
    this.mss.add(`HeroesComponent: Cleared Selection`);
  }
  getHeroes():void{
    this.heroservice.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
