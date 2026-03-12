async function analyzeManifest() {

let fileInput = document.getElementById("manifestFile");

if(!fileInput.files.length){
    alert("Please upload manifest.json");
    return;
}

let file = fileInput.files[0];
let text = await file.text();
let manifest = JSON.parse(text);

let permissions = manifest.permissions || [];

const response = await fetch("https://browser-extension-privacy-analyzer.onrender.com/analyze",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        permissions:permissions
    })
});

const data = await response.json();

/* Permissions */

const permissionsList = document.getElementById("permissionsList");
permissionsList.innerHTML="";

data.permissions.forEach(p=>{
    let li=document.createElement("li");
    li.className="list-group-item";
    li.innerText=p;
    permissionsList.appendChild(li);
});

/* Risk Score */

let riskBar = document.getElementById("riskBar");

// limit score to 10
let score = Math.min(data.risk_score, 10);

// set width
riskBar.style.width = score * 10 + "%";

// display score
riskBar.innerText = score + "/10";

// change color based on score
if(score <= 3){
    riskBar.className = "progress-bar bg-success";   // Green
}
else if(score <= 7){
    riskBar.className = "progress-bar bg-warning";   // Yellow
}
else{
    riskBar.className = "progress-bar bg-danger";    // Red
}

const warningsList=document.getElementById("warningsList");
warningsList.innerHTML="";

data.warnings.forEach(w=>{
    let li=document.createElement("li");
    li.className="list-group-item text-danger";
    li.innerText=w;
    warningsList.appendChild(li);
});

}
function showRiskLevel(level){

  const riskBox = document.getElementById("riskLevel");

  if(level === "Dangerous"){
      riskBox.innerHTML = "🔴 DANGEROUS EXTENSION";
  }
  else if(level === "Moderate"){
      riskBox.innerHTML = "🟡 MODERATE RISK";
  }
  else{
      riskBox.innerHTML = "🟢 SAFE EXTENSION";
  }

}
// Function to display risk level
function showRiskLevel(level){

  const riskBox = document.getElementById("riskLevel");

  if(level === "Dangerous"){
      riskBox.innerHTML = "🔴 DANGEROUS EXTENSION";
  }
  else if(level === "Moderate"){
      riskBox.innerHTML = "🟡 MODERATE RISK";
  }
  else{
      riskBox.innerHTML = "🟢 SAFE EXTENSION";
  }

}


// Function to create risk graph
function createChart(high, medium, low){

const ctx = document.getElementById("riskChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["High Risk","Medium Risk","Low Risk"],
    datasets: [{
      label: "Permission Risk Levels",
      data: [high, medium, low],
      backgroundColor: ["red","orange","green"]
    }]
  }
});

}
function downloadReport(){

const { jsPDF } = window.jspdf;

let doc = new jsPDF();

let permissions = document.getElementById("permissionsList").innerText;
let warnings = document.getElementById("warningsList").innerText;
let score = document.getElementById("riskBar").innerText;

doc.setFontSize(18);
doc.text("Browser Extension Security Report",20,20);

doc.setFontSize(12);
doc.text("Risk Score: " + score,20,40);

doc.text("Permissions:",20,60);
doc.text(permissions,20,70);

doc.text("Warnings:",20,110);
doc.text(warnings,20,120);

doc.save("extension-security-report.pdf");

}