import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <navbar></navbar>
        `,
    directives: [NavbarComponent]
})
export class AppComponent { }