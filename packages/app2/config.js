const {ModelFederationPlugin} = require('webpack').container

export default {
    chainWebpack(memo, {env, webpack, createCSSRule}) {
        memo.plugin('ModelFederation').use(ModelFederationPlugin, [{
            name:'app2',
            filename: 'remoteEntry.js',
            remotes: {
                'app1': 'app1@//localhost:8080/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        }])
    }
}