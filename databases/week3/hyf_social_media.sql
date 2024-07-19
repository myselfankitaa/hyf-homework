CREATE DATABASE hyf_social_media
    DEFAULT CHARACTER SET = 'utf8mb4';

-- Active: 1719746967935@@127.0.0.1@3306@hyf_social_media
create Table user(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(10) NOT NULL,
  email VARCHAR(20) UNIQUE,
  password VARCHAR(100),
  registration_date DATETIME
);

INSERT INTO user(username, email, password, registration_date)
VALUES('john', 'j@dkfm.gh', 'dk35km', now()),
('sena', 'sena@flkf.fk', 'rigt697', now()),
('maya', 'maya@fvn.dkn', 'sdknw39', NOW());

create Table post(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(25) not NULL,
  content VARCHAR(225),
  create_time TIMESTAMP,
  update_time TIMESTAMP,
  user_id INT NOT NULL,
  Foreign Key (user_id) REFERENCES user(id)
)

INSERT INTO post(title, content, create_time, update_time, user_id)
VALUES('welcome summer', 'finally its summer in Copenhagen', NOW(), now(), 2),
('Mountains', 'I love to go to mountains, it gives me feeling of self content', now(), now(), 1),
('Beach', 'summer is the perfect time to go to the beaches', now(), now(), 3);

create Table comments(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content VARCHAR(100) NOT NULL,
  creation_date DATETIME,
  update_time DATETIME,
  user_id INT,
  post_id INT,
  comment_id INT,
  Foreign Key (user_id) REFERENCES user(id),
  Foreign Key (post_id) REFERENCES post(id),
  Foreign Key (comment_id) REFERENCES comments(id)
)

INSERT INTO comments(content, creation_date, update_time, user_id, post_id, comment_id)
VALUES('agreed, I love it', now(), now(), 1, 2, NULL),
('I love it too', NOW(), now(), 1, 2, 1),
('Same feeling', now(), now(), 2, 1, NULL);


CREATE TABLE reactions(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  reaction_type ENUM('like', 'highfive', 'laugh', 'cry'),
  post_id INT NOT NULL,
  comment_id INT,
  user_id INT,
  Foreign Key (post_id) REFERENCES post(id),
  Foreign Key (comment_id) REFERENCES comments(id),
  Foreign Key (user_id) REFERENCES user(id),
  constraint UNIQUE(post_id, comment_id, user_id, reaction_type)
  );


insert INTO reactions(reaction_type, post_id, comment_id, user_id)
VALUES('laugh', 1, 1, 1),
('highfive', 2, 1, 2),
('cry', 3, 3, 3);

  CREATE TABLE friendship(
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    PRIMARY KEY(user1_id, user2_id)
  )

  INSERT INTO friendship(user1_id, user2_id)
  VALUES(1, 2),
  (2, 3),
  (3, 1);
  