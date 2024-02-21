import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
msgs: string[] = [];
add(msg: string){
  this.msgs.push(msg);
}
clear(){
  this.msgs=[];
}
  constructor() { }
}
