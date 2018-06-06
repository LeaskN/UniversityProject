module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/universitiesdb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
