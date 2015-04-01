/**
 * @author Chau huynh- Agilsun Co., Ltd.
 */
function ItemPageControlller () {

	this.slideImageSaleAndNew = function() {
		var owl = $("#list-related-retail");

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

$(".minus-quantity").on("click", function() {
  var quantity = $( '#quantity' ).val();
  var quantity = parseInt(quantity) - 1;
  if (quantity < 0) {
  	quantity = 0;
  }
  $('#quantity').val( quantity) ;
});

$(".plus-quantity").on("click", function() {
  var quantity = $( '#quantity' ).val();
  var quantity = parseInt(quantity) + 1;
  $('#quantity').val( quantity) ;
});


$(document).ready(function () {
    $('.thumbnails').simpleGal({
      mainImage: '.custom'
    });
  });