var rewire = require('rewire');
//
describe("loginStore", function() {
    var loginStore,
        login,
        verifyLogin,
        getUser,
        result,
        response,
        token;

    loginStore = rewire('Stores/loginStore');
    token = 'TFUG:IHOIHF&*&YYO&^TIGHJVGHCVKJ';

    beforeEach(function() {
        result = [];
        login = loginStore.__get__('login');
        verifyLogin = loginStore.__get__('verifyLogin');
        getUser = loginStore.__get__('getUser', function(opts, callback) {
            response = {
                data: "",
                status: 0,
                statusText: "",
                headers: {},
                config: {}
            };
        });
    });


    //UC01
    it("2.1 登入事件應該要被觸發", function() {
        spyOn(loginStore, 'getUser');
        login("admin", "AAAAaaaa1111");
        expect(loginStore.getUser).toHaveBeenCalledWith();
    });

    it("3.1 欄位檢查：登入事件時, 登入名為空, 拒絕登入", function() {
        expect(verifyLogin("", "test1234")).toEqual([{
            message: 'account不可為空'
        }]);
    });

    it("3.2 欄位檢查：登入事件時, 密碼為空, 拒絕登入", function() {
        expect(verifyLogin("Admin", "")).toEqual([{
            message: 'pw不可為空'
        }]);
    });

    it("3.3 欄位檢查：登入事件時, 密碼為長度不符4~12位數, 拒絕登入", function() {
        expect(verifyLogin("Admin", "Aa1")).toEqual([{
            message: '密碼長度需介於:4~12'
        }]);
    });

    it("3.4 欄位檢查：登入事件時, 密碼不符至少數字、大寫、小寫英文各一個, 拒絕登入", function() {
        expect(verifyLogin("Admin", "111111")).toEqual([{
            message: '密碼至少數字、大寫、小寫英文各一個'
        }]);
    });
    it("4.1 當系統回應登入失敗, 應該觸發顯示錯誤訊息事件並包含訊息、剩餘次數", function() {

    });
    // it("5.1 測試正常登入(至少獲取CustomerName, UserName, 上次登入時間, 客戶所屬BU的本地時間)", function() {
    // });
    // it("5.2 正常登入後, 檢查token內容", function() {
    // });
    //   /*以下之後再補*/
    //   // it("3.3 欄位檢查：登入事件時, 頁面驗證碼不正確, 拒絕登入");
    //   // it("6.1 登入後, 系統提示強制修改密碼, 觸發強制修改密碼事件");
    //   // it("6.2 強制修改密碼: 兩次密碼不吻合, 不發送修改請求");
    //   // it("6.3 強制修改密碼: 密碼複雜度不符合要求, 觸發再次設定事件");
    //   // it("6.4 強制修改密碼: 系統回應客戶輸入的短信驗證碼不正確或逾時");
    //   // it("6.5 強制修改密碼: 當重新發送短信驗證事件被觸發, 應該發出請求");
    //   // it("6.6 強制修改密碼: 成功修改密碼, 觸發登入成功事件");
    //   //
    //   // it("7.1 登入成功並得知該用戶已登入, 觸發詢問是否踢掉前一登錄者 or 放棄登入");
    //   // it("7.2 當選擇踢掉前一登入者, 事件應該被觸發");
    //   // it("7.3 當選放棄登入, 客戶資料應該還原");


});
