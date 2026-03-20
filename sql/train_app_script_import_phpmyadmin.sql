CREATE DATABASE train_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE train_app;

-- ======================
-- UTILISATEURS
-- ======================
CREATE TABLE users (
 idUser INT AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(50) NOT NULL UNIQUE,
 phone VARCHAR(20) NOT NULL,
 passwordhash VARCHAR(255) NOT NULL,
 role ENUM('user','admin') DEFAULT 'user',
);

-- ======================
-- LIGNES DE TRAIN
-- ======================
CREATE TABLE trainLines (
 idLine INT AUTO_INCREMENT PRIMARY KEY,
 nameLine VARCHAR(100) NOT NULL,
);

-- ======================
-- VILLES / ARRETS
-- ======================
CREATE TABLE city (
 idCity INT AUTO_INCREMENT PRIMARY KEY,
 nameCity VARCHAR(100) NOT NULL,
);

-- ======================
-- ASSOCIATION LIGNE ↔ ARRET
-- ======================
CREATE TABLE lineStops (
 idLineStop INT AUTO_INCREMENT PRIMARY KEY,
 trainLineId INT NOT NULL,
 cityId INT NOT NULL,
 stopOrder INT NOT NULL,

 CONSTRAINT fk_trainLine
   FOREIGN KEY (trainLineId) REFERENCES trainLines(idLine)
   ON DELETE CASCADE,

 CONSTRAINT fk_city
   FOREIGN KEY (cityId) REFERENCES city(idCity)
   ON DELETE CASCADE
);

-- ======================
-- HORAIRES
-- ======================
CREATE TABLE schedules (
 idSchedule INT AUTO_INCREMENT PRIMARY KEY,
 lineStopId INT NOT NULL,
 time VARCHAR(5) NOT NULL,

 CONSTRAINT fk_lineStop
   FOREIGN KEY (lineStopId) REFERENCES lineStops(idLineStop)
   ON DELETE CASCADE
);