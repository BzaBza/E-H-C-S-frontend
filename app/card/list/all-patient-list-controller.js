angular
    .module('ssnApp.card')
    .controller('AllPatientListController', AllPatientListController);

function AllPatientListController($scope, $http) {
    $http
        .get('/api/patients')
        .then((res) => {
            $scope.patients = res.data;
        });
}