app.controller('formaController', function ($http) {
    var vm = this;

    vm.readData = function () {
        $http.get('/save.php', {params: {kestas: ''}})
            .then(function successCallback(response) {
                vm.zinutes = response.data;
            }, function errorCallback(response) {
            });
    };
    vm.readData();

    vm.postData = function(){
        var parametrai = {
            'vardas': vm.vardas,
            'pastas': vm.pastas,
            'zinute': vm.zinute
        };

        $http.post('/save.php', parametrai)
            .then(function successCallback(response) {
                vm.atsakymas = response.data;
                vm.readData();
            }, function errorCallback(response) {
                console.error(response);
            });
    }

});