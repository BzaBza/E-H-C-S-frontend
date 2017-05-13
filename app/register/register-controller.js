angular
    .module('ssnApp')
    .controller('RegisterController', RegisterController);


function RegisterController($scope, $http) {
    $scope.afterRegisterToken = [];
    $scope.register = (userRegisterForm) => {
        $http
            .post('/api/patients/register', userRegisterForm)
            .then((res) => {
                $scope.afterRegisterToken.push(res.data);
            });
    };
    $http
        .get('/api/users')
        .then((res) => {
            $scope.doctors = res.data
        });
    $http
        .get('/api/countries')
        .then((res) => {
            $scope.countries = res.data;
        });

    $scope.getCities = (countryId) => {
        $http
            .get('/api/countries/' + countryId)
            .then((res) => {
                $scope.cities = res.data.cities;
            })
    }
}