-- Active: 1719746967935@@127.0.0.1@3306@school
CREATE Table student(
  student_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE Table course(
  course_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(255) not NULL,
  teacher VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
)


CREATE Table student_course(
  student_id int not NULL,
  course_id int not NULL,
  PRIMARY KEY (student_id, course_id),
  Foreign Key (student_id) REFERENCES student(student_id),
  Foreign Key (course_id) REFERENCES course(course_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table score(
  score_id int PRIMARY KEY AUTO_INCREMENT,
  student_id int NOT NULL,
  course_id INT NOT NULL,
  score DECIMAL(5,2),
  Foreign Key (student_id) REFERENCES student(student_id),
  Foreign Key (course_id) REFERENCES course(course_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE student
CHANGE email email VARCHAR(255) NOT NULL UNIQUE,
ADD COLUMN phone VARCHAR(15)

ALTER Table course
drop COLUMN description

INSERT INTO student (name, email, phone) VALUES ('Alice', 'alice@example.com', '123-456-7890');
INSERT INTO student (name, email, phone) VALUES ('Bob', 'bob@example.com', '987-654-3210');
INSERT INTO course (course_name, teacher) VALUES ('Mathematics', 'Dr. Smith');
INSERT INTO course (course_name, teacher) VALUES ('History', 'Prof. Johnson');
INSERT INTO student_course (student_id, course_id) VALUES (1, 1); -- Alice in Mathematics
INSERT INTO student_course (student_id, course_id) VALUES (1, 2); -- Alice in History
INSERT INTO student_course (student_id, course_id) VALUES (2, 1); -- Bob in Mathematics
INSERT INTO score (student_id, course_id, score) VALUES (1, 1, 95.5); -- Alice's score in Mathematics
INSERT INTO score (student_id, course_id, score) VALUES (1, 2, 88.0); -- Alice's score in History
INSERT INTO score (student_id, course_id, score) VALUES (2, 1, 76.5); -- Bob's score in Mathematics

CREATE INDEX INDEX_studentName on student (name)

ALTER Table course
RENAME to Class

TRUNCATE Table score