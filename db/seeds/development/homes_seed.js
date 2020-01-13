
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('homes').del()
    .then(function () {
      // Inserts seed entries
      return knex('homes').insert([
        {id: 1, size: 3000,  colour: 'blue'},
        {id: 2, size: 4000, colour: 'red'},
        {id: 3, size: 2000,  colour: 'green'},
        {id: 4, size: 7000,  colour: 'yellow'}
      ]);
    });
};
