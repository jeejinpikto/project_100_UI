document.addEventListener("DOMContentLoaded", function(event) { 
  
  var current_active = $('.sg-btn-first');
  var container = document.querySelector('.sg-main-container');
  var sg_container_list = document.querySelectorAll('.sg-main-container > section');
  var sg_button_list_btn = document.querySelectorAll('.sg-button-list > li > button');
  var sg_btn = document.querySelectorAll('.sg-btn');

  /*Instantiate clipboard*/
  /*Clipboard uses a library call clipboard.min.js*/
  var clipboard = new Clipboard('.sg-colorbox');
  clipboard.on('success', function(e) {
      console.log(e);
  });
  clipboard.on('error', function(e) {
      console.log(e);
  });

  [...sg_button_list_btn].forEach( function(elem) {
    elem.addEventListener('mousedown', function(){

      /*Remove all active and slide-in class from */
      [...sg_container_list].forEach( function(elem){
        elem.classList.remove('active');
        elem.classList.remove('slide-in');
      });

      var target = elem.getAttribute('data-target');
      document.querySelector('#' + target).classList.add('active');
      setTimeout(function(){
        document.querySelector('#' + target).classList.add('slide-in');
      }, 200)
    });
  });

  /*Generate Background Color from HTML Content*/
  $('.sg-colorbox').each(function(){
    $(this).html(this.getAttribute('data-clipboard-text'));
    $(this).css("background-color",this.getAttribute('data-clipboard-text'));
  })

  $('.sg-colorbox').on('click', function(){
    $('.sg-color-copy-label').addClass('fade-in');
    setTimeout(function(){
      $('.sg-color-copy-label').removeClass('fade-in');
    }, 500)
  });

  /*Default*/
  $("button[data-target='sg_data_logo']").parent('li').addClass('active');

  $('.sg-button-list--outer').find('li').on('click', function(){
    $('.sg-button-list--outer').find('li').removeClass('active');
    $(this).addClass('active');
  });

  $('.sg-button-list--inner').find('li').on('click', function(e){
    $('.sg-button-list--inner').find('li').removeClass('active--inner');
    $(this).addClass('active--inner');
  })
});

/*
  function changeContent( ev ) {
    // console.log( 'changeContent', ev);
    const data = ev.currentTarget.dataset.active;
    const target = document.getElementById(data);
    ev.currentTarget.classList.remove('slide-out');
  }

  container.addEventListener( 'transitionend', changeContent );

  function makeSlideOut( selector ) {
    return function slideOut( ev ) {
      // console.log('slideOut', ev);
      const container = document.querySelector( selector );
      container.dataset.active = ev.currentTarget.dataset.target;
      container.classList.add('slide-out');
    }
  }

  [...sg_button_list_btn].forEach( function(elem) {
    elem.addEventListener('mousedown', makeSlideOut( '.sg-main-container' ) );
  });
*/

/*OLD*/
// document.addEventListener("DOMContentLoaded", function(event) { 
  
//   var container = document.getElementsByClassName('sg-main-container')[0];

//   /*Default*/
//   container.innerHTML = sg_data_logo.innerHTML;

//   $('button').on('click', function(){
//     container.classList.add('slide-out');

//     var data = this.getAttribute('data-target');
//     var target = document.getElementById(data);
//     container.innerHTML = target.innerHTML;

//     container.classList.remove('slide-out');
//   });

// });