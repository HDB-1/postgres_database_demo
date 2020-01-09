exports.up = function(knex) {
    return knex.schema.table('address', table => {
        table.renameColumn('houseNum', 'house_num')
        table.renameColumn('streetName', 'street_name')
        })
};

exports.down = function(knex) {
    return knex.schema.table('address', table => {
        table.renameColumn('house_num', 'houseNum')
        table.renameColumn('street_name', 'streetName')
        })
};