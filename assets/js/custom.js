$(document).ready(function(){
    var wow = new WOW();
    wow.init();
    // index.html js
    try {
        var form = $('#tableOrderForm');
		form.find('select').on('change', function() {
			$.ajax({
                type: "POST",
                url: "url",
                data: {
                    'tableId': foodId,
                    'csrfmiddlewaretoken': '{{csrf_token}}',
                },
                dataType: 'json',
                success: function (response) {
                    warnUser(response);
                },
			});
			var parent = form.find('#tableHelp');
			function warnUser(response){
				$.each(response, function(){
					var elem = "<span>" + this.from + "-" + this.to + "</span>";
					parent.append(elem);
				});
			}
		});
		$(document).on('click', '.star', function(){
			 $('#rating').val($(this).attr('data-value'));
			 value = $(this).attr('data-value');
			 $(this).siblings('.star').each(function(){
				 if ($(this).attr('data-value') <= value){
					$(this).css({'color':'yellow'});
				 }
				 else{
					 $(this).css({'color':'black'});
				 }
			 });
			 $(this).css({'color': 'yellow'}); 
			 elem = $('#rate-emoji');
			 switch(value){
				 case '1': elem.attr('class', 'ec ec-confounded'); break;
				 case '2': elem.attr('class', 'ec ec-expressionless'); break;
				 case '3': elem.attr('class', 'ec ec-blush'); break;
				 case '4': elem.attr('class', 'ec ec-yum'); break;
				 case '5': elem.attr('class', 'ec ec-heart-eyes'); break;
				 default: elem.attr('class', '');
			 }
        });
        var owl = $('.owl-carousel-discount');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            /*autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,*/
            responsiveClass: true,
            nav: false,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false,
                }
            }
        });
    } catch (error) {}
    // menu.html js
    try {
        var wow = new WOW();
        wow.init();
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 10) {
                $('.custom-nav').addClass('wow fadeInDown');
            }
        });
        var owl1 = $('.owl-carousel-cuisine');
        var owl2 = $('.owl-carousel-type');
        owl1.owlCarousel({
            items: 4,
            loop: false,
            margin:10,
            responsiveClass:true,
            nav: false,
            autoHeight: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                    1000:{
                    items:4,
                    nav:false,
                }
            }
        });
        owl2.owlCarousel({
            items: 4,
            loop: false,
            margin: 10,
            responsiveClass: true,
            nav: false,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: false,
                }
            }
        });
    } catch (error) {}
});

$(window).resize(function(){
    try {
        var width = $('.card .image-container').css('width');
        $('.card .image-container').css({'height': width});
    } catch (error) {}
});
try {
    $('.section-cuisine .cuisine .overlay').each(function(){
        $(this).mouseover(function(){
            $(this).css({
                'opacity': '1',
            })
        });
    });
    $('.section-cuisine .cuisine .overlay').each(function () {
        $(this).mouseout(function () {
            $(this).css({
                'opacity': '0',
            })
        });
    });
} catch (error) {}
