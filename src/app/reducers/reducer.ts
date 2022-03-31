import { IAppState } from "../Models/interfaces";
import * as AllActions from '../actions/actions'

const initialState: IAppState = {
    players:[],
    thisPlayer:'',
    gameStart: false,
    currentInquirer:'',
    upcomingInquirer:'',
    currentAsker:'',
    upcomingAsker:''
}


export function AppReducer(state: IAppState = initialState, action: AllActions.Actions){
    switch(action.type){
        case AllActions.SET_INQUIRER:
            return {...state, currentInquirer: action.payload};
        case AllActions.SET_ASKER:
            return {...state, currentAsker: action.payload};
        case AllActions.SET_PLAYER:
                return {...state, thisPlayer: action.payload};
        case AllActions.ADD_PLAYERS:
                return {...state, players: action.payload};
        default:
            return state;

    }

    
}