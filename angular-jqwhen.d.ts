declare module ng {
    interface IQService {
        jqWhen<T>(value: JQueryPromise<T>): JQueryPromise<T>;
        jqWhen<T>(value: ng.IPromise<T>): JQueryPromise<T>;
        jqWhen<T>(value: T): JQueryPromise<T>;
    }
}
