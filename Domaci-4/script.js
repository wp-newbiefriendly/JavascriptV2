let dayOfTheWeek = "ponedeljak";
if (dayOfTheWeek == "subota" || dayOfTheWeek == "nedelja") {
    console.log("Weekend");
}
else if(dayOfTheWeek == "petak") {
    console.log("Weekend is coming");
}
else {
    console.log("Work work");
}

switch (dayOfTheWeek) {
    case "subota":
        console.log("Weekend");
        break;
    case "nedelja":
        console.log("Weekend");
        break;
    case "petak":
        console.log("Weekend is coming");
        break;
    default:
        console.log("Work work");

}