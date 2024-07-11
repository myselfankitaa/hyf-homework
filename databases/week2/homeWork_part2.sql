-- Active: 1719746967935@@127.0.0.1@3306@SCHOOL_HW
CREATE Table Class(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  begins DATE NOT NULL,
  ends DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Student(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(20),
  phone VARCHAR(20),
  class_id INT,
  Foreign Key (class_id) REFERENCES Class(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Class`(id, name, begins, ends)
VALUES(1, "math", "2024-01-01", "2025-01-31"),
(2, "science", "2024-01-01", "2025-03-30"),
(3, "geography", "2024-01-01", "2025-01-15"),
(4, "english", "2024-01-01", "2025-02-28"),
(5, "history", "2024-01-01", "2024-12-31"),
(6, "arts", "2024-01-01", "2025-03-25");

INSERT INTO `Student`(id, name, email, phone, class_id)
VALUES(1, "Steven", "s@sportify.com", "234-567-864", 2),
(2, "George", "Georges@efy.com", "846-578-945", 6),
(3, "sasa", "sasa@example.com", "498-203-578", 3),
(4, "reeta", "rt@yahoo.com", "457-567-118", 5),
(5, "Maya", "maya@gmail.com", "294-567-482", 4),
(6, "Antony", "antn@gmail.com", "560-567-078", 1),
(7, "Gonjavelse", "gonjals@sportigy.com", "478-567-938", 6),
(8, "Akbar", "akb@example.com", "294-567-233", 4),
(9, "Amar", "amr@sportify.com", "803-567-248", 2);

CREATE INDEX idx_name on Student(name)

ALTER TABLE `Class`
ADD COLUMN status ENUM("not-started", "ongoing", "finished");
