function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<div class=\"container newsletter\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"well\"><h5>" +
      escapeXml(data.titulo) +
      "</h5><p>" +
      escapeXml(data.texto) +
      "</p><form class=\"form-inline\" role=\"form\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"nombre\"" +
      attr("placeholder", data.placeholder.nombre) +
      "></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"telefono\"" +
      attr("placeholder", data.placeholder.telefono) +
      "></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"email\"" +
      attr("placeholder", data.placeholder.email) +
      "></div><button type=\"submit\" class=\"btn btn-default\">" +
      escapeXml(data.placeholder.botonEnviar) +
      "</button></form><p>" +
      escapeXml(data.saludo) +
      "</p></div></div></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
