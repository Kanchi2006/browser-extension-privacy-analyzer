const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const permissionRisk = {
    tabs: {
        score:3,
        warning:"tabs permission can read browsing activity"
    },
    history:{
        score:5,
        warning:"history permission can access browsing history"
    },
    cookies:{
        score:4,
        warning:"cookies permission can access website cookies"
    }
}

app.post("/analyze",(req,res)=>{

    const permissions = req.body.permissions || []

    let riskScore = 0
    let warnings = []

    permissions.forEach(p=>{

        if(permissionRisk[p]){

            riskScore += permissionRisk[p].score
            warnings.push(permissionRisk[p].warning)

        }

    })

    res.json({
        permissions:permissions,
        risk_score:riskScore,
        warnings:warnings
    })

})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})