
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Pedro', age: 54, occupants: 3},
        {id: 2, name: 'Pablo', age: 23, occupants: 5},
        {id: 3, name: 'Carlos', age: 43, occupants: 2},
        {id: 4, name: 'Fred', age: 32, occupants: 7}
      ]);
    });
};
