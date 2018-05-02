// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const myIp = require('ip');
const {SpecReporter} = require('jasmine-spec-reporter');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const PORT = 8080;
const PIPELINE_GRID_ADDRESS = 'http://selenium-hub-production.jenkins-production:4444/wd/hub';
const LOCAL_GRID_ADDRESS = 'https://gstools-lab.isus.emc.com/selenium/wd/hub';

const SELENIUM_ADDRESS = process.env.JENKINS_HOME ? PIPELINE_GRID_ADDRESS : LOCAL_GRID_ADDRESS;
const HOST = myIp.address();

exports.config = {
  seleniumAddress: SELENIUM_ADDRESS,

  allScriptsTimeout: 20000,

  params: {
    url: `http://${HOST}:${PORT}`,
  },

  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  multiCapabilities: [
    {
      browserName: 'chrome',
      shardTestFiles: true,
      chromeOptions: {
        args: ['--test-type']
      },
      maxInstances: 10
    },
    {
      browserName: 'firefox',
      shardTestFiles: true,
      maxInstances: 10
    }
  ],

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 20000,
    print: function () {
    }
  },

  useAllAngular2AppRoots: true,

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};
