
function calculateRemainingDays(eventDate){
    const currDate = new Date();
    const eventDay=new Date(eventDate);
    const differceInTime= Math.abs(currDate-eventDay);
    const days=Math.ceil(differceInTime/(1000*60*60*24));
    return days;
}
const eventDate= '2023-08-31';
console.log(calculateRemainingDays(eventDate));
