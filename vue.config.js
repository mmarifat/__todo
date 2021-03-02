module.exports = {
    transpileDependencies: [
        "vuetify",
        "vuex-module-decorators"
    ],
    devServer: {
        host: '0.0.0.0',
        port: 1997,
        https: true,
        hotOnly: false,
    },
    publicPath: '/__todo/'
}
