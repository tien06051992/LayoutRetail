/**
 * @author Tien Le - Agilsun Co., Ltd.
 */
function StorePageControlller () {

	this.slideImageSaleAndNew = function(element,numItems) {
		var owl = $(element);

		owl.owlCarousel({
			autoPlay: false, //Set AutoPlay to 3 seconds
			items : numItems,
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

	this.updateImagesRetail = function(e) {

        //indirect ajax
        //file collection array
        if (e.files && e.files[0]) { // Check have file and fiiles quantiy not bigger than 4

            var reader = new FileReader();
            reader.onload = function(e) {
                $('.feature-img img').attr('src',e.target.result); // Show image on sreen
            };
            reader.readAsDataURL(e.files[0]);

        }
    }

	//Click image placeholder
    this.chooseImageUpload = function() {
        $("#imageBanner").click();
    }
}