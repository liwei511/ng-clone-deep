import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgCloneDeepService {
  constructor() {}

  clone(source, cloneObject = {}) {
    if (typeof source !== 'object') return source;

    // Source is an array
    if (Array.isArray(source)) {
      cloneObject = [];

      source.forEach((item, index) => {
        if (typeof item === 'object') {
          cloneObject[index] = this.clone(item);
        } else {
          cloneObject[index] = item;
        }
      });
    }
    // Source is another type of object
    else {
      Object.keys(source).forEach(key => {
        if (typeof source[key] === 'object') {
          cloneObject[key] = this.clone(source[key]);
        } else {
          cloneObject[key] = source[key];
        }
      });
    }

    return cloneObject;
  }
}
