function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"widget\"><h5>" +
      escapeXml(data.contacto.titulo) +
      "</h5><hr><p>" +
      escapeXml(data.contacto.texto) +
      " </p>");

    forEach(data.contacto.lista, function(contacto) {
      out.w("<hr><i class=\"fa fa-home\"></i>" +
        escapeXml(contacto));
    });

    out.w("</div></div><div class=\"col-md-4\"><div class=\"widget\"><h5>" +
      escapeXml(data.acercaNosotros.titulo) +
      "</h5><hr><p>" +
      escapeXml(data.acercaNosotros.texto) +
      "</p></div></div><div class=\"col-md-4\"><div class=\"widget\"><h5>" +
      escapeXml(data.enlaces.titulo) +
      "</h5><hr><div><ul>");

    forEach(data.enlaces.lista, function(contacto) {
      out.w("<li><a" +
        attr("href", contacto.ruta) +
        " target=\"\">" +
        escapeXml(contacto.texto) +
        "</a></li>");
    });

    out.w("</ul></div></div></div></div><hr><p class=\"copy\">Copyright &copy; 2016 Asisttel México</p></div></div><div class=\"clearfix\"></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
