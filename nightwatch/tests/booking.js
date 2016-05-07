var speedLow = 1800,
    speedHigh = 800,
    waitElementTime = 10000;
module.exports = {
    'Login': function(client) {
        client
            .url('http://localhost:8081/zh_TW/booking.html?account=noel5219a@gmail.com&password=Aa1234')
            .waitForElementVisible('#content', waitElementTime)
    },
    'search flight way': function(client) {
        client
            .waitForElementVisible('#oneway', waitElementTime)
            .click('#oneway').pause(speedHigh)
            .waitForElementVisible('#return', waitElementTime)
            .click('#return').pause(speedHigh)
    },
    'search flight': function(client) {
        client
            .waitForElementVisible('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)', waitElementTime)
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(1500)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(11)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(11)').pause(speedHigh)
    },
    'change flight place': function(client) {
        client
            .waitForElementVisible('img[class="searchSelectReturnIcon"]', waitElementTime)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('TPE');
        client
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('DMK');
        client
        // 點選飛航icon
            .click('img[class="searchSelectReturnIcon"]').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('DMK');
        client
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('TPE');
        client
        // 點選飛航icon
            .click('img[class="searchSelectReturnIcon"]').pause(speedHigh)
    },
    // 'Select the number of adults': function(client) {
    //     client
    //         .waitForElementVisible('div[class="row white-font-color peopleBackground]', 5000)
    //         .click('div[class="row white-font-color peopleBackground]')
    //         .pause(3000)

    // },
    // 'enter promo code': function(client) {
    //     client
    //         .waitForElementVisible('input[class="form-control promoInput white-font-color"]', 5000)
    //         .setValue('input[class="form-control promoInput white-font-color"]', 'aaaaaa')
    //         .pause(100)
    //         .clearValue('input[class="form-control promoInput white-font-color"]')
    //         .pause(500)
    // },
    'click search button': function(client) {
        client
            .waitForElementVisible('button[class="btnFindFights"]', waitElementTime)
            .click('button[class="btnFindFights"]').pause(speedHigh)
    },
    'select depart date': function(client) {
        client
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(5)', waitElementTime)
            .click('div[class="dateListView animateLeft"] div:nth-child(5)').pause(speedHigh)
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(6)', waitElementTime)
            .click('div[class="dateListView animateLeft"] div:nth-child(6)').pause(speedHigh)
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(7)', waitElementTime)
            .click('div[class="dateListView animateLeft"] div:nth-child(7)').pause(speedHigh)
            .waitForElementVisible('#selectFareView-amount div:nth-child(1)', waitElementTime)
            .click('#selectFareView-amount div:nth-child(1)').pause(speedHigh)
            // click btnBack(select depart page)
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'select arrive date': function(client) {
        client
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(5)', waitElementTime)
            .click('div[class="dateListView animateLeft"] div:nth-child(5)').pause(speedHigh)
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(6)', waitElementTime)
            .click('div[class="dateListView animateLeft"] div:nth-child(6)').pause(speedHigh)
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(7)', waitElementTime)
            .click('div[class="dateListView animateLeft"] div:nth-child(7)').pause(speedHigh)
            .waitForElementVisible('#selectFareView-amount div:nth-child(1)', waitElementTime)
            .click('#selectFareView-amount div:nth-child(1)').pause(speedHigh)
            // click btnBack(select arrive page)
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'passenger data': function(client) {
        client
            .waitForElementVisible('div[class="adultPassengerIcon passengerCircle"]', waitElementTime)
            .waitForElementVisible('button[class="btnSelect waves-effect"]', waitElementTime).pause(speedLow)
            .click('button[class="btnSelect waves-effect"]').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select-content"]', waitElementTime)
            .click('div[class="sm-form-select-content"] ul li:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('table', waitElementTime).pause(speedHigh)
            .setValue('input[id="passportNumber"]', '1111').pause(speedHigh)
            .setValue('table tr:nth-child(6) input', '002017/10/10').pause(speedHigh)
            // click btnBack(passenger data page)
            .waitForElementVisible('a[class="btnBack"]', waitElementTime).pause(speedLow)
            .click('a[class="btnBack"]').pause(speedLow)
    },
    'insure': function(client) {
        client
            .waitForElementVisible('div[class="white-font-color"] > label:nth-child(4)', waitElementTime).pause(speedLow)
            .click('div[class="white-font-color"] > label:nth-child(4)').pause(speedHigh)
            .waitForElementVisible('div[class="fullScreen  modal-body"]', waitElementTime)
            .moveToElement('div[class="modal-content"] > div:nth-child(2) > div:nth-child(1)', 10, 3300);
        client
            .moveToElement('#termInsurance', 10, 140);
        client
            .waitForElementVisible('div[class="fullScreen  modal-footer"] span[class=" fRight"]', waitElementTime).pause(speedHigh)
            .click('div[class="fullScreen  modal-footer"] span[class=" fRight"]').pause(speedHigh)
            .setValue('#taiwaneseId', 'A123456789').pause(speedHigh)
            // click btnBack(insure page)
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'seat': function(client) {
        client
            .waitForElementVisible('div[class="fixedView"]', waitElementTime).pause(speedLow)
            // 點選去程座位
            .click('#divSeatMap > div:nth-child(2)').pause(speedLow)
            // 切換去回程座位表
            .click('div[class="seatTab"] > div:nth-child(2)').pause(speedLow)
            .waitForElementVisible('div[class="fixedView"]', waitElementTime).pause(speedLow)
            // 點選回程座位
            .click('#divSeatMap > div:nth-child(14)').pause(speedLow)
            // click btnBack(seat page)
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'click confirm(summary page)': function(client) {
        client
            .waitForElementVisible('#totalview > div:nth-child(2)', 15000)
            .click('#totalview > div:nth-child(2)').pause(speedLow)
    },
    'paymant data': function(client) {
        client
            .waitForElementVisible('button[class="btnSelect waves-effect"]', waitElementTime).pause(speedHigh)
            .click('button[class="btnSelect waves-effect"]').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select-content"]', waitElementTime)
            .click('div[class="sm-form-select-content"] ul li:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('table', waitElementTime).pause(speedHigh)
            .click('table tr:nth-child(4) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(4) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime).pause(speedHigh)
            .click('table tr:nth-child(4) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
            .setValue('#mobileNum', '0912123123').pause(speedHigh)
            .setValue('#email', 'noel5219a@gmail.abc').pause(speedHigh)
            .setValue('#emailConfirm', 'noel5219a@gmail.abc').pause(speedHigh)
            .setValue('#num', '5430450100001219').pause(speedHigh)
            .setValue('#cvvNum', '214').pause(speedHigh)
            .click('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div[class="form-control no-frame dropDownTitle black-font-color"]').pause(speedHigh)
            .waitForElementVisible('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(2) ul li:nth-child(12)', waitElementTime)
            .click('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(2) ul li:nth-child(12)').pause(speedHigh)
            .click('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div[class="form-control no-frame dropDownTitle black-font-color"]').pause(speedHigh)
            .waitForElementVisible('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(3) ul li:nth-child(3)', waitElementTime)
            .click('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(3) ul li:nth-child(3)').pause(speedHigh)
            .setValue('#name', 'AAA').pause(speedHigh)
            .click('#confirm').pause(speedHigh)
            .waitForElementVisible('span.fRight', waitElementTime).pause(speedHigh)
            .click('span.fRight').pause(speedHigh)
            .end();
    }
};
