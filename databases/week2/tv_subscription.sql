-- Active: 1719746967935@@127.0.0.1@3306@tv_subscription
CREATE table customer(
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(16) NOT NULL,
  email VARCHAR(25),
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(10) NOT NULL
)

CREATE Table product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price VARCHAR(10) NOT NULL
)

CREATE TABLE orderHistory(
  id INT PRIMARY KEY NOT NULL,
  type ENUM("added", "takeDown"),
  customer_id INT,
  product_id INT,
  create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  Foreign Key (customer_id) REFERENCES customer(id),
  Foreign Key (product_id) REFERENCES product(id)
)

CREATE TABLE subscription(
  id INT NOT NULL,
  customer_id INT,
  product_id int,
  PRIMARY KEY(customer_id, product_id)
  );
