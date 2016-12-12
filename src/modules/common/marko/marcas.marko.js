function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"marcas\"><img src=\"img/clients/1.png\" alt=\"\"><img src=\"img/clients/2.png\" alt=\"\"><img src=\"img/clients/3.png\" alt=\"\"><img src=\"img/clients/4.png\" alt=\"\"><img src=\"img/clients/5.png\" alt=\"\"><img src=\"img/clients/6.png\" alt=\"\"></div></div></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
