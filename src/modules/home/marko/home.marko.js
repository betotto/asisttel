function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  var sliderMarko = require('../../common/marko/slider.marko'),
  	productoMarko = require('../../common/marko/productos.marko'),
  	contactoMarko = require('../../common/marko/contactoForm.marko'),
  	capacidadesMarko = require('../../common/marko/capacidades.marko'),
  	marcasMarko = require('../../common/marko/marcas.marko');

  return function render(data, out) {
    out.w("<div>");

    sliderMarko.render(data.slider, out);

    out.w("</div>");

    capacidadesMarko.render({}, out);

    out.w("<div class=\"service-one\"><div class=\"container\">");

    productoMarko.render(data.productos, out);

    out.w("<hr></div></div>");

    contactoMarko.render(data.contactoForm, out);

    marcasMarko.render({}, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
