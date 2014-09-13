angular.module('$q.jqWhen', [])
    .config(['$provide', function($provide) {
        // Injection of method jqWhen into service $q, which returns jQuery Promise object
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
