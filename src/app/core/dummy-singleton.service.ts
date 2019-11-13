import { Injectable } from '@angular/core';

@Injectable()
export class DummySingletonService {

  constructor() { }

  private name:string="Dummy's initial Name";
   private ctr:number=0;
   getName() {
          return this.name;
      }

   setName(newName:string){
     this.name=newName;
   }

   getCounter(){
     return 'Shared counter-'+ this.ctr++;
   }
}
