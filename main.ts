interface objType {
    fName: string;
    age: number;
    hobbies: string[];
    isTrader: Boolean;
    CNIC: number;
    address:{
    streetName: string;
    city:string;
    country:string;
    zipcode:number;
    socialMedia:{
        s1:string;
        s2:string;
    }
    }

};
let objType = {
    fName: "babar",
    age: 30,
    hobbies:["cricket","football","hockey"],
    isTrader: true,
    CNIC: 1234569,
    adress:{
        streetName: "abc street",
        city: "karachi",
        country: "pakistan",
        zipcode: 12345,
        socialMedia:{
            s1: "face book",
            s2: "instagrame",
        }

    }
};
console.log(objType)
