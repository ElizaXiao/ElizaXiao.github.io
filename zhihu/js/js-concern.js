let agreeText = document.getElementsByClassName('agreeText');
let agree1 = document.getElementsByClassName('agree1');
let svgList = document.getElementsByClassName('svgList');
let agreeNumber= document.getElementsByClassName('agreeNumber');
let agree2 = document.getElementsByClassName('agree2');
let svgList2 = document.getElementsByClassName('svgList2');

let agreeNumberList = [79,10,1564];
let flag= [1,1,1];
let n= [1,1,1];
for (let i = 0; i < agree1.length; i++) {
    agree1[i].onclick = function () {
        if(flag[i]) {
            agreeNumberList[i]  = agreeNumberList[i] + 1
            agreeText[i].textContent='已赞同 ' + agreeNumberList[i];
            svgList[i].style.fill='#fff';
            agree1[i].style.backgroundColor='#056de8';
            agree1[i].style.color='#fff';
            flag[i]=0;
            svgList2[i].style.fill='#056de8';
            agree2[i].style.backgroundColor='rgba(5,109,232,.1)';
            n[i]=1;
        }
        else {
            agreeNumberList[i]  = agreeNumberList[i] -1
            agreeText[i].textContent='赞同 ' + agreeNumberList[i];
            svgList[i].style.fill='#056de8';
            agree1[i].style.backgroundColor='rgba(5,109,232,.1)';
            agree1[i].style.color='#056de8';
            flag[i]=1;
        }
    }
    agree2[i].onclick = function () {
        if(n[i]) {
            svgList2[i].style.fill='#fff';
            agree2[i].style.backgroundColor='#056de8';
            n[i]=0;
            if (flag[i]===0)
                    agreeNumberList[i]  = agreeNumberList[i] -1;
            agreeText[i].textContent='赞同 ' + agreeNumberList[i];
            svgList[i].style.fill='#056de8';
            agree1[i].style.backgroundColor='rgba(5,109,232,.1)';
            agree1[i].style.color='#056de8';
            flag[i]=1;
        }
        else {
            svgList2[i].style.fill='#056de8';
            agree2[i].style.backgroundColor='rgba(5,109,232,.1)';
            n[i]=1;
        }

    }

}


