import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

banner : any = {
		
		pagetitle: "Faq",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Faq",
	}
	
constructor() { }

  ngOnInit(): void {
  }

}
