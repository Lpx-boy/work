/**
 * Created by xq on 15-8-13.
 */
window.login = function(type){
    if(typeof type == "undefined"){
        type = 0;
    }
    layer.open({
        type: 2,
        title: '用户登录',
        shadeClose: true,
        shade: 0.8,
        area: ['500px', '450px'],
        content: "/login-login_box.html?callType=" + type
    });
};
//借款列表
function loanlist(name,id,expires){
    layer.open({
        type: 2,
        title: name,
        shadeClose: true,
        shade: 0.8,
        area: ['760px', '450px'],
        content: "/Repayment-loan_list_box.html?obj_id=" + id+"&expires="+expires
    });
}
//提示确认提交
function confirm_tip(title,content,url,callBackUrl,form_id){
    var index_par = parent.layer.getFrameIndex(window.name);
    //var data={
    //    area: ['350px', '180px'],
    //    icon:3,
    //    iconType:1,
    //    btn: ['已完成付款','付款遇到问题'],
    //    con:'请您在新打开的页面上完成付款!'
    //}
    var callback=function(){
        parent.location.href = window.location.href;// callBackUrl;
    }
    layer.confirm(content,{
        title:title,
        area: ['300px', '150px'],
        icon:3,
        btn: ['确认','取消'], //按钮
        shade: false //不显示遮罩
    }, function(){
        var index = layer.confirm();
        $(form_id).attr('action', url);
        $(form_id).submit();
        layer.close(index);
        parent.location.href = parent.location.href;
      //  window.layerConfirm(data,callback,callback);
    }, function(){
        parent.location.reload();
    });
}

/**
 * 提示框
 * @param data {type: 0、提示图标；1、正确提示图标,2 、错误提图标}
 * @param callback
 */
window.layerAlert = function(data, callback){
    var defaultData = {
        iconType: 1,
        title: '提示信息',
        con: ''
    };

    data = $.extend(defaultData, data);

    layer.alert(data.con, {
        title: data.title,
        icon: data.iconType
    }, function(index){
        layer.close(index);
        if(typeof callback == "function"){
            callback();
        }
    });
};

window.layerConfirm = function(data, yesCallback, cancelCallback){
    var defaultData = {
        title: '提示信息',
        con: ''
    };

    data = $.extend(defaultData, data);
    //{
    //    icon: data.iconType,
    //        title: data.title,
    //    btn:data.btn
    //}
    layer.confirm(data.con,data, function(index){
        layer.close(index);
        if(typeof yesCallback == "function"){
            yesCallback();
        }
    }, function(index){
        layer.close(index);
        if(typeof cancelCallback == "function"){
            cancelCallback();
        }
    });
};

function loadLilv($this,lilv){
    var i = 0;
    var intrvalTime = setInterval(function() {
        i = i + 0.1;
        if (i > parseFloat(lilv)) {
            $this.html(parseFloat(lilv).toFixed(2));
            clearInterval(intrvalTime);
        }else{
            $this.html(parseFloat(i).toFixed(2));
        }
    }, 20);
}
//列表页加载进度
function loadProgress(money, borrow_total, $this){
    money = parseInt(money.toString().replace(',', ''));
    var data = parseInt(borrow_total / money * 100);
    var i = 0;
    var intrvalTime = setInterval(function(){
        i ++
        if(i > data){
            clearInterval(intrvalTime);
        }else{
            var a = $this.parents(".item-speed").children(".speed-bar").find("span");
            a.width(i + '%');
            $this.html(i + '%');
        }
    },50)
}
//详情页加载进度
function loadInfoProgress(money, borrow_total, $this){
    money = parseInt(money.toString().replace(',', ''));
    var data = parseInt(borrow_total / money * 100);
    var i = 0;
    var intrvalTime = setInterval(function(){
        i ++
        if(i > data){
            clearInterval(intrvalTime);
        }else{
            //var a = $this.parents(".item-speed").children(".speed-bar").find("span");
            $this.width(i + '%');
            $this.html(i + '%');
        }
    },50)
}