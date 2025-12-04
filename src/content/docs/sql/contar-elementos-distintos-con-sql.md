---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EN254DD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDlrpegGGceiYAq5n8tS41ITbPT45Qh5hUAnQcxIauRCAiEA4%2BH8I18QgrBhQSrgb%2FzfNe95PV6QiL6X%2BdwkXCErQfoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAUmvNtrgP%2BTOUdg6yrcA1sjCCVgy0XtGE3UyvB9K8av7WARmEQLwOSBZneV%2B1ZbItCC7%2FVYhgdrBV3HzyvsLhO3knTfa%2F6dNoOEe8LoRJlL4arxngQTjekT0jnjNOSV28FIXpRqA1oQp8NliGyLGVRviTY%2BHddXXAQufSZHzVj4WOURBZQHlet4uU6PkJ5ZYvuectlTO31KBKSrffiGqDEtnYlgAPfJpOsn70Hmok7CVR3uOlN1ZFw630pneGqzaGQqDfBNke4naUY4m3T%2BL91u8YB%2BKzscqWXCHlkxNWtbZPKNW7YF%2FyWlUVXSk35OE%2Fpt6%2FfyKXLaKJWVU9REhyEFlYmehpc4PzQyWilWimilShlcjG7Q1dLPZYrrCosThJdeFWyady0CNPXJ85bnYtHcxsvKKb9wSRTYRql0xRUvZVNchOaT6ICx5d63vabMG6KgI1HN3ShdAF7%2BSxida9TBqqqU9pBjyTLQFia20jHoU8m5PQzgPOZxIzFfN5bho2IL9ytOn2cjL6pckwfVIYYarpRIuJ1i9VUE6fhA8MQ%2B4KTHfZCEaYOj9xx8uqSqivn6jz6TgaQwqluT0j5TN%2FSDYP4ROyLnezreL5ZGRwjIc5I4EJwA8MYObYvRXFhVNZ6Rkh9Vn%2Bl22gq9MOWtxMkGOqUBIVNJkauNdeNUoqcZxj2ITvn6Yf69F4kR%2FHxjOaI2JtQeHS%2FZOWyidXUCCAszMaO99mW%2FH6tkUN%2B0ggITMEuAeyqGZFEUFbUJyvKtZjYtTRozI2ib0WrxYUQBh2CujtCy0OqFx%2F7RieJ9mbe0WtQIN8UFKDUuqgQ68T8S3OFWOELicdkYom1xNRmotehxK6ZUGub%2FEv50WOsOIhPPDWTF7vP5bPC%2F&X-Amz-Signature=4b14b4005c927864c223e440e87c8637189173bb7664dd923b5f583102385396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

