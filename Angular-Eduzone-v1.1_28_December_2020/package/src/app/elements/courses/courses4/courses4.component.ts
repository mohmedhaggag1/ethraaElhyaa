import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-courses4',
  templateUrl: './courses4.component.html',
  styleUrls: ['./courses4.component.css']
})
export class Courses4Component implements OnInit {

  constructor() { }

	ngOnInit(): void {
		(function ($) {
			
			jQuery('#lightgallery, .lightgallery').lightGallery({
				selector : '.check-km',
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
			var self = jQuery("#masonry, .masonry");
			if(jQuery('.card-container').length)
		    {
				self.imagesLoaded(function () {
					self.masonry({
						gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container"
					});
				});
			}
			
			jQuery(".filters").on('click','li',function(e) {
				// e.preventDefault();
				var filter = jQuery(this).attr("data-filter");
				self.masonryFilter({
					filter: function () {
						if (!filter) return true;
						return jQuery(this).hasClass(filter);
					}
				});
			});
			
		})(jQuery);
	}

}
