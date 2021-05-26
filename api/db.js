import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
    pool: {
      max: 7,
      min: 2,
      idle: 10000,
      acquire: 30000,
    },
    logging: console.log,
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to -- MySQL -- established')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize
