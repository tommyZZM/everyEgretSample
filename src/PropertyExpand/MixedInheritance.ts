module sample {
    export class MixedInheritance extends egret.DisplayObjectContainer{

        public constructor() {
            super();

            var j:any = new XssTommy();
            j.mixExtend(Domry);
            j.balabala();
            j.sayhi();
            j.hello();
            console.log(j);
        }

    }

    class Jerry{
        private _spoon:string = 'food'
        public hello(...arg){
            console.log('hi!i m cute jerry!')
        }
    }

    class Domry{
        private _spoon:string = 'food'
        public balabala(...arg){
            console.log('balabala!i m cute domry!')
        }

        public sayhi(...arg){
            console.log('hi!i m cute domry!')
        }
    }

    class XssTommy extends Jerry{
        public mixExtend(Class,methodname?:string){
            for(var i in Class['prototype']){
                var f = Class['prototype'][i];
                if(i!='__class__'&&!this[i]){
                    this['__proto__'][i] = f;
                }
            }
        }
    }
}