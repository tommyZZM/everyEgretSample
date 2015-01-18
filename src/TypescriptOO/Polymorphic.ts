module sample {
    export class Polymorphic extends egret.DisplayObjectContainer {

        public constructor() {
            super();
            console.log('here');

            var j:Jerry = new Jerry();
            console.log(typeof j);
            console.log(typeof j.add);
            console.log(typeof Jerry);
        }
    }

    class Jerry{
        public constructor() {
        }

        public add(a:number,b:number):void;
        public add(a:string,b:string):void;
        public add(a:any,b:any):void{

        }

    }
}