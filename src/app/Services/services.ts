import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IPlayer, IQuestion } from "../Models/interfaces";

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
}