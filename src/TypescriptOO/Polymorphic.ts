module sample {
    export class Polymorphic extends egret.DisplayObjectContainer {

        public constructor() {
            super();
            console.log('here');

            var j:Jerry = new Jerry();
            j.eating('aaa')
        }
    }

    class Jerry{
        public constructor() {
        }

        public eating(...arg):void;
        public eating(spoon:string,times:number):void;
        public eating():void{

        }

    }
}