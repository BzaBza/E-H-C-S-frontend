angular
    .module('ssnApp.card')
    .controller('CardViewController', CardViewController);


function CardViewController($scope, $http, $stateParams) {
    $http
        .get('/api/card/' + $stateParams.cardId)
        .then((res) => {
            $scope.card = res.data;
        });
}