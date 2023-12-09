window.addEventListener('load',function(){
    var focus = document.querySelector('.focus')
    var left=document.querySelector('.leftj')
    var right=document.querySelector('.right')
    // 显示切换栏
    focus.addEventListener('mouseenter',function(){
        left.style.display='block'
        right.style.display='block'
    })
    // 隐藏切换栏
    focus.addEventListener('mouseleave',function(){
        left.style.display='none'
        right.style.display='none'
    })
    // 动态创建小圆圈  
    var focusWidth=focus.offsetWidth 
    var ul=focus.querySelector('ul')
    var ol = focus.querySelector('.circle')
    for(var i=0;i<ul.children.length;i++){
        var li=document.createElement('li')
        li.setAttribute('index', i);
        ol.appendChild(li)
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=''
            }
            this.className='current'
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            animate(ul, -index * focusWidth);
        })
        
    }
    ol.children[0].className='current'
    // 克隆第一张图片
    var first=ul.children[0].cloneNode(true)
    ul.appendChild(first)
    //图片指针
    var num=0
    // 圆圈指针
    var circle=0
    // flag 节流阀
    var flag=true
    //右侧按钮
    
    // console.log(foucusWidth);
    right.addEventListener('click',function(){
        if(flag){
            flag=false
            if(num==ul.children.length-1){
                ul.style.left=0
                num=0
            }
            num++
            var step=-num*focusWidth
            animate(ul,step,function(){
                flag=true //执行了animate函数后才能切换下一张图片
            })
            circle++
            if(circle==ol.children.length){
                console.log(ol.children.length);
                circle=0
            }
            circleChange();
        }
        
    })
    //左侧按钮
       
    left.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = step + 'px';

            }
            num--;
            var step=-num*focusWidth
            animate(ul, step, function() {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    });
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current'
    }
    // 10. 自动播放轮播图
    var timer = setInterval(function() {
        //手动调用点击事件
        right.click();
    }, 10000);
})


//动画函数封装，实现匀减速移动图片
function animate(obj, target, callback) {
// console.log(callback);  callback = function() {}  调用的时候 callback()

// 先清除以前的定时器，只保留当前的一个定时器执行
clearInterval(obj.timer);
obj.timer = setInterval(function() {
// 步长值写到定时器的里面
// 把我们步长值改为整数 不要出现小数的问题
// var step = Math.ceil((target - obj.offsetLeft) / 10);
var step = (target - obj.offsetLeft) / 10;
step = step > 0 ? Math.ceil(step) : Math.floor(step);
if (obj.offsetLeft == target) {
    // 停止动画 本质是停止定时器
    clearInterval(obj.timer);
    // 回调函数写到定时器结束里面
    // if (callback) {
    //     // 调用函数
    //     callback();
    // }
    callback && callback();
}
// 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
obj.style.left = obj.offsetLeft + step + 'px';

}, 15);
}