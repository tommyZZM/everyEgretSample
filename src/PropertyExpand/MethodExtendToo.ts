module sample {
    export class MethodExtendToo extends egret.DisplayObjectContainer{

        public constructor() {
            super();

            var j = new Jerry();
            var j2 = new Jerry();
            j.hello();//hi!i m cute jerry!

            //修改方法
            j['hello'] = function(){
                console.log('hi!i m infected jerry!');
            };
            j.hello();//hi!i m infected jerry!
            j2.hello();//hi!i m cute jerry!

            //我们还能改变方法的参数...
            j['hello'] = function(adj:string){
                console.log('hi!i m '+adj+' jerry!');
            };
            j.hello('happy');//hi!i m happy jerry!
            j2.hello();//hi!i m cute jerry!

            //此时方法作用域在实例内..
            j['hello'] = function(){
                console.log('eatting'+this._spoon);
            };
            j.hello();//eatting food
            j2.hello();//hi!i m cute jerry!

            //错误的删除方法方式..因为这样会把类的方法都删掉..
            /*delete j['__proto__'].hello;
            j.hello();//undefined
            j2.hello();//Uncaught TypeError: undefined is not a function */

            //正确的删除方法方式
            j['hello'] = function(){};
            j.hello();//noting
            j2.hello();//hi!i m cute jerry!

        }
    }

    class Jerry{
        private _spoon:string = 'food'
        public hello(...arg){
            console.log('hi!i m cute jerry!')
        }
    }


}