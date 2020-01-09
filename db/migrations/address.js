exports.up = function(knex) {
    return knex.schema.createTable('address', function(table) {
      table.increments();
      table.integer('house_num').notNullable();
      table.string('street_name').notNullable();
      table.varchar('postcode').notNullable();
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('address');
  }