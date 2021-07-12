const MailingListService = {
  getAllUsers(knex) {
    return knex.select("*").from("mailing_list");
  },
  insertUserDetails(knex, first_name, last_name, email) {
    return knex("mailing_list")
      .insert({
        first_name,
        last_name,
        email,
      })
      .returning("*")
      .then((rows) => rows[0]);
  },
};

module.exports = MailingListService;
