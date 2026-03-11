const fs = require("fs");

// Load permission database
const permissionDB = JSON.parse(
  fs.readFileSync("permissions_db.json", "utf8")
);

function analyzePermissions(permissions) {

  let totalScore = 0;
  let report = [];

  permissions.forEach(permission => {

    if (permissionDB[permission]) {

      const data = permissionDB[permission];

      totalScore += data.score;

      report.push({
        permission: permission,
        risk: data.risk,
        reason: data.reason,
        mitigation: data.mitigation
      });

    } else {

      report.push({
        permission: permission,
        risk: "Unknown",
        reason: "Permission not found in database",
        mitigation: "Manual review required"
      });

    }

  });

  // Determine overall risk level
  let riskLevel = "Low";

  if (totalScore > 10) {
    riskLevel = "High";
  } else if (totalScore > 5) {
    riskLevel = "Medium";
  }

  return {
    totalRiskScore: totalScore,
    riskLevel: riskLevel,
    permissions: report
  };

}

module.exports = analyzePermissions;