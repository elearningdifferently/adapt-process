define([
    'core/js/adapt',
    'core/js/views/componentView',
    'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {
    var slideIndex = 1;
    var ProcessView = ComponentView.extend({

        preRender: function() {
            this.checkIfResetOnRevisit();
            
        },

        postRender: function() {
            this.setReadyStatus();
            this.showDivs(slideIndex);
            this.setupInview();
            
            var el = document.getElementById("my-button");

if (el.addEventListener) {
    el.addEventListener("click", function() {
    this.showMessage();
    }, false);
} else { //IE8 support
    el.attachEvent("onclick", function() { 
        alert("clicked");
    });
}
            
        },

        setupInview: function() {
                this.setCompletionStatus();
                return;
        },
        
       plusDivs: function plusDivs(n) {
            this.showDivs(slideIndex += n);
        },
        
        showMessage: function() {
            console.log("hello!");
        },
        
        
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },
        
        showDivs: function(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

    },
    {
        template: 'process'
    });

    return Adapt.register('process', {
        model: ComponentModel.extend({}),// create a new class in the inheritance chain so it can be extended per component type if necessary later
        view: ProcessView
    });
});