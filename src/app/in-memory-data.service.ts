import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Iron Man' },
      { id: 22, name: 'Thor' },
      { id: 23, name: 'Captain America' },
      { id: 24, name: 'Hulk' },
      { id: 25, name: 'Black Widow' },
      { id: 26, name: 'Spider-Man' },
      { id: 27, name: 'Black Panther' },
      { id: 28, name: 'Captain Marvel' },
      { id: 29, name: 'Doctor Strange' },
      { id: 30, name: 'tester' },
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
