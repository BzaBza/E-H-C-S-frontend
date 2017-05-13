angular
    .module('ssnApp.card', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'all-patient-list',
                url: '/all-patient-list',
                controller: 'AllPatientListController',
                templateUrl: 'app/card/list/all-patient-list.html'
            })
            .state({
                name: 'patient-list',
                url: '/patient-list',
                controller: 'PatientListController',
                templateUrl: 'app/card/patient-list/patient-list.html'
            })
            .state({
                name: 'card-view',
                url: '/card/:cardId',
                controller: 'CardViewController',
                templateUrl: 'app/card/view/card-view.html'
            })
            .state({
                name: 'logout',
                url: '/logout',
                controller: 'LogoutController'
            });
    });