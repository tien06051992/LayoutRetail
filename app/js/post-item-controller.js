/**
 * @author Tien Le - Agilsun Co., Ltd.
 */
function PostItemControlller() {

    //Update Image placeholder to real image
    var filesImage = [];
    var fileIndex = 1; // Start at 1 because nth-child css not allow 0

    function checkShowHideUploadImageButton() {
        if (filesImage.length == 5) { // check if quantity of file greater than 4
            $("#imgRetailPlaceholder").hide(); // Hide button upload image
        } else {
            $("#imgRetailPlaceholder").show();
        }
    }
    this.updateImagesRetail = function(e) {

        //indirect ajax
        //file collection array
        if (e.files && e.files[0] && filesImage.length < 5) { // Check have file and fiiles quantiy not bigger than 4

            filesImage[fileIndex] = e.files[0]; // add file to array collection
            console.log(filesImage);
            checkShowHideUploadImageButton();
            var reader = new FileReader();
            reader.onload = function(e) {
                var template = '<li class="col-sm-3" id="img-' + fileIndex + '"><img src="' + e.target.result + '"><span data-id="' + fileIndex + '" onclick="postItem.deleteImage(this)" class="glyphicon glyphicon-remove-sign icon-close"></span></li>';

                $('.wrap-image-upload ul').prepend(template); // Show image on sreen
                fileIndex++;
            };
            reader.readAsDataURL(e.files[0]);

        }
    }

    //Click image placeholder
    this.chooseImageUpload = function() {
        $("#imagesRetail").click();
    }

    //Delete Image
    this.deleteImage = function(e) {
        $("#img-" + $(e).attr("data-id")).remove();
        filesImage.splice($(e).attr("data-id"), 1);
        fileIndex = filesImage.length;
        var lastE = 0;
        for (var i = fileIndex; i >= 1; i--) {
            $(".wrap-image-upload ul li:nth-child(" + i + ") span").attr("data-id", lastE); // Change id of li tag
            $(".wrap-image-upload ul li:nth-child(" + i + ")").attr("id", "img-" + lastE); // change data index of remove button
            console.log($(".wrap-image-upload ul li:nth-child(" + i + ") span").attr("data-id"));
            lastE++;
        }
        checkShowHideUploadImageButton();
        console.log(filesImage);
    }
}
