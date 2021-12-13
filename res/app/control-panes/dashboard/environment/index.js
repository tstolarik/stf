require('./environment.css')

module.exports = angular.module('stf.environment', [
  require('stf/common-ui').name,
  require('gettext').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/dashboard/environment/environment.pug',
      require('./environment.pug')
    )
  }])
  .controller('EnvironmentCtrl', require('./environment-controller'))
