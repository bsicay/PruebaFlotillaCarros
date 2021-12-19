# pruebaNodeJSMySQL
Prueba de desarrollo de una aplicación utilizando NodeJs, MySQL y Bootstrap

## Pre-requisitos 📋

- MySQL (Se puede utilizar entorno como Xampp para una instalación más sencilla)
- NodeJs
- Editor de código


### Configuración de entorno 🔧

_Para lograr levantar la aplicación exitosamente, se necesita ejecutar el schema de la base de datos, configurar las credenciales de la misma e instalar las dependencias del proyecto._

_Abrir la terminal del proyecto y ejecutar:_

```
npm install
```

_Configurar credenciales conforme nuestro usuario en MySQL, en mi caso el user es root, y la contraseña admin, en el archivo keys.js ubicado en la carpeta src_

```javascript
//Dirección y credenciales de la base de datos

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

_Ejecutar en la terminal el siguiente comando pra iniciar la aplicación_

```
npm run dev
```

_Al ingresar a la vista de la apliación, encontrará una vista principal, en donde puede iniciar sesión o registrarte, luego de ello puede empezar a guardar nuevos registros. 

```
http://localhost:4000/
```

