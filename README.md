# pruebaNodeJSMySQL
Prueba de desarrollo de una aplicaci贸n utilizando NodeJs, MySQL y Bootstrap

## Pre-requisitos 馃搵

- MySQL (Se puede utilizar entorno como Xampp para una instalaci贸n m谩s sencilla)
- NodeJs
- Editor de c贸digo


### Configuraci贸n de entorno 馃敡

_Para lograr levantar la aplicaci贸n exitosamente, se necesita ejecutar el schema de la base de datos, configurar las credenciales de la misma e instalar las dependencias del proyecto._

_Abrir la terminal del proyecto y ejecutar:_

```
npm install
```

_Configurar credenciales conforme nuestro usuario en MySQL, en mi caso el user es root, y la contrase帽a admin, en el archivo keys.js ubicado en la carpeta src_

```javascript
//Direcci贸n y credenciales de la base de datos

module.exports = {

    // credenciales para acceder a la base de datos
    database: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'DBAplicacion'
    }

};
```

_Ejecutar el script DBAplicacion.sql ubicado en la carpeta database_

```sql

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


```

_Ejecutar en la terminal el siguiente comando pra iniciar la aplicaci贸n_

```
npm run dev
```

_Al ingresar a la vista de la apliaci贸n, encontrar谩 una vista principal, en donde puede iniciar sesi贸n o registrarte, luego de ello puede empezar a guardar nuevos registros. 

```
http://localhost:4000/
```

