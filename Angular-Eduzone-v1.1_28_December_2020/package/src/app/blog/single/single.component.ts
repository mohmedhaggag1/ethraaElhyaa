import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

	banner : any = {
		pagetitle: "السياسات والخصوصية ",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "السياسات والخصوصية ",
	}

	layout : any = {	
		sidebar: false,
		sidebarPosition:"",
		container_class:"min-container"
	}
	constructor() { }

  ngOnInit(): void {
  }

}
