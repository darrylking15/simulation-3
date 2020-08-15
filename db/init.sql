CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20), 
password TEXT, 
profile_pic TEXT
)

CREATE TABLE posts (
id SERIAL PRIMARY KEY, 
title TEXT, 
img TEXT, 
author_id INT REFERENCES users(id)
)