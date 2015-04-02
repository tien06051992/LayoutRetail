/**
 * @author Tien Le - Agilsun Co., Ltd.
 */
function PostItemControlller () {

	//Update Image placeholder to real image
	var filesImage = [];
	var fileIndex = 1; 
	this.updateImagesRetail = function(e) {

		//indirect ajax
		//file collection array
		if (e.files && e.files[0] && filesImage.length < 5) { // Check have file and fiiles quantiy not bigger than 4		var fileCollection = new Array();

			/*console.log(e.files);*/
			filesImage[fileIndex] = e.files[0];	
			console.log(filesImage);
			if(filesImage.length == 5 ) {
				$("#imgRetailPlaceholder").hide();
			}else {
				$("#imgRetailPlaceholder").show();
			}
			//console.log(filesImage);
			var file = e.files;
			//console.log(file);
			var reader = new FileReader();
			reader.onload = function(e){
				/*$("#imgRetail-" + i).attr("src", e.target.result);*/
				var template ='<li class="col-sm-3" id="img-' + fileIndex +'"><img src="'+ e.target.result +'"><span data-id="' + fileIndex + '" onclick="postItem.deleteImage(this)" class="glyphicon glyphicon-remove-sign icon-close"></span></li>';
				
				$('.wrap-image-upload ul').prepend(template);
				fileIndex++;
			};
			reader.readAsDataURL(e.files[0]);
			
		}
	}

	//Click image placeholder
	this.chooseImageUpload = function(){
		$("#imagesRetail").click();
	}

	//Delete Image
	this.deleteImage = function(e){
		$("#img-" + $(e).attr("data-id")).remove();
		filesImage.splice($(e).attr("data-id"),1);
		fileIndex = filesImage.length;
		var lastE = 0;
		for(var i = fileIndex; i >=1; i--) {
			$(".wrap-image-upload ul li:nth-child(" + i + ") span").attr("data-id",lastE);
			$(".wrap-image-upload ul li:nth-child(" + i + ")").attr("id","img-" + lastE);
			console.log($(".wrap-image-upload ul li:nth-child(" + i + ") span").attr("data-id"));
			lastE++;
		}
		if(filesImage.length == 5 ) {
			$("#imgRetailPlaceholder").hide();
		}else {
			$("#imgRetailPlaceholder").show();
		}
		console.log(filesImage);
	}
}