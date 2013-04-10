$(function(){
  $('.header-banner').slidesjs({
    width: 950,
    height: 380,
    play: {
      auto: true,
      active: true,
      effect: 'fade',
      interval: 2000,
      pauseOnHover: true,
      restartDelay: 1000
    },
    effect: {
      fade: {
        speed: 800
      }
    },
    navigation: {
      effect: 'fade'
    },
    pagination: {
      effect: 'fade'
    },
    callback: {
        start: function(number){
          //console.log("start" + number);
        },
    }
  });
});
