export default function(config, env, helpers) {
  console.log(config.output);
  // env.pkg.homepage
  // config.entry.output.publicPath = '/cookas';
  if (config.mode === 'production') {
    // config.entry.output.publicPath = '/cookas';
    config.output.publicPath = env.pkg.homepage;
  }

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
