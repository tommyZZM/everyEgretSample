class Jerry extends egret.DisplayObjectContainer{

    private _spoon:egret.DisplayObject;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private  onAddToStage(event:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.addChild(new sample.LabelTween());
    }
}

function stageWidth(multiple:number=1):number
{
    return egret.MainContext.instance.stage.stageWidth*multiple;
}

function stageHeight(multiple:number=1):number
{
    return egret.MainContext.instance.stage.stageHeight*multiple;
}

function copy(something):any{
    var a = something;
    return a;
}

class NameAble{
    private _name:string;

    public constructor() {
        this._name = this['__proto__']['__class__'];
        this._name = /\.?(\w+)$/.exec(this._name)[1];
    }

    protected get name():string{
        return this._name;
    }
}