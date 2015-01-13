module sample {
    export class MixedInheritance extends egret.DisplayObjectContainer{

        public constructor() {
            super();

            var j:any = new XssTommy();
            j.mixExtend(Domry);
            j.mixExtend(Jerry);
            j.mixExtend(SevenYue);
            j.balabala();
            j.sayhi();
            j.hello();
            console.log(j);
        }

    }

    class Jerry{
        public hello(...arg){
            console.log('hi!i m cute jerry!')
        }
    }

    class Domry{
        public balabala(...arg){
            console.log('balabala!i m cute domry!')
        }
    }

    class SevenYue{
        public sayhi(...arg){
            console.log('hi!i m cute 7yue!')
        }
    }

    class XssTommy {
        //获取一个类的所有方法
        public mixExtend(Class){
            for(var i in Class['prototype']){
                var f = Class['prototype'][i];
                if(i!='__class__'&&!this[i]){
                    this['__proto__'][i] = f;
                }
            }
        }
    }
}