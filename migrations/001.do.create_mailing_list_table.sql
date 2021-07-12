CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE mailing_list (
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  email VARCHAR(40)
)