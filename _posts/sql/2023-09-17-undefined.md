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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGS4UU32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDM6FbOJkXXePA9FY2o8dJkrUPEMX3KwKGVHb1CdZb2ygIhANAeFwU29V%2B69G1Ss4IwuZVJ7CZuHJFql%2BKxzpNVX4rYKv8DCCIQABoMNjM3NDIzMTgzODA1IgzNaMBBWjktvNSdNg4q3ANUDrSeJhTo%2Bb9ptdwu1nGVBs%2FAvplaPE17VtO%2FG6ji54GPq4c10lJjzNqnMGhttiWzZzGPmvGKBMFQs14cisUdQBOGPpMnhBf45e47shCZeTABgJMogRvidmqIfkiGCEAinBGPIFXDcvo0IafTTRraVeLUOtJQVwwHnmdO%2FTRQDZQ2omh%2FBtapZDMYjyrRFJxOqMJNIblByA%2BnByrvLGzk635sMyh1hC69pyaYZjz2JChVh8W%2BOPrSm%2FJ3c0d93UXT4hnrpO4iExthPrNzsuRjK%2BgPN5lYVYUcq7G0cpFXZuc1QVGyom5rVxlXYKDWQi1kFqHQ4ZJlsuSILsrbTyAZDPOHVbz5Ap6Hc96IYf3mDeKYAeAr%2BV96CQpa6fTEJ8UfXmMdP%2BSw3DAxxSabdwsZC%2F7Dktq2rLRR6jDHwT92FBFJs3kAmP8VhcGX3oEthh5ByGd5%2FaiNWN88t8MzPwHwA4pKq979O2H7ARFAEBUS1V6NENO2Kyahx0HXIcEEZVvBPb9r6M2o5CJqpP2XnU1JAyTQrIclEbiy0QgFKncF6oq14KUXwn8Y90yCT7fOPEG%2F4K%2FmBIwGO1QijzAmBJepmqvqzpjV9U9YATWVDJE02NWFo0NXN%2B1QqxKdBDDklb7JBjqkASvt77uXjx2drp4RKAqaesvDbWY3lDA%2FaSekn8d%2B%2Fl47fGdihL69eqv2yGai3dBlukBwN0Jb7gAeIABNKjaa1Cv99ZPVMjcv18fha7qohhSB9RsBRuqvuoaXpbS25q5URHlbPtIv4MgEgxKeh98jmC73pi9eyJ4dgRzzbgn2YJjszBh%2Fi9ifUHknyOeCAUwtFfTyBWPCErlxSZ%2FzZwTl%2BGFRi8TK&X-Amz-Signature=dd63cc18fb4f18bbc8a416e6e10bd4ea268312f54ff02b35223a875d6ff63bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

