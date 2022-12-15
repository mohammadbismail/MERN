const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumner: faker.phone.number(),
    password: faker.internet.password(),
  };
};
const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});
app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});
app.get("/api/user/company", (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
