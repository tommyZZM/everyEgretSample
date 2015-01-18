module sample {
    export class MixedInheritanceEx extends egret.DisplayObjectContainer {

        public constructor() {
            super();
            console.log('here');

            var j:Jerry = new Jerry();
            console.log(j);
            j.hello();
            j.balabala();
            j.nihao();
        }
    }

    class Jerry implements $erry{
        public constructor() {
            extendImplements(this,Aerry,'balabala');
            extendImplements(this,Berry,'nihao');
            extendImplements(this,Berry,'xixi');
            extendImplements(this,Berry,'lala');
        }

        public hello(...arg){
            console.log('hi!i m cute jerry!');
            this.xixi();
            this.lala();
        }
        public balabala(...arg):void{}
        public nihao():void{}
        private xixi():void{}
        protected lala():void{}

    }

    class Aerry{
        public balabala(...arg){
            console.log('hi!i m cute Aerry!')
        }
    }

    class Berry {
        private xixi(...arg){
            console.log('xixi')
        }

        protected lala(...arg){
            console.log('lala')
        }

        public nihao(...arg){
            console.log('hi!i m cute Berry!')
        }
    }

    interface $erry {

    }

    function extendImplements(thisArg:any,Class:any,method:string,forceOverride:boolean=true){
        var f = Class['prototype'][method];
        if(f && method!='__class__'){
            if(!forceOverride){
                if(thisArg[method]){
                    console.warn(method+"() already exist in "+thisArg._name+" use forceOverride and try?");
                    return;
                }
            }
            thisArg['__proto__'][method] = f;
        }
    }

    function extendImplementsAll(thisArg:any,Class:any,forceOverride:boolean=true){
        for(var i in Class['prototype']){
            extendImplements(thisArg,Class,i,forceOverride);
        }
    }

}