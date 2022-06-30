
var product=document.getElementById("year");
var description=document.getElementById("experience");
// var category=document.getElementById("education");
var btn1=document.getElementById("click");
var info=document.getElementById("tableinfo");
var empty=document.getElementsByClassName("inn");
var clearall=document.getElementById("clearall");


console.log(empty);
var vanish=document.getElementById("vanish");

if(localStorage.getItem("formdata")==null){
    exp=[];
}
else{
 var exp= JSON.parse(localStorage.getItem("formdata"));
displaydata();}

btn1.onclick= function(){
    addcourse();
    displaydata();
}


vanish.onclick= function (){
    clear();
}

function addcourse(){
    var shop ={
    pname:product.value,
    pdesc:description.value,
    }
    
    exp.push(shop);
    

    localStorage.setItem("formdata",JSON.stringify(exp));
}

function displaydata(){
     var result='';
    for (i=0; i<exp.length; i++){
        result+=`
        <tr>
            
            <td>${exp[i].pname}</td>
            <td>${exp[i].pdesc}</td>
            <td><button id="deleteproduct" class=" main-bg-color btn btn-sm btn-outline-secondary" onclick="deleteproduct(${i})"> delete </button></td>
            
        </tr>
        `;

        info.innerHTML=result;
    }
}

function clear(){
    for (i=0;i<empty.length;i++){
        empty[i].value='';
    }
}

function deleteproduct(index){
    exp.splice(index,1);
    localStorage.setItem("formdata",JSON.stringify(exp));
    displaydata();

}

clearall.onclick= function(){
    clearalldata();
}

function clearalldata(){

    localStorage.removeItem("formdata");
    exp=[];
    info.innerHTML=" ";

}
function test(name){
    var result='';

    for (i=0; i<exp.length; i++){
        if (exp[i].pname.toLowerCase().includes(name.toLowerCase())){
        result+=`
        <tr>
            <td>${i}</td>
            <td>${exp[i].pname}</td>
            <td>${exp[i].pdesc}</td>
            <td>${exp[i].pprice}</td>
            <td><button  id="update" class=" btn-info" onclick="updateproduct("${i}"> update </button></td>
            <td><button id="deleteproduct" class=" btn-danger" onclick="deleteproduct(${i})"> delete </button></td>
        </tr>
        `;

        info.innerHTML=result;}
    }

}

// education crud system
var degree=document.getElementById("degree");
var university=document.getElementById("university");
// var category=document.getElementById("education");
var btn=document.getElementById("clicked");
var infoed=document.getElementById("tableinfoed");
var emptyed=document.getElementsByClassName("inned");
var clearalled=document.getElementById("clearalled");


console.log(emptyed);
var vanished=document.getElementById("vanished");

if(localStorage.getItem("formdataed")==null){
    edu=[];
}
else{
 var edu= JSON.parse(localStorage.getItem("formdataed"));
displaydataed();}

btn.onclick= function(){
    addcourseed();
    displaydataed();
}


vanished.onclick= function (){
    clear();
}

function addcourseed(){
    var shop ={
    pnedu:degree.value,
    pdedu:university.value,
    }
    
    edu.push(shop);
    

    localStorage.setItem("formdataed",JSON.stringify(edu));
}

function displaydataed(){
     var result='';
    for (i=0; i<edu.length; i++){
        result+=`
        <tr>
            
            <td>${edu[i].pnedu}</td>
            <td>${edu[i].pdedu}</td>
            <td><button id="deleteproduct" class=" main-bg-color btn btn-sm btn-outline-secondary" onclick="deleteproduct(${i})"> delete </button></td>
            
        </tr>
        `;

        infoed.innerHTML=result;
    }
}

function cleared(){
    for (i=0;i<emptyed.length;i++){
        emptyed[i].value='';
    }
}

function deleteproducted(index){
    edu.splice(index,1);
    localStorage.setItem("formdataed",JSON.stringify(edu));
    displaydataed();

}

clearalled.onclick= function(){
    clearalldataed();
}

function clearalldataed(){

    localStorage.removeItem("formdataed");
    edu=[];
    infoed.innerHTML=" ";

}
function tested(name){
    var result='';

    for (i=0; i<edu.length; i++){
        if (edu[i].pnedu.toLowerCase().includes(name.toLowerCase())){
        result+=`
        <tr>
            <td>${i}</td>
            <td>${edu[i].pnedu}</td>
            <td>${edu[i].pdedu}</td>
            <td>${edu[i].pprice}</td>
            <td><button  id="update" class=" btn-info" onclick="updateproduct("${i}"> update </button></td>
            <td><button id="deleteproducted" class=" btn-danger" onclick="deleteproducted(${i})"> delete </button></td>
        </tr>
        `;

        infoed.innerHTML=result;}
    }

}

// pop-up
var popup=document.getElementById("popup");
var overlay=document.getElementById("overlay");


function openform(){
    popup.classList.add("active");
    overlay.classList.add("active");

}

function closeform(){
    popup.classList.remove("active");
    overlay.classList.remove("active");

}

// about
var aboutme=document.getElementById("abtme");
var btnab=document.getElementById("clickabout");
var paragra=document.getElementById("aboutpara");
var clearallabout=document.getElementById("clearallabout");




console.log(emptyed);
var vanishabout=document.getElementById("vanishabout");

if(localStorage.getItem("formdatabout")==null){
    btm='';
}
else{
 var btm= (localStorage.getItem("formdatabout"));
displayabt();}

btnab.onclick= function(){
    addaboutm();
    displayabt();
}


vanishabout.onclick= function (){
    clear();
}

function addaboutm(){
    var btm ={
    btm:aboutme.value,
    }    

    localStorage.setItem("formdatabout",(btm));
}

function displayabt(){

        paragra.innerHTML=btm;
    }

function clearallabout(){
    paragra.innerHTML='';

}


clearallabout.onclick= function(){
    clearallaboutm();
}

function clearallaboutm(){

    localStorage.removeItem("formdatabout");
    btm='';
    paragra.innerHTML=" ";

}

