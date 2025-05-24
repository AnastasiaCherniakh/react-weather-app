export default function FormattedDate({ date }) {
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const weekday = weekdays[date.getDay()];
    let hours = date.getHours();
    if(hours < 10) hours = `0${hours}`
    let minutes = date.getMinutes();
    if(minutes < 10) minutes = `0${minutes}`
    return <time>{weekday}, {hours}:{minutes}</time>
}