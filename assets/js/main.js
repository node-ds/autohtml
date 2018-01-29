$(function(){
    var h = window.screen.height ;
    $(".content").css("min-height",h);

    $("body").on("click",function () {
        $(".dropdown-open").removeClass("dropdown-open");
    });

    $(".header .navbar .menubtn").on("click",function(event){
        $(".navmenu").toggleClass("in");
        /*
        if( $(".navmenu").hasClass("in")){
            $(".navmenu").removeClass("in");
        }else {
            $(".navmenu").addClass("in");
        }
        */
    });

    $(".dropdown").on("click",function(event){
        var dl = $(this).find(".dropdown-menu");
        if(dl) {
            if (dl.hasClass("dropdown-open")) {
                dl.removeClass("dropdown-open");
                $(this).removeClass("d-open");
            } else {
                $(".dropdown-open").removeClass("dropdown-open");
                $(".d-open").removeClass("d-open");
                dl.addClass("dropdown-open");
                $(this).addClass("d-open");
            }
        }
        event.stopPropagation();
    });

    $(".navmenu li a").on("click",function () {
        var nt = $(this).find(".arrow");
        if(nt) {
            if (nt.length > 0) {
                if (nt.hasClass("open")) {
                    $(this).parent().removeClass("open");
                    nt.removeClass("open");
                    $(this).next().hide();
                } else {
                    $(this).parent().addClass("open");
                    nt.addClass("open");
                    $(this).next().show();
                }
            }
        }
    });

    $(".container .navmenu  .page-menu .menu-bm").on("click",function () {
        $(".container").toggleClass("menu-close");
        /*
        if($(".container").hasClass("menu-close")){
            $(".container").removeClass("menu-close");
        }else{
            $(".container").addClass("menu-close");
        }
        */
    });

    $(".tab .tab-nav li").on("click",function(){
        var that = $(this);
        if(!that.hasClass("active")){
            var a = that.find("a");
            if(a && a.length > 0){
                that.siblings(".active").removeClass("active");
                that.addClass("active");
                var c = that.parent().next();
                c.find(".active").removeClass("active");
                $("#tab" + a.attr("tab")).addClass("active");
            }
        }
    });
});

var http="";
function ajax(url,func,data){
    if(typeof(data)=="undefined") data={};

    if(url.indexOf('http://')<0) {
        url=http+url;
    }

    var MOTH='GET';
    if( isEmptyObject(data) ){
        MOTH='POST';
    }
    $.ajax({
        type: MOTH,
        url: url,
        data: data,
        dataType: "json",
        success: function(res){
            //var res=eval('('+res+')');
            if(isEmptyObject(res,'state') && res.state==0){
                tologin();
                return;
            }
            if(isEmptyObject(res,'eval') && res.eval==1){
                eval(r.eval);
                return;
            }
            func(res);
        }
    });
}

function isEmptyObject(e,n) {
    var t;
    for (t in e)  {
        if(typeof(n)=="undefined"){
            return true;
        }else{
            if(n==t){
                return true;
            }
        }
    }
    return false;
}

function tologin(){
    tourl('/index.php?r=user/login');
}

function tourl(url){
    if(url.indexOf('http://')<0) {
        url=http+url;
    }
    window.location.href=url;
}

