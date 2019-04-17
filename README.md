# Install

```bash
npm install ng-clone-deep --save
```

## Use

Import the service into every component

```ts
import { Component, OnInit } from '@angular/core';
import { NgCloneDeepService } from 'ng-clone-deep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  source = [{name: 'Tom'}, {name: 'Jerry'}];
  constructor(private cloneDeep: NgCloneDeepService) {}

  ngOnInit() {
    const sourceClone = this.cloneDeep.clone(this.source); // cloneDeep.clone()
  }
}

```

## example

Import the module into every module where you want to use the components.

```ts
import { NgCloneDeepModule } from 'ng-clone-deep/public-api';

@NgModule({
  imports: [ NgCloneDeepModule ]
})
export class AppModule {
}
```

```html
<litwak-ng-clone-deep></litwak-ng-clone-deep>
```
