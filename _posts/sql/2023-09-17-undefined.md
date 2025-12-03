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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAKMAQVX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCoaLmPLQ1EX1HuDOkL7kC6F%2FM7N6JJkizAUo27ZayWIQIgT8fcvVCp9s%2F4ectlfZWHx2IcnSMAtoUizYq500zNz1oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD5dcRQIg3mZRJBwFCrcA7faBmeLHtoQo3LxUZli95%2F3CrnvAh1akN2082miHj4cU7HT%2B7nvoPBJHg1CIdCPHINX88HH93SRGa0w66tj67Ekmo2ihk%2B6LLbaaUwkHffSiwUrLT6DF2RXLB5a4H0OGC4pjVe5rNg9SeTTU7Csqy5Ng%2Fy8wlV0Bzfi5Mk6N9SflbDSGnODG4%2FsQvKiHN5hTuWAuRW5sRIapO27reS%2B4Qy2eCW5SihoF9hYz9tTG2Fjz2%2FIqT4JiShmq4uSylxG3B1mKdOIwRD3onK2QH8iWiPPRt4%2BcNkw7ak14EcIN19%2F9vB3dxIDkZ9wesz%2BLxZxYnN5Z6u5m2eJkJWv7IAdH3NLdNqNiAEm4Ytd1lFhbaLjGRylWOpJuaoP2AxB3ZoHqFWWDuk1xTpqQ29y2JEFSPyR5gYW6lWq0Iy52BzT1rhyZi7ynRfe0qNP0WHaU4hlq7j60wyWFyZnBFFsFjk2bcOG8bVQ5ryZcySOSL56liSfdQvUj5G72UdtLi9o6YYL35wViHCUGlduUI%2BvM7R%2BU0HQ34kb2txeuBSuI3hAo82R28W8YFVxHRnlBE2gKnCCwHlaDZvA9YXOrxDaCEXY5rVQ1g4iHsyyXazu1%2F1tRYvHw0UghwMRklVOlxj4MKehvskGOqUB6cvMBiGcfeMAbIjdAsy7CkdpTcYuN%2Bi8aCqAVZ8Q3btv8wQzkoty9NzvhML2ZOqL0rGA6JfUblQlkN0JpHroMkqYiRYLTQZzEJ73BFg00mZpnLRZY1mjTVEajC2HCzAn9%2F9mC5AU2v5kGFFukomod9rbrFQGkZsWetL%2FEgVnorCWHMvu1ELThcctToz23H4W9I%2F%2Fs43G0amvnZYWEVYCBoACeQL3&X-Amz-Signature=144cb8da76f4846a61bbf375eb98b93e168a930615e35cdb1ed7c40412510dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

