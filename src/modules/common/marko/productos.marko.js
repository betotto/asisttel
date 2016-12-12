function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    forEach(data, function(linea) {
      out.w("<div class=\"row\">");

      forEach(linea, function(producto) {
        out.w("<div class=\"col-md-4\"><i class=\"fa fa-envelope\"></i><h5>" +
          escapeXml(producto.titulo) +
          "</h5><p>" +
          escapeXml(producto.texto) +
          "</p><div class=\"button\"><a" +
          attr("href", producto.enlace) +
          ">Check It Out</a></div></div>");
      });

      out.w("</div>");
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
