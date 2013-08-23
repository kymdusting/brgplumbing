(function() {
  var e = "low-tide";
  window.getComputedStyle || $(".slide-wrap").load("slider.html", function() {
    $(".bxslider").bxSlider({
      auto: !0,
      autoControls: !0
    });
  });
  $(window).resize(function() {
    if (window.getComputedStyle) {
      var t = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
      t = t.replace(/"/g, "");
      t = t.replace(/'/g, "");
      if (t != e) {
        t == "none";
        if (t == "high-tide") {
          $(".bxslider").length > 0 ? $(".bxslider, .bx-controls").css("display", "block") : $(".slide-wrap").load("slider.html", function() {
            $(".bxslider").bxSlider({
              auto: !0,
              autoControls: !0
            });
          });
          e = "high-tide";
        }
        if (t == "mid-tide") {
          $(".slide-wrap").load("slider.html", function() {
            $(".bxslider").bxSlider({
              auto: !0,
              autoControls: !0
            });
          });
          e = "mid-tide";
        }
        if (t == "low-tide") {
          $(".bxslider").length > 0 && $(".bxslider, .bx-controls").css("display", "none");
          e = "low-tide";
        }
      }
    }
  }).resize();
})();