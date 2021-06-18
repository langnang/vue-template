'use strict';

const deps = function (vue, plugins) {
  let output = '';
  if (vue === 'vue2') {
    output += '"core-js": "^3.6.5",\n' +
      '    "vue": "^2.6.11"';
  } else {
    output += '"core-js": "^3.6.5",\n' +
      '    "vue": "^3.0.0"';
  }
  return output;
}
const devDeps = function (vue, plugins) {
  let output = '';
  if (vue === 'vue2') {
    output += '"@vue/cli-plugin-babel": "~4.5.0",\n' +
      '    "@vue/cli-plugin-eslint": "~4.5.0",\n' +
      '    "@vue/cli-service": "~4.5.0",\n' +
      '    "babel-eslint": "^10.1.0",\n' +
      '    "eslint": "^6.7.2",\n' +
      '    "eslint-plugin-vue": "^6.2.2",\n' +
      '    "vue-template-compiler": "^2.6.11"';
  } else {
    output += '"@vue/cli-plugin-babel": "~4.5.0",\n' +
      '    "@vue/cli-plugin-eslint": "~4.5.0",\n' +
      '    "@vue/cli-service": "~4.5.0",\n' +
      '    "@vue/compiler-sfc": "^3.0.0",\n' +
      '    "babel-eslint": "^10.1.0",\n' +
      '    "eslint": "^6.7.2",\n' +
      '    "eslint-plugin-vue": "^7.0.0"';
  }
  return outputllll;
}
const sortDeps = function () {
}
const sortDevDeps = function () {
}
module.exports = {
  deps,
  devDeps,
  sortDeps,
  sortDevDeps
}
