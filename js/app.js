var TopPage = (function () {
    function TopPage(app) {
        this.app = app;
    }
    TopPage.prototype.onCreate = function () {
        var calcTax = function (base) {
            if (base === undefined) {
                return 0;
            }
            return Math.ceil(base * 0.08);
        };
        var calcWithhold = function (base) {
            if (base === undefined) {
                return 0;
            }
            return Math.ceil(Math.min(base, 1000000) * 0.1021);
        };
        var calcWithhold1M = function (base) {
            if (base === undefined) {
                return 0;
            }
            base -= 1000000;
            return Math.ceil(Math.max(0, base) * 0.2042);
        };
        this.ractive = new Ractive({
            el: '#container',
            template: '#topTemplate',
            data: {
                base: 0,
                calcTax: calcTax,
                calcWithhold: calcWithhold,
                calcWithhold1M: calcWithhold1M
            }
        });
    };
    return TopPage;
}());
var Application = (function () {
    function Application() {
    }
    Application.prototype.start = function () {
    };
    return Application;
}());
/// <reference path="./ractive.d.ts"/>
/// <reference path="./Page.ts"/>
/// <reference path="./TopPage.ts"/>
/// <reference path="./Application.ts"/>
var app = new Application();
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "top"
    },
    top: function () {
        app.page = new TopPage(app);
        app.page.onCreate();
    }
});
$(function () {
    app.start();
    app.router = new AppRouter();
    Backbone.history.start();
});
