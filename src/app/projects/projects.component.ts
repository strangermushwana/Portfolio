import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Fooodie',
      description: 'Track calories effortlessly. A web app for mindful eating and nutrition tracking.',
      link: 'https://fooodie.co.za/',
      image: 'assets/fooodie.png',
      tags: ['Web App', 'Calories', 'Nutrition', 'Tracking'],
    },
    {
      title: 'Savings Plan',
      description: 'Savings calculator with envelope grid. Set goals and track your progress.',
      link: 'https://savingsplan.co.za/',
      image: 'assets/savingsplan.png',
      tags: ['Calculator', 'Savings', 'Finance', 'Planning'],
    },
    {
      title: 'Guess The Pin',
      description: 'Multiplayer number guessing game. Challenge friends and guess the pin.',
      link: 'https://www.guessthepin.co.za/',
      image: 'assets/guessthepin.png',
      tags: ['Game', 'Multiplayer', 'Number Guessing'],
    },
    {
      title: 'The Deep End',
      description: 'Everything I find interesting. Essays on philosophy, tech, psychology, and culture.',
      link: 'https://www.thedeepend.co.za/',
      image: 'assets/thedeepend.png',
      tags: ['Blog', 'Philosophy', 'Tech', 'Writing'],
    },
    {
      title: 'Stranger Mushwana',
      description: 'Personal portfolio and developer profile. Full-stack focus with Node, Angular, GraphQL.',
      link: 'https://strangermushwana.github.io/',
      image: 'assets/strangermushwana.png',
      tags: ['Portfolio', 'Angular', 'Full-Stack', 'GitHub Pages'],
    },
    {
      title: 'Chara Consulting',
      description: 'Professional consulting in Administration, Accounting, and Advisory. Exceptional service, joyful results.',
      link: 'https://characonsulting.co.za/',
      image: 'assets/chara.png',
      tags: ['Consulting', 'Accounting', 'Advisory', 'CIPC'],
    },
  ]
}
