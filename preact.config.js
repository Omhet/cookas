

export default function (config, env, helpers) {
  productionSettings(config, env);
  svgLoader(config, helpers);
  preactCliTypeScript(config);
}

function productionSettings(config, env) {
  if (config.mode === 'production') {
    config.output.publicPath = env.pkg.homepage;
  }
}


function svgLoader(config, helpers) {
  const urlLoader = helpers.getLoadersByName(config, 'url-loader');
  urlLoader.map(
    entry =>
      (entry.rule.test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i)
  );

  const fileLoader = helpers.getLoadersByName(config, 'file-loader');
  fileLoader.map(
    entry =>
      (entry.rule.test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i)
  );

  const rawLoader = helpers.getLoadersByName(config, 'raw-loader');
  rawLoader.map(entry => (entry.rule.test = /\.(xml|html|txt|md)$/));

  config.module.rules.push({
    test: /\.svg$/,
    use: ['preact-svg-loader']
  });
}


const preactCliTypeScript = config => {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
  })


  // config.resolve.alias['preact-cli-entrypoint'] = resolve(process.cwd(), 'src', 'index')
}