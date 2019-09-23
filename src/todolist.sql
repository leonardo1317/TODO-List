CREATE TABLE Users(
   UserId serial PRIMARY KEY,
   UserName VARCHAR (50) UNIQUE NOT NULL,
   Password VARCHAR (50) NOT NULL,
   creationDate TIMESTAMP NOT NULL
);

CREATE TABLE Activities(
   ActivityId serial PRIMARY KEY,
   Description VARCHAR (50) NOT NULL,
   CreationDate TIMESTAMP NOT NULL
);

CREATE TABLE Tasks(
   TaskId serial PRIMARY KEY,
   UserId integer NOT NULL,
   ActivityId integer NOT NULL,
   Message VARCHAR (50) NOT NULL,
   Status VARCHAR (10) NOT NULL,
   CreationDate TIMESTAMP NOT NULL
);

ALTER TABLE Tasks 
ADD CONSTRAINT user_id FOREIGN KEY (UserId) REFERENCES Users (UserId);

ALTER TABLE Tasks 
ADD CONSTRAINT activity_id FOREIGN KEY (ActivityId) REFERENCES Activities (ActivityId);