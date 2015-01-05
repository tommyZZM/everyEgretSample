module sample {
    export class MethodExpand extends egret.DisplayObjectContainer{

        public constructor() {
            super();
            var j = new methodexpand.XssTomy()
            j.hello();

            j['tmp'] = j.hello;
            j['hello'] = function(){
                this.say('i m in xsstommy!');
                this['tmp']();
                this.say('extend!');
            };
            j.hello();
            console.log(j.hello)
        }
    }

    module methodexpand{
        export class XssTomy extends NameAble{
            public hello(){
                this.say('hello')
            }

            private say(things:string){
                console.log(this.name+things);
            }
        }
    }
}