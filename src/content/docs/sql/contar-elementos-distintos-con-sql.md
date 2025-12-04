---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBXZO7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEvlXopjOp5SrkfrKWTVnCu2JeXIx6lAH%2F9f2ERMp5coAiAzb1XTkfYste3Y8BPsMNSpKJ2hhE6FxXx8MsAMow4hbCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMqO1SmTmWpXanMQK0KtwDexA%2BEr9Ypom5XzGWfLSjmm844%2BLRqfuyb7u8OOJvU2u1eCiM%2BX1FSUgWx84CdpG7m9IYD3dmCJ78Me1jAyJ9ZZDye0My5Yad%2FXjK62s1Jw6kyx7HCuVxwzD4bFkmIy8Huw9zpR%2BYUGWI0wMAmXWtjxbqovr34dC53tdXNL1IffBtSsfhzrMGz4hbL3Jk7yaw3MfBwxY4tI%2BjF8s6JkUtGjverb6AnvnSsKLHA98DcwD3%2FT7R3oIAqGKJ8dL%2FEnWHyyzMDvpqFqtcOt3VLkthqjYzdQJWVow50855Tc7MCcu8m1YcVab7a5WMaqMUnKCrk4tthxtdUd9PJfGWgHdgWaqnZyyNpKVLB%2BqV0c9QpdI6ZwD%2BNY8vCpXJEmbX0hPt3ClbdGF760xiHsM70gY6D2Rnw8b0%2BsZyPHiDZ7SylS5dJ%2B0jnBs8XCti7KMn6tleqdHMGXh68DjZR9%2FQI7J6IqZe0oRL%2BKoLc5YujnC3UAAzamEJxmsqGDBQVO3T%2F%2BVCo31KUdL0sevlZeZlQsWSelZ8CXFFiUodieAw6EyJ%2Fs%2BkZoXqijXGX9%2FsIZoSpnTji0lP2qldqx0T5PsD5VqpSAj%2FWMi0AOjU9%2FLeAEvsHefvLs1RJYpQKMlELU0wgL%2FGyQY6pgGMwjvwEcnqyNEj2v1r7aazC8AWVfft6yV4%2F9CiUnNSap0MG0A5jQyI6q6zO6vNnEgo4Bma%2Bf2AxaR30%2B0b%2F%2BZcFJldEBa51kp4i0vEUoKDC13rV3M5Wil6q5bUgbOb3lvWwlVeJKcnQUTD0i29hIBNKsmjCLTYSkw7Ac8mRdqmZUoUqPpXB%2FBgex5EvjviBJXejPuSD4HXREMq7foaEwt71pHnsDaA&X-Amz-Signature=2fd49d1c8c4d01865b3dc0543bc739eb722870c87db031b3bebd1f3ef4afb837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

