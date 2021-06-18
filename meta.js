'use strict';

const {deps, devDeps} = require("./utils/deps")


module.exports = {
  prompts: {
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
      default: 'An vue project',
    },
    // 场景
    scene: {
      type: 'list',
      message: 'Project Secne',
      choices: [
        // 前端
        {
          name: 'Client',
          value: 'client',
          short: 'client',
        },
        // 组件库
        {
          name: 'Component',
          value: 'component',
          short: 'component',
        },
        // 桌面端
        {
          name: 'Desktop',
          value: 'desktop',
          short: 'desktop',
        },
        // 移动端
        {
          name: 'Mobile (uni-app)',
          value: 'mobile',
          short: 'mobile',
        },
      ],
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
        {
          name: 'Vue 3.x',
          value: 'vue3',
          short: 'vue3',
        },
      ],
    },
    // TypeScript
    ts: {
      type: 'confirm',
      message: 'TypeScript',
      default: false,
    },
    // CSS 预处理器
    isCssPreprocessor: {
      type: 'confirm',
      message: 'CSS Preprocessor',
      default: false,
    },
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
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['axios', 'vue-router', 'vuex', 'element-ui', 'font-awesome'],
      default: ['axios', 'vue-router', 'vuex', 'element-ui', 'font-awesome'],
    },
  },
  helpers: {
    deps,
    devDeps,
  },
  // 过滤
  filters: {
  },
  complete: function (data) {
    console.log(data);
  },
};
