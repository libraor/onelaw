var AppApi = {};
AppApi.navAndScroll = function(i) {
	$("#headMenu a").each(function(index) {
		if (index == i) {
			$(this).addClass("active");
		}
	});
	$.scrollUp({
		scrollText : '返回顶部'
	});
};
AppApi.nav = function(i) {
	$("#headMenu a").each(function(index) {
		if (index == i) {
			$(this).addClass("active");
		}
	});
};
function addSearch(){
	$('#searchForm').submit();
}
