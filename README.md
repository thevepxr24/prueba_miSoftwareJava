# prueba_miSoftwareJava
Java API and React
Descargar el repositorio
en Netbeans o IntelliJ abrir el proyecto
demo-java-general
descargar las librerias Maven

Antes de ejecutar el programa abrir en Postgres
una base de datos llamada misoftware
y crear la tabla persona
en una terminal de postgres ejecutar lo siguiente para crear la tabla

CREATE TABLE public."persona"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    name character varying(50) NOT NULL,
    year bigint NOT NULL,
    email character varying(50) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public."persona"
    OWNER to postgres;

INSERT INTO public.persona(
	 name, year, email)
	VALUES ('postgres', 1,'postgres@postgres.com');

 --------------------------------
 Se recomienda establecer la siguiente configuracion en application.properties
 
spring.application.name=demo-java-general
server.port=9091
server.servlet.context-path=/irvingrocha/api/v1

services.products=list

#Setting meta data
app.name=Demo Im
app.version=1.0.0
app.autor=Irving Rocha
app.language=es
app.country=MX

spring.datasource.url=jdbc:postgresql://localhost:5432/misoftware
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driver-class-name=org.postgresql.Driver

-------------------------------------------
Ejecutar el programa en SpringBoot

Se hicieron las pruebas de validacion de la tabla usuarios con Postman
GET> http://localhost:9091/irvingrocha/api/v1/usuarios/
GET> http://localhost:9091/irvingrocha/api/v1/usuarios/todos
POST> http://localhost:9091/irvingrocha/api/v1/usuarios
{
    "name":"postman",
    "year":"2",
    "email":"postman@postman.com"
}
//Cambiar el id por el que devuelva
PUT> http://localhost:9091/irvingrocha/api/v1/usuarios
{
    "id":2
    "name":"postman",
    "year":"2",
    "email":"postman@postman.com"
}
//Cambiar el id por el que desee eliminar
DELETE>http://localhost:9091/irvingrocha/api/v1/usuarios/1





 



 
