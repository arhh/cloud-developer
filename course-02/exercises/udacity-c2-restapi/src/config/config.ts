export const config = {
  "postgres": {
      "username": "postgres",
      "password": "kviF4GgYwxmXeUmiejkE",
      "database": "udagramahdev",
      "host": "udagram-ah-dev.cxwke0jeljg7.us-east-1.rds.amazonaws.com",
      "dialect": "postgres"
  },
  "dev": {
    "username": "postgres",
    "password": "kviF4GgYwxmXeUmiejkE",
    "database": "udagramahdev",
    "host": "udagram-ah-dev.cxwke0jeljg7.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "jwtsecret"
   }
}
