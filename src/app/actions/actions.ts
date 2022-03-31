import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { IAppState } from "../Models/interfaces";
//import { Action } from "rxjs/internal/scheduler/Action";

export const GET_PLAYER = "[NQUESTIONS] GET_PLAYER"
export const SET_PLAYER = "[NQUESTIONS] SET_PLAYER"
export const GET_INQUIRER = "[NQUESTIONS] GET_INQUIRER"
export const SET_INQUIRER = "[NQUESTIONS] SET_INQUIRER"
export const GET_ASKER = "[NQUESTIONS] GET_ASKER"
export const SET_ASKER = "[NQUESTIONS] SET_ASKER"
export const ADD_PLAYERS = "[NQUESTIONS] ADD_PLAYERS"

export class GetInquirer implements Action {
    readonly type = GET_INQUIRER
    constructor() {}
}

export class SetInquirer implements Action {
    readonly type = SET_INQUIRER
    constructor(public payload: string) {}
}

export class GetAsker implements Action {
    readonly type = GET_ASKER
    constructor() {}
}

export class SetAsker implements Action {
    readonly type = SET_ASKER
    constructor(public payload: string) {}
}

export class GetPlayer implements Action {
    readonly type = GET_PLAYER
    constructor() {}
}

export class SetPlayer implements Action {
    readonly type = SET_PLAYER
    constructor(public payload: string) {}
}

export class AddPlayers implements Action {
    readonly type = ADD_PLAYERS
    constructor(public payload: string[]) {}
}

export type Actions = GetInquirer | SetInquirer 
| GetAsker | SetAsker | GetPlayer | SetPlayer |AddPlayers

