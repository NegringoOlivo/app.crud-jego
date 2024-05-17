CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE  employee(
    id INT(11)  NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;


INSERT INTO employee VALUES 
    (1, "Josafat", 11000),
    (2, "Eduardo", 3000),
    (3, "Violeta", 15000),
    (4, "Victoria", 123400);