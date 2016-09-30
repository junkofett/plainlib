//"use strict";

//window.W = {};

window.W = (function(){
  // create the root namespace and making sure we're not overwriting it
  var W = W || {};

  // create a general purpose namespace method
  // this will allow us to create namespace a bit easier
  W.createNS = function (namespace) {
      var nsparts = namespace.split(".");
      var parent = W;

      // we want to be able to include or exclude the root namespace
      // So we strip it if it's in the namespace
      if (nsparts[0] === "W") {
          nsparts = nsparts.slice(1);
      }

      // loop through the parts and create
      // a nested namespace if necessary
      for (var i = 0; i < nsparts.length; i++) {
          var partname = nsparts[i];
          // check if the current parent already has
          // the namespace declared, if not create it
          if (typeof parent[partname] === "undefined") {
              parent[partname] = {};
          }
          // get a reference to the deepest element
          // in the hierarchy so far
          parent = parent[partname];
      }
      // the parent is now completely constructed
      // with empty namespaces and can be used.
      return parent;
  };

  W.createNS("W.load");

  W.load = function(library, callback){

  }

  // Create the namespace for products
  W.createNS("W.MODEL.PRODUCTS");

  W.MODEL.PRODUCTS.product = function(width, height){
      // private variables
      var dimensions = {
          width: width,
          height: height
      };
      // private methods
      // creating getWidth and getHeight
      // to prevent access by reference to dimensions
      var getWidth = function(){
          return dimensions.width;
      };
      var getHeight = function(){
          return dimensions.height;
      };

      // public API
      return {
          getWidth: getWidth,
          getHeight: getHeight
      };
  };

  // Create the namespace for the logic
  W.createNS("W.LOGIC.BUSINESS");


  W.LOGIC.BUSINESS.createAndAlertProduct = function () {
      var model = W.MODEL.PRODUCTS;
      var p = new model.product(50,100);
      alert(p.getWidth() + " " + p.getHeight());
  };

  return W;
})()

W.prototype = new W();
W.LOGIC.BUSINESS.createAndAlertProduct();
