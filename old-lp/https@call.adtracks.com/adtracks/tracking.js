if (typeof jQuery == 'undefined') {
    var ads = document.createElement('script');
    ads.type = "text/javascript";
    ads.async = true;
    ads.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ads,s);
}

var submited = false;

function createCookie(name,value,mins) {
	var expires;
    if (mins != 0) {
        var date = new Date();
        date.setTime(date.getTime()+(mins*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}
function checkCookie(name)
{
    return readCookie(name) != null;
}

function _uGC(l,n,s) {
	if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
	var i,i2,i3,c="-";
	i=l.indexOf(n);
	i3=n.indexOf("=")+1;
	if (i > -1) {
		i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
		c=l.substring((i+i3),i2);
	}
	return c;
}
function getUrlVars(url){
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function getDomain(url){
	if(url!='' && url!='undefined' && url!=null)
	return url.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
	//return url.match(/://(.[^/]+)/)[1];
	return '';
}

function gup(url, name ){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( url ); 
	 if( results == null )    return "";  
	else    return results[1];
}

var source,medium,term,campaign,network,adid,device,adgroup;

function findadtrack(){
	if(checkCookie('source') == false ){
		var z = _uGC(document.cookie, '__utmz=', ';');
		source  = _uGC(unescape(z), 'utmcsr=', '|');
		medium  = _uGC(unescape(z), 'utmcmd=', '|');
		term    = _uGC(unescape(z), 'utmctr=', '|');
		var content = _uGC(unescape(z), 'utmcct=', '|');
		campaign = _uGC(unescape(z), 'utmccn=', '|');
		var gclid   = _uGC(unescape(z), 'utmgclid=', '|');
		
		term =term.replace(/%20/g, " ");
		if (gclid !="-") {
		      source = 'google';
		      medium = 'cpc';
		}
		
		network = ''; adid = '' ; device = ''; adgroup= '';
		
		
		var _medium_,_source_,_term_;
		//-- Auto/Organic Sources and Keywords
		var _uOsr=new Array();
		var _uOkw=new Array();
		_uOsr[0]="google";	_uOkw[0]="q";
		_uOsr[1]="yahoo";	_uOkw[1]="p";
		_uOsr[2]="msn";		_uOkw[2]="q";
		_uOsr[3]="aol";		_uOkw[3]="query";
		_uOsr[4]="aol";		_uOkw[4]="encquery";
		_uOsr[5]="lycos";	_uOkw[5]="query";
		_uOsr[6]="ask";		_uOkw[6]="q";
		_uOsr[7]="altavista";	_uOkw[7]="q";
		_uOsr[8]="netscape";	_uOkw[8]="query";
		_uOsr[9]="cnn";	_uOkw[9]="query";
		_uOsr[10]="looksmart";	_uOkw[10]="qt";
		_uOsr[11]="about";	_uOkw[11]="terms";
		_uOsr[12]="mamma";	_uOkw[12]="query";
		_uOsr[13]="alltheweb";	_uOkw[13]="q";
		_uOsr[14]="gigablast";	_uOkw[14]="q";
		_uOsr[15]="voila";	_uOkw[15]="rdata";
		_uOsr[16]="virgilio";	_uOkw[16]="qs";
		_uOsr[17]="live";	_uOkw[17]="q";
		_uOsr[18]="baidu";	_uOkw[18]="wd";
		_uOsr[19]="alice";	_uOkw[19]="qs";
		_uOsr[20]="yandex";	_uOkw[20]="text";
		_uOsr[21]="najdi";	_uOkw[21]="q";
		_uOsr[22]="aol";	_uOkw[22]="q";
		_uOsr[23]="club-internet"; _uOkw[23]="query";
		_uOsr[24]="mama";	_uOkw[24]="query";
		_uOsr[25]="seznam";	_uOkw[25]="q";
		_uOsr[26]="search";	_uOkw[26]="q";
		_uOsr[27]="wp";	_uOkw[27]="szukaj";
		_uOsr[28]="onet";	_uOkw[28]="qt";
		_uOsr[29]="netsprint";	_uOkw[29]="q";
		_uOsr[30]="google.interia";	_uOkw[30]="q";
		_uOsr[31]="szukacz";	_uOkw[31]="q";
		_uOsr[32]="yam";	_uOkw[32]="k";
		_uOsr[33]="pchome";	_uOkw[33]="q";
		_uOsr[34]="kvasir";	_uOkw[34]="searchExpr";
		_uOsr[35]="sesam";	_uOkw[35]="q";
		_uOsr[36]="ozu"; _uOkw[36]="q";
		_uOsr[37]="terra"; _uOkw[37]="query";
		_uOsr[38]="nostrum"; _uOkw[38]="query";
		_uOsr[39]="mynet"; _uOkw[39]="q";
		_uOsr[40]="ekolay"; _uOkw[40]="q";
		_uOsr[41]="search.ilse"; _uOkw[41]="search_for";
		_uOsr[42]="bing"; _uOkw[42]="q";
		
		//////////// action starts /////
		if ( (source =='' || source =='-' || (medium =='cpc' && source =='google') )) { // if values found using cookies then ignore the whole thing  1

			if(getDomain(document.referrer) !=(getDomain(document.location.href))){
			
				_parms=getUrlVars(document.location.href);
				if(_parms['gclid']==undefined || _parms['gclid']=='') ////
				{
					
					if(_parms['utm_medium'])
					  _medium_=_parms['utm_medium'];
					
					
					if(_parms['utm_source'])
					      _source_=_parms['utm_source'];

					if(_parms['utm_term'])
					      _term_=_parms['utm_term'];

				
				/////////// search check up
					if (!(document.referrer=='' || document.referrer=='undefined') ) //3
					{
						var issearch = false;
						for (var ii=0;ii<_uOsr.length;ii++) {
							if (document.referrer.toLowerCase().indexOf(_uOsr[ii].toLowerCase()) > -1) {
								if ((i=document.referrer.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=document.referrer.indexOf("&"+_uOkw[ii]+"=")) > -1) {
									_medium_='organic';
									_source_=_uOsr[ii];
									_term_ = gup(document.referrer,_uOkw[ii]);
									issearch = true;
									break;
								}
							}
				
						}
				
						if(! issearch && !(document.referrer=='' || document.referrer=='undefined') )
						{
							if(_medium_ == null){
								_medium_ = 'referral';
								_source_ = document.referrer;
							}
						}
				
					} else { /// 3
					
						_medium_='none';
						_source_='direct';
					}
				
				}else{
					_medium_='cpc';
					_source_='google';
					if (!(document.referrer=='' || document.referrer=='undefined')) //3
					{
						var issearch = false;
						for (var ii=0;ii<_uOsr.length;ii++) {
							if (document.referrer.toLowerCase().indexOf(_uOsr[ii].toLowerCase()) > -1) {
								if ((i=document.referrer.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=document.referrer.indexOf("&"+_uOkw[ii]+"=")) > -1) {
									_term_ = gup(document.referrer,_uOkw[ii]);
									break;
								}
							}
				
						}

					}

					if ((i=document.location.href.indexOf("?"+"utm_keyword=")) > -1 || (i=document.location.href.indexOf("&utm_keyword=")) > -1) {
						_term_ = gup(document.location.href,'utm_keyword');
					}
					if ((i=document.location.href.indexOf("?"+"utm_network=")) > -1 || (i=document.location.href.indexOf("&utm_network=")) > -1) {
						network = gup(document.location.href,'utm_network');
					}
					if ((i=document.location.href.indexOf("?"+"utm_device=")) > -1 || (i=document.location.href.indexOf("&utm_device=")) > -1) {
						device  = gup(document.location.href,'utm_device');
					}
					if ((i=document.location.href.indexOf("?"+"utm_adid =")) > -1 || (i=document.location.href.indexOf("&utm_adid=")) > -1) {
						adid  = gup(document.location.href,'utm_adid ');
					}
					if ((i=document.location.href.indexOf("?"+"utm_campaign=")) > -1 || (i=document.location.href.indexOf("&utm_campaign=")) > -1) {
						campaign = gup(document.location.href,'utm_campaign');
					}
					if ((i=document.location.href.indexOf("?"+"utm_adgroup=")) > -1 || (i=document.location.href.indexOf("&utm_adgroup=")) > -1) {
						adgroup = gup(document.location.href,'utm_adgroup');
					}
				}
				
				medium = _medium_;
				
				source = _source_;

				term = _term_;
			
			}
			
		
		}else{
		    
		}
		_parms=getUrlVars(document.location.href);
		if(_parms['utm_medium']) medium=_parms['utm_medium'];
		if(_parms['utm_source']) source=_parms['utm_source'];
if(checkCookie('source')  ) source = readCookie('source');

		if(_parms['utm_term']) term=_parms['utm_term'];
		if(_parms['utm_keyword']) term=_parms['utm_keyword'];
		if(_parms['utm_campaign']) campaign=_parms['utm_campaign'];
		if(_parms['utm_network']) network=_parms['utm_network'];
		if(_parms['utm_device']) device=_parms['utm_device'];
		if(_parms['utm_adid']) adid=_parms['utm_adid'];
		if(_parms['utm_adgroup']) adgroup=_parms['utm_adgroup'];

		createCookie('source',source,259200);
		createCookie('medium',medium,0);
		createCookie('term',term,0);
		createCookie('campaign',campaign,0);
		createCookie('network',network,0);
		createCookie('device',device,0);
		createCookie('adid',adid,0);
		createCookie('adgroup',adgroup,0);
	}else{
		source = readCookie('source');
		medium = readCookie('medium');
		term = readCookie('term');
		campaign = readCookie('campaign');
		network = readCookie('network');
		device = readCookie('device');
		adid = readCookie('adid');
		adgroup = readCookie('adgroup');
	}
	
	jQuery("#source").val(source);
	jQuery("#medium").val(medium);
	jQuery("#term").val(term);
	jQuery("#campaign").val(campaign);


}
function submitCallback (result,status) {
	//console.log(result);
	submited = true;
	setTimeout("jQuery('#' + adtracks_form_id).trigger('submit');",4000);
}

function pageCallback (result,status) {
	createCookie('psep',result[0],30);
}


function visitCallback (result,status) {
	//console.log('&client=' + adtracks_client_id + '&medium='  + medium + '&source=' + source + '&keyword=' + term + '&campaign=' + campaign);
	console.log(result);
	phone_arr = adtracks_phone_class.split("|");
	var pses = '';
	for(var i = 0 ; i < phone_arr.length; i++ ){
		jQuery('.' + phone_arr[i] ).each(function(index,value){
			if(result[i] != '' &&  result[i][0].length > 6 ){
			    jQuery(this).html(result[i][0]);
			    if(jQuery(this).is('a')){
				jQuery(this).attr('href','tel:'+result[i][0]);
				jQuery(this).click(function(e){
				    _gaq.push(['_trackEvent', result[i][2], 'click', result[i][0]]);
				});
			    }
			}
		});
		if(result[i] != '' &&  result[i][0].length > 6 ){
		    createCookie('phone'+i,result[i][0],30);
		    createCookie('label'+i,result[i][2],30);
		    
		    pses = pses + result[i][1] + '|';
		}
	}
	pses = pses +  result[i] ;
	createCookie('pses',pses,30);
	createCookie('psep',result[i+1] ,30);
	createCookie('psev',result[i+2] ,518400);

}
var toll ;
var adtrack_run = 0;
var protocol = 'http';

var adtracks_client_id ;
var adtracks_phone_class ;
var adtracks_form_id ;

var psev = 0;

if(checkCookie('psev')  ) psev = readCookie('psev');

protocol = ('https:' == document.location.protocol ? 'https' : 'http');


function adtrack_init(){

if (typeof sep_client_id  == 'undefined'){
	adtracks_client_id = client_id;
	adtracks_phone_class = phone_class ;
	adtracks_form_id = form_id;
}else{
	adtracks_client_id = sep_client_id;
	adtracks_phone_class = sep_phone_class ;
	adtracks_form_id = sep_form_id;

}

	adtrack_run ++;
        //if(adtrack_run < 6 && checkCookie('__utmz') == false ){
	//    setTimeout('adtrack_init',300);
	//    return;
	//}
	createCookie('adtracks_cookie' , "it's work");
	
	if(readCookie('adtracks_cookie') != "it's work" ) return;

	findadtrack();
	
	
	if (typeof phone_type != 'undefined'){
		toll = phone_type;
	}else{
		toll = 0;
	}
	//console.log(document.referrer);
	
	if(checkCookie('pses') == false ){
	    var language = navigator.browserLanguage==undefined ? navigator.language : navigator.browserLanguage;
	    var size = screen.width + "X" + screen.height;

		jQuery.ajax({
			url:protocol + '://call.adtracks.com/adtracks/visit.php?jsoncallback=visitCallback',
			dataType: 'jsonp',
			data: {
			    'client' : adtracks_client_id ,
			    'medium' : medium ,
			    'source' : source ,
			    'keyword' : term ,
			    'campaign' : campaign ,
			    'network' : network,
			    'device' : device ,
			    'adid' : adid,
			    'adgroup' :adgroup,
			    'url' : document.location.href ,
			    'toll' :toll ,
			    'language' : language ,
			    'screen' : size ,
			    'browser' : navigator.userAgent.toString()  ,
			    'refurl' : document.referrer  ,
			    'utmz' : readCookie('__utmz'),
			    'psev' : psev
			}
		});
	}else{
		phone_arr = adtracks_phone_class.split("|");
		for(var i = 0 ; i < phone_arr.length; i++ ){
			jQuery('.' + phone_arr[i] ).each(function(index,value){
				if(checkCookie('phone'+ i) && readCookie('phone'+i).length > 6){
				    jQuery(this).html(readCookie('phone'+i));
				    if(jQuery(this).is('a')){
					jQuery(this).attr('href','tel:'+readCookie('phone'+i));
					jQuery(this).click(function(e){
					    _gaq.push(['_trackEvent', readCookie('label'+i), 'click', readCookie('phone'+i)]);
					});
				    }
				}
			});
		}

		jQuery.ajax({
			url:protocol + '://call.adtracks.com/adtracks/page.php?jsoncallback=pageCallback',
			dataType: 'jsonp',
			data: 'pses=' + readCookie('pses') + '|' + readCookie('psep') + '&url=' + encodeURIComponent(document.location.href) + '&refurl=' + encodeURIComponent(document.referrer) + '&client=' + adtracks_client_id
		});
	}

	if (typeof thankyou_url != 'undefined' &&   document.location.href.search(thankyou_url) != -1 ){
                jQuery.ajax({
                        url: protocol + '://call.adtracks.com/adtracks/form/sep.php?jsoncallback=?',
			dataType: 'jsonp',
			data: '&client=' + adtracks_client_id + '&medium='  + medium + '&source=' + source + '&keyword=' + term  + '&network=' + network + '&url=' + document.location.href
                });
	}
	//console.log(adtracks_form_id);
	
	if (typeof adtracks_form_id == 'undefined' || adtracks_form_id == '') return;

	var jv = jQuery.fn.jquery.split('.');

	//console.log(jQuery.fn.jquery);

	if(jv[0] == '2' ||  parseInt(jv[1]) > 8){
		jQuery( 'body').on('submit','#' + adtracks_form_id,function(e){
			return adtrack_form();
		});

	}else{
		jQuery('#' + adtracks_form_id).live('submit',function(e){
			return adtrack_form();
		});

	}

    
}

function adtrack_form(){
		if(submited == true) return true;
		
		var form_pv = '';
		
		if (typeof form_pvars != 'undefined'){
		    form_vars = form_pvars.split("|");
		    
		    var vn = ["name","email","phone","message","newsletter","campaign"];
		    for(var i = 0 ; i < form_vars.length; i++ ){
			if (jQuery('#' + adtracks_form_id + " [name='"+ form_vars[i]+ "']")){
			    form_pv =  form_pv + '&' + vn[i] + '=' +  jQuery('#' + adtracks_form_id + " input [name='"+ form_vars[i]+ "']").val();
			}else{
			    if (jQuery('#'+ form_vars[i] ))  form_pv =  form_pv + '&' + vn[i] + '=' +  jQuery('#'+ form_vars[i] ).val();
			}
		    }
		    
		}

		//console.log(jQuery(this).serialize() + '&client=' + adtracks_client_id + '&medium='  + medium + '&source=' + source + '&keyword=' + term + '&campaign=' + campaign + '&url=' + document.location.href);
		
                jQuery.ajax({
                        url:protocol + '://call.adtracks.com/adtracks/form/sep.php?jsoncallback=submitCallback',
			dataType: 'jsonp',
			data: jQuery('#' + adtracks_form_id).serialize() + form_pv + '&client=' + adtracks_client_id + '&medium='  + medium + '&source=' + source + '&keyword=' + term + '&network=' + network + '&url=' + document.location.href
                });
	return false;	

}

jQuery(document).ready(function() {
	setTimeout(function(){
		adtrack_init();
	},1000);	
});