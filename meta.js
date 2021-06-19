'use strict';

const generatorPrompts = function () {
}

module.exports = {
  metalsmith: {
    before: function () {
      console.log("metalsmith")
    }
  },
  helpers: {
    if_or() {
    },
    // 是否可用
    isEnabled(list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    },
    // 依赖包
    deps: function (vue, plugins) {
      let output = '';
      if (vue === 'vue2') {
        output += '"core-js": "^3.6.5",\n' +
          '    "vue": "^2.6.11"';
        if (plugins["typescript"]) {
          output += ',\n' +
            '    "vue-class-component": "^7.2.3",\n' +
            '    "vue-property-decorator": "^9.1.2"'
        }
      } else {
        output += '"core-js": "^3.6.5",\n' +
          '    "vue": "^3.0.0"';
      }
      return output;
    },
    // 开发依赖包
    devDeps: function (vue, plugins) {
      let output = '';
      if (vue === 'vue2') {
        output += '"@vue/cli-plugin-babel": "~4.5.0",\n' +
          '    "@vue/cli-plugin-eslint": "~4.5.0",\n' +
          '    "@vue/cli-service": "~4.5.0",\n' +
          '    "babel-eslint": "^10.1.0",\n' +
          '    "eslint": "^6.7.2",\n' +
          '    "eslint-plugin-vue": "^6.2.2"';
        if (plugins['typescript']) {
          output += ',\n' +
            '    "typescript": "~4.1.5"';
        }
        output += ',\n' +
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

      if (plugins['typescript']) {
        output += ',\n' +
          '"typescript": "~4.1.5"'
      }
      return output
    },
  },
  prompts: {
    // 场景
    scene: {
      type: 'list',
      message: 'Project Scene',
      choices: [
        // 前端
        {
          name: 'Client (Single Page Application)',
          value: 'Client',
          short: 'Client',
        },
        // 组件库
        {
          name: 'Component',
          value: 'Component',
          short: 'Component',
        },
        // 桌面端
        {
          name: 'Desktop',
          value: 'Desktop',
          short: 'Desktop',
        },
        // 移动端
        {
          name: 'Mobile (uni-app)',
          value: 'Mobile',
          short: 'Mobile',
        },
      ],
    },
    // 名称
    name: {
      type: 'string',
      required: true,
      message: 'Project Name',
      default: 'my-vue-project',
    },
    // 版本
    version: {
      type: 'string',
      required: true,
      message: 'Project Version',
      default: '0.0.1',
    },
    // 描述
    description: {
      type: 'string',
      required: false,
      message: 'Project Description',
      default: 'A vue.js project',
    },

    // Vue 版本
    vueVersion: {
      type: 'list',
      message: 'Project Vue Version',
      choices: [
        {
          name: 'Vue 2.x',
          value: 'vue2',
          short: 'vue2',
        },
      ],
    },
    // CSS 预处理器
    isCssPreprocessor: {
      type: 'confirm',
      message: 'CSS Preprocessor',
      default: false,
    },
    // CSS 预处理器
    cssPreprocessor: {
      when: 'isCssPreprocessor',
      type: 'list',
      message: 'Select a css preprocessor',
      choices: [
        {
          name: 'Sass / Scss',
          value: 'sass',
          short: 'sass',
        },
        {
          name: 'Less',
          value: 'less',
          short: 'less',
        },
      ],
    },
    // 插件
    plugins: {
      when: 'scene !== "Component"',
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['vue-router', 'vuex', 'typescript', 'axios', 'element-ui', 'font-awesome',],
      default: ['vue-router', 'vuex', 'axios', 'element-ui', 'font-awesome'],
    },
  },
  // 过滤
  filters: {
    'src/routes/**/*': 'plugins[\'vue-router\']',
    'src/views/**/*': 'plugins[\'vue-router\']',
    'src/store/**/*': 'plugins[\'vuex\']',
    'tsconfig.json': 'plugins[\'typescript\']',
    'src/**/*.ts': 'plugins[\'typescript\']',
    'src/plugins/axios.js': 'plugins[\'axios\']',
    'src/plugins/element.js': 'plugins[\'element-ui\']',
    'src/plugins/fontawesome.js': 'plugins[\'font-awesome\']',
  },
  completeMessage: "",
  complete: function (data) {
  },
};


