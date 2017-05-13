angular
    .module('ssnApp')
    .controller('RegisterPersonalController', RegisterPersonalController);


function RegisterPersonalController($scope, $http) {
    $scope.afterRegisterToken = [];

    $http
        .get('/api/roles')
        .then((res) => {
            $scope.roles = res.data;
        });
    $scope.register = (userRegisterForm) => {
        $http
            .post('/api/users/register', userRegisterForm)
            .then((res) => {
                $scope.afterRegisterToken.push(res.data);
            });
    };
}