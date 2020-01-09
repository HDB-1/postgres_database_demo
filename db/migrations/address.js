exports.up = function(knex) {
    return knex.schema.createTable('address', function(table) {
      table.increments();
      table.integer('houseNum').notNullable();
      table.string('streetName').notNullable();
      table.varchar('postcode').notNullable();
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('address');
  }
  //fdhgsjhflghfdlgjhfldkgjhldfjghldfghlsjdkfghdjf heeey