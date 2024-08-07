-- Active: 1719746967935@@127.0.0.1@3306@hyfDB
SET NAMES utf8mb4;

CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Users
insert into user (name, email, phone) values ('Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
insert into user (name, email, phone) values ('Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
insert into user (name, email, phone) values ('Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683');
insert into user (name, email, phone) values ('Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191');
insert into user (name, email, phone) values ('Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931');
insert into user (name, email, phone) values ('Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');
insert into user (name, email, phone) values ('Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');
insert into user (name, email, phone) values ('Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579');
insert into user (name, email, phone) values ('王秀英', 'wang.xiuying@weebly.com', '891-952-6749');
insert into user (name, email, phone) values ( 'إلياس', 'elias@github.com', '202-517-6983');
insert into user (name, email, phone) values ( 'Donald Duck', 'donald@duck.com', NULL);
insert into user (name, email, phone) values ( 'Adam Smith', 'smith@bla.com', NULL);

-- Statuses
insert into status (id, name) values (1, 'Not started');
insert into status (id, name) values (2, 'In progress');
insert into status (id, name) values (3, 'Done');


-- Tasks
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Become a billionaire', 'This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin', '2017-09-26 03:06:46', '2017-10-08 06:14:31', '2017-12-22 20:58:03', 3, 6);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Plan meeting with London office', 'We will probably use skype', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2, 8);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Order groceries online', 'The fridge is almost empty, we need eggs and milk', '2017-09-20 19:34:43', '2017-10-15 23:35:45', '2017-12-24 16:00:46', 1, 1);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Empty the mailbox', NULL, '2017-09-27 15:17:08', '2017-10-08 17:31:16', null, 2, 9);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Fix the flat tire on the bike', 'Tools are in the garage', '2017-09-13 23:16:30', '2017-10-06 04:03:52', '2017-12-07 11:51:11', 2, 6);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Wash the car', NULL, '2017-10-06 19:39:16', '2017-10-03 04:49:05', '2017-12-04 17:43:16', 2, 10);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Walk the dog', NULL, '2017-09-03 02:47:17', '2017-10-12 18:40:08', null, 3, 2);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Write a book', 'Maybe something about dragons?', '2017-10-11 06:14:01', '2017-10-17 12:19:08', '2017-12-21 20:18:05', 2, 6);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Do HackYourFuture homework', NULL, '2017-10-04 13:55:16', '2017-10-10 00:18:05', '2017-12-19 17:01:10', 1, 3);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Iron shirts', NULL, '2017-09-23 03:59:58', '2017-10-19 08:30:48', '2017-12-08 11:00:35', 3, 9);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Water the potted plants', 'Maybe they need fertilizer as well', '2017-09-29 23:38:42', '2017-10-08 04:24:53', null, 2, 1);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy wine for the birthday party', 'Both red and white wine', '2017-10-10 14:57:22', '2017-10-14 14:03:30', '2017-12-10 23:43:56', 2, 5);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy gift for Paul', 'He could use a shirt or a tie and some socks', '2017-09-09 05:22:08', '2017-10-17 15:58:05', '2017-12-04 20:45:18', 3, 3);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Change lightbulb in hallway', 'Should be an LED bulb', '2017-10-01 19:07:35', '2017-10-03 10:02:27', '2017-12-08 17:09:03', 3, 10);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Wash windows', NULL, '2017-10-02 22:15:17', '2017-10-07 22:31:35', '2017-12-06 03:36:09', 2, 8);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Setup salary databases for accounting', 'Use MySQL', '2017-10-25 05:35:33', '2017-10-10 23:22:33', '2017-12-05 00:19:08', 1, 9);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Learn how databases work', NULL, '2017-09-06 03:16:47', '2017-10-10 16:56:58', '2017-12-18 05:08:05', 3, 5);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Make the databases perform better', 'It should be possible to optimize the indexes', '2017-10-03 09:27:20', '2017-10-01 16:27:46', '2017-12-01 13:28:35', 2, 4);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy beer for the company party', '2 or 3 cases should be enough', '2017-10-08 01:39:02', '2017-10-13 23:07:41', null, 3, 4);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Knit sweater', NULL, '2017-09-22 17:14:55', '2017-10-08 09:01:35', '2017-12-15 20:33:57', 2, 9);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Charge electric bicycle', 'It sucks to ride it without a battery!', '2017-10-10 12:25:07', '2017-10-07 21:45:01', '2017-12-10 19:02:17', 1, 7);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy new phone', 'The battery in the current one only lasts 5 hours 😞', '2017-09-17 00:25:34', '2017-10-09 11:48:12', null, 3, NULL);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Ride bike aroud Sjælland', 'Remember rainclothes and tire repair kit!', '2017-10-20 19:21:13', '2017-10-07 01:38:06', '2017-12-19 15:08:18', 2, 7);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Look at apartments in Ørestad', '2 or 3 rooms', '2017-10-30 09:47:00', '2017-10-19 06:11:26', null, 1, 6);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Empty Mr Fluffys litterbox', NULL, '2017-09-28 03:09:06', '2017-10-13 10:38:34', '2017-12-20 23:37:18', 2, 8);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy new dining room table and chairs', 'Ikea has some on sale', '2017-09-21 12:02:34', '2017-10-02 02:05:11', '2017-12-06 00:14:30', 1, 3);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Renew buscard', '3 zones', '2017-10-07 22:47:51', '2017-10-09 15:50:03', '2017-12-01 14:25:40', 2, 6);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Sign up for linkedin', 'Make the CV awesome! 😄', '2017-09-04 00:57:47', '2017-10-18 18:07:48', '2017-12-07 23:04:38', 3, 2);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Remove facebook from phone', 'To avoid interruptions when working', '2017-10-26 17:15:07', '2017-10-13 03:36:47', '2017-12-19 11:10:02', 3, 4);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Backup databases to external disk', 'Remember to store the disk in another physical location', '2017-09-09 17:32:33', '2017-10-01 21:18:59', '2017-12-23 14:21:01', 1, 2);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Put up the new lamp in the hallway', NULL, '2017-10-15 05:45:54', '2017-10-16 14:05:35', '2017-12-29 02:29:26', 3, 3);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Hang up paintings in living room', NULL, '2017-09-10 05:36:11', '2017-10-09 17:40:42', null, 3, 4);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Buy plane ticket to Auckland', 'Check prices online first!', '2017-09-05 09:07:22', '2017-10-15 09:36:06', '2017-12-07 11:10:05', 1, 9);
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Learn about NoSQL databases', 'MongoDB, CouchDB, etc.', '2017-10-20 01:41:53', '2017-10-04 07:19:56', '2017-12-23 10:13:42', 2, NULL);

insert into user (name, email, phone) values ('Smith Adam', 'adamS@bla.com', 234-456-678);
insert into user (name, email, phone) values ('bob', 'bob@xyz.com', 048-564-957);
insert into user (name, email, phone) values ('cristey M', 'cristeyM@example.com', 049-645-234);
insert into user (name, email, phone) values ('john', 'john@sportify.com', 037-254-797);



CREATE Table user_task(
user_id int,
task_id int,
PRIMARY KEY (`user_id`, task_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO user_task(user_id, task_id) VALUES(1, 1);
INSERT INTO user_task(user_id, task_id) VALUES(2, 35);
INSERT INTO user_task(user_id, task_id) VALUES(5, 13);
INSERT INTO user_task(user_id, task_id) VALUES(5, 18);
INSERT INTO user_task(user_id, task_id) VALUES(8, 16);
INSERT INTO user_task(user_id, task_id) VALUES(6, 25);
INSERT INTO user_task(user_id, task_id) VALUES(8, 25);

insert into user_task (user_id, task_id) values(1, 35);
insert into user_task (user_id, task_id) values(1, 11);
insert into user_task (user_id, task_id) values(2, 4);

insert into user_task (user_id, task_id) values(2, 29);
insert into user_task (user_id, task_id) values(3, 22);
insert into user_task (user_id, task_id) values(3, 13);
insert into user_task (user_id, task_id) values(3, 19);
insert into user_task (user_id, task_id) values(4, 24);
insert into user_task (user_id, task_id) values(4, 20);
insert into user_task (user_id, task_id) values(5, 20);

insert into user_task (user_id, task_id) values(5, 15);
insert into user_task (user_id, task_id) values(6, 10);
insert into user_task (user_id, task_id) values(6, 7);
insert into user_task (user_id, task_id) values(6, 27);
insert into user_task (user_id, task_id) values(7, 33);
insert into user_task (user_id, task_id) values(7, 18);
insert into user_task (user_id, task_id) values(7, 23);
insert into user_task (user_id, task_id) values(8, 26);
insert into user_task (user_id, task_id) values(8, 30);
insert into user_task (user_id, task_id) values(8, 11);
insert into user_task (user_id, task_id) values(9, 34);
insert into user_task (user_id, task_id) values(9, 15);
insert into user_task (user_id, task_id) values(9, 1);
insert into user_task (user_id, task_id) values(10, 29);
insert into user_task (user_id, task_id) values(10, 16);
insert into user_task (user_id, task_id) values(10, 1);
insert into user_task (user_id, task_id) values(11, 26);
insert into user_task (user_id, task_id) values(11, 27);
insert into user_task (user_id, task_id) values(11, 17);
insert into user_task (user_id, task_id) values(11, 2);
insert into user_task (user_id, task_id) values(1, 3);
insert into user_task (user_id, task_id) values(2, 6);
insert into user_task (user_id, task_id) values(3, 8);
insert into user_task (user_id, task_id) values(4, 9);
insert into user_task (user_id, task_id) values(5, 12);
insert into user_task (user_id, task_id) values(6, 14);
insert into user_task (user_id, task_id) values(7, 21);
insert into user_task (user_id, task_id) values(9, 28);
insert into user_task (user_id, task_id) values(10, 31);
insert into user_task (user_id, task_id) values(11, 32);


--CLass Exercise
--Get all the tasks assigned to Pavel
select t.*, u.name
from task as t
join user_task as ut
on t.id = ut.task_id
join `user` as u
on ut.user_id = u.id
where u.name like "Pavel%"

--Find how many tasks each user is responsible for;
select user.name, count(task.id) as no_of_taskAssign
from `user`
join user_task on user.id = user_task.user_id
JOIN task ON user_task.task_id= task.id
group BY user.name

--Find how many tasks with a status=Done each user is responsible for;
select user.name, count(task.id) as no_of_taskComplete
from `user`
join user_task on user.id = user_task.user_id
JOIN task ON user_task.task_id= task.id
join status on task.status_id = status.id
where status.name = "Done"
group BY user.name


--Home-Work Part-1
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('DO homeworks', 'Title says it all, just do your homework', '2018-12-17 03:48:18', '2018-12-27 16:48:59','2019-01-20 15:05:39' , 2, 1);

select * from task;
--Change the title of a task
UPDATE task
SET task.title = "Complete Homework as well as class work", updated = NOW()
where id = 36


--Change a task due date
update task
set task.due_date = '2020-01-21 15:05:39', updated = now()
where id = 1


--Change a task status
UPDATE task
set task.status_id = 2
where id = 4

select*from task

--Mark a task as complete
UPDATE task
set task.status_id = (select status.id from status where status.name="Done"), updated=now()
WHERE id = 2


--Delete a task
DELETE FROM task
where task.id = 36

--Home-Work Part-3
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.*, u.name, u.email
from task as t
join user_task as ut
on t.id = ut.task_id
JOIN user as u ON ut.user_id = u.id
where u.email LIKE "%@spotify.com"


--Get all the tasks for 'Donald Duck' with status 'Not started'
select t.*, u.name, s.name as status_name
from task as t
join user_task as ut
on t.id = ut.task_id
join user as u
on ut.user_id = u.id
join status as s
on t.status_id = s.id
where u.name = "Donald Duck" and s.name = 'Not started'


--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select u.name, t.*, month(t.created)
from task as t
join user_task as ut
ON t.id = ut.task_id
join user as u on ut.user_id = u.id
where u.name = 'Maryrose Meadows' and month(t.created) = 9


--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(task.id) as No_Of_Task, MONTH(task.created) as  Months
FROM task GROUP BY Months

