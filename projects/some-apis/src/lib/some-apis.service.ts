import { Injectable } from '@angular/core';
import { Foo } from '@models';

@Injectable({
  providedIn: 'root'
})
export class SomeApisService {
  constructor() {}

  getFoo(): Foo {
    return {
      id: '123',
      name: 'Foo'
    };
  }
}
