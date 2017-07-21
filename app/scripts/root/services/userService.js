(function() {
    'use strict';
    App.service('UserService', ['$http', 'HttpService', 'API_BASE_URL', function($http, HttpService, API_BASE_URL) {
        return {
            getData: function() {
                return HttpService.get(API_BASE_URL + 'users/getData', {}, "Get Data");
            },
            submitAdd: function(inputData) {
                var data = {
                    username: inputData.username,
                    idRole: inputData.role.id_role
                }
                return HttpService.execute(API_BASE_URL + 'users/submitAdd', data, "Add Data");
            },
            submitEdit: function(idUser, inputData) {
                var data = {
                    idUser: idUser,
                    username: inputData.username,
                    idRole: inputData.role.id_role
                }
                return HttpService.execute(API_BASE_URL + 'users/submitEdit', data, "Update Data");
            },
            submitDelete: function(idUser) {
                var data = {
                    idUser: idUser,
                }
                return HttpService.execute(API_BASE_URL + 'users/submitDelete', data, "Delete Data");
            }
        }
    }])

})()