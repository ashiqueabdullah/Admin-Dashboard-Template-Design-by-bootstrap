$(document).ready(function () {

	var allclick =  document.querySelectorAll('.clickdorp');
	var allclicks = document.querySelectorAll('.mydeopdown');

	for(let i=0; i < allclick.length; i++){
		allclick[i].addEventListener('click',function(){
			for(let j=0; j<allclicks.length; j++ ){
				if(allclicks[j].style.display=='block' && i!=j){
					allclicks[j].style.display='none';
				}
			}
			if(allclicks[i].style.display=='block'){
				allclicks[i].style.display='none';
			}else{
				allclicks[i].style.display='block';
			}
		})
	}

});