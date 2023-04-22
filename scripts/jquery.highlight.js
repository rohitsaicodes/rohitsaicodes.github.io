(function ($) {
  $.fn.highlightMenu = function (options) {
    // Define default options
    var defaults = $.extend(
      {
        bgColor: "limegreen",
        color: "cyan",
        hoverBgColor: "#cccccc",
        hoverColor: "#000000",
        linkWidth: "178px",
      },
      options
    );

    return this.each(function () {
      var items = $("li a");
      var o = defaults;
      //set default styles
      items
        .css("font-family", "arial, helvetica, sans-serif")
        .css("font-weight", "bold")
        .css("text-decoration", "none")
        .css("padding", "20px")
        //  .css('margin-right','0px')
        .css("border-right", "0px solid #d9aa3b")
        .css("background-color", o.bgColor)
        .css("color", o.color)
        //  .css('width', o.linkWidth)
        .css("text-align", "left");
      // .css("float", "left");
      $("ul").css("list-style-type", "none");
      items.mouseover(function () {
        $(this)
          .css("background-color", o.hoverBgColor)
          .css("color", o.hoverColor);
      });
      //mouseout event
      items.mouseout(function () {
        $(this).css("background-color", o.bgColor).css("color", o.color);
      });
    });
  };
})(jQuery);
