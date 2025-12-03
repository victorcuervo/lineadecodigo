---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN37BIAZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFoJwLoW%2BuzDiAxdBrASnL4jPEDjxeqnamx5cSBLxLWlAiEA5DXswLLEow8flt9%2F2ezlMhD2tVVPwEaFGc3mX5Ug44Iq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGsOyRzazxXZKxcCuSrcAzBhgboMZazvOwFYhlz3V3N%2FwAT4pJVYHj4vX9qrqFWq%2Fwbe7TADP62OXVj57GL9QolomJWNBiXz989hVKqaP8EmjSJ5IdIU8JCOPLokFXvEsDJmFg5smP8TkNzvyGTqF%2B5pCRPBIe%2Bb9Gqj5XeYVqnaYJdVn0C3AenwLx1MF6tUzsXGDc63K%2F8051TlklU6UV8l1Muiodgzx3Rer2tw1LXuiczS1B94xN5BFIJd7NSabkX8TrULvSYejfH9ygwVs1rZ6jEs62Vdi3Sh2UKc2oNWZY0aK99MRplcx%2FieirD0%2FfKUbEhZLtAmUpH67Cb9ln93Guno6qEsFFi6TR%2BLf3W7pDy11E6m6hoWAG7Q9heiahfK%2FIPVKs3HkLMLjmP63WHY6tGHW7ULE3vGGU2qmGZseDEN7BBKOOl1cqF%2Ffq%2FfqGAnWi3uYzkzAJ9ko%2B%2FXCxi0AkmOSi4ZnW9UT9WTavvqfJt7N1kiNVgUuuLvkhWQyixh5gHsQW30Yg75KdNrnou3d6keQ1SZeQ9kF3gGt8YqaK5RTjDcQjdphoWUtZX7fE0iVdYkliyAfpCvCs%2FdIaDhWhphtcfCJzB1RxyS5%2FYNL6PezPwd062Ww9Xg5Y0WVPqwKHFZQYUILIjxMJr4wskGOqUBiIUn8JyxVFvSMc4%2BJDz8qqlk%2BLDF9Eqlb%2Bi3rM%2F2X%2FjHCPlBr4cVnUi65NGwUtxkpL5TrQn4kLSUKBYuNibRxUUzveVplaXYDWEi2L74isolFmiRssCEfA1YAwrPcsnDMFiSZfSJ3o5NMuGzM668CnfvUFIoaz%2F2kqNmAtvRQvc3cVI9sH9%2FFSJKz%2F5RCev%2Bv4rd2Wj4Th09UcJ0d9MF62onVf29&X-Amz-Signature=f3bbfc472a6c01537a6eb74cf8bc4bc49ffa2f72e2a4eb61bcca404c9fe3593c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

