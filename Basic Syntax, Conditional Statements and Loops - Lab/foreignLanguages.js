function languages(country) {
    switch (country) {
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Mexico":
        case "Argentina":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}

languages("USA");
languages("England");
languages("Spain");
languages("Mexico");
languages("Argentina");
languages("Bulgaria");
