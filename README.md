# ang-comp-guide

## Getting Started
### Add Bootstrap
   - run `npm install --save bootstrap@<version_num>` in terminal


## The Basics
- Angular, at the end of the day is just a JavaScript framework, changing your DOM (HTML) at runtime.
### Components
- AppComponent is the root component, and other components are added/nested on top of it.
- Parts of our SPA can be broken up into smaller components, which can be reusable.
- Components are simply a TypeScript class
### Creating a New Component
- create a component with (name).component.ts
- naming conventions (NameOfClass)Component
- Decorators are an Angular feature that enhances your classes
- Every component has a decorator that sets it apart
- Here we use `@Component` and it needs an import statement
- Add JS object to configure it, which will in the background tell Angular what to do with this particular class
      - Selector - the HTML tag by which this component can be used, in strings
      - Template - reference to an external file
### Role of AppModule and Component Declaration
- Components are used to build web pages
- Modules are used to bundle different components and functionalities into packages and lets Angular know which features it's using.
- Looking at AppModule, we see an empty TS AppModule class and an `@NgModule` decorator.  This decorator is pre-configured with these JS properties:
   - declarations - where new components are registered so Angular knows to use them
   - imports - makes the exported declarations of other modules available in the current module.  used to declare components, directives, pipes in our modules
   - providers
   - bootstrap - tells which component to look for to bootstrap or recognize in index.html file
### Creating Components with CLI and Nesting
- `ng generate component componentName` or `ng g c componentName`
   - creates a folder in src with a component name
   - inside, there are HTML, TS, CSS, and SPEC file related to the component in question
- after creating new component, update AppModule also
### Working with Component Templates
- In our TS files, we can change our component's `templateUrl` property to `template` and write our HTML in there 
- We can also use back-ticks (string interpolation) to write multi-line HTML code
### Working with Component Styles
- `stylesUrls` property that points to a CSS file
- In the app-root component, we can use the css file to style our SPA
- `stylesUrls` is an array; therefore, we can reference multiple stylesheets
- `styles` property can also be used to write inline CSS; this will also take an array but of strings. Back-ticks can be used to write multi-line CSS
- NOTE: when heavy code, always use an external file
### What is Databinding?
   - Communication between the template (HTML) and TypeScript code (Business Logic)
   - To 'output' data from TypeScript code to Template, we use
      - String Interpolation `{{data}}`
      - Property Binding `[property]="data"`
   - To react to (user) event, or input data from Template to TypeScript code, we use
      - Event Binding `(event)="expression"`
   - To use a combination of both, we use
      - Two-Way Binding `[(ngModel)]="data"`
         - Using this, we can react to user-events and output data at the same time
### String Interpolation
   - Can hard-code a string or an expression which can be resolved to a string at the end, is the only condition for string interpolation
   - Can also call a method that returns a string
   - A ternary expression that returns a string can be used
   - The only restriction is that multi-line expressions or block expressions don't work with this method of databinding (meaning no `if` or `for` control structures can be used)
   - numbers are converted to strings when using string interpolation
### Property Binding
   - Can use almost any HTML properties for binding
   - Makes functionality of HTML properties dynamic and we do it by enclosing the property in square-brackets[].  This indicates to Angular we're using property-binding to directly bind to a native property dynamically that HTML has
   - We set it equal to an expression that resolves the type
   - Can also bind to other properties like directives and our own components

## Debugging



## Components and Data-Binding


## Directives Deep Dive


## Using Services and Dependency Injections
