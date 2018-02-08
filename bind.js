window.onload=function(){
    'use strict';
    var scope={
        increase:function(){
            return this.data++;
        },
        decrease:function(){
            return this.data--;
        },
        data:0
    }

    function bind(){
        var list =document.querySelectorAll('[ng-click]');
        var len=list.length;
        for (var i=0;i<len;i++){
            list[i].onclick=(function(index){
                return function(){
                    var func=this.getAttribute('ng-click');
                    scope[func]();
                    apply();
                }
            })(i)
        }
    }

    function apply(){
        var view=document.querySelectorAll('[ng-bind]');
        var bindList=view.length;
        for(var j=0;j<bindList;j++){
            var keyWord=view[j].getAttribute('ng-bind');
            view[j].innerHTML=scope[keyWord]
        }
    }

    bind();
    apply();
}