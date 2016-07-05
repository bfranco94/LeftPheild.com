(function() {
  var $btn = $('#dd-btn'),
      $ul = $btn.next('ul'),
      ogText = $btn.text();

  $btn.on('click', function() {
    var isOpen = $ul.is(':visible'),
        slideDir = isOpen ? 'slideUp' : 'slideDown',
        btnText = isOpen ? ogText : 'Bring It Back Up',
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
