angular
    .module('ssnApp.card')
    .controller('PatientListController', PatientListController);

function PatientListController($scope, $http) {
    $http
        .get('/api/users/patients')
        .then((res) => {
            $scope.patients = res.data;
        });
}