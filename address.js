let uniAddress = {
    number: "69A",
    road: "Fulford Road",
    city: "York",
    county: "North Yorkshire",
    postcode: "YO10 4BD"
};

let homeAddress = {
    number: "41",
    road: "Hillcrest Avenue",
    city: "Eastleigh",
    county: "Hampshire",
    postcode: "SO53 2JR"
};

console.log(uniAddress, homeAddress);

class Address {
    number;
    road;
    city;
    county;
    postcode;

    constructor(number, road, city, county, postcode) {
        this.number = number;
        this.road = road;
        this.city = city;
        this.county = county;
        this.postcode = postcode;
    }
}

let uniAddressAgain = new Address("69A", "Fulford Road", "York", "North Yorshire", "YO10 4BD");
let homeAddressAgain = new Address("41", "Hillcrest Avenue", "Eastleigh", "Hampshire", "SO53 2JR");

console.log(uniAddressAgain, homeAddressAgain);