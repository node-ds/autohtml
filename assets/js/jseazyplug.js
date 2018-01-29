var jseazyplug = (function(){
    var rbool = true;
    var func = null;

    var modul =  '<div class="jseazyplug-box">' +
            '<style type="text/css">' +
            '.jseazyplug-box{' +
            '   margin: 0;' +
            '   padding: 0; ' +
            '   border: 0;' +
            '}\n' +
            '.jseazyplug-box .info-box{\n' +
            '    position: fixed;\n' +
            '    top: 30%;\n' +
            '    left: 10%;\n' +
            '    width: 80%;\n' +
            '    z-index: 2000;\n' +
            '    background-color: #fff;\n' +
            '    animation:plugan 0.5s;' +
            '    -webkit-animation:plugan 0.5s;' +
            '}' +
            '.jseazyplug-box .info-box.newpos{' +
            '    height: 80%;\n' +
            '    top: 10%;\n' +
            '    overflow: auto;' +
            '}\n' +
            '@keyframes plugan\n' +
            '{' +
            '    0% {transform : translateY(-100%);opacity:0;}' +
            '    20% {transform : translateY(-50%);opacity:0;}' +
            '    40% {transform : translateY(-30%);opacity:1;}' +
            '    60% {transform : translateY(-10%);opacity:1;}' +
            '    100% {transform : translateY(0);opacity:1;}' +
            '}\n' +
            '@-webkit-keyframes plugan\n /* Safari 与 Chrome */' +
            '{' +
            '    0% {-webkit-transform : translateY(-100%);opacity:0;}' +
            '    20% {-webkit-transform : translateY(-50%);opacity:0.1;}' +
            '    40% {-webkit-transform : translateY(-30%);opacity:0.5;}' +
            '    60% {-webkit-transform : translateY(-10%);opacity:1;}' +
            '    100% {-webkit-transform : translateY(0);opacity:1;}' +
            '}\n' +
            '</style>' +
            '<div class="info-box">{{modul}}</div>' +
            '<div class="backdrop" onclick="jseazyplug.remove();"></div>' +
        '</div>';

    var _timerbox = function(msg,time,icon){
        if(typeof(msg) == 'undefined' ){
            console.log("参数错误。");
            return;
        }
        var iconhtm = '<i class="fa fa-check"></i>';
        if(typeof(icon) != 'undefined' ) {
            if(icon == ''){
                iconhtm = '';
            }else if(icon == "err"){
                iconhtm = '<i class="fa fa-warning"></i>';
            }else{
                iconhtm = '<i class="fa '+icon+'"></i>';
            }
        }

        if(typeof(time) == 'undefined' ) {
            time = 1000;
        }

        var id = 'alert_' + Math.round(Math.random()*10000);

        var htm = '<div id="' + id + '" class="jseazyplug-box-timer">'+
                    '<style type="text/css">' +
                    '.info-box-timer{ ' +
                    '   z-index: 9999;'+
                    '   width: 200px;' +
                    '   height: 80px;' +
                    '   border-radius:10px;'+
                    '   padding: 30px;'+
                    '   font-size: 16px;'+
                    '   background-color: #000;' +
                    '   color:#fff;'+
                    '   text-align: center;'+
                    '   opacity:0.6;'+
                    '   position: fixed;' +
                    '   top: 0px;' +
                    '   left: 0px;' +
                    '   right: 0px;' +
                    '   bottom: 0px;' +
                    '   margin: auto;' +
                    '   animation:plugan-timer 0.5s;'+
                    '}' +
                    '@keyframes plugan-timer\n' +
                    '{' +
                    '    0% {transform : translateY(-100%);}' +
                    '    20% {transform : translateY(-50%);}' +
                    '    40% {transform : translateY(-30%);}' +
                    '    60% {transform : translateY(-10%);}' +
                    '    100% {transform : translateY(0);}' +
                    '}\n' +
                    '@-webkit-keyframes plugan-timer\n /* Safari 与 Chrome */' +
                    '{' +
                    '    0% {transform : translateY(-100%);}' +
                    '    20% {transform : translateY(-50%);}' +
                    '    40% {transform : translateY(-30%);}' +
                    '    60% {transform : translateY(-10%);}' +
                    '    100% {transform : translateY(0);}' +
                    '}\n' +
                    '.info-box-timer i{' +
                    '   color:#fff;' +
                    '}'+
                    '</style>' +
                        '<div class="info-box-timer">' + iconhtm + "&nbsp;&nbsp;" + msg + '</div>' +
                    '</div>';
        $("body").append(htm);

        setTimeout(function(){
            $("#"+id).remove();
        },time);
    };

    var _default = function(msg,tit,icon){
        if(typeof(msg) == 'undefined' ){
            console.log("参数错误。");
            return;
        }

        var iconhtm = '<i class="fa fa-exclamation-triangle"></i>';
        if(typeof(icon) != 'undefined' ) {
            if(icon == ''){
                iconhtm = '';
            }else{
                iconhtm = '<i class="fa '+icon+'"></i>';
            }
        }

        var tithtm = '';
        if(typeof(tit) != 'undefined' ){
            tithtm =  '<div class="pa5 cg"> <div class="pa510 fl">  ' + iconhtm +' &nbsp; '+ tit +
                '</div> <div class="fr pa510 bn" onclick="jseazyplug.remove();"><i class="fa fa-remove"></i></div>  <div class="cb"></div> </div> <div class="cb"></div>';
        }

        var htm = tithtm + '<div class="pa10 cw"> ' + msg + ' </div> ' +
            '<div class="cb"></div>  <div class="cb pa5"></div> ';

        var showhtm = modul.replace("{{modul}}",htm).replace("div class=\"info-box\"","div class=\"info-box newpos\"");

        $("body").append(showhtm);
    };


    var _alert = function(msg,tit,icon){
        if(typeof(msg) == 'undefined' ){
            console.log("参数错误。");
            return;
        }

        var iconhtm = '<i class="fa fa-exclamation-triangle"></i>';
        if(typeof(icon) != 'undefined' ) {
            if(icon == ''){
                iconhtm = '';
            }else{
                iconhtm = '<i class="fa '+icon+'"></i>';
            }
        }

        var tithtm = '';
        if(typeof(tit) != 'undefined' ){
            tithtm =  '<div class="pa5 cg"> <div class="pa510 fl">  ' + iconhtm +' &nbsp; '+ tit +
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
            if(callback)    callback(false);
            jseazyplug.sremove();
        });

        $("#jep-comfirm-ok").on("click", function () {
            if(callback)    callback(true);
            jseazyplug.sremove();
        });
    };
    
    var _callback = function () {
        func();
    };

    var _remove = function(){
        if(rbool)   $(".jseazyplug-box").remove();
    };

    var _Sremove = function(){
        $(".jseazyplug-box").remove();
    };

    var _tips = function (that,msg) {
        var htm = '<div style="position: relative;">\n' +
            '    <div style="position: absolute;bottom: 5px;left: 0px;border:1px solid #d0d0d0;padding: 10px;"> ' +msg+ '</div>\n' +
            '    </div>';
        $(that).prepend(htm);
    };

    return{
        default:_default,
        timerbox:_timerbox,
        alert:_alert,
        confirm : _confirm,
        setr : function (bool) {
            rbool = bool;
        },
        remove : function () {
            _remove();
        },
        sremove : function () {
            _Sremove();
        },
        tips:_tips,
    };

})();
