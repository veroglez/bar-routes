import { Component, OnInit, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  routeId:boolean = false


  constructor() { }

  ngOnInit() {
  }


  receiveEmitter(a){
    this.routeId = a
    console.log('componente padre', this.routeId)


    // setTimeout(function () {
    //   this.routeId = a
    //   console.log('componente padre', this.routeId)
    //     this.receiveEmitter(a);
    // }, 1000);
  }
}
