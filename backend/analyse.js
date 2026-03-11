const riskEngine = require("./riskEngine");

function analyzeExtension(manifest) {

    const permissions = manifest.permissions || [];

    const result = riskEngine.calculateRisk(permissions);

    return {
        permissions: permissions,
        riskScore: result.score
    };
}

module.exports = analyzeExtension;