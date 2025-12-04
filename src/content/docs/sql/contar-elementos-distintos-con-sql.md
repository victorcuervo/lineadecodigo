---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6QXUTW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCEHmJMxThfBvVWYqCg4aKi9P0rZKSe7gdlnbA0efPS6QIhAJX00OdTMZWi8h%2F3frgmC7VgpY1KcRhQDDRGCfs0GnOUKv8DCDoQABoMNjM3NDIzMTgzODA1IgziIlsO%2BZI%2F5ar%2F%2FG8q3APVi3E%2FHvXVoBtH8H5MSUhVfJjZ3Q%2FDje6I4sgDnntGLFYjOu5AzeEOWfgMaIoz5JWoYdZUhoOuoPvj9a%2FCIeNUS2QDME%2BpHbrOJpqNSMEpEAAygYjMd2s0E3LVKxbOBt9eU8ocLEyQz7sOblLcShypyodi%2FrOcYLj7y%2BkWsaNmUKAnAxUW2mdfSUZFtZh5SouSB2giQ9hU784ZJUstplKiRvMVLIJWb8XZApb%2Fn%2ByhV6iNYMWwd44sDFwZcrjv2m9dI2UafZ2KG%2B6N0dK1ZtwbYFeRXJ4g8tFm2QY6W1p6cLxsyBneyQZN%2FA9lB%2BOqkrNLLk4fab3kLD1Baj49FwH0atuLPQaVmNvHdFGjtf1%2BOGr5VWqn7BQG2FqnPzM9QgJSGnxkChudjL6hmExsr6eNSTjuDo7piNCbB5dWogSSrctg9cT0gcQwwZHEQHblemSJevq2aR5A%2B0%2BSR0nVP4AmI%2Fmo5K2uuQxoufgXrax58LD%2FGPYSwO1VjyUi8%2BwIfUrQewis1DX1efhKiM8SkAPbCqfI9xcGde6fm7gcTcl5366CRytWcO2tu0t8aUokJqkctn8gSTBNCodicSFqn7tcRO2TJFWUqP2LjlKlg6837Yp9Jd83%2F2uJGldoeDD5s8PJBjqkAY0fkIYJGQqO%2FbpKnoxtVYo0tadOE5TlqEZVcjjQCyq3EU0uqm%2Bk4mMtwVEaFWPORdE6ccMQ0iB%2FBSs5WrZJBSPbBYIWkyC6cngT2F5XAKPdHTYiD9WAxVDRiUfcJOAGSqeLXQObqiRqNspXFgVi80KC7BymLAd6sXPYgczLKlgsPeQVB1c14p%2F4uRAFNZzZb8Kdm2sOzUIfY52lyN15yXiQ56R2&X-Amz-Signature=182e08ad82e837e25f2edb8290088364268dfb9c0afec1122e6422ea824e985f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

