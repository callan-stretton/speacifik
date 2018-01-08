
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenarios').insert([
        {id: 1, scenario: 'Greeting', image: '/images/greeting.png', language_id: 1},
        {id: 2, scenario: 'Coffee', image: '/images/coffee.png', language_id: 1},
        {id: 3, scenario: 'Help', image: '/images/help.png', language_id: 1},
        {id: 4, scenario: 'Family', image: '/images/family.png', language_id: 1},
        {id: 5, scenario: 'Food', image: '/images/food.png', language_id: 1}
      ])
    })
}
