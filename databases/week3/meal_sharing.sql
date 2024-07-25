CREATE DATABASE meal_sharing_database
    DEFAULT CHARACTER SET = 'utf8mb4';

-- Active: 1719746967935@@127.0.0.1@3306@meal_sharing_database
CREATE Table meal(
  id int PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(225) NOT NULL,
  description TEXT,
  location VARCHAR(100),
  `when` DATETIME DEFAULT CURRENT_TIMESTAMP,
  max_reservations INT NOT NULL constraint check(max_reservations <=10),
  price DECIMAL(10, 2),
  create_date DATEa
  );


  INSERT INTO meal(title, description, location, `when`, max_reservations, price, create_date) 
  VALUES('Pizza', 'chicken Pizza with extra cheese', 'bellarup', now(), 5, 25.00, now()),
  ('Burger', 'Bacon patty wrapped with veggies and bun', 'Copenhagen', now(), 3, 56.00, now()),
  ('Vegetarian Pizza', 'Vegetable pizza with mashroom and brocolli toopeed with extra cheese', 'Vestbrogade', now(), 5, 25.00, now()),
  ('Dosa', 'fermented rice salted pancake with potatos stuffing', 'Federiksund', now(), 2, 67.00, now()),
  ('Lassi', 'Cold yoghurt blend with cream (fat 38%)', 'Rødovre', now(), 4, 18.00, now()),
  ('French Fries', 'Deep fries potatoes fingers serve with salt', 'Måløv', now(), 1, 40.00, now()),
  ('Cheease ball', 'Potato balls stuffed with cheese and served with dips', 'Hillerød', now(), 5, 89.00, now());

  CREATE TABLE review(
    id int PRIMARY KEY not null AUTO_INCREMENT,
    title VARCHAR (225) not NULL,
    description VARCHAR (225),
    meal_id INT,
    stars INT NOT NULL constraint check(stars <=5 and stars > 0),
    create_date DATE,
    Foreign Key (meal_id) REFERENCES meal(id)
  )

  INSERT INTO review(title, description, meal_id, stars, create_date)
  VALUES('tasty food', 'Very tasty and presentable food', 3, 5, now()),
  ('Nice food', 'taste was okay and like the warmth of host', 1, 3, now()),
  ('Yummy', 'Must taste atleast once', 7, 5, now()),
  ('Mouthwatering', 'Mouth watering food, must eat', 2, 4, now()),
  ('wow', 'just waw for taste', 4, 5, now()),
  ('Vist Once', 'super tasty, come and try yourself', 5, 4, now()),
  ('just Ok', 'Food was not that delicious and as expected', 6, 1, now());


  CREATE TABLE reservation(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    number_of_guest INT NOT NULL constraint check(number_of_guest <=10),
    meal_id INT,
    create_date DATE,
    contact_phonenumber VARCHAR(100),
    contact_name VARCHAR(225),
    contact_email VARCHAR(100),
    Foreign Key (meal_id) REFERENCES meal(id)
  )

INSERT INTO reservation(number_of_guest, meal_id, create_date, contact_phonenumber, contact_name, contact_email)
VALUES(5, 7, now(), '234-345-456', "John", 'example@enfk.com'),
(3, 2, now(), '344-123-422', "Ankita", "ankita@jfh.cim"),
(1, 6, NOW(), '467-973-357', 'Cherry', 'cherryc@fjk.vkd'),
(4, 5, now(), '484-802-036', 'harish', 'harish@dfk.dk');

--Create these queries
--Meal

--Get All Meal
select * from meal;

--Add a new meal
INSERT INTO meal(title, description, location, max_reservations, price, create_date)
VALUES('samosa', 'Spicy potato stuffing inside the triangle shaped dough', 'måløv', 10, 30.00, now());

--Get a meal with any id, fx 1
select * from meal where id = 7;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
set title = 'Idli-Dosa', max_reservations = 5
where id = 4;

--Delete a meal with any id, fx 1
DELETE from meal where id = 8;

--Reservation
--Get all reservations
select * FROM reservation;

--Add a new reservation
INSERT INTO reservation(number_of_guest, meal_id, create_date,contact_phonenumber, contact_name, contact_email)
VALUES(2, 3, now(), '349-087-033', 'Billo', 'billo@sfsd.com');

--Get a reservation with any id, fx 1
select * from reservation where id = 5;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
set number_of_guest = 5, meal_id=7
WHERE id = 3;

--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id =5;

--Review
--Get all reviews
SELECT * FROM review;

--Add a new review
INSERT INTO review(title, description, meal_id, stars, create_date)
VALUES('very yumm', 'it was really delicious and one of my fav', 4, 5, now());

--Get a review with any id, fx 1
SELECT * FROM review where id = 5;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
set title = 'Delicious'
where id = 5;


--Delete a review with any id, fx 1
DELETE FROM review where id = 8;

--Additional query
--Adding different meal review and reservation

INSERT INTO meal(title, description, location, `when`, max_reservations, price, create_date)
VALUES('Rød grød med fløde', 'A salad box with Rød grød med fløde and other veggies too', 'Glostrup', NOW(), 6, 55.99, '2024-07-12'),
('Salad-box', 'All the grrens available in one box with chicken shreds', 'Taastrup', '2024-07-15 15:45:10', 4, 80.49, '2024-07-11'),
('Russian-salad', 'peas, broccoli and cucumber with mayos and spice up with black papper', 'Svanemøllen', '2024-07-18 01:32:00', 1, 35.79, '2024-07-03');

INSERT INTO reservation(number_of_guest, meal_id, create_date, contact_phonenumber, contact_name, contact_email)
VALUES(5, 4, now(), '577-383-689', 'avinash', 'avinash@kfjo.gk'),
(3, 1, now(), '481-976-563', 'sushmita', 'susmita@sdfs.com'),
(2, 3, now(), '088-490-209', 'Aarohi', 'arohi@fk.rk');

insert INTO review(title, description, meal_id, stars,create_date)
VALUES('Super', 'super delicious food', 4, 4, now()),
('yumm-yum', 'very yummy food', 2, 3, now()),
('awesome', 'awesome food and very delicious', 6, 5, now());

--Get meals that has a price smaller than a specific price fx 90
SELECT * from meal where price < 40;

--Get meals that still has available reservations
SELECT * FROM meal
join reservation
on meal_id = meal.id
where max_reservations > number_of_guest;


--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meal where title like '%Rød grød med%';

--Get meals that has been created between two dates
select * from meal where create_date BETWEEN '2024-07-03' and '2024-07-15';

--Get only specific number of meals fx return only 5 meals
select * from meal limit 3;

select * from review;

--Get the meals that have good reviews
select meal.*, review.title, review.stars from meal
join review
on meal_id = meal.id
where review.stars >= 4;


--Get reservations for a specific meal sorted by created_date
select reservation.*, meal.title from meal
join reservation
on meal_id = meal.id 
where meal.create_date = '2024-07-18' and reservation.number_of_guest < 5;


--Sort all meals by average number of stars in the reviews
select AVG(review.stars) as avg_star_rating, meal.title from meal
join review
ON meal_id = meal.id
GROUP BY meal.title;