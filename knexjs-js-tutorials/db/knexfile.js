module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // TODO change to your db name
      database: "rahulpgsql",

      // change to your db user
      user: "",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
