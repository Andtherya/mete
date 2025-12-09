// package.js
Package.describe({
  name: 'hello-world',        // 项目名称
  version: '0.0.1',           // 项目版本
  summary: 'A simple Meteor app', // 项目简要说明
  documentation: 'README.md'    // 项目的文档路径
});

Package.onUse(function(api) {
  api.versionsFrom('1.12');    // 设置最低 Meteor 版本
  api.mainModule('server/main.js'); // 设置入口文件，指向 `server/main.js`
});
