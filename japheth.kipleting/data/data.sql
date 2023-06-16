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

INSERT INTO people (username, email, password) VALUES
('user1', 'user1@example.com', 'password1'),
('user2', 'user2@example.com', 'password2'),
('user3', 'user3@example.com', 'password3'),
('user4', 'user4@example.com', 'password4'),
('user5', 'user5@example.com', 'password5'),
('user6', 'user6@example.com', 'password6'),
('user7', 'user7@example.com', 'password7'),
('user8', 'user8@example.com', 'password8'),
('user9', 'user9@example.com', 'password9'),
('user10', 'user10@example.com', 'password10');

INSERT INTO posts (post_id, title, content, person_Id) VALUES
(1, 'Post 1', 'Content of Post 1', 100),
(2, 'Post 2', 'Content of Post 2', 101),
(3, 'Post 3', 'Content of Post 3', 102),
(4, 'Post 4', 'Content of Post 4', 103),
(5, 'Post 5', 'Content of Post 5', 104),
(6, 'Post 6', 'Content of Post 6', 105),
(7, 'Post 7', 'Content of Post 7', 106),
(8, 'Post 8', 'Content of Post 8', 107),
(9, 'Post 9', 'Content of Post 9', 108),
(10, 'Post 10', 'Content of Post 10', 109);

INSERT INTO comments (comment_id, content, person_id, post_id) VALUES
(1, 'Comment 1', 100, 1),
(2, 'Comment 2', 101, 2),
(3, 'Comment 3', 102, 3),
(4, 'Comment 4', 103, 4),
(5, 'Comment 5', 104, 5),
(6, 'Comment 6', 105, 6),
(7, 'Comment 7', 106, 7),
(8, 'Comment 8', 107, 8),
(9, 'Comment 9', 108, 9),
(10, 'Comment 10', 109, 10);