///<reference path="./Toolbar.ts"/>
class Application {
    router : any;
    toolbar : Toolbar;
    page : Page;
    start() {
        this.toolbar = new Toolbar(this);
    }
}