window.onload=function(){
    function $scope(){
        this.$$watchList=[];
    }
    $scope.prototype.$watch=function(name,getNavValue,listener){
        var watch={
            name:name,
            getNavValue:getNavValue,
            listener:listener
        }
        this.$$watchList.push(watch);//监听队列
    }
    $scope.prototype.$digest=function(){
        var list = this.$$watchList;
        var dirty=true,checkTime=0;
        while(dirty){
            dirty=false;
            for(var i=0;i<list.length;i++){
                var watcher=list[i];
                var newValue=watcher.getNavValue();
                var oldValue=watcher.last;
                if(oldValue!==newValue){
                    watcher.listener(oldValue,newValue);
                    watcher.last=newValue;
                    dirty=true;//可以在一个watcher中修改另一个字段的值
                }
            }
            checkTime++;
            if(checkTime>10 && checkTime){
                throw new Error('修改次数过多');
            }
        }
        
    }
    var scope=new $scope();
    scope.first=0;
    scope.second=2;
    scope.$watch('first',function(){
        // scope.second++;
        return scope[this.name]//此处的this指的是watcher,函数调用者
    },function(oldValue,newValue){
        console.log('oldValue:'+oldValue+'============'+'newValue:'+newValue);
    });
    scope.$watch('second',function(){
        // scope.first++;
        return scope[this.name]
    },function(oldValue,newValue){
        console.log('oldValue:'+oldValue+'============'+'newValue:'+newValue);
    })

    scope.$digest();
}