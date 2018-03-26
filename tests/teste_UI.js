module.exports = {
    before: function (browser, done) {
        server = require('../bin/testserver')(done) // done is a callback that executes when the server is started
    },

    after: function () {
        server.close()
    },

    'Carregar IDE' : function (client) {
        client
            .url('http://localhost:3000/ide')
            .waitForElementPresent('body', 1000)
            .assert.containsText('#anchor-inicio', 'Portugol Webstudio');
    },

    'Usar IDE' : function(client) {
        client
            .click('li#j1_1 > i')
            .pause(1000)
            .waitForElementVisible('a#j1_2_anchor', 5000)
            .click('a#j1_2_anchor')
            .waitForElementVisible('a#exemplo-go > span', 5000)
            .click('a#exemplo-go > span')
            .pause(5000)
            .waitForElementVisible('iframe', 5000)
            .waitForElementVisible('#submit-btn', 5000)
            .click('#submit-btn')
            .pause(5000)
            .assert.containsText('pre#output', 'Olá mundo')
            .end();
    }
}