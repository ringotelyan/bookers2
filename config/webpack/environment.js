const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = rewuire('webpack')
environment.pluhins.prepand(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: 'popper.js'
  })
  )