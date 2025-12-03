---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMZYBUK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCXRHKY7PbsTdRA6eY39Bz6FU7RihXilBENDqpLFWZDAAIhAJjut%2Bh1nwdPxcUkWFimXNqpbGollB15r2LdqaTlN8P%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgwSOQwL2tHLXPM5I%2B0q3ANakbtmLdAiBE5UMVa4%2BnitfEZRvsnwPHN9d4VrdgycvQONApZKthhBqxak8Q3%2BlBqZS2eYl3LDtLYcvt0PXQtAAfj%2FM69tBK%2B36G46ZcktnIujzcPqNUSRE4rGjTdQWzJGGXzxG9mw%2BXB0QM2cVzRCGHOfmy7osUnM8teYB6vnF%2ByILCf3e8gCsjmbtQ36iYkpaSEKOIORSVDIf%2BGBkl7QwfdYx6ritML%2BOzU62CeMw7bKGOvUHrg1AhEhtrzadRGdVi4kHaZ5B0sDPnrQRxxAHHEbpFi8S74Ck%2BXAe8HabeKOSs3Wr23r%2BwrITawjLypTyJgazWUP9t1hUqbNIcXSxBN%2BXqpu7uJuy8mcDnTr5cPDBs%2BofuWd8Q1WOtmc2mza%2BEx0CrIGVkIoUJCGj37LYggXmXgZim%2BO9mJpiJS03aAw2H%2FQAclZ0Xg%2BwfSQMmPEN1WXpq9l3nTtnoswUWGlOObEwrp4u50Q3CLeqfmvu7oAIVHWhqwLuwMhGGXa6w4F9%2BWiiA0KN%2Fq%2FncjDa2T2HsabpYCEFKUunz62n6rBngom6BQHo97EY9QtXLw8byDW6CiN4VRMjGCIvqerxsw1lrOdlmvCryVGJFMCdjfAhK7UgLvYFR71JO52ODDDzMDJBjqkASpNrT4H0%2F4HqoD4jsyyUu%2ByPNLlEXVg6wjqa%2BiygVeZAZZ4mlCNaxzCUWj%2FtHc9IBQhCDDtyQqnfjmHAdxeup3ym5o8b9%2FpwcEfow5KHEPRoTSYOgte7As4ZNxzRv9JUWKWWtZguI8JSEaf%2FALWiqQhiPEcJ5rMh9WiLYTdPYj1Pgez1AmYr%2B9tfToJsKPlOFT948JqiWvntnsTpCgNKPquoxzU&X-Amz-Signature=d36c39d183e137e5615fdd6aa69c77bfba7a4ee857af272985f787aab9cc732e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

