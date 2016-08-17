function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><title>Marko Templating Engine</title></head><body><h1>Hello " +
      escapeXml(data.name) +
      "!</h1><h2>Este es un cambiotriple</h2>");

    if (notEmpty(data.colors)) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li>" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div> No colors!</div>");
    }

    out.w(" triplete</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
