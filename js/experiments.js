var caption = $('#contact .caption');
caption.hide();

$('.footer-icon').mouseenter(function(){
    var caption = $(this).find('.caption:not(:visible)');
    caption.fadeIn(200);
}).mouseleave(function(){
    var caption = $(this).find('.caption');
    caption.fadeOut(200);
});

$().ready(function() {

  $('.glow-me').addGlow({
    radius: 20,
    textColor: '#ff0',
    haloColor: '#ffa',
    duration: 200
  });
});


// # Another way of doing this:
// function showCaption() {
//   var caption = $(this).find('.caption');
//   caption.fadeIn(400);
// }
//
// function hideCaption() {
//   var caption = $(this).find('.caption');
//   caption.fadeOut(400);
// }
//
// $('.footer-icon').mouseenter(showCaption).mouseleave(hideCaption);

// # Counter button

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}

// Like button


// # Auto slideshow for Operator States GIF

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("state");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 880); // Change image every 2 seconds
}
