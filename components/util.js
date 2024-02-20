//Used to give us our extra 0's so instead of 0:2:13 it would look like 00:02:13
const padToTwo = (number) => (number <=9 ? `0${number}` : number)

export const displayTime = (milliseconds) => {
    let minutes = 0;
    let seconds = 0;

    if (milliseconds < 0){
        milliseconds = 0;
    }

    //For output of milliseconds
    if (milliseconds < 100) {
        return `00:00:${padToTwo(milliseconds)}`;
    }

    //Past 100 milliseconds
    let remainMSeconds = milliseconds % 100;
    seconds = (milliseconds - remainMSeconds) / 100;

    //For output of seconds
    if (seconds < 60){
        return `00:${padToTwo(seconds)}:${padToTwo(remainMSeconds)}`;
    }

    //Past 60 seconds
    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    //For output of full time
    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(remainMSeconds)}`
}