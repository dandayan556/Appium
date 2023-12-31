import wd from 'wd';
import chai from 'chai';
import {
  androidCaps, serverConfig, androidApiDemos, SAUCE_TESTING,
  SAUCE_USERNAME, SAUCE_ACCESS_KEY
} from '../helpers/config';

const {assert} = chai;

describe('Create Android session', function () {
  let driver;
  let allPassed = true;
  afterEach(function () {
    // keep track of whether all the tests have passed, since mocha does not do this
    allPassed = allPassed && (this.currentTest.state === 'passed');
  });
  after(async function () {
    if (SAUCE_TESTING && driver) {
      await driver.sauceJobStatus(allPassed);
    }
  });
  it('should create and destroy Android sessions', async function () {
    try {
      // Connect to Appium server
      driver = SAUCE_TESTING
        ? await wd.promiseChainRemote(serverConfig)
        : await wd.promiseChainRemote(serverConfig, SAUCE_USERNAME, SAUCE_ACCESS_KEY);

      // add the name to the desired capabilities
      const sauceCaps = SAUCE_TESTING
        ? {
          name: 'Android Create Session Test',
        }
        : {};

      // Start the session
      await driver.init({
        ...androidCaps,
        ...sauceCaps,
        app: androidApiDemos,
      });

      // Check that we're running the ApiDemos app by checking package and activity
      const activity = await driver.getCurrentActivity();
      const pkg = await driver.getCurrentPackage();
      assert.equal(`${pkg}${activity}`, 'io.appium.android.apis.ApiDemos');
    } finally {
      // Quit the session, no matter what happens
      await driver.quit();
    }
  });
});
