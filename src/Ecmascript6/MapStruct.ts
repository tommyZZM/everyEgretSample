module sample {
    export class MapStruct extends egret.DisplayObjectContainer{

        private _pool:Map<string,any>;

        public constructor() {
            super();
            this._pool = new Map();
            this._pool.set('aaa','value123');
            console.log(this._pool,this._pool.get("aaa"));
        }
    }
}