module sample{
    export class JumpingPanda extends egret.DisplayObjectContainer{

        private panda:egret.MovieClip;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }

        private  onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.loadcomplete,this);

            RES.loadConfig('resource/resource.json','resource/');
            RES.loadGroup('preload');
        }

        protected loadcomplete(e:RES.ResourceEvent){
            var bg = new egret.Shape;
            bg.graphics.beginFill(0x4c526f);
            bg.graphics.drawRect(0,0,stageWidth(),stageHeight());
            bg.graphics.endFill();
            bg.width = stageWidth();//+++++++
            bg.height = stageHeight();//+++++++
            this.addChild(bg)

            var p:egret.MovieClip = new egret.MovieClip(RES.getRes('panda_json'),RES.getRes('panda_png'));
            this.addChild(p);
            p.gotoAndPlay('walk');

            this.panda = p;
            this.panda.x = stageWidth(0.5);
            this.panda['v'] = 0;

            this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
            this.touchEnabled = true;//+++++++
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);//+++++++
        }

        //+++++++
        protected onTouch(){
            console.log('onTouch')
        }

        protected onEnterFrame(){
            if(this.panda.y<stageHeight()){
                this.panda['v']+=0.96;
            }else{
                this.panda['v']-=6;
            }
            this.panda.y+=this.panda['v'];
        }
    }
}