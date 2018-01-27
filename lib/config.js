'use strict'
var path = require('path')

/* path to the HandbrakeCLI executable downloaded by the install script */
var HandbrakeCLIPath = null

switch (process.platform) {
  case 'darwin':
    HandbrakeCLIPath = 'HandBrakeCli'
    break
  case 'win32':
    HandbrakeCLIPath = 'HandBrakeCli'
    break
  case 'linux':
    HandbrakeCLIPath = 'HandBrakeCli'
    break
}

exports.HandbrakeCLIPath = HandbrakeCLIPath
