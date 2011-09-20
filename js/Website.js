function c() {

	if (typeof google == 'undefined' || typeof google.maps == 'undefined' ) {
		return;
	}

	var t="c-base";
	var p=new google.maps.LatLng(52.512669003368266,13.42031478881836);
	var o={zoom:15,center:p,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false};
	var m = new google.maps.Map(document.getElementById("approachMap"),o);
	var i = new google.maps.InfoWindow({content:"<div style='color:#000000;margin:3px 0 3px 0;'><span style='font-size:20px;font-weight:bold;'>"+t+"</span><br /><br />Rungestraße 20<br />10179 Berlin</div>"});
	m.setCenter(p);
	var ma=new google.maps.Marker({map:m,position:p,title:t});
	google.maps.event.addListener(ma,'click',function(){i.open(m,ma);});
	google.maps.event.addListener(m,'idle',function(){var _o=false;if(_o===false){i.open(m,ma);_o=true;}});	
}

jQuery(function() {
	
	c();
	
	jQuery('a[href*=#]').click(function() {
		
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
				&& location.hostname == this.hostname) {
			
			var $target = jQuery(this.hash);
			$target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) + ']');
			
			if ($target.length) {
				var targetOffset = $target.offset().top;
				jQuery('html, body').animate({scrollTop: targetOffset}, 1000);
				
				return false;
			}
			
		}
		
	});
	
	jQuery('#steampunk-img a').click(function() {
		var _s = jQuery('#steampunk-control-img').attr('src').split('/')[2].split('.')[0];
		var _nS = false;
		if (_s == 'play') {
			_nS = 'stop';
			game.unpause();
		} else {
			_nS = 'play';
			game.pause();
		} 
		jQuery('#steampunk-control-img').attr('src', './images/' + _nS + '.png');
			
		return true;		
	});
	
});