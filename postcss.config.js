// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules|floder_name/i // 忽略node_modules目录下的文件
    }
  }
}
