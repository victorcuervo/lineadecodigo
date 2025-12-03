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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJ5GLAK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDu161cwaXpyYI6T7ovTzU1DKk6FdXzqZFClVToPpoLVAiBHqki9e7Z%2BlIhxTEfpu6J6dz03qKeoZ%2Bp69YJrvMw0Wyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMWK9AWntIPJRPbEnlKtwDpBxG8o5117p84%2FW171c7vozAsiCPKtZCA51b%2BpZSuk1A9tLEoMYUB%2FpzGr5SOvAwfM7WxoQAu%2BiJJ5BQf%2FgaD9auaVeX8nSRFV0%2B32slV5c8wi%2FwMVbXOmbqt4hzFZJpGhZ215miWPdny1%2BtiKf451hqonnqGWHZCl4v5P8NYABCr5OzXF%2B3oDEsaf3ix2tJtWEzr7j%2Frw1otCoBzanAvXT1Y2UuycpTGL7H6TQS47zS9aFC8EscvDY109V09A0nsnxzOSlRAQTOQdYZOXh13DrG5IrJjoG%2B%2BYz0iHO1uCCEN7RVBSE4wQXdWzBz0rYQeIkW3PZDByQfMw7PHnMqwZJNrsd2gYLTd9gyPGc65cCEDGh7N5qCzvt%2FB3oswFZO3nAgEeQBW20dwLHaTZ43bPKWs0xCGEdDrr9Mpf8pAbF%2FnyuO0%2ByYzCHGLPkBabdfvgLGRIHjVrZ5xyDhDv6J%2FdUvdN7at6DtOSnLAx459Quw%2FrQAIRWaKl1RBmj%2BAXXp%2FRkArvG%2B%2FrFnaxwnhrozEU4UlPpApdnCxxUiZpYOD5rHVp15fhP2otaPRZYi0jKhqQgckqk%2FaIcFs9YN1tnQNBjCR0cz9emQFai%2FcnqEFKYTfPPfki8cVckzIjMwla7AyQY6pgGHUbiAnj9JOmyIlmT%2BtFV5KJXazabaBTUNtTXi9WXsfue%2BYVU6CvwLRtn1e0qw0I5LP50NItVCL3nnGLnB2kgGL4qA7inqQHSChZmE4Em7UAjKTZLVo%2F5z0Awh8cz1PTIh3QUDpcH%2Fu%2B98FlWInn4hIDLFuDeOJhXi%2BDGurj4go3BCo2wAlaEIz%2FAv0HrgMbpgvivANMlDmWOO7nbTbdR4smP6%2FapX&X-Amz-Signature=bd764f55e9bdee6a7cf55d0d637d0056690a44ead7be95345b7262924a5aad0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

