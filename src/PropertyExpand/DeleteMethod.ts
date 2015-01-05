module sample {
    export class DeleteMethod extends egret.DisplayObjectContainer{

        public constructor() {
            super();
            delete this['_x'];
            console.log(this.x);
        }
    }
}