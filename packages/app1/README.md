# app1

## 新建一个 react + webpack5 项目

安装 react

```shell
npm i react react-dom -S
```

安装 webpack 及相关 plugin、loader

```shell
npm i webpack webpack-cli @babel/core @babel/preset-react @babel/preset-env babel-loader clean-webpack-plugin html-webpack-plugin webpack-dev-server webpack-dev-server -D
```

> 注意：webpack-dev-server生成的编译文件不会存在本地，所以本地看不到dist文件夹

本地运行

```shell
yarn dev
```
