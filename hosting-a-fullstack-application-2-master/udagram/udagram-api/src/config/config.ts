import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "08112001",
  database: "postgres",
  dbPort: 5432,
  port: 8081,
  host: "database-2.cis7fzfi1nuk.us-east-1.rds.amazonaws.com",
  aws_region: "us-east-1",
  aws_profile: "default",
  aws_media_bucket: "",
  url: "http://localhost:8081",
  jwt: {
    secret: "abcxyz",
  },
};
