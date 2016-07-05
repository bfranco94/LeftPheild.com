(function() {
  var $btn = $('#dd-btn'),
      $ul = $btn.next('ul'),
      ogText = $btn.text();

  $btn.on('click', function() {
    var isOpen = $ul.is(':visible'),
        slideDir = isOpen ? 'slideUp' : 'slideDown',
        btnText = isOpen ? ogText : 'Close',
        dur = isOpen ? 200 : 400;
    $ul.velocity(slideDir, {
      easing: 'easeOutQuart',
      duration: dur,
      complete: function() {
        $btn.text(btnText);
      }
    });
  });

})();
