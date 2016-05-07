var speedLow = 1800,
    speedHigh = 800,
    waitElementTime = 10000;

module.exports = {
    'login': function(client) {
        client
            .url('http://localhost:8081/zh_TW/booking.html?account=noel5219a@gmail.com&password=Aa1234')
            .waitForElementVisible('#content', waitElementTime)
    },
    'Change of flight way(When the oneway hide return date)': function(client) {
        client
        // 選擇來回
            .waitForElementVisible('#return', waitElementTime).pause(speedHigh)
            .click('#return').pause(speedHigh)
            .waitForElementVisible('div[class="row selectDate"] > div:nth-child(2)', waitElementTime).pause(speedHigh)
            .waitForElementVisible('div[class="row selectDate"] > div:nth-child(3)', waitElementTime).pause(speedHigh)
            // 選擇單程,則不顯示回程時間
            .waitForElementVisible('#oneway', waitElementTime).pause(speedHigh)
            .click('#oneway').pause(speedHigh)
            .waitForElementVisible('div[class="row selectDate"] > div:nth-child(2)', waitElementTime).pause(speedHigh)
            .waitForElementNotVisible('div[class="row selectDate"] > div:nth-child(3)', waitElementTime).pause(speedHigh)
            .click('#return').pause(speedHigh)
    },
    'search flight': function(client) {
        // 出發地為國外,目的地預設為台北
        client
            .waitForElementVisible('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)', waitElementTime)
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(2)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(2)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('CNX');
        client
            .pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('TPE');
        client
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(3)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(3)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('DMK');
        client
            .pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('TPE');
        client
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(5)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(5)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('PUS');
        client
            .pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('TPE');
        client
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(7)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(7)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('NGO');
        client
            .pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('TPE');
        client
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(8)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(8)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('KIX');
        client
            .pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('TPE');
        client
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(9)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(9)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('FUK');
        client
            .click('div[class="white-font-color global-text-center col-xs-5 waves-effect"]:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select"] ul li:nth-child(11)', waitElementTime)
            .click('div[class="sm-form-select"] ul li:nth-child(11)').pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(1) > .selectCityTitle').text.to.equal('TPE');
        // 出發地為國外,目的地預設為為曼谷
        client
            .pause(speedHigh)
            .expect.element('div[class="selectRoute"] > .row:nth-child(2) > div:nth-child(4) > .selectCityTitle').text.to.equal('DMK');
    },
    'Select number of adults': function(client) {
        client
        // 選擇成人數
            .waitForElementVisible('div[class="row white-font-color peopleBackground"]', waitElementTime)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('div[class="row white-font-color peopleBackground"] > div:nth-child(2) > div[class="sm-form-select-content"]', waitElementTime)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(2) > div[class="sm-form-select-content"] ul li:nth-child(2)')
            .expect.element('div[class="row white-font-color peopleBackground"] > div:nth-child(1) > div:nth-child(3)').text.to.equal('2');
        client
        // 重設成人數 = 1
        // .pause(speedLow)
        // .click('div[class="row white-font-color peopleBackground"] > div:nth-child(1)').pause(speedHigh)
        // .waitForElementVisible('div[class="row white-font-color peopleBackground"] > div:nth-child(2) > div[class="sm-form-select-content"]', waitElementTime).pause(speedHigh)
        // .click('div[class="row white-font-color peopleBackground"] > div:nth-child(2) > div[class="sm-form-select-content"] ul li:nth-child(1)').pause(speedHigh)
        // .expect.element('div[class="row white-font-color peopleBackground"] > div:nth-child(1) > div:nth-child(3)').text.to.equal('1');
    },
    'Select number of child': function(client) {
        client
        // 選擇兒童數
            .waitForElementVisible('div[class="row white-font-color peopleBackground"]', waitElementTime).pause(speedHigh)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(3)').pause(speedHigh)
            .waitForElementVisible('div[class="row white-font-color peopleBackground"] > div:nth-child(4) > div[class="sm-form-select-content"]', waitElementTime).pause(speedHigh)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(4) > div[class="sm-form-select-content"] ul li:nth-child(2)').pause(speedHigh)
            .expect.element('div[class="row white-font-color peopleBackground"] > div:nth-child(3) > div:nth-child(3)').text.to.equal('1');
        client
        // 重設兒童數 = 0
        // .pause(speedLow)
        // .click('div[class="row white-font-color peopleBackground"] > div:nth-child(3)').pause(speedHigh)
        // .waitForElementVisible('div[class="row white-font-color peopleBackground"] > div:nth-child(4) > div[class="sm-form-select-content"]', waitElementTime).pause(speedHigh)
        // .click('div[class="row white-font-color peopleBackground"] > div:nth-child(4) > div[class="sm-form-select-content"] ul li:nth-child(1)').pause(speedHigh)
        // .expect.element('div[class="row white-font-color peopleBackground"] > div:nth-child(3) > div:nth-child(3)').text.to.equal('0');
    },
    'Select number of infant': function(client) {
        client
        // 選擇嬰兒數
            .waitForElementVisible('div[class="row white-font-color peopleBackground"]', waitElementTime).pause(speedHigh)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(5)').pause(speedHigh)
            .waitForElementVisible('div[class="row white-font-color peopleBackground"] > div:nth-child(6) > div[class="sm-form-select-content"]', waitElementTime).pause(speedHigh)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(6) > div[class="sm-form-select-content"] ul li:nth-child(4)').pause(speedHigh)
            .expect.element('div[class="row white-font-color peopleBackground"] > div:nth-child(5) > div:nth-child(3)').text.to.equal('3');
    },
    'if infant > adult, popup infantRule': function(client) {
        client
        // 當嬰兒數 > 成人數,則跳出提醒"無法受理嬰兒人數多於成人的訂位"
            .waitForElementVisible('div[class="dialog"]', waitElementTime).pause(speedHigh)
            .expect.element('div[class="dialog"] > div:nth-child(1) > div:nth-child(2) span').text.to.equal('無法受理嬰兒人數多於成人的訂位');
        client
        // 重設嬰兒數 = 1
            .click('button[type="button"]').pause(speedHigh)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(5)').pause(speedHigh)
            .waitForElementVisible('div[class="row white-font-color peopleBackground"] > div:nth-child(6) > div[class="sm-form-select-content"]', waitElementTime).pause(speedHigh)
            .click('div[class="row white-font-color peopleBackground"] > div:nth-child(6) > div[class="sm-form-select-content"] ul li:nth-child(2)').pause(speedHigh)
            .expect.element('div[class="row white-font-color peopleBackground"] > div:nth-child(5) > div:nth-child(3)').text.to.equal('1');
        // click search button
        client
            .waitForElementVisible('button[class="btnFindFights"]', waitElementTime)
            .click('button[class="btnFindFights"]').pause(speedHigh)
    },
    'can not select before today': function(client) {
        client
        // 不顯示今天以前的航班資訊
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(4)', 8000).pause(speedHigh)
            .expect.element('div[class="dateListView animateLeft"] div:nth-child(3) > div:nth-child(2)').text.to.equal("N/A");
    },
    'select depart flight date': function(client) {
        client
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(4)', 8000).pause(speedHigh)
            .expect.element('div[class="dateListView animateLeft"] div:nth-child(5) > div:nth-child(2)').text.to.not.equal("N/A");
        // 如果今天查無航班,則往下一天選擇
        // if (client.expect.element('div[class="dateListView animateLeft"] div:nth-child(4) > div:nth-child(2)').text.to.equal('TWD')) {
        client
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(4)', 8000).pause(speedHigh)
            .click('div[class="dateListView animateLeft"] div:nth-child(5)')
            // } else {
            //     client
            //         .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(5)', 8000).pause(speedHigh)
            //         .click('div[class="dateListView animateLeft"] div:nth-child(5)')
            // }
            // 檢查三個艙位等級是否能點選
        client
            .waitForElementVisible('#selectFareView-amount > div:nth-child(1)', waitElementTime)
            .click('#selectFareView-amount > div:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('#selectFareView-amount > div:nth-child(2)', waitElementTime)
            .click('#selectFareView-amount > div:nth-child(2)').pause(speedHigh)
            .waitForElementVisible('#selectFareView-amount > div:nth-child(3)', waitElementTime)
            .click('#selectFareView-amount > div:nth-child(3)').pause(speedHigh);
        // click btnBack(select depart page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'select arrive flight date': function(client) {
        client
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(4)', 8000).pause(speedHigh)
            .expect.element('div[class="dateListView animateLeft"] div:nth-child(4) > div:nth-child(2)').text.to.equal('N/A');
        // 如果今天查無航班,則往下一天選擇
        // if (client.expect.element('div[class="dateListView animateLeft"] div:nth-child(5) > div:nth-child(2)').text === 'TWD') {
        client
            .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(5)', 8000).pause(speedHigh)
            .click('div[class="dateListView animateLeft"] div:nth-child(5)')
            // } else {
            //     client
            //         .waitForElementVisible('div[class="dateListView animateLeft"] div:nth-child(6)', 8000).pause(speedHigh)
            //         .click('div[class="dateListView animateLeft"] div:nth-child(6)')
            // }
            // 檢查三個艙位等級是否能點選
        client
            .waitForElementVisible('#selectFareView-amount > div:nth-child(1)', waitElementTime)
            .click('#selectFareView-amount > div:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('#selectFareView-amount > div:nth-child(2)', waitElementTime)
            .click('#selectFareView-amount > div:nth-child(2)').pause(speedHigh)
            .waitForElementVisible('#selectFareView-amount > div:nth-child(3)', waitElementTime)
            .click('#selectFareView-amount > div:nth-child(3)').pause(speedHigh);
        // click btnBack(select arrive page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime).pause(speedHigh)
            .click('a[class="btnBack"]')
    },
    'passenger adult 1 data': function(client) {
        client
            .waitForElementVisible('div[class="adultPassengerIcon passengerCircle"]', 15000)
            .waitForElementVisible('button[class="btnSelect waves-effect"]', 5000).pause(2000)
            .click('button[class="btnSelect waves-effect"]').pause(speedHigh)
            .waitForElementVisible('div[class="sm-form-select-content"]', waitElementTime)
            .click('div[class="sm-form-select-content"] ul li:nth-child(1)').pause(speedHigh)
            .waitForElementVisible('table', waitElementTime).pause(speedHigh)
            .setValue('input[id="passportNumber"]', '1111').pause(speedHigh)
            .setValue('table tr:nth-child(6) input', '002017/10/10').pause(speedHigh);
        // 002017 測試在firefox可通過
        // click btnBack(passenger adult 1 data page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'passenger info tip': function(client) {
        client
        // 欄位為空,顯示提示訊息
            .waitForElementVisible('div[class="adultPassengerIcon passengerCircle"]', 8000)
            .waitForElementVisible('a[class="btnBack"]', waitElementTime).pause(speedHigh)
            .click('a[class="btnBack"]')
            .waitForElementVisible('.dialog', waitElementTime)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('稱謂 為必要資訊');
        client
            .expect.element('.dialog .list:nth-child(2)').text.to.equal('名(同護照上的英文名) 為必要資訊');
        client
            .expect.element('.dialog .list:nth-child(3)').text.to.equal('姓(同護照上的英文姓) 為必要資訊');
        client
            .expect.element('.dialog .list:nth-child(4)').text.to.equal('護照號碼 為必要資訊');
        client
            .expect.element('.dialog .list:nth-child(5)').text.to.equal('國籍 為必要資訊');
        client
            .expect.element('.dialog .list:nth-child(6)').text.to.equal('護照效期 以旅遊日期計算，效期至少半年。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            // 填寫乘客資訊
            .click('table tr:nth-child(1) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
    },
    'first name illegal': function(client) {
        client
            .setValue('#firstName', '1111').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('名(同護照上的英文名) 請勿輸入特殊符號、空格或是數字；搭機者之訂票姓名需與護照上的英文姓名相同。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('#firstName')
            .setValue('#firstName', 'AAA').pause(speedHigh)
    },
    'last name illegal': function(client) {
        client
            .setValue('#lastName', '1111').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('姓(同護照上的英文姓) 請勿輸入特殊符號、空格或是數字；搭機者之訂票姓名需與護照上的英文姓名相同。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('#lastName')
            .setValue('#lastName', 'BBB').pause(speedHigh)
    },
    'passenger adult 2 data': function(client) {
        client
            .setValue('table tr:nth-child(4) input', '1990/10/10').pause(speedHigh)
            .setValue('input[id="passportNumber"]', '1111').pause(speedHigh)
            .setValue('table tr:nth-child(6) input', '002017/10/10').pause(speedHigh)
            .click('table tr:nth-child(7) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(7) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(7) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
            // click btnBack(passenger adult 2 data page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'repeat passport number': function(client) {
        client
            .waitForElementVisible('.dialog', waitElementTime)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('護照號碼不可重複');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('input[id="passportNumber"]').pause(speedHigh)
            .setValue('input[id="passportNumber"]', '2222').pause(speedHigh)
    },
    'passenger adult 2 service': function(client) {
        client
        // 選擇去程加值服務
            .waitForElementVisible('#addOnsPage', 8000)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(3) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(3) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(3) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(4) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(4) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(4) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(5) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(5) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(5) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(6) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(6) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(6) ul li:nth-child(2)').pause(speedHigh);
        // 選擇回程加值服務
        client
            .waitForElementVisible('#addOnsPage', 8000)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(3) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(3) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(3) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(4) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(4) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(4) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(5) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(5) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(5) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(6) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(6) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(6) ul li:nth-child(2)').pause(speedHigh);
        // click btnBack(passenger adult 2 data page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'passenger child data_1': function(client) {
        client
            .waitForElementVisible('table tr:nth-child(1)', waitElementTime)
            .pause(speedHigh)
            // 填寫乘客資訊
            .click('table tr:nth-child(1) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
            .setValue('#firstName', 'AAA').pause(speedHigh)
            .setValue('#lastName', 'BBB').pause(speedHigh)
    },
    'child age tip': function(client) {
        client
            .setValue('table tr:nth-child(4) input', '2003/10/10').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('孩童需年滿2歲，輸入的孩童生日無效。請重新輸入正確的生日日期。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('table tr:nth-child(4) input')
            .setValue('table tr:nth-child(4) input', '2015/10/10').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('孩童需年滿2歲，輸入的孩童生日無效。請重新輸入正確的生日日期。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedHigh)
            .clearValue('table tr:nth-child(4) input')
            .setValue('table tr:nth-child(4) input', '2010/10/10').pause(speedHigh)
    },
    'passenger child data_2': function(client) {
        client
            .setValue('input[id="passportNumber"]', '3333').pause(speedHigh)
            .setValue('table tr:nth-child(6) input', '002017/10/10').pause(speedHigh)
            .click('table tr:nth-child(7) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(7) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(7) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
    },
    'passenger child service': function(client) {
        client
        // 選擇去程加值服務
            .waitForElementVisible('#addOnsPage', 8000)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(3) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(3) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(3) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(4) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(4) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(4) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(5) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(5) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(5) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(6) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(6) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(2) .addOnsItem:nth-child(6) ul li:nth-child(2)').pause(speedHigh);
        // 選擇回程加值服務
        client
            .waitForElementVisible('#addOnsPage', 8000)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(3) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(3) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(3) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(4) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(4) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(4) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(5) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(5) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(5) ul li:nth-child(2)').pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(6) div[class="form-control no-frame white-font-color"]').pause(speedHigh)
            .waitForElementVisible('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(6) div[class="sm-form-select"]', waitElementTime).pause(speedHigh)
            .click('#addOnsPage > div:nth-child(3) .addOnsItem:nth-child(6) ul li:nth-child(2)').pause(speedHigh);
        // click btnBack(passenger adult 2 data page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'passenger infant data_1': function(client) {
        client
            .waitForElementVisible('div[class="chdPassengerIcon passengerCircle"]', 8000)
            .pause(speedLow)
            // 填寫乘客資訊
            .click('table tr:nth-child(1) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
            .setValue('#firstName', 'AAA').pause(speedHigh)
            .setValue('#lastName', 'BBB').pause(speedHigh)
    },
    'infant age tip': function(client) {
        client
            .setValue('table tr:nth-child(4) input', '2003/10/10').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('請檢查旅客生日或年齡，以出發日期為基準計算：嬰兒為小於兩歲且大於八天之旅客。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('table tr:nth-child(4) input')
            .setValue('table tr:nth-child(4) input', '2020/10/10').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('請檢查旅客生日或年齡，以出發日期為基準計算：嬰兒為小於兩歲且大於八天之旅客。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('table tr:nth-child(4) input')
            .setValue('table tr:nth-child(4) input', '2016/01/06').pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime).pause(speedHigh)
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('請檢查旅客生日或年齡，以出發日期為基準計算：嬰兒為小於兩歲且大於八天之旅客。');
        client
            .pause(speedHigh)
            .click('.dialog button[type="button"]').pause(speedLow)
            .clearValue('table tr:nth-child(4) input')
            .setValue('table tr:nth-child(4) input', '2015/12/06').pause(speedHigh)
    },
    'passenger infant data_2': function(client) {
        client
            .setValue('input[id="passportNumber"]', '5555').pause(speedHigh)
            .setValue('table tr:nth-child(6) input', '002017/10/10').pause(speedHigh)
            .click('table tr:nth-child(7) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(7) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(7) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedLow)
            // click btnBack(passenger infant 2 data page)
        client
            .waitForElementVisible('a[class="btnBack"]', waitElementTime).pause(speedHigh)
            .click('a[class="btnBack"]').pause(speedHigh)
    },
    'insure': function(client) {
        client
            .waitForElementVisible('div[class="white-font-color"] > label:nth-child(4)', waitElementTime).pause(speedHigh)
            .click('div[class="white-font-color"] > label:nth-child(4)').pause(speedHigh)
            .waitForElementVisible('div[class="fullScreen  modal-body"]', waitElementTime)
            .moveToElement('div[class="modal-content"] > div:nth-child(2) > div:nth-child(1)', 10, 3300);
        client
            .moveToElement('#termInsurance', 10, 140);
        client
            .waitForElementVisible('div[class="fullScreen  modal-footer"] span[class=" fRight"]', waitElementTime).pause(speedHigh)
            .click('div[class="fullScreen  modal-footer"] span[class=" fRight"]').pause(speedHigh)
            .setValue('#taiwaneseId', 'A123456789').pause(speedHigh);
        // click btnBack(insure page)
        client
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
            .waitForElementVisible('button[class="btnSelect waves-effect"]', waitElementTime).pause(3000)
            .click('#confirm').pause(speedHigh)
            .waitForElementVisible('.dialog', waitElementTime)
            // 欄位為空,顯示提示訊息
            .expect.element('.dialog .list:nth-child(1)').text.to.equal('稱謂 為必要資訊');
        client
            .expect.element('.dialog .list:nth-child(2)').text.to.equal('名為必填項目');
        client
            .expect.element('.dialog .list:nth-child(3)').text.to.equal('姓為必填項目');
        client
            .expect.element('.dialog .list:nth-child(4)').text.to.equal('國碼為必填項目');
        client
            .expect.element('.dialog .list:nth-child(5)').text.to.equal('EMAIL為必填項目');
        client
            .expect.element('.dialog .list:nth-child(6)').text.to.equal('持卡人為必填項目');
        client
            .expect.element('.dialog .list:nth-child(7)').text.to.equal('信用卡卡號為必填項目');
        client
            .expect.element('.dialog .list:nth-child(8)').text.to.equal('信用卡效期(月份)為必填項目');
        client
            .expect.element('.dialog .list:nth-child(9)').text.to.equal('信用卡效期(年份)為必填項目');
        client
            .expect.element('.dialog .list:nth-child(10)').text.to.equal('信用卡驗證碼(CVV) 為必填項目');
        client
            .pause(speedLow)
            .click('.dialog button[type="button"]').pause(speedLow)
            // 填寫付款人和信用卡資訊
            .waitForElementVisible('table', waitElementTime).pause(speedHigh)
            .click('table tr:nth-child(1) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime)
            .click('table tr:nth-child(1) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
            .setValue('#firstName', 'AAA').pause(speedHigh)
            .setValue('#lastName', 'BBB').pause(speedHigh)
            .click('table tr:nth-child(4) div[class="form-control no-frame dropDownTitle white-font-color"]').pause(speedHigh)
            .waitForElementVisible('table tr:nth-child(4) div[class="sm-form-select"] ul li:nth-child(1)', waitElementTime).pause(speedHigh)
            .click('table tr:nth-child(4) div[class="sm-form-select"] ul li:nth-child(1)').pause(speedHigh)
            .setValue('#mobileNum', '0912123123').pause(speedHigh)
            .setValue('#email', 'noel5219@gmail.com').pause(speedHigh)
            .setValue('#emailConfirm', 'noel5219@gmail.com').pause(speedHigh)
            .setValue('#num', '5430450100001219').pause(speedHigh)
            .setValue('#cvvNum', '214').pause(speedHigh)
            .click('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div[class="form-control no-frame dropDownTitle black-font-color"]').pause(speedHigh)
        client
            .moveToElement('div[class="container creditCardDiv"] > .row:nth-child(2) > div:nth-child(1) > div:nth-child(2) ul', 10, 400);
        client
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
