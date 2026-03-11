function analyze(){

let data = {
permissions:["tabs","cookies","storage"],
risk_score:7,
warnings:[
"tabs can track browsing activity",
"cookies can access session data"
]
};

let permList = document.getElementById("permissions");
permList.innerHTML="";

data.permissions.forEach(p=>{
let li=document.createElement("li");
li.innerText=p;
permList.appendChild(li);
});

document.getElementById("risk").innerText =
"Risk Score: "+data.risk_score+"/10";

let warnList=document.getElementById("warnings");
warnList.innerHTML="";

data.warnings.forEach(w=>{
let li=document.createElement("li");
li.innerText=w;
warnList.appendChild(li);
});

}