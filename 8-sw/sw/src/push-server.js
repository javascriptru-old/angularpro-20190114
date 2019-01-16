const webpush = require('web-push');

webpush.setVapidDetails(
    'https://localhost:8080',
    "BDvmxd_PZxD2s5pYKR5td2WZARaf4hDb6nNU_5dHnhpXonUwL2DOw5kqhzc3rj7vfGChe0cAipocAsbWdw64ltM",
    "NMECbSLA5Xp6a1O5outyzTSZS5xRzozVRTE3Yg7VP3Q"
);

const subscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dTM7DeiwRBU:APA91bG4EaXwlB6YPXtQlFNY12punngzkU0x3xXXShvGp5LZSbh1qYKRv9_tp0Fte56UbyjkefJIIVspuuGeWW8MZNV9zU1tSAj5fvKgPpQhEio1J3Ti8O_gKbc4uIt2bceQJFusLodV",
    "expirationTime": null,
    "keys": {
      "p256dh": "BApji_7pcT6k0-BpyVED_xS0RZuz3rxjRYLSwB_Y683SXWrQ6xcVK8PCP_qlM95S-dryyyXSvuHF6JEBW99M6zA",
      "auth": "t4ziZoITlqFKXGU6OYjEcA"
    }
  }

webpush.sendNotification(subscription, JSON.stringify({"message": "test"}));