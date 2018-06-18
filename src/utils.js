
export const getTimeDiff = (timestamp) => {

    const timeNow = new Date().getTime();
    let secondsSince = (timeNow - timestamp) / 1000;

    const months = Math.floor(secondsSince / 2678400);
    secondsSince -= months * 2678400;
    if (months) return months === 1 ? `${months} month ago` : `${months} months ago`;

    const days = Math.floor(secondsSince / 86400);
    secondsSince -= days * 86400;
    if (days) return days === 1 ? `${days} day ago` : `${days} days ago`;

    const hours = Math.floor(secondsSince / 3600) % 24;
    secondsSince -= hours * 3600;
    if (hours) return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;

    const minutes = Math.floor(secondsSince / 60) % 60;
    secondsSince -= minutes * 60;
    if (minutes) return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;

    const seconds = Math.floor(secondsSince % 60);
    return seconds === 1 ? `${seconds} second ago` : `${minutes} minutes ago`;
}

export const filterItem = (array, key) => {
    return [...array].filter(({ _id }) => _id === key)[0];
};