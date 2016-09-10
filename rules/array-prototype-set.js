'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([\w+\.]+?)\.\$set\s*?\((.+?)\)/,
  warning: function (match, array, setArgs) {
    return {
      reason: 'Array extensions for the reactivity system have been deprecated',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          'Vue.set(' + array + ', ' + setArgs.trim() + ')'
        )
      ),
      docsHash: 'Array-prototype-set'
    }
  }
}
