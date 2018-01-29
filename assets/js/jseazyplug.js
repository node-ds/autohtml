var jseazyplug = (function(){
    var rbool = true;
    var func = null;

    var modul = '<div class="jseazyplug-box">' +
            '<div class="info-box">{{modul}}</div>' +
            '<div class="backdrop" onclick="jseazyplug.remove();"></div>' +
        '</div>';
    var _alert = function(msg,tit,icon){
        if(typeof(msg) == 'undefined' ){
            console.log("参数错误。");
            return;
        }

        var iconhtm = '<i class="fa fa-exclamation-triangle"></i>';
        if(typeof(icon) != 'undefined' ) {
            iconhtm = '<i class="fa"></i>';
        }

        var tithtm = '';
        if(typeof(tit) != 'undefined' ){
            tithtm =  '<div class="pa5 cg"> <div class="pa510 fl">  ' + iconhtm + tit +
                '</div> <div class="fr pa510 bn" onclick="jseazyplug.remove();"><i class="fa fa-remove"></i></div>  <div class="cb"></div> </div> <div class="cb"></div>';
        }

        var htm = tithtm + '<div class="pa10 cw"> ' + msg + ' </div> ' +
            '<div class="pa10">' +
                '<button class="btn fr" onclick="jseazyplug.sremove();">确定</button>' +
            '</div> ' +
            '<div class="cb"></div>  <div class="cb pa5"></div> ';

        var showhtm = modul.replace("{{modul}}",htm);

        $("body").append(showhtm);
    };

    var _confirm = function (msg,tit,callback) {
        var htm =  '<div class="pa5 cg"> <div class="pa510 fl"> <i class="fa fa-exclamation-triangle"></i> ' + tit +
            '</div> <div class="fr pa510 bn" onclick="jseazyplug.remove();"><i class="fa fa-remove"></i></div>  <div class="cb"></div> </div> <div class="cb"></div>' +
            '<div class="pa10 cw nbsp"> ' + msg + ' </div> ' +
            '<div class="pa10">' +
            '<button id="jep-comfirm-quit" class="btn fr ma5">取消</button>' +
            '<button id="jep-comfirm-ok" class="btn fr ma5 red">确定</button>' +
            '</div> ' +
            '<div class="cb"></div>  <div class="cb pa5"></div> ';

        var showhtm = modul.replace("{{modul}}",htm);

        $("body").append(showhtm);

        $("#jep-comfirm-quit").on("click", function () {
            jseazyplug.sremove();
            if(callback)    callback(false);
        });

        $("#jep-comfirm-ok").on("click", function () {
            jseazyplug.sremove();
            if(callback)    callback(true);
        });
    };
    
    var _callback = function () {
        func();
    }

    var _remove = function(){
        if(rbool)   $(".jseazyplug-box").remove();
    };

    var _Sremove = function(){
        $(".jseazyplug-box").remove();
    };

    return{
        alert : function (msg,tit) {
            _alert(msg,tit);
        },
        confirm : function (msg,tit,callback) {
            _confirm(msg,tit,callback);
        },
        setr : function (bool) {
            rbool = bool;
        },
        remove : function () {
            _remove();
        },
        sremove : function () {
            _Sremove();
        }
    };

})();