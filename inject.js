(function() {
	function test(){
		document.getElementsByName('UN')[0].value = "Аплин"
		document.getElementsByName('PW')[0].value = "1337"
		document.getElementsByClassName('button-login')[0].click();
	}
	test();
}
)();
