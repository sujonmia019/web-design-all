$(document).ready(function(){

	$(".manu").sticky({
		topSpacing: 0,
		className: 'nav-sticky',
		wrapperClassName: 'navber'
	});

	/**Mixitup**/
	var mixer = mixitup('.container');
});
function openNav(){
	document.getElementById("my-nav").style.width="100%";
}
function closeNav(){
	document.getElementById("my-nav").style.width="0%";
}