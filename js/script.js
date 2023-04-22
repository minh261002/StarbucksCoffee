"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if (window.innerWidth > 767) {
  var htb = document.querySelector('.howToBrewContainer');

  if (htb) {
    setTimeout(function (_) {
      var vdo = document.querySelector('video');
      var banner = document.querySelector('.heroBanner--howToBrew');
      banner.style.background = 'none';
      vdo.style.transition = 'none';
      vdo.style.opacity = 1;
    }, 5000);
  }
} // let navMenu = document.querySelector('.nav_menu')
// let toggler = document.querySelector('.hamburger')
// toggler.addEventListener('click', _ => navMenu.classList.toggle('active'))


var nav = document.querySelector('#header nav#nav');
var navMenu = document.querySelector('.nav_menu');
var toggler = document.querySelector('.hamburger');
toggler.addEventListener('click', function (e) {
  e.preventDefault();
  navMenu.classList.toggle('active');
  nav.classList.toggle('open');
}); // coffee

var tab = document.querySelectorAll('.brewLinksList__item');

for (var i = 0; i < tab.length; i++) {
  tab[i].classList.remove('on');
}

var coffeeFill = function coffeeFill(condition, target) {
  return condition ? document.querySelector(target).classList.add('on') : '';
};

coffeeFill(document.querySelector('.pour-over'), '.Pour-Over');
coffeeFill(document.querySelector('.coffee_press'), '.Press');
coffeeFill(document.querySelector('.how_to_brew'), '.Press');
coffeeFill(document.querySelector('.iced_pour-over'), '.Iced');
coffeeFill(document.querySelector('.coffee_brewer'), '.Brewer'); // responsibility

var sectionBlockHeader = document.querySelectorAll('.sectionBlock__header');

var chunk = function chunk(arr, size) {
  return Array.from({
    length: Math.ceil(arr.length / size)
  }, function (v, i) {
    return arr.slice(i * size, i * size + size);
  });
};

var blockHeader = chunk(_toConsumableArray(sectionBlockHeader), 2);

for (var _i = 0; _i < blockHeader.length; _i++) {
  var temp = 0;

  for (var z = 0; z < blockHeader[_i].length; z++) {
    var currentHeight = blockHeader[_i][z].offsetHeight;

    if (temp < currentHeight) {
      temp = currentHeight;

      for (var k = 0; k < blockHeader[_i].length; k++) {
        blockHeader[_i][k].style.height = temp + 'px';
      }
    }
  }
} // coffee how to brew


var brew = document.querySelector('.brewLinksList .marker');

if (brew) {
  if (window.innerWidth > 480) {
    var style = document.createElement('style');
    document.body.appendChild(style);
    var pos = document.querySelector('.brewLinksList__item.on');

    //if (pos) {
    //  var prop = pos.offsetLeft + pos.offsetWidth / 2 - 8 + 'px !important';
    //  style.innerHTML = "\n            .brewLinksList .marker {\n                left: ".concat(prop, ";\n            }\n            @media screen and (max-width: 775px) {\n                .howToBrewContainer .container {\n                    padding-top: 0!important;\n                }   \n            }\n        ");
    //}
  }
}