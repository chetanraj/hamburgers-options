(function() {
  "use strict";

  /**
   * @author Chetan Raj
   */

  var app = {

    hamburgers_classes : ["hamburger--3dx", "hamburger--3dx-r", "hamburger--3dy", "hamburger--3dy-r", "hamburger--arrow", "hamburger--arrow-r", "hamburger--arrowalt", "hamburger--arrowalt-r", "hamburger--boring", "hamburger--collapse", "hamburger--collapse-r", "hamburger--elastic", "hamburger--elastic-r", "hamburger--emphatic", "hamburger--emphatic-r", "hamburger--slider", "hamburger--slider-r", "hamburger--spin", "hamburger--spin-r", "hamburger--spring", "hamburger--spring-r", "hamburger--stand", "hamburger--stand-r", "hamburger--squeeze", "hamburger--vortex", "hamburger--vortex-r"],

    init: function() {
      // the context
      var _this = this;

      for(var h = 0; h < this.hamburgers_classes.length; h++) {

        var hamburger_class = this.hamburgers_classes[h].replace('hamburger--', '');

        var hamburger_template = '<div id="hamburger" class="hamburger '+ this.hamburgers_classes[h] +'"><div class="hamburger-box"><div class="hamburger-inner"></div></div></div><pre class="mt2x"><code class="hamburger-label">'+ hamburger_class +'</code></pre>';

        var row_element = document.createElement('div');
        row_element.className = "row";
        row_element.innerHTML = hamburger_template;

        document.getElementById('container').appendChild(row_element);
      }

      var hamburgers = document.querySelectorAll(".hamburger");

      // Click Event
      [].forEach.call(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", _this.toogleIsActiveClass, false);
      });
    },

    // Toggle the is-active class
    toogleIsActiveClass: function() {
      this.classList.toggle("is-active");



    }
};

app.init();
}());
