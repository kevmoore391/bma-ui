// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const server = require('pushstate-server');
const myIp = require('ip');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
  dest: 'test_results/e2e/integration/screenshots',
  reportOnlyFailedSpecs: true,
  captureOnlyFailedSpecs: true
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const IP = myIp.address();

const PORT = 8001;
const PIPELINE_GRID_ADDRESS = 'http://selenium-hub-production.jenkins-production:4444/wd/hub';
const LOCAL_GRID_ADDRESS = 'https://gstools-lab.isus.emc.com/selenium/wd/hub';

const SELENIUM_ADDRESS = process.env.JENKINS_HOME ? PIPELINE_GRID_ADDRESS : LOCAL_GRID_ADDRESS;

exports.config = {
  seleniumAddress: SELENIUM_ADDRESS,

  allScriptsTimeout: 11000,

  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: `http://${IP}:${PORT}/`,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },

  beforeLaunch: () => {
    return new Promise((resolve) => reporter.beforeLaunch(resolve));
  },

  afterLaunch: (exitCode) => {
    return new Promise((resolve) => reporter.afterLaunch(resolve.bind(this, exitCode)));
  },

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));

    server.start({
      port: PORT,
      directory: './dist'
    });
  }
};