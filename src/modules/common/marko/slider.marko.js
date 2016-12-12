function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<div class=\"container flex-main\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"flex-image flexslider\"><ul class=\"slides\">");

    forEach(data, function(slidePage) {
      out.w("<li><img" +
        attr("src", slidePage.image) +
        attr("alt", slidePage.imageAlt) +
        "><div class=\"flex-caption\"><h3>" +
        escapeXml(slidePage.titulo) +
        "</h3><p>" +
        escapeXml(slidePage.texto) +
        "</p></div></li>");
    });

    out.w("</ul></div></div></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
