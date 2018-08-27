
	
$(document).ready(function() {

	$('#search-contact').click(function() {
		$('#search-contact-box').toggle(150);
		
	});
	
	$('#search-contact-box').submit(function() {
		$('#search-contact-box .orange-button').text('sending...');
		$.post('/ajax/search-contact', $(this).serialize() , function() {
			
			
		}).done(function() {
			$('#search-contact-box').hide();
			$('#search-message').show();					
			$('#search-contact').hide();	
		});
		
		
		return false;
	});
	
	
	$('#sidebar ul li.action').hover(function() {
		
	
		
		$(this).children('div').children('.item').addClass('active').show();
		$(this).children('div').children('img').css('left',
			((
				parseInt($(this).width())
				-13
			)
			/2)+'px').show();
		
		
		
	}, function() {		 
		$(this).children('div').children('.item').removeClass('active').hide();
		$(this).children('div').children('img').hide();
		
	});
	 $('#mobile-menu a').click(function () {
	 	
	 	if($('#mobile-box').attr('class')=='action') {
	 		$('#mobile-box').removeClass('action');
	 		$('#top').removeClass('action');
	 		$('body').removeAttr('id'); 		
	 	} else {
       	 	$('#mobile-box').addClass('action');
       	 	$('body').attr('id', 'mobile-body');	
       	 	$('#top').addClass('action');
       	}
        return false;
    });
    
	newmenuShow = true;
	$('#newmenu li.newmenu-action').hover(function() {

		newmenuShow = true;
		anewmenu = $(this);
		setTimeout(function() {		
	
			if(newmenuShow) {				
				action_id = anewmenu.attr('data-id');	
				anewmenu.children('#'+action_id).show();
				
				anewmenu.children('a').children('img').css('left', ((parseInt(anewmenu.children('a').width())-15)/2)+'px').show();		
				
				newmenuShow = false;
			}			
		}, 70);
			
			
	}, function() {
		$('#newmenu > li .newmenu-box').hide();
		$('#newmenu .newmenu-arrow').hide();
		newmenuShow = false;
	});
	var newproducts = false;
	var gotoup = false;
	
	$(window).on('mousewheel', function(e) {
		scrollpos = $(window).scrollTop();	
		
	
		
		 if(e.originalEvent.wheelDelta < 0) {
	  		if(scrollpos==0) {
	  			$('html,body').animate({ scrollTop: 20 }, 50);
	  			
	  		} else {
	  			return true;
	  		}	  		         
	     }else {
	         return true;	      
	     }
	
	     return false;
	    
	});	
	
	 $('#info-icon').hover(function() {
	 	$('#show-info-icons').show();
	 	
	 }, function() {
	 	$('#show-info-icons').hide();
	 });
	 $('#gotoup').click(function() {
	 	$('#gotoup').hide();
	 	$('html,body').animate({ scrollTop: 0 }, 600);
	 });
	
    var activelang = 0;    
    $('#langs-container').hover(function() {
    	$('#langs-hidden').addClass('activelang');
    	$('#bar-language').addClass('activelang');
    	$('#langs-hidden').show();
    	activelang = 1; 	
    }, function() {
    	activelang = 0;
    	setTimeout(function() {
    		if(activelang==0) {
	    		$('#langs-hidden').removeClass('activelang');
	    		$('#bar-language').removeClass('activelang');
	    		$('#langs-hidden').hide();
	    	}
    	},100);
    	
    });
});



(function($){
	var maxdh;
	var maxScrollLeft;
	
	$('.dh-box').hover(function() {
		maxdh = $(this).parent().width();
		maxScrollLeft = $(this).find('.dh-box2')[0].scrollWidth;
		
		scrollx = $(this).find(".dh-box2").scrollLeft();				
								
		if(scrollx!=0) {		
			$(this).find('.left').show();											
		}
		
		if(scrollx<maxScrollLeft) {
			$(this).find('.right').show();
		} else {
			$(this).find('.right').hide();
		} 
		if(scrollx==0) {
			$(this).find('.left').hide();
		} else {
			$(this).find('.left').show();
		}
		
	}, function() {
	
	});
	$('.dh-box .right').click(function() {
		$(this).parent().find(".dh-box2").animate({scrollLeft: parseInt($(this).parent().find(".dh-box2").scrollLeft())+(maxdh-50)}, 200);
		$(this).parent().parent().find('.right').show();
		$(this).parent().parent().find('.left').show();
	});
	$('.dh-box .left').click(function() {
		$(this).parent().find(".dh-box2").animate({scrollLeft: parseInt($(this).parent().find(".dh-box2").scrollLeft())-(maxdh-50)}, 200);						
		$(this).parent().parent().find('.right').show();
		$(this).parent().parent().find('.left').show();
	});				
	
	//Favorite
	$('.dh-box2').on('click', '.like, .favorite', function (){
		
		var data = {};
		
		if($( this ).hasClass( "active" )) {
			$(this).removeClass('active');	
			data.active = false;
		}	 else {
			$(this).addClass('active');
			data.active = true;
		}		
		data.type= $(this).attr('data-type');
		data.id= $(this).attr('data-id');	
		
		$.get('/ajax/wishlist', data,  function(data) {
			
		});
	
	});		
})(jQuery);