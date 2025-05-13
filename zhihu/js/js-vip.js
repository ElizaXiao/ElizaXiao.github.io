window.addEventListener('load',function () {
    let vip=document.querySelector('.vip');
    let last=document.querySelector('.last');
    let next=document.querySelector('.next');
    let vipInner=document.querySelector('.vip-inner');
    let listBottom=document.querySelector('.list-bottom');
    // let surface=document.querySelector('.surface');
    let art=document.querySelector('.art');
    // console.log(vipInner.children.length)

    // 实现动态生成小圆圈
    let num=1;
    let circle=0;
    for (let i=0;i<vipInner.children.length;i++){
        let li=document.createElement('li');
        // 记录当前小圆圈索引号 自定义属性
        li.setAttribute('index',i);
        // 将li插入ul（listBootom）
        listBottom.appendChild(li);
        // 用排他思想 直接在生成小圆圈的同时绑定点击事件
        li.addEventListener('click',function () {
            // 实现点击小圆圈移动图片
            let index=parseInt(this.getAttribute('index'));
            let nowLeft=-100*(index+1);
            num=index+1;
            // alert(num);
            circle=index;
            vipInner.style.transition='left 0.5s ease';
            vipInner.style.left=nowLeft+'%';
            circleChange();
        })
    }
    // 克隆第一张图片放到最后面,克隆最后一张图片放在最前面
    let first=vipInner.children[0].cloneNode(true);
    let ultimate=vipInner.children[6].cloneNode(true);
    vipInner.appendChild(first);
    vipInner.insertBefore(ultimate,vipInner.firstChild);
    // 初定义
    listBottom.children[circle].style.backgroundColor='#fff';
    // console.log(listBottom.children.length)

    art.style.background='-webkit-linear-gradient(#252c49,#2e375b)';

    // 实现箭头切换图片
    function circleChange() {
        for (let i=0;i<listBottom.children.length;i++)
            listBottom.children[i].style.backgroundColor='';
        listBottom.children[circle].style.backgroundColor='#fff';
        // 背景颜色
        art.style.transition='background,0.4s,ease';
        if(circle===0)
            art.style.background='-webkit-linear-gradient(#1f2743,#263053)';
        else if(circle===1||circle===5)
            art.style.background='-webkit-linear-gradient(#252c49,#2e375b)';
        else if(circle===2)
            art.style.background='-webkit-linear-gradient(#080506,#0a0507)';
        else if(circle===3)
            art.style.background='-webkit-linear-gradient(#080506,#0a0507)';
        else if(circle===4)
            art.style.background='-webkit-linear-gradient(#90dbc9,#0a0a0a)';
        else if(circle===6)
            art.style.background='-webkit-linear-gradient(#a54340,#a23e3c)';

    }

    next.addEventListener('click',function () {
        vipInner.style.transition='left 0.4s ease';
        num++;
        let nowLeft=-100*num;
        vipInner.style.left=nowLeft+'%';
        setTimeout(function () {
            if (num === 8) {
                vipInner.style.transition = 'none';
                vipInner.style.left = -100 + '%';
                num = 1;
                // alert(num);
            }
        },500);
        circle++;
        if(circle===7)
            circle=0;
        circleChange();
    })
    // vipInner.addEventListener('transitioned', function() {
    //     if (num === 8) {
    //         vipInner.style.transition = 'none';
    //         vipInner.style.left = -100 + '%';
    //         num = 1;
    //         alert(num);
    //     }
    // })
    last.addEventListener('click',function () {
        vipInner.style.transition='left 0.5s ease';
        num--;
        let nowLeft=-100*num;
        vipInner.style.left=nowLeft+'%';
        setTimeout(function () {
            if (num === 0) {
                vipInner.style.transition = 'none';
                vipInner.style.left = -700 + '%';
                num = 7;
                // alert(num);
            }
        },600);
        circle--;
        if(circle===-1)
            circle=6;
        circleChange();
    })

    // 自动播放
    let timer =setInterval(function () {
        next.click();
    },3000);

    // 实现鼠标经过箭头显示与隐藏
    function showNav(){
        last.style.display='block';
        next.style.display='block';
        clearInterval(timer);
        timer=null;
    }
    vip.addEventListener('mouseover', showNav);
    // vipInner.addEventListener('mouseenter', showNav);
    // listBottom.addEventListener('mouseenter', showNav);
    // last.addEventListener('mouseenter', showNav);
    // next.addEventListener('mouseenter', showNav);
    // surface.addEventListener('mouseenter', showNav);
    vip.addEventListener('mouseout', function() {
        last.style.display='none';
        next.style.display='none';
        timer=setInterval(function () {
            next.click();
        },3000);
    });
    // listBottom.children[0].className='current'





    //
    // function startMove() {
    //     clearInterval(timer);
    //     timer=setInterval(function () {
    //         if(newLeft===-600) {
    //             newLeft=0;
    //             vipInner.style.left=newLeft+'%';
    //         }
    //
    //         newLeft-=100;
    //         vipInner.style.left=newLeft+'%';
    //
    //         // startMove(vipInner)
    //     },3000)
    // }
    // startMove();

    // function next() {
    //     setInterval(function () {
    //         if(newLeft===-600) {
    //             newLeft=0;
    //             vipInner.style.left=newLeft+'%';
    //         }
    //         newLeft-=100;
    //         vipInner.style.left=newLeft+'%';
    //         // startMove(vipInner)
    //     },3000)
    // }
    // function prev() {
    //     setInterval(function () {
    //         if(newLeft===0) {
    //             newLeft=-600;
    //             vipInner.style.left=newLeft+'%';
    //         }
    //         newLeft+=100;
    //         // startMove(vipInner)
    //     },3000)
    // }
})



