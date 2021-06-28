import { Injectable } from '@angular/core';
import {Place} from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Title1',
      'Desc1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/68/af/16/cretan-mansion.jpg?w=900&h=-1&s=1',
      10
    ),
    new Place(
      'p2',
      'Title2',
      'Desc2',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/68/af/16/cretan-mansion.jpg?w=900&h=-1&s=1',
      20
    ),
    new Place(
      'p3',
      'Title3',
      'Desc3',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/68/af/16/cretan-mansion.jpg?w=900&h=-1&s=1',
      30
    ),
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() { }
}
