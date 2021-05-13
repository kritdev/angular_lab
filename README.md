# Course Note: Angular (CTF)

### CLI
	ng new [project name]
	ng g module [module name]
	ng g component [module]/[component name]
	ng g class [folder]/[class name]
	ng g interface [interface name]
	ng g service [service name]
	ng test
	ng e2e
	ng build
	ng build --prod

### Angular Tag

```
    <div [ngSwitch]="hasId()"> 
      <div *ngSwitchCase="false">  ...  </div> 
      <div *ngSwitchCase="true">   ...  </div> 
    </div>
```

```
    <ul> 
        <li *ngFor="let item of items; let i = index" [attr.data-index]="i"> 
            {{item}} 
        </li> 
    </ul>
```

### 2-way binding
- app.module.ts
```
import { FormsModule } from '@angular/forms';

@NgModule({ 
    ...
  imports: [ 
    ...
    FormsModule 
  ], 
    ...
}) 
export class AppModule { }
```
- app.component.ts
```
export class AppComponent { 
  msgContent = "";
  ...
```
- app.component.html
```
<input type="text" [(ngModel)]="msgContent">
```

### Stop Propagation event from child to parent component
```
<li [style.padding-left.px]="menuLevel * 20" (click)="toggleSubmenu($event)">
```

```
  toggleSubmenu(event) {
    event.stopPropagation();
  }
```

### Set style value programatically
```
<li [style.padding-left.px]="20" >
```

### Emit Event
```
  @Output()
  OnSelected: EventEmitter<ConfigurationMenuComponent> = new EventEmitter();
```

### ViewChild
```
    @ViewChild('productList') 
    productList: ProductListComponent;
```

### ViewChildren
```
  @ViewChildren(ConfigurationMenuComponent)
  configComponentList: QueryList<ConfigurationMenuComponent>;
```

### Service
- Declare Service
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() { }
}
```

- Inject Service
```
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private backendService: BackendService) {
  }
  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }
}
```

### Route
- app-route.component.ts
```
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRouteModule { }
```
-  product-detail.component.ts
```
export class ProductDetailComponent implements OnInit {
  productId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.productId = p.id;
    });
  }
}
```
- app.module.ts
```
@NgModule({ 
  .....
  imports: [ 
    .....
    AppRouteModule, 
  ], 
  ....
})
```
- app.component.html
```
      <a [routerLink]="['/']">Home</a> 
      <a [routerLink]="['/login']">Login</a> 
      <a [routerLink]="['/products']">Products</a> 
      <a [routerLink]="['/products/222']">Products Id 222</a>

      <router-outlet></router-outlet>
```

### Bootstrap
- npm install bootstrap --save
- /src/styles.css
	- @import 'bootstrap/dist/css/bootstrap.css';
- main content
```
    <div class="container">
    </div>
```

### Angular Material
- npm install --save @angular/material @angular/cdk @angular/animations
- app.module.ts
	- import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
	- import { MatButtonModule } from '@angular/material/button';
- styles.css
```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```
- index.html
```
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- import related module (in app.module.ts)
```
import { MatButtonModule } from '@angular/material/button';
```

### Form
- app.module.ts
```
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```
- app.component.ts
```
export class AppComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({ 
      email: ['', Validators.email], 
      password: ['', [Validators.required, Validators.minLength(8)]]
    }); 
  }
}
```
- app.component.html
```
<form [formGroup]="form"> 
  <div> 
    Password : <input type="password" formControlName="password"> 
    <span style="color: red;" *ngIf="form.get('password').errors?.required">Password required</span> 
    <span style="color: red;" *ngIf="form.get('password').errors?.minlength">
        Password should be at least 8 characters
    </span> 
  </div> 
  <div> 
    <button [disabled]="form.invalid" (click)="submitForm()">Submit</button> 
  </div> 
</form>
```
- form data
```
{{form.value | json}}
```
- check form control
```
{{form.get('name').errors?.required}} 
{{form.get('name').touched}} 
```
- Check field required
```
  isRequired(fieldName) {
    const validator = this.form.get(fieldName).validator({} as AbstractControl);
    return validator && validator.required;
  }
```

### Server-side communication
- app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
```
- app.component.ts
```
import { HttpClient } from '@angular/common/http'; 
import { throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators';

...

export class PostListComponent implements OnInit {
  posts: any[];
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts/')
      .pipe( 
        catchError(error => {  return throwError('Error Msg'); }) 
      )
      .subscribe(
        result => { this.posts = result as any[]; },
        err => { alert(err); }
      );
  }
}
```

### Keyboard Event
- myComponent.module.ts
```
import { Component, HostListener, OnInit } from '@angular/core';
...

export enum KeyboardKeys {
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft'
}

@Component({ ... })
export class MyComponent implements OnInit {
  ...
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KeyboardKeys.ArrowLeft) {
      console.log('ArrowLeft');
    }
    if (event.key === KeyboardKeys.ArrowRight) {
      console.log('ArrowRight');
    }
  }
  ...
}
```
