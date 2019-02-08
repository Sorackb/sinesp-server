/* eslint-disable no-undef,prefer-arrow-callback */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
const { join } = require('path');
const { readFileSync } = require('fs');

const server = require('../');

chai.use(chaiHttp);
chai.use(chaiAsPromised);
chai.should();

const expect = chai.expect;
const results = JSON.parse(readFileSync(join(__dirname, 'results.json')));

describe('/GET search', () => {
  Object.keys(results).forEach(function (plate) {
    it(`Search for plate '${plate}'`, async function () {
      this.timeout(300000);
      this.retries(4);

      return chai.request(server).get(`/search/${plate}`).then(function verificar(res) {
        return expect(res).to.have.status(200);
      });
    });
  });

  after(async () => {
    await server.stop();
  });
});
