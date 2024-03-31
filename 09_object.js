let person = {
    name : "Gajanan",
    city : "pune",
    experience : 10
}
console.log(person);
console.table(person);
console.log(`type of person is : ${typeof person}`);
console.log("\n");


console.log("============== Accessing Object Property ==============");

//using [] notation
console.log(`Person City is: ${person["city"]}`);

//using . notation
const personExp = person.experience;
console.log(`person experience is : ${personExp}`);

console.log("\n");
console.log("============== adding  Property in Object ==============");
person.isMarried = true;
console.log(person);


console.log("\n");
console.log("============== deleting  Property from an Object ==============");
delete person.experience;
console.log(person);

console.log("\n");
console.log("============== Creating an Empty Object ==============");

let address =  {

}
address.pin = 112233;
console.log(address);


console.log("\n");
console.log("============ creating an method inside object ===============");

let bankSBI = {
    Name : "SBI Wakad",
    City : "Pune",
    totalStaff : 25,
    homeLoanROI : 9.5,
    bankDetails : function(){
        console.log(`All Bank Details`);
        console.log(`Name: ${this.Name}, City: ${this.City}, Total Staff: ${this.totalStaff}, Home Loan ROI: ${this.homeLoanROI}`);
    }
}
bankSBI.bankDetails();

console.log("\n");

console.log(`======== Nested Object============`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
        floorNumber: 3,
        street: "Bergen road",
        city: "LA",
        state: "ABC",
        getAddress: function(){
            const address =  `Flat Number: ${this.flatNo}, Floor Number: ${this.floorNumber}, Street: ${this.street}, City: ${this.city}, State: ${this.state}`;
            return address;
        }
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);
console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ";


console.log(`===== Jenny complete address to courier is======`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);