self.addEventListener('install', () => {});

self.addEventListener('push', event => {
    const eventData = event.data?.json();
    self.registration.showNotification(eventData.title, {
        body: eventData.message
    });
});