export function showNotification(senderName: string, message: any) {
    if ("Notification" in window) {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification(senderName, {
                    body: message,
                });
            }
        });
    }
}