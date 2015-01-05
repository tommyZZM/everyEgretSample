module sample{
    export class TouchMotionSprite extends egret.DisplayObjectContainer{

        private _spoon:egret.DisplayObject;

        public constructor(root?:egret.DisplayObjectContainer) {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }

        private  onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);

            var a = new egret.Sprite();
            a.width = a.height = 200;
            a.graphics.beginFill(0xffffff);
            a.graphics.drawCircle(a.width/2,a.height/2,100);
            a.graphics.endFill();
            a.anchorX = a.anchorY = 0.5;
            a.x = stageWidth(0.5);a.y=stageHeight(0.5);


            a.touchEnabled = true;
            a['shawod'] = new egret.Shape();
            a['shawod'].graphics.beginFill(0x000000,0.6);
            a['shawod'].graphics.drawCircle(a.width/2,a.height/2,100);
            a['shawod'].graphics.endFill();
            a['shawod'].alpha = 0;
            a.addChild(a['shawod']);
            a['selected'] = false;

            a['update'] = function(){
                this.selected?egret.Tween.get(this).to({scaleX:0.8,scaleY:0.8},200):egret.Tween.get(this).to({scaleX:1,scaleY:1},200);
            };

            var a_:any = a;

            this._spoon = a;
            this.addChild(this._spoon);
            this._spoon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
            this._spoon.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
            this._spoon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
            //this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
        }

        protected onTouchBegin(e:egret.Event){
            console.log('onTouchBegin');
            egret.Tween.get(e.target.shawod).to({alpha:1},200);
        }

        protected onTouchEnd(e:egret.Event){
            console.log('onTouchEnd');
            egret.Tween.get(e.target.shawod).to({alpha:0},200);
        }

        protected onTouchTap(e:egret.Event){
            console.log('onTouchTap',e.target.shawod.alpha);
            e.target.selected = !e.target.selected;
            e.target.update();
        }
    }
}
