import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {

banner : any = {
		
		pagetitle: "Services 2",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Services 2",
	}
	
  constructor() { }

  ngOnInit(): void {
  }

}
