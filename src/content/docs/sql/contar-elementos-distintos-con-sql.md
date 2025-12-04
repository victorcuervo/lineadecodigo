---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZRPQIA2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCBqAmQVndGpzcZe8v20jEXQw9xtybiBH68EVE9AzyPJwIhAK9aHDGkMkjLXkq%2FU3iJ8sQl2ZWL%2BqkEV9iSwWZOLgYoKv8DCEAQABoMNjM3NDIzMTgzODA1IgzIezw0K46nvsgnIqgq3ANYF23yWwQxHFSOSsq0HKAUP6cVYUw9m5A4A%2F%2BCCbUsnf%2FBcUJ%2FxwKGr7y2R%2FcDC9p1NK0P1tcKs5rzdMS%2BjfX9LOdy3A%2BAQcGl1HBI7CkSXCOjuM82Ux98pl%2BT7L%2FvHzquuD5sEfMM9oOmrSX9EEWPywdGmY2HNzgJfz7O9W455noQvvEvETqMoHKXeLJemz2KLKmeUGTF1E8LAhvPBUVdnlG24uId7lY%2BDUi%2BkOLB3eKM%2ByiZQJYVnIMgyauVforKqoAOOxfYgkPHDuaZJsH4aeTX0nYlW8gimFoyzcQ4XCHZMtRc3U0qF3Vvc3oOP4j102KE4nChzIkEh7dw%2BnjrBTcwBEI0y3ZBEu%2FyNbuDKEBD9NSNqrpUgkRnIMHNM4L0wsd4JatdCg4wnpBPU%2FThQv3vIGD%2B%2FpMkTbvWdHQW7d4ooDwWrFxwDpHsibj26fHeOSZMI3iCE9sc5au0zm4zwJvKVHGWo2svpMCT%2BDUFtZrs8WH7H9WmqMS0IxHnpNlHAiYm%2FXHPXfBvaMpYDjIaxq1D4ZrM1xX%2B5XXz%2FJ3FejvbVwXmS021S95ryyBLs1jDABH56REcOazQe4QmCDcAQvXK5IhljXxnNWZhE5ahjVqT2yUeZDPx%2F11NlzCI6cTJBjqkATolDjMJywYGqnUdNZl2B0Q9mCx72tqpHVAdZ4oAjFolBE7vaNKsYU76spInBRPzBJ8doAmUrebxV1I2EttyUSYPpe%2FH2FnEc8N3APoRZphJXnWBpAhTdA%2Buzq%2FYD6nYPoObHpUnOTF%2BJO80cmfRtRsCc01S%2B8TYjP22wQMA1h6PaE9tppxJSI1JfB1Bd6ZpqukQNyEdhLdOmI9EnMzXy5fdMnIi&X-Amz-Signature=2d385d9ad408abb67e9d168e7fabf7febf2a66db2be31fb617dbd1cc11f60788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

