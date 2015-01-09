module sample {
    /**
     * gui组件的tween动画
     */
    export class LabelTween  extends egret.DisplayObjectContainer{

        private _guiholder:egret.gui.UIStage

        public constructor() {
            super();
            this._guiholder = new egret.gui.UIStage();
            this.addChild(this._guiholder);
            this._guiholder.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
        }

        private onAddToStage(){
            var text:egret.gui.Label = new egret.gui.Label();
            text.text = 'HaHa';
            text.anchorX = text.anchorY = 0.5;
            text.textAlign = 'center';
            text.textColor = 0xf1c40f;
            text.height = 33;
            text.width = stageWidth();
            text.size = 96;
            text.x = stageWidth(0.5);text.y = stageHeight(0.5);
            text.fontFamily = "Microsoft YaHei";
            this._guiholder.addElement(text);

            text['tween'] = egret.Tween.get(text);

            text['warning'] = function(boo?){
                this.tween.loop = true;
                var scale = boo?1:2;
                var color = boo?0xf1c40f:0xe74c3c;
                this.tween.to({scaleX:scale,scaleY:scale},200);//textColor:color,
                this.tween.call(this.warning,this,[!boo]);
                //boo?this.tween.to({scaleX:2,scaleY:2},200):this.tween.to({scaleX:1,scaleY:1},200);
                //this.tween.call(this.warning,this,[!boo]);
            };
            text['warning'](true);
        }
    }
}