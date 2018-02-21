'use strict'
var path = require('path')

/* path to the HandbrakeCLI executable downloaded by the install script */
var HandbrakeCLIPath = null

switch (process.platform) {
  case 'darwin':
    HandbrakeCLIPath = '/usr/bin/HandBrakeCLI'
    break
  case 'win32':
    HandbrakeCLIPath = '/usr/bin/HandBrakeCLI'
    break
  case 'linux':
    HandbrakeCLIPath = '/usr/bin/HandBrakeCLI'
    break
  default:
    HandbrakeCLIPath = '/usr/bin/HandBrakeCLI'
    break
}

exports.HandbrakeCLIPath = HandbrakeCLIPath
