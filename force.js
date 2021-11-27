let fs = require ('fs');
let arg = process.argv;
let hashstrok=0;
let inputstroka= fs.readFileSync(arg[2]).toString();
let stroka=arg[3].toString();
let hashinput=0;
let ans=0;
let i;
let strokatemp;
for ( i=0 ; i< stroka.length ; i++) {
    hashinput += inputstroka.charCodeAt(i);
    hashstrok += stroka.charCodeAt(i);
}
if (hashinput==hashstrok)
    ans+=1;
i=1;
for (i; i < inputstroka.length; i ++ ){
    hashinput= hashinput-inputstroka.charCodeAt(i-1)+inputstroka.charCodeAt(i+(stroka.length-1));
    if ( hashinput==hashstrok) {
        strokatemp="";
        for (let j=i;j<=i+stroka.length-1;j++){
            strokatemp+=inputstroka[j];
        }
        if (strokatemp==stroka){
            ans+=1;
        }
    }
}
console.log(ans);