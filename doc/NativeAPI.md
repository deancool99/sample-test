# V-Air App Native API @ Javascript
- ## Platform
  - ### Webview to Native
  >Android

    ```
    Native.MethodName(args);

    EX : Native.transform(
      JSON.stringify({"action": "start"}));
    ```
  >IOS

    ```
    var request = 'IOS:MethodName:' + args;

    EX :

    var request = 'IOS:transform:{"action":"start"}';
    var iframe = document.createElement('IFRAME');
    iframe.setAttribute('src', request);
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
    ```

  - ### Native to Webview
    >Android

      ```
      //呼叫webview的notice方法並傳遞參數

      webview.loadUrl("javascript:Webview.notice({\"action\": \"back\"});");
      ```
    >IOS

      ```

      [webView stringByEvaluatingJavaScriptFromString: [NSString stringWithFormat:@"notice('%@')",myval ]];
      ```
---

  - ### Method : transform (v1)
  >  轉場效果

   - #####  args
    ```
    {
      action:'start'//[String],start | end
    }
    ```

    - #### Sample
  > Android

      ```
        var options = {
          "action":"start"
        };

        if(typeof Native.transform === 'function'){
            Native.transform(JSON.stringify(options));
        }
      ```
  > IOS

      ```
        var options = {
          "action":"start"
        };
        var opts = JSON.stringify(options);
        window.location  = 'IOS:transform:' + opts;
      ```

-----

- ### Method : drawer (v1)
>  browser handlebar

 - #####  args
  ```
  {
    action:'hide'//[String],hide | show
  }
  ```

  - #### Sample
> Android

    ```
      var options = {
        "action":"hide"
      };

      if(typeof Native.drawer === 'function'){
          Native.drawer(JSON.stringify(options));
      }
    ```
> IOS

    ```
      var options = {
        "action":"hide"
      };
      var opts = JSON.stringify(options);
      window.location  = 'IOS:drawer:' + opts;
    ```
----

- ### Method : browser (v1)
>  browser handlebar

 - #####  args
  ```
  {
    action:'close'//[String]
  }
  ```

  - #### Sample
> Android

    ```
      var options = {
        "action":"close"
      };

      if(typeof Native.browser === 'function'){
          Native.browser(JSON.stringify(options));
      }
    ```
> IOS

    ```
      var options = {
        "action":"close"
      };
      var opts = JSON.stringify(options);
      window.location  = 'IOS:browser:' + opts;
    ```
----

- ### Method : datepicker (v1)
>  webview DatePicker

 - #####  args
  ```
  {
    action:'show',//[String] close or show
    name:'selcect Date',//[String]
    min:'2016-01-01',//[String],
    max:'2016-06-30',
    start:'2016-02-21',
    end:'2016-02-27',
    selected:'2016-02-27',
    id:'testDate'
  }
  ```

  - #### Sample
> Android

    ```
      var options = {
        action:'show'
        name:'selcect Date',
        min:'2016-01-01',
        max:'2016-06-30',
        start:'2016-02-21',
        end:'2016-02-27',
        selected:'2016-02-27',
        id:'testDate'
      };

      if(typeof Native.datepicker === 'function'){
          Native.datepicker(JSON.stringify(options));
      }
    ```
> IOS

    ```
      var options = {
        action:'show'
        name:'selcect Date',
        min:'2016-01-01',
        max:'2016-06-30',
        start:'2016-02-21',
        end:'2016-02-27',
        selected:'2016-02-27',
        id:'testDate'
      };
      var opts = JSON.stringify(options);
      window.location  = 'IOS:datepicker:' + opts;
    ```
> Native callback method

    ```
      var options = {
        action:'change', // change | close
        name:'selcect Date',
        min:'2016-01-01',
        max:'2016-06-30',
        start:'2016-02-21',
        end:'2016-02-27',
        selected:'2016-02-27',
        id:'testDate'
      };
      javascript:Webview.datepicker(JSON.stringify(options));
    ```

----

- ### Method : notice (v1)
>  webview notice

  - #####  args
    ```
    {
    action:'error',//[String]
    name:'token',//[String]
    message:'expired',//[String]
    }
    ```

  - #### Sample
  > Android

    ```
      var options = {
        action:'error',
        name:'token',
        message:'expired'
      };

      if(typeof Native.notice === 'function'){
          Native.notice(JSON.stringify(options));
      }
    ```
  > IOS

    ```
      var options = {
        action:'error',
        name:'token',
        message:'expired'
      };
      var opts = JSON.stringify(options);
      window.location  = 'IOS:notice:' + opts;
    ```
