/**
 * @author Tien Le - Agilsun Co., Ltd.
 */
function accountSettingControlller () {

	//Update Image placeholder to real image
	var filesImage = [];
	var fileIndex = 0; 
	this.updateImagesAvatar = function(e) {

		//indirect ajax
		//file collection array
		if (e.files && e.files[0] && filesImage.length < 5) { // Check have file and fiiles quantiy not bigger than 4
			var fileCollection = new Array();

		
			/*console.log(e.files);*/
			filesImage[fileIndex] = e.files[0];
			fileIndex++;
			console.log(filesImage);
			if(filesImage.length == 4 ) {
				$("#imgAvatarPlaceholder").hide();
			}else {
				$("#imgAvatarPlaceholder").show();
			}
			console.log(filesImage);
			var files = e.files;
			$.each(files, function(i, file){
				fileCollection.push(file);
				console.log(file);
				var reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function(e){
					/*$("#imgRetail-" + i).attr("src", e.target.result);*/
					var template ='<li class="col-sm-12" id="img-' + fileIndex +'"><img src="'+ e.target.result +'"><span data-id="' + fileIndex + '" onclick="accountSetting.deleteImage(this)" class="glyphicon glyphicon-remove-sign icon-close"></span></li>';
					
					$('.wrap-image-upload ul').prepend(template);
				};
			});
		}
	}

	//Click image placeholder
	this.chooseImageUpload = function(){
		$("#imagesAvatar").click();
	}

	//Delete Image
	this.deleteImage = function(e){
		$("#img-" + $(e).attr("data-id")).remove();
		filesImage.splice($(e).attr("data-id"),1);
		if(filesImage.length == 5 ) { 
			$("#imgAvatarPlaceholder").hide();
		}else {
			$("#imgAvatarPlaceholder").show();
		}
		console.log(filesImage);
	}
}