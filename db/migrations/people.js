exports.up = function(knex) {
    return knex.schema.createTable('people', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.integer('age').notNullable();
      table.integer('homies').notNullable();
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('people');
  }