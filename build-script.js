const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/element-poc/polyfills.js',
        './dist/element-poc/runtime.js',
        './dist/element-poc/scripts.js',
        './dist/element-poc/main.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/app-test.js')
    console.info('Elements created successfully!')

})()