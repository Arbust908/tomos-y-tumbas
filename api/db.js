const Sequelize = require('sequelize')
const sequelize = new Sequelize('tomos-y-tumbas', 'tyt', 'tomosytumbas', {
  host: 'localhost',
  dialect: 'mariadb',
})
/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// $host = '127.0.0.1'
// $port = 3306
// $socket = ''
// $user = 'root'
// $password = ''
// $dbname = 'tomos-y-tumbas'

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
  .finally(() => {
    sequelize.close()
  })
