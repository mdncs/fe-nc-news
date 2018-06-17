
export const getTimeDiff = (timestamp) => {

    const timeNow = new Date().getTime();
    let secondsSince = (timeNow - timestamp) / 1000;

    const days = Math.floor(secondsSince / 86400);
    secondsSince -= days * 86400;
    if (days) return `${days} days ago`;

    const hours = Math.floor(secondsSince / 3600) % 24;
    secondsSince -= hours * 3600;
    if (hours) return `${hours} hours ago`;

    const minutes = Math.floor(secondsSince / 60) % 60;
    secondsSince -= minutes * 60;
    if (minutes) return `${minutes} minutes ago`;

    return `${Math.floor(secondsSince % 60)} seconds ago`;
}