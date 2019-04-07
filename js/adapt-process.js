define([
    'core/js/adapt',
    'core/js/views/componentView',
    'core/js/models/componentModel',
    'libraries/tiny-slider'
], function(Adapt, ComponentView, ComponentModel) {

    var ProcessView = ComponentView.extend({

        preRender: function() {
            this.checkIfResetOnRevisit();
            this.runSlick();
        },

        postRender: function() {
            this.setReadyStatus();

            this.setupInview();
        },

        setupInview: function() {
                this.setCompletionStatus();
                return;
        },
        
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },
        
        runSlick: function() { 
          var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });
     console.log("cool");
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