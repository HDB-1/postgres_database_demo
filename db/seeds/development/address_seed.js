
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {id: 1, houseNum: '18', streetName: 'The Street', postcode: 'GU32 9PO'},
        {id: 2, houseNum: '23', streetName: 'The Road', postcode: 'OX4 5UE'},
        {id: 3, houseNum: '65', streetName: 'The Close', postcode: 'SE1 1DN'},
        {id: 4, houseNum: '7', streetName: 'The Alley', postcode: 'EL43 9DG'},
      ]);
    });
};
