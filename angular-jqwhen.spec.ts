/// <reference path="bower_components/dt-jasmine/jasmine.d.ts" />
/// <reference path="bower_components/dt-jquery/jquery.d.ts" />
/// <reference path="bower_components/dt-angular/angular.d.ts" />
/// <reference path="bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="angular-jqwhen.d.ts" />

describe('$q.jqwhen should return jQuery promise which will be', () => {
    var $q: ng.IQService;
    var $rootScope: ng.IRootScopeService;

    var jqDeferred: JQueryDeferred<any> = null;
    var deferred: ng.IDeferred<any> = null;
    var expected: any = null;
    var actual: any = null;

    beforeEach(module('$q.jqWhen'));
    beforeEach(inject((_$q_: ng.IQService, _$rootScope_: ng.IRootScopeService) => {
        $q = _$q_;
        $rootScope = _$rootScope_;

        jqDeferred = jQuery.Deferred();
        deferred = $q.defer();
        expected = 'some value';
        actual = null;
    }));

    it('resolved by value', () => {
        // set up
        var jqPromise: JQueryPromise<any> = $q.jqWhen(expected);
        jqPromise.then(x => actual = x);

        // should NOT be resolved before $digest
        expect(actual).toBe(null);

        // should be resolved after $digest
        $rootScope.$digest();
        expect(actual).toBe(expected);
    });

    it('resolved by jQuery promise', () => {
        // set up
        var jqPromise: JQueryPromise<any> = $q.jqWhen(jqDeferred.promise());
        jqPromise.then(x => actual = x);

        // should NOT be resolved after $digest
        $rootScope.$digest();
        expect(actual).toBe(null);

        // resolve jQuery deferred
        jqDeferred.resolve(expected);

        // should be resolved after $digest
        expect(actual).toBe(null);
        $rootScope.$digest();
        expect(actual).toBe(expected);
    });

    it('resolved', () => {
        // set up
        var jqPromise: JQueryPromise<any> = $q.jqWhen(deferred.promise);
        jqPromise.then(x => actual = x);

        // should NOT be resolved after $digest
        $rootScope.$digest();
        expect(actual).toBe(null);

        // resolve
        deferred.resolve(expected);

        // should be resolved after $digest
        expect(actual).toBe(null);
        $rootScope.$digest();
        expect(actual).toBe(expected);
    });

    it('rejected', () => {
        // set up
        var jqPromise: JQueryPromise<any> = $q.jqWhen(deferred.promise);
        jqPromise.then(null, x => actual = x);

        // should NOT be rejected after $digest
        $rootScope.$digest();
        expect(actual).toBe(null);

        // reject
        deferred.reject(expected);

        // should be rejected after $digest
        expect(actual).toBe(null);
        $rootScope.$digest();
        expect(actual).toBe(expected);
    });

    it('notified', () => {
        // set up
        var jqPromise: JQueryPromise<any> = $q.jqWhen(deferred.promise);
        jqPromise.then(null, null, x => actual = x);

        // should NOT be notified after $digest
        $rootScope.$digest();
        expect(actual).toBe(null);

        // notify
        deferred.notify(expected);

        // should be notified after $digest
        expect(actual).toBe(null);
        $rootScope.$digest();
        expect(actual).toBe(expected);
    });
});
