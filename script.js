//your JS code here. If required.

    function detectBrowser() {
      var browserName = "";
      var browserVersion = "";

      if (navigator.userAgent.indexOf("Chrome") != -1) {
        browserName = "Google Chrome";
        browserVersion = navigator.userAgent.match(/Chrome\/(\d+)/)[1];
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browserName = "Mozilla Firefox";
        browserVersion = navigator.userAgent.match(/Firefox\/(\d+)/)[1];
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browserName = "Apple Safari";
        browserVersion = navigator.userAgent.match(/Version\/(\d+)/)[1];
      } else if (navigator.userAgent.indexOf("Opera") != -1) {
        browserName = "Opera";
        browserVersion = navigator.userAgent.match(/Opera\/(\d+)/)[1];
      } else if (navigator.userAgent.indexOf("Edge") != -1) {
        browserName = "Microsoft Edge";
        browserVersion = navigator.userAgent.match(/Edge\/(\d+)/)[1];
      } else if (navigator.userAgent.indexOf("MSIE") != -1) {
        browserName = "Internet Explorer";
        browserVersion = navigator.userAgent.match(/MSIE (\d+)/)[1];
      }

      var message = "You are using " + browserName + " (version " + browserVersion + ")";
      document.getElementById("browser-info").textContent = message;
    }
  