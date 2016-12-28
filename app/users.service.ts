import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';  //manually import
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/observable';

@Injectable() 
export class UsersService{
    private _usersUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {}

    getUsers() {
        return this._http.get(this._usersUrl).map(res=>res.json());
    }
}