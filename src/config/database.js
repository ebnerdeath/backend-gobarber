module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // Nomenclatura de tabelas e colunas com _ e não camel case
    underscoredAll: true, // Nomenclatura de tabelas e colunas com _ e não camel case
  },
};
