/**
 * @author Tien Le - Agilsun Co., Ltd.
 */
function SearchPageControlller () {

	this.fillterIndividualCompany = function(key){
		switch (key){
			case 'all':
				$(".list-retail li").fadeIn('slow');
				break;
			case 'individual':
				$(".list-retail li.individual").fadeIn('slow');
				$(".list-retail li.company").fadeOut('slow');
				break;
			case 'company':
				$(".list-retail li.individual").fadeOut('slow');
				$(".list-retail li.company").fadeIn('slow');
			break;
		}
	}
}