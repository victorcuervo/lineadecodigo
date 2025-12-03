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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGTIFUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIGCutoGYJpYZXaywvCXKIog5MzWIJfKtUB%2FF%2FgKXqUYqAiEAurkrtfrVcMw71mISQWmkfobsNaCDlaV2lvgZJ3SGsrQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAO2euH3VMpbGOz2BCrcA8N6WwQl9m5U9GbNBTIudwnSjJeZGrV6a6egacvJ%2B2ol9IE2J1mBB088DCmfXm%2F8ETw16uSYZZFw8G0vCmZL3KsSwkG53%2F%2Bd01aYBxnm7r7PyqDIjqQtnZUO1hZVsjAxdaE37Z0mpJ3tZHgckDzd0Rkvb0xoqoz4fOBnU4YS8%2FYqoBK30ts7R7g0DVdNGxvNdbDKtZoV2YW9erAFu5YZv7XZHUM0HlrJCNy7R%2ForHfMm55tKVC1SiyfO%2FpJqBPVB%2B5bBrGouvt8qmCyD3BGr3bLkIoMGWt7B5Fv50CKqmzhqjri6h%2BfQY9znsQ9rILUSAwMvBeAgsWkaLVuNXEFI%2FsksSZ7yqMiMW3%2BWmLDHHcy72EAZAa2GnsIqiwp08%2FT%2Bo3Bd2ByF1Ksof%2BfaCUCeYwXnZ2uYJYYWmzzI%2Be1xiWlrDTwWgyivFOlK12yzTZ4qQI5P9JrRvMoBOWW7cF6vkmJoC1pAHWReDxOjAu4asDIsWvGQ5BrlvuDgE1Y7JWubZycQWWUeKPs6THmWVSargUsP%2BbnC6qGggXush6dXOuAEe61tU9FsKHt4%2BEXH%2BmwGN02z4sKZyYiFyNHnZ3iPUu%2BRGqNSkS7YHWhf4lK3OT3iXyJcB23OjAcvGgBwMJDBwckGOqUBj%2B1sCjmLKpNc8dgT8%2BdegemkDTxISHE45pFnfdHM4iD2uuKHUi62WpPUTuWRrHbZEhMkTnuJEhSHgKvxI9ziNUvpBc8UlL3vZjSvQYKvqe1DJL3sWnYjGWPwxexVEF2QFh%2FC114O8fsyraHh8%2BQfOqEepd2Bh%2BuTtGuL58vZqSKa3xjLlfSJeK3z85KJhSRBrPR3shrTYGbZll6TV77NOO5Ji6C8&X-Amz-Signature=edcff9ff8b7b55930a8f40e70caa58b24b2abc8d341b1e509a86dedd8d2941ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

