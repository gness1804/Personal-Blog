function searchPage() {
	var x = document.getElementById("searchbox1").value;
	window.find(x);
}
function Clear() {
	document.getElementById("searchbox1").value = "";
}




// The Google Search code that I chose not to include in this site: 
//<script>
 // (function() { 
   // var cx = '005092354237931354280:1lhy_fh_hau';
    //var gcse = document.createElement('script');
    //gcse.type = 'text/javascript';
    //gcse.async = true;
    //gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    //var s = document.getElementsByTagName('script')[0];
    //s.parentNode.insertBefore(gcse, s);
  //})();
	//</script>
//<gcse:search></gcse:search>