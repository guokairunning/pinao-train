/**
 * Created by lenovo on 2016/3/7.
 */

    /*var sss=document.documentElement.clientWidth||document.body.clientWidth;
    alert(sss);
    var aaa=document.getElementById("nav").getElementsByTagName("li");
    alert(aaa.length);*/


    $(document).ready(function(){   /*登录与注册表单的切换*/
        $(function(){
    $("#zhuce").bind("click",function(){
        $("#form").css("display","block");
        $("#big").css("display","none");
    })
})
$(function(){
    $("#denglu").bind("click",function(){
        $("#form").css("display","none");
        $("#big").css("display","block");
    })
})
$("#inputtwo").blur(function(){                       /*登录表单的验证*/
    var oinputtwo=$("#inputtwo").val();
    if(oinputtwo=="")
    {
        $(".wordthree").css("display","block");
    }
})
$(".names").blur(function(){                       /*注册表单的验证  name*/
    var oinputs=$(".names").val();
    if(oinputs=="")
    {
        $(".checknames").css("display","block");
    }
})
$(".ages").blur(function(){                       /*注册表单的验证  age*/
    var oinputs=$(".ages").val();
    if(oinputs=="")
    {
        $(".checkages").css("display","block");
    }
})
$(".codeone").blur(function(){                       /*注册表单的验证  code*/
    var oinputs=$(".codeone").val();
    if(oinputs=="")
    {
        $(".checkcode").css("display","block");
    }
})
$(".codetwo").blur(function(){                       /*注册表单的验证  两次code输入是否一致*/
    var oinputs=$(".codeone").val();
    var ooinputs=$(".codetwo").val();
    if(oinputs!=ooinputs)
    {
        $(".checkcodes").css("display","block");
    }
})
$(".codetwo").blur(function(){                       /*注册表单的验证  ensureage*/
    var oinputs=$(".codetwo").val();
    if(oinputs=="")
    {
        $(".checkcoding").css("display","block");
    }
})
$(".phone").blur(function(){                       /*注册表单的验证  phonenumber*/
    var oinputs=$(".phone").val();
    if(oinputs=="")
    {
        $(".checkphone").css("display","block");
    }
})

             
            

            
$(".phone").blur(function(){                       /*注册表单的验证  phonenumber只能为数字*/
    var oinputs=$(".phone").val();              
    if(!((oinputs.keyCode>=48&&oinputs.keyCode<=57)||(oinputs.keyCode>=96&&oinputs.keyCode<=105)))
    {
        $(".checknumbers").css("display","block");
    }
})
$(".house").blur(function(){                       /*注册表单的验证  address*/
    var oinputs=$(".house").val();
    if(oinputs=="")
    {
        $(".checkhouse").css("display","block");
    }
})


        $("#one").bind("mouseenter",function(){  /*二级菜单的淡入淡出*/
            $(".second").fadeIn();
        }).bind("mouseleave",function() {
            $(".second").fadeOut();});

        $("#two").bind("mouseenter",function(){
            $(".seconds").fadeIn(0.5);
        }).bind("mouseleave",function() {
            $(".seconds").fadeOut(0.5);});

        var container = $('#container');  /*轮播图特效*/
        var list = $('#list');
        var buttons = $('#buttons span');
        var prev = $('#prev');
        var next = $('#next');
        var index = 1;
        var len = 5;
        var interval = 3000;
        var timer;


        function animate (offset) {
            var left = parseInt(list.css('left')) + offset;
            if (offset>0) {
                offset = '+=' + offset;
            }
            else {
                offset = '-=' + Math.abs(offset);
            }
            list.animate({'left': offset}, 300, function () {
                if(left > -200){
                    list.css('left', -1360 * len);
                }
                if(left < (-1360 * len)) {
                    list.css('left', -1360);
                }
            });
        }

        function showButton() {
            buttons.eq(index-1).addClass('on').siblings().removeClass('on');
        }

        function play() {
            timer = setTimeout(function () {
                next.trigger('click');
                play();
            }, interval);
        }
        function stop() {
            clearTimeout(timer);
        }

        next.bind('click', function () {
            if (list.is(':animated')) {
                return;
            }
            if (index == 5) {
                index = 1;
            }
            else {
                index += 1;
            }
            animate(-1360);
            showButton();
        });

        prev.bind('click', function () {
            if (list.is(':animated')) {
                return;
            }
            if (index == 1) {
                index = 5;
            }
            else {
                index -= 1;
            }
            animate(1360);
            showButton();
        });

        buttons.each(function () {
            $(this).bind('click', function () {
                if (list.is(':animated') || $(this).attr('class')=='on') {
                    return;
                }
                var myIndex = parseInt($(this).attr('index'));
                var offset = -1360 * (myIndex - index);

                animate(offset);
                index = myIndex;
                showButton();
            })
        });

        container.hover(stop, play);

        play();
    });

var pthree=document.getElementById('inputthree');
pthree.onmouseover=function()
{
    pthree.style.backgroundColor="#3A9495";
}
pthree.onmouseout=function()
{
    pthree.style.backgroundColor='#B8D3ED';
}

