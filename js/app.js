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
var Toolbar = (function () {
    function Toolbar(app) {
        this.app = app;
        this.ractive = new Ractive({
            el: '#toolbar',
            template: '<div style="height:40px; width:100%; position:fixed; padding: 8px 16px; background-color:#00a39e; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);"><h1 style="color:#ffffff;height:40px; line-height:40px;">{{title}}</h1></div>',
            data: {
                title: '源泉徴収とかの計算アプリ'
            }
        });
    }
    return Toolbar;
}());
///<reference path="./Toolbar.ts"/>
var Application = (function () {
    function Application() {
    }
    Application.prototype.start = function () {
        this.toolbar = new Toolbar(this);
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
