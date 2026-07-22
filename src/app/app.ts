import { Component } from '@angular/core';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, About, Experience, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
