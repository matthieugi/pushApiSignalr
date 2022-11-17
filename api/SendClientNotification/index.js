const webpush = require('web-push');

// VAPID keys should be generated only once.
const vapidKeys = {
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


module.exports = async function (context, req) {
    const notificationDetails = req.body;

    await webpush.sendNotification(notificationDetails.subscription, Buffer.from(JSON.stringify({
        title: 'Notification Service in Azure Function',
        message: notificationDetails.message
    })));
}