"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var functionA = function functionA() {
  console.log("Hello World!");
};

var classA =
/*#__PURE__*/
function () {
  function classA(name) {
    _classCallCheck(this, classA);

    this.name;
  }

  _createClass(classA, [{
    key: "say",
    value: function say() {
      console.log(this.name);
    }
  }]);

  return classA;
}();

functionA();
var user = new ClassA("sttaf34");
console.log(user);