const setofwords = [
"My name is Anurag Singh and I am a developer.",

"Hope you are having fun this is a simple game you can make.", 
"If you want the source code then link is given in the description so you can create your own version of this challenge."

];
 const msg = document.getElementById('msg');

 const typewords= document.getElementById('mywords');

 const btn = document.getElementById('btn');

let startTime, endTime;
const playgame = ()=>{
    let randomNumber=Math.floor(Math.random()*setofwords.length);
    msg.innerText=setofwords[randomNumber];
    let date=new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    
}
const endgame = ()=>{
    let date=new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime))/1000;
    // console.log(totalTime);
    let totalString=typewords.value;
    let wordCount=wordCounter(totalString);
    let speed=Math.round((wordCount / totalTime)*60);
    let finalMessage="You typed total at " + speed+" words per minutes ";
    finalMessage +=compareWords(msg.innerText,totalString);
    msg.innerText=finalMessage;
    setTimeout(() => {
  document.location.reload();
}, 7000);
}

const compareWords = (str1, str2)=>{
 let words1= str1.split(" ");
let words2= str2.split(" ");
let cnt = 0;
// arrayName then foreach then it will take whole function with value and index no. of that array
 words1.forEach(function (item, index) {
    if (item == words2[index]) {
        cnt++;
    }
})

let errorwords = (words1.length - cnt ); 
return (cnt+" correct out of "+ words1.length + "words and the total number of error are "+errorwords + ".");

}
const wordCounter = (str)=>{
    let response=str.split(" ").length;
    return response;

}

btn.addEventListener('click',function(){ 
    if(this.innerText=='Start'){
        typewords.disabled=false;
        playgame();
    }else if(this.innerText="Done"){
        typewords.disabled=true;
        btn.innerText="Start";
        endgame();
    }

});

