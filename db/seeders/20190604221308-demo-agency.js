'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agencies', [{  
    name: "Romulo0 Agency",
    phone_1: 1234,
    phone_2: 5678,
    address: "Barquisimeto",
    email: "romulo0@gmail.com",
    general_enquiry_email: "romulo@gmail.com",
    property_enquiry_email: "romulo@gmail.com"
    },
    {  
      name: "Romulo1 Agency",
      phone_1: 1234,
      phone_2: 5678,
      address: "Barquisimeto",
      email: "romulo1@gmail.com",
      general_enquiry_email: "romulo@gmail.com",
      property_enquiry_email: "romulo@gmail.com"
    },
    {  
      name: "Romulo2 Agency",
      phone_1: 1234,
      phone_2: 5678,
      address: "Barquisimeto",
      email: "romulo2@gmail.com",
      general_enquiry_email: "romulo@gmail.com",
      property_enquiry_email: "romulo@gmail.com"
    },
    {  
      name: "Romulo3 Agency",
      phone_1: 1234,
      phone_2: 5678,
      address: "Barquisimeto",
      email: "romulo3@gmail.com",
      general_enquiry_email: "romulo@gmail.com",
      property_enquiry_email: "romulo@gmail.com"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agencies', null, {});
  }
};
