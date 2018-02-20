var View = Backbone.View.extend({

    el: '#todo',

    // bind to DOM event using events property
    events: {
        'click [type="checkbox"]': 'clicked',
    },

    initialize: function () {
        // bind to DOM event using jQuery
        this.$el.click(this.jqueryClicked);

        // bind to API event
        this.on('apiEvent', this.callback);
    },

    // 'this' is view
    clicked: function(event) {
        console.log("events handler for " + this.el.outerHTML);
        this.trigger('apiEvent', event.type);
    },

    // 'this' is handling DOM element
    jqueryClicked: function(event) {
        console.log("jQuery handler for " + this.outerHTML);
    },

    callback: function(eventType) {
        console.log("event type was " + eventType);
    }

});

var view = new View();

// let Todo = Backbone.Model.extend({
//   defaults: {
//     completed: false
//   },
//
//   initialize: function() {
//     this.on('change', () => {
//       console.log("something changed")
//     });
//
//     this.on('invalid', (model, error) => {
//       console.log(error)
//     });
//   },
//
//   validate: function(attributes) {
//     if(attributes.title === undefined) {
//       return "Title not set"
//     }
//   },
//
//   setTitle: function(newTitle) {
//     this.set({title: newTitle})
//   }
// })
//
// let view = new Backbone.View;
// view.setElement('<p><a><b>test</b></a></p>');
// console.log(view.$('a b').html()); // outputs "test"
//
//
// let TodoView = Backbone.View.extend({
//   tagName: 'li',
//
//   initialize: () => {
//     _.bindAll(this, 'render');
//     // this.model.bind('change', this.render);
//     this
//   },
//
//   render: () => {
//     $(this.el).html(`<span style="color:brown">${this.model.get('title')}}</span>`);
//     return this;
//   }
// })
//
//
//
// // (function($){
// //   let Todo = Backbone.Model.extend({
// //     defaults: {
// //       completed: false
// //     },
// //
// //     initialize: function() {
// //       this.on('change', () => {
// //         console.log("something changed")
// //       });
// //
// //       this.on('invalid', (model, error) => {
// //         console.log(error)
// //       });
// //     },
// //
// //     validate: function(attributes) {
// //       if(attributes.title === undefined) {
// //         return "Title not set"
// //       }
// //     },
// //
// //     setTitle: function(newTitle) {
// //       this.set({title: newTitle})
// //     }
// //   })
// //
// //   let view = new Backbone.View;
// //   view.setElement('<p><a><b>test</b></a></p>');
// //   console.log(view.$('a b').html()); // outputs "test"
// //
// //
// //   let TodoView = Backbone.View.extend({
// //     tagName: 'li',
// //
// //     initialize: () => {
// //       _.bindAll(this, 'render');
// //       // this.model.bind('change', this.render);
// //       this
// //     },
// //
// //     render: () => {
// //       $(this.el).html(`<span style="color:brown">${this.model.get('title')}}</span>`);
// //       return this;
// //     }
// //   })
// //
// // })(jQuery)
