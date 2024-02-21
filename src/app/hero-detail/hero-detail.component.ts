import { Component,Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
@Input()selected?:Hero;
}
