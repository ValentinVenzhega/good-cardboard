 $(document).ready(function() {
            var link = $('.menu-link');
            var link_active = $('.menu-link_active');
            var menu = $('.menu');
            var nav_link = $('.menu a')

            link.click(function() {
                link.toggleClass('menu-link_active');
                menu.toggleClass('menu_active');
            });
            nav_link.click(function() {
                link.toggleClass('menu-link_active');
                menu.toggleClass('menu_active');
            });
        });

 $('form').submit(function(event) {
     event.preventDefault();
     var form = $(this);
     $.ajax({
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize()
         }).done(function() {
         $('.js-overlay1-thank-you').fadeIn();
         $(this).find('input').val('');
         $(".form-reset").trigger('reset');
     });
     return false;
 });
 // Закрыть попап «спасибо»
 $('.js-close-thank-you').click(function() { // по клику на крестик
     $('.js-overlay1-thank-you').fadeOut();
 });

 $(document).mouseup(function (e) { // по клику вне попапа
     var popup = $('.popup1');
     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
         $('.js-overlay1-thank-you').fadeOut();
     }
 });

 $(document).ready(function(){
 $(".phone-mask").mask("+7(999) 999-99-99");
});

  $(document).scroll(function(){
        if ($(this).scrollTop()
            );
    });

  $(document).ready(function() {

      $('.popup__btn').on("click", function(){
          $('.overlay').fadeIn();
      });

      $('.popup-close').on("click", function(){
          $('.overlay').fadeOut();
      });

  });

 

  ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [54.752656, 56.002053],
              zoom: 18,
              controls: ['zoomControl', 'geolocationControl']
              
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Добрый Картон'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icom-map.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -64]
              
          });

          
      myMap.behaviors
          .disable('scrollZoom');
      myMap.geoObjects
          .add(myPlacemark);

  });

    <!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48836723 = new Ya.Metrika({ id:48836723, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/48836723" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
  

  $('.production-slider_top').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slider-arrow2 slider-arrow2_prod1 slider-arrow2_left2"></div>',
      nextArrow: '<div class="slider-arrow2 slider-arrow2_prod1 slider-arrow2_right2"></div>',
      asNavFor: '.production-slider_bottom',
      responsive: [
                      {
                        breakpoint: 991,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: true,
                        }
                      }
                      ]
      
  });
  $('.production-slider_bottom').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left"></div>',
      nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_right"></div>',
      asNavFor: '.production-slider_top',
      responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                        }
                      },
                      {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 991,
                        settings: "unslick"

                    }
                    ]
   
  });


  $('.feedback-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-arrow1 slider-arrow1_feedback slider-arrow1_left1"></div>',
  nextArrow: '<div class="slider-arrow1 slider-arrow1_feedback slider-arrow1_right1"></div>',
  responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
             
        
              ]
            });

  new WOW().init();
