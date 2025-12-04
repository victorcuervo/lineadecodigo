---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH3Y73Z2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDMYmYUShRiBsPA3FuPRcdK5Sqrmwo4WjnLTQACKANHKgIhAOB3Cz%2B05%2BDq8RRA4%2B9dLIWpxVIrz9hoFwFDfkxvC3vJKv8DCD8QABoMNjM3NDIzMTgzODA1Igwlqaulo1Zma0FUknYq3AMBI2ldHlvezj8qPbF1SbfBcHMtTFYbWTtPSuBXDtD%2F5DPBUSb3J7fAqoD3DxwicMYyX8MqBRkvHPl48zzBhCmuK0mlhaw%2BhHPZ0FjNRZASEe6QArfS2PclmhUYv98QMBuJHOhzQWTRW9W%2BRSChyZpJOHzLliW%2FM5x0gCSrCd%2Fs%2FEP4ufbLYJS7%2Bb5hTzOTJtorMPdBuzC03aHvE%2Bwl9nISdKimZUkJgzUJbvBHz9Vswg%2BOQErHn9u9OU3F2Sl8indDQDZS5cQ6GU%2BW%2BfIY0cJMZf11iJmLEQ718bGmt8ObJvVkN7jQbkMheTWDBdtM3Jgk1qFlx3fb51DhAAryKibiH8zCjFxVABLJKyxUbHDzO1g%2Frobz5fhltr6Emb9PNJUeHGxp7XFDYPq41diTKv3P2uzOIuP9BL4c4bV0ycnM0mpUYdPPg8PJX6vff1hyJOGZS8%2BP4ZbmoNuuxJVw5YvbzBKNjlyToxsJJ4YnPqfO3FNYanwMPnGN%2BF0xw2kXT%2FiMLopOHFx2%2BKE3FzcPOVeoDFkmIFDAxaxMIDhmmk83zrzf1FPGPILNXE2VJHWgJkCu0wMaHv0ea30Zgpa9afbgwSRfJYugbej%2FVieetxU%2BKksvnfMByah2weVb1DC6y8TJBjqkAbV3xWp8hUMULbSxYAz0qKwcbpbSGgxX3rTRZE91vQ%2BinITLZZuy6ZZnbhcYEj4HXMZrGsTYbskZhZEU9%2FaWkE%2Fcxjlw0UNfs4GwnRGfhQcEHlJyVxbW3S2zkIZ1dTt1r0DsTQOKAq212aCxep990bG3YXWaq6Jf79JdfE40AAoYZZA5odA%2FXpFqDP1qwii7vDT52kciGKB%2FydRxR85OVqxKSm8q&X-Amz-Signature=8d981f16dc77f2efdc09f76532500a6733e6f33c33a1ebba288fcef85b31b4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

