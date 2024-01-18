$(function(){

	$('.slider_block_wr').each(function(){
	    const slider = $(this).find('.swiper');
	    const sliderId = slider.data('id');
	    const sliderClass = '.' + sliderId;
	    const arrow = slider.data('arrow');    

	    const newProductsSwiper = new Swiper(sliderClass, {
			loop: true,
			slidesPerView: 1,
			loopedSlides: 1,
			navigation: {
			    nextEl: '.swiper-' + arrow + '-next',
			    prevEl: '.swiper-' + arrow + '-prev',
			},
			pagination: {
				el: ".swiper-pagination",
			},
			effect: "fade",
			lazy: true
	    });
	})
	
	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap){

    var closeForm = $('.formExtraWrapper .close-form'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

	formPopup('.form_btn','.form_popup');

    function thpopup() {
        const wrap = $('.form-popup-wrapper.th_block');

        $('.form-popup-wrapper.opened').removeClass('opened');
        wrap.addClass('opened');
        $html.removeClass('oveflowHidden');

        $('.form-popup-wrapper.th_block').find('.close-form').on('click', function() {
            wrap.removeClass('opened');
        });

        $html.on('keyup', function(event) {
            if (wrap.hasClass('opened') && event.keyCode == 27) {
                wrap.removeClass('opened');
            }
        });
    }

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });

    $('.quiz_block__item').on('click', function(){
    	if ($(this).hasClass('active')){
    		$(this).removeClass('active');
    	} else {
    		$(this).siblings('.quiz_block__item').removeClass('active');
    		$(this).addClass('active');
    	}
    });

    $('#infoTabs').responsiveTabs({
	    rotate: false,
	    startCollapsed: 'accordion',
	    collapsible: 'accordion',
	    setHash: false,
	    scrollToAccordion: false
	});

    const hash = '#tabs-0';
    
    $("#infoTabs ul.product-tabs > li a[href='" + hash + "']").click();

	$('.algoritmTabs').responsiveTabs({
	    rotate: false,
	    startCollapsed: 'accordion',
	    collapsible: 'accordion',
	    setHash: false,
	    scrollToAccordion: false
	});

	let numbers = document.querySelectorAll('.animate-number');

	numbers.forEach(function (number) {
	    let numberTop = number.getBoundingClientRect().top,
	        start = +number.innerHTML,
	        end = +number.dataset.max;

	    window.addEventListener('scroll', function onScroll() {
	        if (window.pageYOffset > numberTop - window.innerHeight / 2) {
	            this.removeEventListener('scroll', onScroll);
	            let interval = setInterval(function () {
	                number.innerHTML = ++start;
	                if (start == end) {
	                    clearInterval(interval);
	                }
	            }, 15);
	        }
	    });
	});

	$('.certificates').each(function(){
	    const slider = $(this).find('.swiper');
	    const sliderId = slider.data('id');
	    const sliderClass = '.' + sliderId;
	    const arrow = slider.data('arrow');    

	    const newProductsSwiper = new Swiper(sliderClass, {
			loop: true,
			slidesPerView: 2,
			loopedSlides: 2,
	      	navigation: {
	            nextEl: '.swiper-' + arrow + '-next',
	            prevEl: '.swiper-' + arrow + '-prev',
	          },
	      	lazy: true
	    });
  	})	


  	$('input.phone_input').on('blur', function(){
        let phoneWrapper = $(this).parents('.field'),
            thisNumber = $(this).val().split(''),
            lastIndex = thisNumber.length-1,
            lastItem = thisNumber[lastIndex];
        if (isNaN(lastItem)){
            phoneWrapper.addClass('incorrect-phone');
            if (!phoneWrapper.find('.empty_number').length) {
                phoneWrapper.append('<div class="error_text empty_number">Введите номер телефона полностью </div>');
            }
            //$(this).val('');
        } else {
            phoneWrapper.removeClass('incorrect-phone');
            phoneWrapper.removeClass('error');
            phoneWrapper.find('.empty_number').remove();
        }
    });

    $('input').on('blur', function(){
    	if ($(this).parents('.field').hasClass('error')){
    		$(this).parents('.field').removeClass('error');
    		$(this).parents('.field').find('.error_text').remove();
    	}
    })

    $('.phone_input').inputmask("+7 (999) 999-99-99");

    $('input[type="checkbox"]').on('change', function (event) {

        if (!$(this).closest('.field.required').hasClass('no_checked') && !$(this).is(":checked")) {
            $(this).closest('.field.required').addClass('no_checked');
        } else {
            $(this).closest('.field.required').removeClass('no_checked');
        }
    })

    $('.email_input').on('blur', function () {
        let phoneWrapper = $(this).parents('.field');
        let email = $(this).val();

        if (email.length > 0
            && (email.match(/.+?\@.+/g) || []).length !== 1) {
            phoneWrapper.addClass('incorrect-phone');
            if (!phoneWrapper.find('.empty_number').length) {
                phoneWrapper.append('<div class="error_text empty_number">Вы ввели некорректный e-mail</div>');
            }
        } else {
            phoneWrapper.removeClass('incorrect-phone');
            phoneWrapper.remove('empty_number');
        }
    });

    $('.form_button').on('click', function(e){
        $(this).parents('form').find('.field').each(function(){

            var valueInput = $(this).find('input').val();
            if ($(this).hasClass('required') && valueInput == ''){
                $(this).addClass('error');
                if (!$(this).find('.error_text').length) {
                    $(this).append('<div class="error_text">это поле обязательно для заполнения</div>');
                }
            }

            var valueTextarea = $(this).find('textarea').val();
            if ($(this).hasClass('required') && valueTextarea == ''){
                $(this).addClass('error');
                if (!$(this).find('.error_text').length) {
                    $(this).append('<div class="error_text">это поле обязательно для заполнения</div>');
                }
            }

            if ($(this).hasClass('no_checked')) {
                $(this).addClass('error');
                if (!$(this).find('.error_text').length) {
                    $(this).append('<div class="error_text">это поле обязательно для заполнения</div>');
                }
            }

            var value = $(this).find('select').val();
            var selectedOptionText = $(this).find('select option:selected').text();
            var check = value  != selectedOptionText;

            $(this).find('select option').each(function() {

                if (check == false) {
                    $(this).parents('.field').addClass('error');
                    if (!$(this).parents('.field').find('.error_text').length) {
                        $(this).parents('.field').append('<div class="error_text">это поле обязательно для заполнения</div>');
                    }
                } else {
                    if ($(this).parents('.field').find('.error_text').length) {
                        $(this).parents('.field').removeClass('error');
                        $(this).parents('.field').find('.error_text').remove();
                    }
                }
            });
        })

        if ($(this).closest('form').find('.field').hasClass('incorrect-phone') || $(this).closest('form').find('.field').hasClass('error')){
            e.preventDefault();
        } else {
             e.preventDefault();
            thpopup();
        }
    });

    $('.menu_header li a').each(function(){
        if ($(this).parent().find('ul').length) {
            $(this).parent().addClass('submenu-parent')
            $(this).append('<span class="arrow"></span>');
        }
    });

    $('.menu_top_main li a').each(function(){
        if ($(this).parent().find('ul').length) {
            $(this).parent().addClass('submenu-parent')
            $(this).append('<span class="arrow"></span>');
        }
    });


    $('.menu_burger li a').each(function(){
        if ($(this).parent().find('ul').length) {
            $(this).parent().addClass('submenu-parent')
            $(this).append('<span class="arrow"></span>');
        }
    });

    $('.menu_burger li').find('a .arrow').on('click', function(event){
        $(this).parents('li:first').siblings().removeClass('hasSubmenu');
        $(this).parents('li:first').toggleClass('hasSubmenu');
        return false;
    });

    $('.menu_top_main li.submenu-parent a,.menu_top2 li.submenu-parent a').on('click', function(e){
        e.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    checkTagsOverflow(); 
});

function checkTagsOverflow() {
    var tagList = document.getElementById('tagList');
    var expandBtn = document.getElementById('expandBtn');
    
    if (tagList.scrollWidth > tagList.clientWidth) {
        expandBtn.style.display = 'block';
    } else {
        expandBtn.style.display = 'none';
    }
}

function expandTags() {
    const tagList = document.getElementById('tagList');
    const btn = document.getElementById('expandBtn');

    tagList.classList.toggle('expanded');

    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.innerText = 'Развернуть все';
    } else {
        btn.classList.add('active');
        btn.innerText = 'Свернуть';
    }
    
}


