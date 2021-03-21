const wa = require('@open-wa/wa-automate');

module.exports = wa.create({
  sessionId: 'vacina_campos',
  authTimeout: 60, // wait only 60 seconds to get a connection with the host account device
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: wa.NotificationLanguage.PTBR,
  logConsole: false,
  popup: false,
  qrTimeout: 0, // 0 means it will wait forever for you to scan the qr code
});
