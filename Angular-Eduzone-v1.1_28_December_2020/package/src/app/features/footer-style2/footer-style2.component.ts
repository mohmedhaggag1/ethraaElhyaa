import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style2',
  templateUrl: './footer-style2.component.html',
  styleUrls: ['./footer-style2.component.css']
})
export class FooterStyle2Component implements OnInit {
	
	banner : any = {
		pagetitle: "Footer 2",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Footer 2",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
