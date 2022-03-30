import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IPlayer } from "../Models/player";

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
}