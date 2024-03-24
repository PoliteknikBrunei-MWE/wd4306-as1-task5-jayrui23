import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Wayne Manor',
      'In the heart of Gotham City',
      'https://i.redd.it/icgps7jk00ly.jpg',
      250.99
    ),
    new Place(
      'p2',
      'Empire Hotel',
      'Jerudong area',
      'https://velvetescape.com/wp-content/uploads/2014/01/P1010897.jpg',
      400
    ),
    new Place(
      'p3',
      'Simpsons House',
      'Somewhere in Springfield',
      'https://upload.wikimedia.ord/wikipedia/en/c/ca/742_Evergreen_Terrace.png',
      50
    ),
  ];

  constructor() {}

  get $places() {
    return [...this.places];
  }
}
