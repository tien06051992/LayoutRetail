/**
 * @author Tien Le - Agilsun Co., Ltd.
 */
function StorePageControlller () {

	this.slideImageSaleAndNew = function() {
		var owl = $("#list-new-sale-retail");

		owl.owlCarousel({
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			pagination: false
		});

		//Custom Navigation
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		});

		$(".next").click(function(){
			owl.trigger('owl.next');
		});
	}

	this.changeShowListStyle = function(style) {
		if(style == 'grid') {
			$(".view-style .list").removeClass('active');
			$(".view-style .grid").addClass('active');
			$(".wrap-list-retail .list-retail").removeClass('list-style');
			$(".wrap-list-retail .list-retail").addClass('grid-style');
		}else {
			$(".view-style .list").addClass('active');
			$(".view-style .grid").removeClass('active');
			$(".wrap-list-retail .list-retail").addClass('list-style');
			$(".wrap-list-retail .list-retail").removeClass('grid-style');
		}
	}
}