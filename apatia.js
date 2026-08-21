let german = language[0];
let currentQuestion = 0;
let qElements = [document.getElementById("one"),document.getElementById("two"),document.getElementById("three"),document.getElementById("four")];
let cElements = [document.getElementById("color-one"),document.getElementById("color-two"),document.getElementById("color-three"),document.getElementById("color-four")];
for(let i=0;i<4;i++){
    qElements[i].style.backgroundColor = "white";
    qElements[i].style.color = "black"; 
}
function newQuestion(){
    let loc = german[currentQuestion];
    data.question = loc.g;
    data.subtext = loc.e;
    data.options = [
        [loc.a[0],loc.a[1]],
        [loc.b[0],loc.b[1]],
        [loc.c[0],loc.c[1]],
        [loc.d[0],loc.d[1]],
    ].sort(()=>Math.random()-0.5);
}
function next(){
    data.next = false;
    currentQuestion ++;
    for(let i=0;i<4;i++){
        qElements[i].style.backgroundColor = "white";
        cElements[i].style.backgroundColor = "rgba(0,0,0,0)";
        qElements[i].style.color = "black"; 
    }
    newQuestion();
}
newQuestion();
function answer(option){
    if(currentQuestion>=german.length){
        data.complete = true;
    }
    let loc = german[currentQuestion];
    let userAnswer = qElements[option].innerHTML;
    let locs = [loc.a,loc.b,loc.c,loc.d];
    for(let i=0;i<4;i++){
        console.log(locs[i][0]+" "+qElements[i].innerText)
        qElements[i].style.backgroundColor = "rgba(0,0,0,0)"
        qElements[i].style.color = "black"; 

        if(userAnswer != locs[0][0]){
            cElements[i].style.backgroundColor = "red"
        }else{
            cElements[i].style.backgroundColor = "white"
        }
        for(let b=0;b<4;b++){
            if(qElements[i].innerHTML==locs[b][0]&&locs[b][1]){cElements[i].style.backgroundColor = "lightgreen"}
        }
    }
    data.next = true;
}
