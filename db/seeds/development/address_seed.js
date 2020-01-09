
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {id: 1, house_num: '18', street_name: 'The Street', postcode: 'GU32 9PO'},
        {id: 2, house_num: '23', street_name: 'The Road', postcode: 'OX4 5UE'},
        {id: 3, house_num: '65', street_name: 'The Close', postcode: 'SE1 1DN'},
        {id: 4, house_num: '7', street_name: 'The Alley', postcode: 'EL43 9DG'},
      ]);
    });
};
