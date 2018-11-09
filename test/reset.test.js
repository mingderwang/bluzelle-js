const reset = require('./reset');
const { BluzelleClient } = require('../lib/bluzelle-node');
const assert = require('assert');
const {despawnSwarm} = require('../test-daemon/utils/setup');

let swarm;

describe('reset', () => {

    beforeEach(async function () {
        this.timeout(20000);
        swarm = await reset();
    });

    process.env.daemonIntegration && afterEach(despawnSwarm);


    let api;

    beforeEach(() => api && api.disconnect());

    beforeEach(() => {

        api = new BluzelleClient(
            `ws://localhost:${process.env.daemonIntegration ? swarm[swarm.leader].port : 8100}`,
            '71e2cd35-b606-41e6-bb08-f20de30df76c');

        return api.connect();

    });


    it('can add a key', async () => {
        await api.create('myKey', 'abc');
        assert(await api.has('myKey'));
        assert(!await api.has('someOtherKey'));
    });

    it('should not have key from previous test', async () => {
        assert(!await api.has('myKey'));
    });

});
