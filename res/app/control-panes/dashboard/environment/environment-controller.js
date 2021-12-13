module.exports = function EnvironmentCtrl($scope) {
  $scope.result = null

  $scope.run = function(command) {
    if (command === 'clear') {
      $scope.clear()
      return
    }

    $scope.command = ''

    return $scope.control.shell(command)
      .progressed(function(result) {
        $scope.result = result
        $scope.data = result.data.join('')
        $scope.$digest()
      })
      .then(function(result) {
        $scope.result = result
        $scope.data = result.data.join('')
        $scope.$digest()
      })
  }

  $scope.clear = function() {
    $scope.command = ''
    $scope.data = ''
    $scope.result = null
  }

  $scope.switchTo = function(string) {
    $scope.run('am start -a android.intent.action.VIEW -d \"wandera-dev://?action=set_environment&environment=' + string + '\"')
  }

  $scope.switchToCustom = function(string) {
    $scope.run('am start -a android.intent.action.VIEW -d \"wandera-dev://?action=set_environment&environment=CUSTOM\&url=' + string + '.fi2.wandera.cz\"')
  }

}
