angular.module('$q.jqWhen', [])

// Инжектирование в сервис $q метода jqWhen, который возвращает объект jQuery Promise
    .config(['$provide', function($provide) {
        $provide.decorator('$q', ['$delegate', function($delegate) {
            $delegate.jqWhen = function(obj) {
                var deferred = jQuery.Deferred();

                this.when(obj).then(function(result) {
                    deferred.resolve(result);
                }, function(error) {
                    deferred.reject(error);
                }, function(value) {
                    deferred.notify(value);
                });

                return deferred.promise();
            };
            return $delegate;
        }]);
    }]);
