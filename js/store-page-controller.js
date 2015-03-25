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
}