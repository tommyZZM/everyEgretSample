module sample{
    export class MethodTransplant extends egret.DisplayObjectContainer{
        public constructor() {
            super();
            var j = new mixedinheritance.Jerry();
            var b = new mixedinheritance.Perry();
            j['balala'] = b['balala'];
            j['balala']();
        }
    }

    module mixedinheritance{

        export class Jerry extends NameAble{
            protected sellMeng(){
                console.log(this.name+' Jerry.sellMeng');
            }
        }

        export class Perry extends NameAble{

            protected balala(){
                console.log(this.name+' Perry.balala');
            }
        }
    }

}

