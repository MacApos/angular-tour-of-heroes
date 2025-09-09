import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  imports: [
    NgIf,
    ReactiveFormsModule,
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
