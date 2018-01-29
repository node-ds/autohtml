(function($) {

    $.alerts = {
        alert: function(title, message, callback) {
            if( title == null ) title = '提示';
            $.alerts._show(title, message, null, 'alert', function(result) {
                if( callback ) callback(result);
            });
        },

        confirm: function(title, message, callback) {
            if( title == null ) title = '请确定';
            $.alerts._show(title, message, null, 'confirm', function(result) {
                if( callback ) callback(result);
            });
        },


        _show: function(title, msg, value, type, callback) {
            var _html = "";
            _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
            _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
            if (type == "alert") {
                _html += '<input id="mb_btn_ok" type="button" value="确定" />';
            }
            if (type == "confirm") {
                _html += '<input id="mb_btn_ok" type="button" value="确定" />';
                _html += '<input id="mb_btn_no" type="button" value="取消" />';
            }
            _html += '</div></div>';

            //必须先将_html添加到body，再设置Css样式
            $("body").append(_html); GenerateCss();

            switch( type ) {
                case 'alert':
                    $("#mb_btn_ok").click( function() {
                        $.alerts._hide();
                        callback(true);
                    });
                    $("#mb_btn_ok").focus().keypress( function(e) {
                        if( e.keyCode == 13 || e.keyCode == 27 ) $("#mb_btn_ok").trigger('click');
                    });
                    break;
                case 'confirm':

                    $("#mb_btn_ok").click( function() {
                        $.alerts._hide();
                        if( callback ) callback(true);
                    });
                    $("#mb_btn_no").click( function() {
                        $.alerts._hide();
                        if( callback ) callback(false);
                    });
                    $("#mb_btn_no").focus();
                    $("#mb_btn_ok, #mb_btn_no").keypress( function(e) {
                        if( e.keyCode == 13 ) $("#mb_btn_ok").trigger('click');
                        if( e.keyCode == 27 ) $("#mb_btn_no").trigger('click');
                    });
                    break;


            }
        },
        _hide: function() {
            $("#mb_box,#mb_con").remove();
        }
    }
    // Shortuct functions  
    dsalert = function(title, message, callback) {
        $.alerts.alert(title, message, callback);
    }

    dsconfirm = function(title, message, callback) {
        $.alerts.confirm(title, message, callback);
    };

})(jQuery);  