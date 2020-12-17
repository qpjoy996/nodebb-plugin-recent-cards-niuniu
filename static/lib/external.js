"use strict";
/*global $*/

$(document).ready(function(){
	$.get(window.path_to_nodebb + '/plugins/nodebb-plugin-recent-cards-niuniu/render', {}, function(html) {
		html = $(html);
		if (html.length !== 5) {
			return;
		}

		$('#nodebb-plugin-recent-cards-niuniu').html($(html[2]));
		
		var ajaxifyData = $(html[4]);
		
		if (ajaxifyData.length) {
			ajaxifyData = JSON.parse(ajaxifyData.text());

			if (ajaxifyData.recentCards.enableCarousel) {
				$('#nodebb-plugin-recent-cards-niuniu .recent-cards').bxSlider({
					slideWidth: 292,
					minSlides: 1,
					maxSlides: 4,
					pager: ajaxifyData.recentCards.enableCarouselPagination ? true: false
				});
			} else {
				$('#nodebb-plugin-recent-cards-niuniu .recent-cards').removeClass('carousel-mode');
			}

			if ($.timeago) {
				$('#nodebb-plugin-recent-cards-niuniu .timeago').not('[datetime]').timeago();
			}
		}	
	});
});