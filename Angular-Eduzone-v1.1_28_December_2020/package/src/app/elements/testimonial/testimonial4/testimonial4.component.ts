import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-testimonial4',
  templateUrl: './testimonial4.component.html',
  styleUrls: ['./testimonial4.component.css']
})
export class Testimonial4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('.testimonial-six').owlCarousel({
				loop:true,
				margin:0,
				center: true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: 3000,
				nav:false,
				dots: true,
				navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					
					480:{
						items:2
					},			
					
					991:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
		})(jQuery);
	}

}
