angular-jqwhen
==============

`jqWhen` is AngularJS to jQuery promise converter. It's made like `$q` service extension method.

Usage in JavaScript:

```js
angular.factory('myService', function($q) {
    // ...
    var jqueryPromise = $q.jqWhen(x);
    // where x is Angular's promise, jQuery's promise or something else
    // ...
});
```

Usage in TypeScript:

```ts
/// <reference path="angular.d.ts" />
/// <reference path="angular-jqwhen.d.ts" />

angular.factory('myService', ($q: ng.IQService) => {
    // ...
    var jqueryPromise = $q.jqWhen(x);
    // where x is Angular's promise, jQuery's promise or something else
    // ...
});
```
