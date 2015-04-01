module sample {
    export class InstanceOf extends egret.DisplayObjectContainer implements Itest{
        public constructor() {
            super();

            console.log(this instanceof egret.DisplayObject)
            console.log(this instanceof egret.Bitmap)
            console.log(InstanceOf instanceof egret.DisplayObject)
            console.log(InstanceOf instanceof egret.Bitmap)
            console.log(InstanceOf.prototype);
            //console.log(this instanceof Itest)
            //console.log(Itest)

            var a:any = 1;
            a["test"] =false;
            console.log(InstanceOf.prototype,egret.DisplayObject.prototype)

            console.log(isOfClass(InstanceOf,egret.DisplayObject))

            console['logori'] = console.log;
            console.log =(message,optionalParmas)=>{console['logori'](message,optionalParmas)};
            console.log("Welcome to %cGameperture","color:#1ac2ff;font-weight:bold;")

            var j = new Jerry();
            console.log(j);
            j.clear()
        }
    }

    export interface Itest{}

    export interface Itesttwo{}

    class Jerry{
        public clear(){
            for(var i in this){
                this[i]=null;
            }
        }
    }

    function isOfClass(target,test){
        if(!target.prototype['__class__'] || !test.prototype['__class__']){
            console.warn("not typescript class");
        }

        if(target.prototype['__class__']==test.prototype['__class__']){
            return true;
        }else{
            var flag:number = 0;
            var protoTest = (target,test)=>{
                //console.log(target.__class__,test.prototype['__class__'])
                if(target){
                    if(target.__class__){
                        if(target.__class__ == test.prototype['__class__']){
                            return 1;
                        }else{
                            return 0;
                        }
                    }
                    return -1
                }
                return -1
            };

            target = target.prototype.__proto__;
            while(flag==0){
                flag = protoTest(target,test);
                target = target.__proto__;
            }
            return flag == 1;
        }
    }
}