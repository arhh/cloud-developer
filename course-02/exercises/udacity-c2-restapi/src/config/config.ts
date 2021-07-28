// Database and JWT configuration. It can be imported and references inside any
// source file
export const config = {
  "postgres": {
      "username": process.env.POSTGRES_DEV_USERNAME,
      "password": process.env.POSTGRES_DEV_PASSWORD,
      "database": process.env.POSTGRES_DEV_DATABASE,
      "host": process.env.POSTGRES_DEV_HOST,
      "dialect": process.env.POSTGRES_DIALECT
  },
  "dev": {
    "username": process.env.POSTGRES_DEV_USERNAME,
    "password": process.env.POSTGRES_DEV_PASSWORD,
    "database": process.env.POSTGRES_DEV_DATABASE,
    "host": process.env.POSTGRES_DEV_HOST,
    "dialect": process.env.POSTGRES_DIALECT,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": process.env.POSTGRES_PROD_USERNAME,
    "password": process.env.POSTGRES_PROD_PASSWORD,
    "database": process.env.POSTGRES_PROD_DATABASE,
    "host": process.env.POSTGRES_PROD_HOST,
    "dialect": process.env.POSTGRES_DIALECT
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
   }
}
