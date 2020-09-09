const report = require('cucumber-html-reporter');

module.exports = {

    createTestReport: () => {
        return report.generate({
            name: 'Node Test',
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            scenarioTimestamp: true,
            launchReport: true
        });
    }
}