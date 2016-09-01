class TopPage implements Page {
    app : Application;
    ractive : Ractive;
    
    constructor(app : Application) {
        this.app = app;
    }
    
    onCreate() {
        var calcTax = (base : number) => {
            if (base === undefined) { return 0; }
            return Math.ceil(base * 0.08);
        };
        var calcWithhold = (base : number) => {
            if (base === undefined) { return 0; }
            return Math.ceil(Math.min(base, 1000000) * 0.1021); 
        };
        var calcWithhold1M = (base : number) => {
            if (base === undefined) { return 0; }
            base -= 1000000;
            return Math.ceil(Math.max(0, base) * 0.2042); 
        };
        this.ractive = new Ractive({
            el : '#container',
            template : '#topTemplate',
            data : {
                base : 0,
                calcTax : calcTax,
                calcWithhold : calcWithhold,
                calcWithhold1M : calcWithhold1M,
            },
        });
    }
}