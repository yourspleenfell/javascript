function daysToBirthday(days)
{
    while (days > 29)
    {
        console.log("There are", days, "days until my birthday.", "Such a long, sad time");
        days = days - 1;
    }
    while (days > 5)
    {
        console.log("There are", days, "days until my birthday.", "Rejoice!");
        days = days - 1;
    }
    while (days > 0)
    {
        console.log("We only have", days, "DAYS LEFT! CAN YOU FEEL IT?!")
        days = days - 1;
    }
    if (days == 0)
    {
        console.log("Happy, happy birthday!");
        console.log("From all of us to you!");
        console.log("We wish it was our birthday,");
        console.log("so we could party too!");
        console.log("Hey!!!")
    }
}
daysToBirthday(40)