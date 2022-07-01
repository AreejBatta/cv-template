
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








let cvName=document.getElementById("cvName");
let cvEmail=document.getElementById("cvEmail");
let cvLinked=document.getElementById("cvLinked");
let language=document.getElementById("language");
let Achievements=document.getElementById("Achievements");
var info11;
let data1=document.getElementById("data1");
let data2=document.getElementById("data2");
let data3=document.getElementById("data3");
let data4=document.getElementById("data4");
let data5=document.getElementById("data5");
if(localStorage.getItem("first-data")!=null){
    info11=JSON.parse(localStorage.getItem("first-data"));
    display_info2();
    display_info3();
    display_info4();
    display_info5();
    display_info6();
}
else{
     info11=[];
}
function closeform2(){
    popup2.classList.remove("active");
    overlay2.classList.remove("active");

}
function closeform22(){

    let course1={
        cName:cvName.value,
        cEmail:cvEmail.value,
        cLinked:cvLinked.value,
        cLang:language.value,
        cAch:Achievements.value
    }
    info11.push(course1);
    localStorage.setItem("first-data",JSON.stringify(info11));
    display_info2();
    display_info3();
    display_info4();
    display_info5();
    display_info6();
    clear_all_info();
}

function first_data_ad(){
    let course1={
        cName:cvName.value,
        cEmail:cvEmail.value,
        cLinked:cvLinked.value,
        cLang:language.value,
        cAch:Achievements.value
    }
    info11.push(course1);
    localStorage.setItem("first-data",JSON.stringify(info11));
}
function display_info2(){
    let result=``;
        result+=`
        <p class="text-muted text-center fs-1 name fw-bold" > ${cvName.value}
        </p> 
        `;
        data1.innerHTML=result;
}


function display_info3(){
    let result=``;
        result+=`<i class="fa-solid fa-envelope pe-1"></i>${cvEmail.value}`;
        data2.innerHTML=result;
}

function display_info4(){
    let result=``;
        result+=`<i class="fa-brands fa-linkedin pe-2"></i>${cvLinked.value}`;
        data3.innerHTML=result;
}
function display_info5(){
    let result=``;
    var sLang = document.getElementById("language").value.split('\n');

    for (var i = 0; i < sLang.length; i++) {
         result+=`<ul  class="list-unstyled list-group list-group-horizontal justify-content-center text-muted fs-smaller w-80 ">
         <li class="me-2">${sLang[i]}</li>
     </ul>`
    }
    data4.innerHTML=result;
}
function display_info6(){
    let result=``;
    var sAch = document.getElementById("Achievements").value.split('\n');

    for (var i = 0; i < sAch.length; i++) {
         result+=`<ul class="text-muted fs-smaller  mt-2 list-unstyled">
         <li class="mb-1" >
         ${sAch[i]}
         </li>
     </ul>`
    }
       data5.innerHTML=result;
}
function clear_all_info(){
    cvName.value="";
    cvEmail.value="";
    cvLinked.value="";
    language.value="";
    Achievements.value="";
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
//pop-up2
var popup2=document.getElementById("popup2");
var overlay2=document.getElementById("overlay2");


function openform2(){
    popup2.classList.add("active");
    overlay2.classList.add("active");

}

//end pop-up2
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

