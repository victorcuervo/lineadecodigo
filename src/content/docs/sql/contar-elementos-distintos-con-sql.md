---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3NLP47%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCXAuHfSerjy%2BGqx6EoKTKAVlMCTZFQ3By18fzCnEvU7wIhALo3x%2FqSDLdiV7%2BWRHw1dtK%2B6AslI9zMbIHsw29FhaWrKv8DCDYQABoMNjM3NDIzMTgzODA1IgzYk5gyqyA9I%2BSAAvIq3AMn9WGHX2k5NvYiJs8e7WQeYRTMiXyElCRMSmwId12H1Ucdg0UJSSh52MQauXnXguHw3htj2r6SPeCw3SoHQ7dXtDnL0CexCpIWZI7Rn9hr0S9WKZCXNMNSlSDfrF2DkLvQC6U3cec5cTtTx5Ltz4x1ooxX%2Bou3i6hEdJC4y86K7IcxhafZBO7KnzaMpPWnJawMj8BscNb84Gw%2BKMwtgDyqOvPAUtpfbb7orUAyGlCe5EFm0blmPjWgw3pqbs7baAD9CQ2%2FkjYS28Wv3F6vAUFAX9hYn%2BqxG%2Bf9ltvcP3%2Bmuk3zfLo6bFQgx1zZxlYxkyn9LAZWOyrF3QEib3lKPf3uRvJP2vDSU3ZH5AWRfRZ206sRwAed%2BYiprOlEKAABFzG%2F2QDhs1ZAiGyl7i8I7NDrWtD%2FnM6%2B%2BbhdM9PH4z8deZYlSGGZM3mGMitJUwWU3mPXvBANrkgl%2BxYNAdceQpSxS1e3thyGcjw6FGsjIaNPX4Tc9XSUvh0onHJTf20rpvVScrDT8BplOD62Qkv1J3SI3uGLzHhO2jElba%2BKHAbt%2FkSN4gt%2BZt0CQ0tGua7uPLz%2FEwI23A%2FScJiVcymHyl3Kn311aoawIOC0Ex9IAW%2BTBlQ5ZEF2qip87uO1EDCJvcLJBjqkASAfd8xrITOy5dVCzkbOjA8QRQY9agvswsck3PuEG55wKE8ST7dhHnYAhP7IfFV6Jxkc0%2FQIf3ltdTmwg0U7iliqfyn%2BU0LnbeeRjftGaLpccsGcxo%2Fy9XInxIMIwZSIhrMjYZUjwdEYf%2FpUs%2Fd2WoLFEdfzjwAt2fWs2pItZCDMjTb4YJY%2F6dVpLIkxCQ3TrNrKJz3mFlbgOGGwgVrorzHWGlIT&X-Amz-Signature=ed6b37723500faf809c189683b8c18fd5d8237464e5397698d88b5f689640dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

