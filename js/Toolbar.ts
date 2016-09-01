class Toolbar {
    app : Application;
    ractive : Ractive;
    
    constructor(app : Application) {
        this.app = app;
        this.ractive = new Ractive({
            el : '#toolbar',
            template : '<div style="height:40px; width:100%; position:fixed; padding: 8px 16px; background-color:#00a39e; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);"><h1 style="color:#ffffff;height:40px; line-height:40px;">{{title}}</h1></div>',
            data : {
                title : '源泉徴収とかの計算アプリ',
            },
        });
    }
}