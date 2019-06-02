const preactCliSvgLoader = require('preact-cli-svg-loader');


export default function(config, env, helpers) {
//   config.module.rules.pop();

//   config.module.rules.shift({
//     test: /\.svg$/,
//     use: ['preact-svg-loader']
//   });

const urlLoader = helpers.getLoadersByName(config, 'url-loader')
    urlLoader.map(entry => entry.rule.test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i)

    const fileLoader = helpers.getLoadersByName(config, 'file-loader')
    fileLoader.map(entry => entry.rule.test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i)

    const rawLoader = helpers.getLoadersByName(config, 'raw-loader')
    rawLoader.map(entry => entry.rule.test = /\.(xml|html|txt|md)$/)

    config.module.rules.push({
        test: /\.svg$/,
        use: ['preact-svg-loader']
    })

//   console.log(config.module.rules)
}
