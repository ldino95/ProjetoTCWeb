import faker from 'faker';

export const users = Array.from({ length: 1 }, () => (

    {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        addressCampo: faker.address.streetAddress(),
        emailAdress: faker.internet.email(),
        phoneNumber: "1234567890",
        skillsCampo: "APIs",
        countryCampo: faker.address.country(),
        birthYear: "1995",
        birthMonth: faker.date.month(),
        birthDay: "5",
        passowordFirst: "123456@Abc",
        passowordSecond: "123456@Abc",
        

    }));

