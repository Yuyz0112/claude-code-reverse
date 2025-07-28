const beautify = require('js-beautify/js').js
const fs = require('fs')
const path = require('path')

const original = fs.readFileSync(path.resolve(__dirname, '../cli.mjs'), 'utf-8')

fs.writeFileSync(path.resolve(__dirname, '../cli.beautify.mjs'), beautify(original, {
  indent_size: 2,
  space_in_empty_paren: true,
}))