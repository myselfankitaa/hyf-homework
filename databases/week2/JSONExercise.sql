CREATE TABLE author(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL
)

INSERT INTO author(id, name) VALUES(1, "James Smith"),
(2, "Jane Jones"),
(3, "Aliya Awad"),
(4, "Igor Vladimir"),
(5, "Kim Jensen")

CREATE Table article(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(255)
);


INSERT INTO article(id, title, content) 
VALUES(1, "BREAKING NEWS: Water is wet!", "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),
(2, "Heavy Snowfall Expected this Weekend", "Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
(3, "BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!", "Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat")

CREATE Table tags(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  article_id INT NOT NULL,
  Foreign Key (article_id) REFERENCES article(id)
)

INSERT INTO tags(id, name, article_id) VALUES(1, "science", 1),
(2, "breaking", 1),
(3, "weather", 2),
(4, "winter", 2),
(5, "clickbait", 3),
(6, "breaking", 3)


CREATE TABLE article_author(
  article_id INT NOT NULL,
  author_id INT NOT NULL,
  PRIMARY KEY(article_id, author_id)
)

INSERT INTO article_author(article_id, author_id) VALUES(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 2),
(3, 5)