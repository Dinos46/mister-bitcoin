import { User } from "../models/user.model"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class UserService {
    constructor(private http: HttpClient) { }

    private KEY = 'user';
    private LOGEDUSERKEY = 'logedin'

    private users: User[] = [
        {
            name: "Ochoa Hyde",
            coins: 100,
            moves: []
        }
    ]


    async getUsers() {
        // this.save(this.KEY, this.users)
        return await this.load(this.KEY);
    }

    async signUp(user: User) {
        const userToSave: User = {
            ...user,
            coins: 100,
            moves: []
        }
        this.saveLogedInUser(this.LOGEDUSERKEY, userToSave)
        this.users.unshift(userToSave)
        this.save(this.KEY, this.users)
    }

    async getLogedInUser() {
        return await JSON.parse(localStorage.getItem(this.LOGEDUSERKEY)) || ''
    }

    saveLogedInUser(KEY: string, user: User) {
        localStorage.setItem(KEY, JSON.stringify(user))
    }


    // addMove(contact, amount){

    // }

    async load(KEY: string) {
        return await JSON.parse(localStorage.getItem(KEY)) || []

    }

    save(KEY: string, user: User[]) {
        localStorage.setItem(KEY, JSON.stringify(user))
    }

}
