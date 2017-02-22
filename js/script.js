$(window).load(function(){
  $("input#ico").prop('checked', true)
  var inter,parallax = true
  if(jQuery.browser.mobile)
    parallax = false
  function setHeader(){
    $("#header").stop().css({height:$(window).height()})
    $("#header .text h1").stop().animate({marginTop:"-"+$("#header .text h1").height()/2})
  }
  setHeader()
  $(this).resize(function(){
    if($(window).height() != $("#header").height() && !(jQuery.browser.mobile))
      inter = setTimeout(function(){
        clearTimeout(inter)
        setHeader()
      },100)
    else if($(window).height() != $("#header").height() && (jQuery.browser.mobile))
      if($(window).width() < $(window).height())
        inter = setTimeout(function(){
          clearTimeout(inter)
          setHeader()
        },100)

  })
  if(jQuery.browser.mobile){
    $("#testimonials").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
            $("#myCarousel").carousel("next")
        },
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
            $("#myCarousel").carousel("prev")
        },
         threshold:0
      })
    $(".carousel-indicators li").swipe({
      tap:function(event, target){
        $("#myCarousel").carousel($(this).data("slide-to"))
      }
    })
    $(".adButton").css({right:"-100%"})
    var lastScrollTop = 0
    var exten
    $(window).scroll(function(event){
      clearTimeout(exten)
      exten = setTimeout(function(){
        var st = $(this).scrollTop()
        if (st > lastScrollTop)
          $(".adButton").stop().animate({right:"1em"})
        else
          $(".adButton").stop().animate({right:"-100%"})
        lastScrollTop = st
      },100)
    })
  }

  var vic
  var v = document.getElementById("video")
  if($(this).scrollTop() > $("#header").height())
    v.pause()
  else
    v.play()
  $(window).scroll(function(){
    clearTimeout(vic)
    vic = setTimeout(function(){
      if($(this).scrollTop() > $("#header").height())
        v.pause()
      else
        v.play()
    },100)
  })


  $('.carousel').carousel({interval:2000})
})
