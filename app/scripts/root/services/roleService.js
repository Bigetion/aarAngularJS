(function() {
    'use strict';
    App.service('RoleService', ['$http', 'HttpService', 'API_BASE_URL', function($http, HttpService, API_BASE_URL) {
        return {
            getData: function() {
                return HttpService.get(API_BASE_URL + 'roles/getData', {}, "Get Data");
            },
            submitAdd: function(inputData) {
                var data = {
                    roleName: inputData.roleName,
                    description: inputData.description
                }
                return HttpService.execute(API_BASE_URL + 'roles/submitAdd', data, "Add Data");
            },
            submitEdit: function(idRole, inputData) {
                var data = {
                    idRole: idRole,
                    roleName: inputData.roleName,
                    description: inputData.description
                }
                return HttpService.execute(API_BASE_URL + 'roles/submitEdit', data, "Update Data");
            },
            submitDelete: function(idRole) {
                var data = {
                    idRole: idRole,
                }
                return HttpService.execute(API_BASE_URL + 'roles/submitDelete', data, "Delete Data");
            }
        }
    }])

})()