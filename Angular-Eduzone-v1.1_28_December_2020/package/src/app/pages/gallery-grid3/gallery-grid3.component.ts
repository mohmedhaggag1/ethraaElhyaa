import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-grid3',
  templateUrl: './gallery-grid3.component.html',
  styleUrls: ['./gallery-grid3.component.css']
})
export class GalleryGrid3Component implements OnInit {

banner : any = {
		
		pagetitle: "Gallery Grid 3 Icon",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Gallery Grid 3 Icon",
	}

	
galleries : any[] = [
		{
			gallery_image: "assets/images/portfolio/image_1.jpg",
			title: "School Library",
			category: "Library",
			gallery_link: "javascript:void(0);",
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
