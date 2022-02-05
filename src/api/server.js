require('dotenv').config();
const app = require('./app');

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
});
