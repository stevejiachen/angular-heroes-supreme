import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-manage',
  templateUrl: './hero-manage.component.html',
  styleUrls: ['./hero-manage.component.css']
})
export class HeroManageComponent implements OnInit {

  heroes: Array<Hero>;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
    this.heroes = [
      new Hero(11, "Mr.nice", 1.99, 3.5, "a fantastic hero", ["java", "javascript"]),
      new Hero(12, "Narco", 1.99, 4.5, "a fantastic hero", ["python", "javascript"]),
      new Hero(13, "Bombasto", 1.99, 2.5, "a fantastic hero", ["java", "python"]),
      new Hero(14, "Celeritas", 1.99, 4.5, "a fantastic hero", ["java", "javascript"]),
      new Hero(15, "Magneta", 1.99, 1.5, "a fantastic hero", ["java", "javascript"]),
      new Hero(16, "RubberMan", 1.99, 2.5, "a fantastic hero", ["java"]),
      new Hero(17, "Dynama", 1.99, 3.5, "a fantastic hero", ["javascript"]),
      new Hero(18, "Dr IQ", 1.99, 3.8, "a fantastic hero", ["python"]),
      new Hero(19, "Magma", 1.99, 4.5, "a fantastic hero", ["java", "javascript"]),
      new Hero(20, "Tornado", 1.99, 3.5, "a fantastic hero", ["java", "javascript"]),
    ];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

export class Hero {
  constructor(public id: number,
              public name: string,
              public strength: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
