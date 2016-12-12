function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<header><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 col-sm-3\"><div class=\"logo\"><h1><a href=\"/index.html#/\"><span class=\"color bold\">" +
      escapeXml(data.asisttel) +
      "</span></a></h1><p class=\"meta\">" +
      escapeXml(data.nombreCompleto) +
      "</p></div></div><div class=\"col-md-8 col-sm-9\"><div class=\"navbar bs-docs-nav\" role=\"banner\"><div class=\"navbar-header\"><button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button></div><nav class=\"collapse navbar-collapse bs-navbar-collapse\" role=\"navigation\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#/contacto\">" +
      escapeXml(data.titulos.contacto) +
      "</a></li><li><a href=\"#/precios\">" +
      escapeXml(data.titulos.precios) +
      "</a></li><li><a href=\"#/blog\">" +
      escapeXml(data.titulos.blog) +
      "</a></li> </ul></nav></div></div></div></div></header>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
