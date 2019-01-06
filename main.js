function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    notify();
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        notify();
        notify1();
      }
    });
  }

  function notify() {
    var notification = new Notification('Hi Amit', {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvt7AmcKGr15pu_lt40-92Msj4Uylwho6sZIm-DhEkyHpD_6x',
      body: "Hey! Checkout whats on reddit!",
    });

    notification.onclick = function () {
      window.open("https://www.reddit.com/");
    };
    setTimeout(notification.close.bind(notification), 7000);

  }

}


notifyMe();
