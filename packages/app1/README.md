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

导出模板联邦

```js
new ModuleFederationPlugin({
    name: 'app1',
    filename: 'remoteEntry.js',
    exposes: {
        './Home': './src/..'
    },
    shared: ['react','react-dom']
})
```

报错：
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b2c1478a7fc46939e62fb2caddbdf0d~tplv-k3u1fbpfcp-watermark.image?)

解决方法：

```js
shared: [{
    'react': {
        eager: true
    }, 
}, {
    'react-dom': {
        eager: true
    }
}]
```

查验导出内容：

<http://localhost:8080/remoteEntry.js>
