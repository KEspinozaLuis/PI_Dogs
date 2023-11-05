
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/server.js');
const { conn } = require('./src/db.js');
const {PORT } = process.env;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT , () => {
    console.log('Listening at', PORT ); // eslint-disable-line no-console
  });
});
