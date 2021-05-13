# Customize Bootstrap

This project demonstrates how to customize Bootstrap style in Angular project

## Instruction to create this sample project

#### 1. PrerequisitePrerequisite
- Create Angular project
```
  ng new project-name
```
- Install Bootstrap
```
  npm install bootstrap --save
```
- (Optional) Install Angular Material
```
  npm install --save @angular/material @angular/cdk @angular/animations
```

#### 2. Install sass compiler
```
    npm install -g sass
```

#### 3. Create file: src/styles.scss
```
    $primary: #00d90b;
    $danger: #ff4136;

    @import "node_modules/bootstrap/scss/bootstrap";
```
Note: The code above is for customizing primary color and danger color. Visit this link for more information about [Customize Bootstrap](https://getbootstrap.com/docs/5.0/customize/overview/)

#### 4. Compile scss file
```
    sass styles.scss styles.css
```
#### 5. Open output in browser
```
    ng serve --open
```
