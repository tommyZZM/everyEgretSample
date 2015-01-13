module sample {
    export class Protected extends egret.DisplayObjectContainer{
        public constructor() {
            super();
        }
    }

    class Jerry{
        protected hello(...arg){
            console.log('hi!i m cute jerry!')
        }
    }

    class JerryFriend extends Jerry{
        protected hello(){
            super.hello()
        }
    }
}