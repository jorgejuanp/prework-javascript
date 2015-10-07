var countries = [];

countries.push("Spain", "Germany", "USA", "Finland");

function writeCountries(array) {
    for(var i = 0; i < array.length; i++) {
        if(i < array.length - 2) {
            console.log(array[i] + ", ");
        }else if(i < array.length - 1) {
            console.log(array[i] + " and ");
        }else {
            console.log(array[i] + "");
        }
    }
}

writeCountries(countries);