import { Component, OnInit } from '@angular/core';
import { DummySingletonService } from "../../../core/dummy-singleton.service";
import { BroadcasterService } from "../../../core/broadcaster.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _dummySvc:DummySingletonService, private broadcaster:BroadcasterService) {

    console.log(_dummySvc.getCounter());

     this.broadcaster.broadcast('AdminsMsg', 'Admin says shut down!');

 }

  ngOnInit() {
  }

}