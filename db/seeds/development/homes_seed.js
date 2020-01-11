
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('homes').del()
    .then(function () {
      // Inserts seed entries
      return knex('homes').insert([
        {id: 1, size: 3000, material: 'brick', colour: 'blue'},
        {id: 2, size: 4000, material: 'wood', colour: 'red'},
        {id: 3, size: 2000, material: 'stone', colour: 'green'},
        {id: 4, size: 7000, material: 'straw', colour: 'yellow'}
      ]);
    });
};
