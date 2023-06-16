CREATE DATABASE todoDb;

CREATE TABLE people (
	person_id INT IDENTITY(100, 1) PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(50)  NOT NULL,
	password varchar(500)
);

CREATE TABLE posts (
	post_id int PRIMARY KEY NOT NULL,
	title VARCHAR(15) NOT NULL,
	content VARCHAR(50) NOT NULL,
	person_Id INT,
	FOREIGN KEY (person_id) REFERENCES people (person_id)
);

create table comments(
comment_id int not null,
content varchar(255) ,
person_id int,
FOREIGN KEY (person_id) REFERENCES people (person_id),
post_id int FOREIGN KEY (post_id) REFERENCES posts (post_id)
);