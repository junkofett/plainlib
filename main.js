
Window.prototype.Person = (function(){
  //W.LOGIC.BUSINESS.createAndAlertProduct();
  //var Person = Person || {};

  return Person = function() {
      this.canTalk = true;
      this.greet = function() {
          if (this.canTalk) {
              console.log("Hola, Soy " + this.name);
          }
      };
  };
})();

Window.prototype.Employee = (function(){
  //W.LOGIC.BUSINESS.createAndAlertProduct();
  //var Employee = Employee || {};

  /*
  Employee.createNS = function (namespace) {
      var nsparts = namespace.split(".");
      var parent = Employee;

      // Employe want to be able to include or exclude the root namespace
      // So we strip it if it's in the namespace
      if (nsparts[0] === "Employee") {
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
  Employee.createNS("Employee");
*/

  Employee = function(name, title) {
      this.name = name;
      this.title = title;
      this.greet = function() {
          if (this.canTalk) {
              console.log("Hola, Soy " + this.name + ", el " + this.title);
          }
      };
  };
  Employee.prototype = new Person();

  var Customer = function(name) {
      this.name = name;
  };
  Customer.prototype = new Person();

  var Mime = function(name) {
      this.name = name;
      this.canTalk = false;
  };
  Mime.prototype = new Person();

/*
  var bob = new Employee('Bob','Constructor');
  var joe = new Customer('Joe');
  var rg = new Employee('Red Green','Manitas');
  var mike = new Customer('Mike');
  var mime = new Mime('Mime');
  bob.greet();
  joe.greet();
  rg.greet();
  mike.greet();
  mime.greet()
*/
  return Employee;
})();

(function(){
  Employee.prototype = new Person();
  var boOB = new Employee('boOB', 'Constrictor');
  boOB.greet();
})()
