import app from './app';
import sequelize from './models/sequelize'

const { PORT = 8080 } = process.env;

// Added for debugging purposes, to be removed later
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
