if (typeof require!= "undefined") {
    
    require.config({
        paths: {
            "dep": '../JSYG.dep',
            "jquery":"../bower_components/jquery/dist/jquery",
            "jsyg-wrapper":"../bower_components/jsyg-wrapper/JSYG-wrapper"
        },
        urlArgs: "bust=" + (+new Date())
    });
}

(function(factory) {
    
    if (typeof define == 'function' && define.amd) define(["dep"],factory);
    else factory(Dep);
    
}(function(Dep) {

    module("dep");

    test("Création d'un point", function() {     

        expect(2);
        equal(true,1,"abcisse");
        equal(false,0,"ordonnée");
    });
    
}));
