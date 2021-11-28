let fs = require ('fs');
let arg = process.argv;
let hashstrok=0;
let inputstroka= fs.readFileSync(arg[2]).toString();
let stroka=arg[3].toString();
let hashinput=0;
let ans= new Array();
let i;
function hash(input) {
    let code = 0;
    for(let i = 0; i < input.length; i++)
        code += (input.charCodeAt(i) * Math.pow(2, input.length - i - 1));
    return code;
}
for ( i=0 ; i< stroka.length ; i++) {
    hashinput += inputstroka.charCodeAt(i);
    hashstrok += stroka.charCodeAt(i);
}
//первый способ
for (i=0;i<inputstroka.length;i++) {
    let k=0;
    let hs=0;
    while (k <= stroka.length - 1) {
        hs +=inputstroka.charCodeAt(k);
        k++;
    }
    if (hs==hashstrok){
        let flag=true;
        for (let j=0;j<stroka.length;j++){
            if (stroka[j]!=inputstroka[i+j]){
                flag=false;
                break
            }
        }
        if (flag){
            ans.push(i);
        }
    }
}
console.log(ans);
ans=[];
if (hashinput==hashstrok)
    ans.push(0);
i=stroka.length-1;
//второй способ
for (i; i < inputstroka.length; i ++ ){
    hashinput= hashinput-inputstroka.charCodeAt(i-1)+inputstroka.charCodeAt(i+(stroka.length-1));
    if ( hashinput==hashstrok) {
        let flag=true;
        for (let j=0;j<stroka.length;j++){
            if (stroka[j]!=inputstroka[i+j]){
                flag=false;
                break
            }
        }
        if (flag){
            ans.push(i);
        }
    }
}
//третий способ
console.log(ans);
ans=[];
hashinput=0;
hashstrok=0;
for ( i=0 ; i< stroka.length ; i++) {
    hashinput += Math.pow(inputstroka.charCodeAt(i),2);
    hashstrok += Math.pow(stroka.charCodeAt(i),2);
}
if (hashinput==hashstrok)
    ans.push(0);
i=stroka.length-1;
for (i; i < inputstroka.length; i ++ ){
    hashinput= hashinput-Math.pow(inputstroka.charCodeAt(i-1),2)+Math.pow(inputstroka.charCodeAt(i+(stroka.length-1)),2);
    if ( hashinput==hashstrok) {
        let flag=true;
        for (let j=0;j<stroka.length;j++){
            if (stroka[j]!=inputstroka[i+j]){
                flag=false;
                break
            }
        }
        if (flag){
            ans.push(i);
        }
    }
}
console.log(ans);
//Рабин-карп
ans=[]
hashstrok = hash(stroka);
hashinput=hash(inputstroka.substring(0,stroka.length));
for (i=0; i < inputstroka.length-stroka.length+1; i ++ ){
    if ( hashinput==hashstrok) {
        let flag=true;
        for (let j=0;j<stroka.length;j++){
            if (stroka[j]!=inputstroka[i+j]){
                flag=false;
                break
            }
        }
        if (flag){
            ans.push(i);
        }
    }
    hashinput = (hashinput - inputstroka.charCodeAt(i) * Math.pow(2, stroka.length - 1)) * 2 + inputstroka.charCodeAt(i + stroka.length);
}
console.log(ans);
