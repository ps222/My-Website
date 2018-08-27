
	
$(document).ready(function() {
	
	if(0>0) {
		$('#boss .icon-heart').addClass('active');		
		 
	}
	//$('#lastseecnt').text(1);
	//$('#lastsearchcnt').text(0);
				
	$('#cartcount').text(0).show();

		
			$('#opinioncount').text('(3)');
	

			$('#uploadyourphotoscount').hide();
	
			$('#notibox').attr('data-noti', 1).show().find('span').text(1);
		$('#notifications').click(function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('#boxnotification').hide();
				
			} else {
				$(this).addClass('active');
				$('#boxnotification').html("<div class=\"notification\"><div class=\"notibox\">Subscribe to our newsletters and find out about our latest interior design and special offers. Get -15% discount code for first shopping.</div><form id=\"newsletter\" action=\"/newsletter?noti\" method=\"post\"><input type=\"text\" name=\"email\" class=\"in\" id=\"in-newsletter\" placeholder=\"Enter your email address\" /><input type=\"submit\" value=\"Send\" class=\"in\"/></form><div class=\"cancel\">x</div></div>").show();
				
				$('#boxnotification').find('.notification .cancel').click(function() {
					$('#boxnotification').hide();
					$(this).parent().remove();
					$('#notibox').attr('data-noti', 0).find('span').text(0);
					$.post( "/js/basic.js", { noti: 1 });
				});
			}
					
		});
		
		
		});

