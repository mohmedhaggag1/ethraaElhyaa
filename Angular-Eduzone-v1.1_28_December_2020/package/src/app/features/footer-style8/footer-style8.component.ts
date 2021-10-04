import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style8',
  templateUrl: './footer-style8.component.html',
  styleUrls: ['./footer-style8.component.css']
})
export class FooterStyle8Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 8",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 8",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
