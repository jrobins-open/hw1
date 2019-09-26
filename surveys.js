//Survey creates a class of questions from the user and stores them into various arrays - for use in HW1
//Author: Joe Robinson
//References: 1.125 example HTML and Javascript
//  https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
//  lots of W3schools on html and javascript examples (all were handwritten in here) 

var ids = ['intro','q1','q2','q3','q4','q5','summary', 'results']; //ids of divs
var buttonids = ['introprogress','q1progress','q2progress','q3progress','q4progress','q5progress','summaryprogress','empty']; //id of progress bar
//Initialize results
var results={};
results.name='unknown';
results.codeskill='unknown';
results.hackingskill='unknown';
results.favorite_sentence='unknown';
results.textsize='unknown';
results.favoritecolor='unknown';
results.numberofclicks='unknown';


function displayDivHTML(Id, ids){
    //Clears out all content divs except the one desired
    for(var i=0; i<ids.length; i++){
        document.getElementById(ids[i]).style.display = "none";}
    document.getElementById(Id).style.display = "block";
}
//Button events 
document.getElementById("introbutton").onclick = function() {changepage('q1')};
document.getElementById("q1button").onclick = function() {changepage('q2'),writestuff('q1'),checksam(document.getElementById('name').value),updatereadbacks(document.getElementById('name').value)};
document.getElementById("q2button").onclick = function() {changepage('q3'),writestuff('q2')};
document.getElementById("q3button").onclick = function() {changepage('q4'),writestuff('q3')};
document.getElementById("q4button").onclick = function() {changepage('q5'),writestuff('q4')};
document.getElementById("q5button").onclick = function() {changepage('summary'),writestuff('q5'),displayresults()};
document.getElementById("introprogress").onclick = function() {changepage('intro'),checksam(document.getElementById('name').value)};
document.getElementById("q1progress").onclick = function() {changepage('q1'),checksam(document.getElementById('name').value)};
document.getElementById("q2progress").onclick = function() {changepage('q2'),checksam(document.getElementById('name').value)};
document.getElementById("q3progress").onclick = function() {changepage('q3'),checksam(document.getElementById('name').value)};
document.getElementById("q4progress").onclick = function() {changepage('q4'),checksam(document.getElementById('name').value)};
document.getElementById("q5progress").onclick = function() {changepage('q5'),checksam(document.getElementById('name').value)};
//document.getElementById("gamebutton").onclick = function() {game()};
document.getElementById("summaryprogress").onclick = function() {changepage('summary'),displayresults()};



//Final submit behavior
document.getElementById("submitbutton").onclick = function() {window.alert("If I was connected to a surver, I would do something interesting like save your data or send it to evil genuises for profit. Instead, just look at the results on the page knowing that your data is safe in the browser. Have a great day " + results.name + "!")};
displayDivHTML('intro',ids);

function codeaction(thing){
   results[thing.name]=thing.value //save to results (for skills radio buttons)
}

function writestuff(input){
    if (input=='q1') {
       results['name']=document.getElementById("name").value;
    }
    if (input=='q2') { //unnecessary
     }
    if (input=='q3') { //unnecessary
     }
    if (input=='q4'){     
        results['favorite_sentence']=document.getElementById('sentence').value; //others handled as they change
    }
    if (input=='q5'){
        //results['numberofclicks']=document.getElementById('clicks').innerText;
    }
    console.log(results);
}

//Play a game!
var counter=0;
function game(){
    if(document.getElementById("gamebutton").innerText == "Start!"){
        document.getElementById("gamebutton").innerText="CLICK!!";
        document.getElementById("gamebutton").style.backgroundColor="red";
        var nowtime= new Date().getTime();
        var stoptime=nowtime+5000;
        var timeleft=(stoptime-nowtime)/1000;
        document.getElementById("timertext").innerHTML="Time remaining: "+timeleft + "seconds";
        document.getElementById("wellthisisembarrasing").innerHTML=stoptime; //there has to be a better way    
    }   
     
    else{
        if(document.getElementById("gamebutton").innerText == "Reset"){
            document.getElementById("gamebutton").innerText="Start!";
            document.getElementById("gamebutton").style.backgroundColor='white';
            document.getElementById("extraspacing").innerHTML="";

            counter=0;
//            document.getElementById("gamebutton").innerText="Start!";
        
        }
        else{
            var stoptime=document.getElementById("wellthisisembarrasing").innerHTML; //there has to be a better way
            var nowtime= new Date().getTime();
            timeleft=(stoptime-nowtime)/1000;
            if (timeleft < 0 ){
                document.getElementById("clicks").innerHTML="Final results: "+counter + " clicks";
                document.getElementById("timertext").innerHTML=""; 
                document.getElementById("extraspacing").innerHTML="<br><br><br>";    
                document.getElementById("wellthisisembarrasing").innerHTML=""; //hide the evidence
                document.getElementById("gamebutton").innerHTML="Reset";
                document.getElementById("gamebutton").style.backgroundColor="yellow";
                results['numberofclicks']=counter;
               return;
            }
            else{
                counter=parseInt(counter)+parseInt(1);
                document.getElementById("clicks").innerHTML="Number of clicks: "+counter;
                document.getElementById("timertext").innerHTML="Time remaining: "+timeleft + "seconds";  
            }
        }
    }
}   

function displayresults(){//gathers final results and displays
    var outputhtml="<div style='padding-left:50px;text-align:left'>"
    outputhtml +="Name: " + results.name;
    outputhtml +="<br>Coding skill: " + results.codeskill;
    outputhtml +="<br>Hacking skill: " + results.hackingskill;
    outputhtml +="<br>Favorite sentence: " + results.favorite_sentence;
    outputhtml +="<br>Text size: " + results.textsize;
    outputhtml +="<br>Favorite Color: " + results.favoritecolor;
    outputhtml +="<br>Number of clicks: " + results.numberofclicks;  
    outputhtml +="</div>";
    document.getElementById("resulttext").innerHTML=outputhtml;
    console.log(results)


}

function changepage(location){
    displayDivHTML(location,ids);
    var progressloc=location+"progress";
    changeprogresscolors(progressloc,buttonids);
}

function checksam(inputname){
    if (inputname.includes('Sam')){ //;)
        window.location.href="https://www.youtube.com/watch?v=xfr64zoBTAQ";
    }
}
function changetextcolor(input){
    var textcolor=input.value
    document.getElementById("q1").style.color=textcolor; // I know this isn't the best way to do it!
    document.getElementById("q2").style.color=textcolor;
    document.getElementById("q3").style.color=textcolor;
    document.getElementById("q4").style.color=textcolor;
    document.getElementById("q5").style.color=textcolor; 
    results['favoritecolor']=textcolor; 
}
function changetextsize(input){
    var textsize=input.value
    document.getElementById("header").style.fontSize=textsize; 
    results['textsize']=textsize;   
}
function updatereadbacks(inputname){
var firstname=inputname.split(' ')
    document.getElementById('q2readback').innerText="Hi " + inputname + ", please rate your coding skills:";
    document.getElementById('q3readback').innerText="Hi " + inputname + ", that's great! Please rate your computer hacking skills:";
    document.getElementById('q4readback').innerText="Interesting " + inputname.split(' ').slice(0,-1).join(' ') + ", very interesting... Please fill out the following questions for invasive demographic information:";

}

function changeprogresscolors(Id,buttonids){
    //Clears out all content divs except the one desired
    for(var i=0; i<buttonids.length-1; i++){
        document.getElementById(buttonids[i]).style.backgroundColor = "grey";}
    document.getElementById(Id).style.backgroundColor = "yellow";
}