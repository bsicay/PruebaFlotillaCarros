DROP DATABASE IF exists DBAplicacion;
CREATE DATABASE DBAplicacion;

USE DBAplicacion;

-- TABLA DE USUARIOS
CREATE TABLE users(
	id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL, 
    fullname VARCHAR (100) NOT NULL,
    PRIMARY KEY PK_vehicles (id)
);

-- TABLA DE CARROS
CREATE TABLE vehicles(
    id INT(11) NOT NULL AUTO_INCREMENT,
    marca VARCHAR(16) NOT NULL,
    modelo VARCHAR(16) NOT NULL,
    anio INT(4) NOT NULL,
    placas VARCHAR(8) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    userID INT(5),
    PRIMARY KEY PK_vehicles (id),
    CONSTRAINT FK_vehicle_users FOREIGN KEY (userID) references users(id) ON DELETE CASCADE

);

select *from users;
select *from vehicles;

