import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-phone',
  templateUrl: './preview-phone.component.html',
  styleUrls: ['./preview-phone.component.css']
})
export class PreviewPhoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openSideBar() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeSideBar(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
