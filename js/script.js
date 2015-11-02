angular.module('asApp', [])
  .controller('ContactController', function($scope){
    $scope.encodeString = function(string){
      return window.encodeURIComponent(string)
    }
  })
  .controller('PortfolioController', function($scope){
    $scope.items = [{
        src: '1',
        title: 'You can Draw!'
      },{
        src: '2',
        title: 'You can dress up!'
      },{
        src: '3',
        title: 'Plan it all'
      },{
        src: '4',
        title: 'You can Design'
      },{
        src: '5',
        title: 'The Studio is yours'
      },{
        src: '6',
        title: 'Bring your dreams to life'
      }]
  })