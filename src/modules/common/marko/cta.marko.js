function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"container\"><div class=\"cta\"><div class=\"row\"><div class=\"col-md-5 col-sm-5\"><div class=\"ctas\"><h5>Professional Product Ever Made in Internet</h5><p>Sed diam nisi, pulvinar vitae molestie vitae molestie hendreri hendrerit, venenatis eget mauris.</p></div></div><div class=\"col-md-4 col-sm-4\"><div class=\"ctas\"><ul><li>Very Cheap in Market. Check it today.</li><li>Professional and Powerful. Don't miss it.</li><li>1000% Guanrantee. No Worries. No Probs.</li></ul></div></div><div class=\"col-md-3 col-sm-3\"><div class=\"ctas\"><div class=\"button\"><a href=\"#\">Buy it Today for $99</a></div><p>limited period offer</p></div></div></div></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
