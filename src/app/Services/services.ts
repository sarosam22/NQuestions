import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IAppState, IPlayer, IQuestion } from "../Models/interfaces";

@Injectable()
export class CRUDService{
 constructor(public firestore: AngularFirestore){}

 addPlayer(player:IPlayer){
     return new Promise<any>((resolve, reject) => {
         this.firestore.collection("Players")
         .add(player)
         .then(res => {}, err => reject(err))
     }
     )
}

getPlayers(){
    return this.firestore.collection("Players").snapshotChanges()
}


addQuestion(question:IQuestion){
    return new Promise<any>((resolve, reject) => {
        this.firestore.collection("Questions")
        .add(question)
        .then(res => {}, err => reject(err))
    }
    )
}

getQuestions(){
    return this.firestore.collection("Questions").snapshotChanges();
}

addInitialState(state: IAppState){
    return new Promise<any>((resolve, reject) => {
        this.firestore.collection("PlayerState")
        .doc('playerState')
        .set(state)
        .then(res => {}, err => reject(err))
    }
    )
}

getCurrentState(){
    return this.firestore.collection("PlayerState").snapshotChanges();
}

updateStateonAskerChange(data: IAppState){
    return this.firestore.collection("PlayerState").doc('playerState').set({ currentAsker: data.currentAsker}
        , { merge: true})
}

}