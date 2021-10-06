# ang-comp-guide

## Getting Started
### Add Bootstrap
   - run `npm install --save bootstrap@<version_num>` in terminal


## The Basics
- Angular, at the end of the day is just a JavaScript framework, changing you DOM (HTML) at runtime.
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
### Working with Template Components
- In our TS files, we can change our component's `templateUrl` property to `template` and write our HTML in there 
- We can also use back-ticks (string interpolation) to write multi-line HTML code

## Debugging


## Components and Data-Binding


## Directives Deep Dive


## Using Services and Dependency Injections
