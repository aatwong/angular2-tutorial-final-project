import {Component, OnInit} from 'angular2/core',
import {UsersService} from './users.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, Router} from  'angular2/router';

@Component({
    selector: 'users',
    templateUrl: 'app/users.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService, HTTP_PROVIDERS]
})

export class UsersComponent {
    users;

    constructor(private _usersService: UsersService) {}

    ngOnInit() {
        this._usersService.getUsers().subscribe(response => {
            //console.log(response);
            this.users = response;
        });
    }

}