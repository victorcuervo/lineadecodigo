---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYUBMN6K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCg%2F%2Fn22bkzO32be3OHZMUZgGf3njeCfUeomFLz9SjHrgIhAO8xrjge0k24PnIF6p0PZCnNXnMTGGTUxatwMTF%2Be1WlKv8DCEgQABoMNjM3NDIzMTgzODA1IgxZ1Dw6S01EqXrJTkYq3AN%2B2oIz7mjhpYDRPwaZy%2BtK7YB1NENi8BCcPS%2FvaIM%2BJ29SGTEFLOJCbnX1ICJl39f0P9y%2BLWb2dCqHz%2FJifGenepJHjiwngOGO6cyziRIGISS94wOYVr4rnVSyZVQDxw50tlGoee2ut7XevDCfQxsgPk8qzbKy7vam5yP5tuylUPiEQX15TLWzpb4DEV%2FY%2BZWQxA4YPHuOdNbFvvYxVYut%2FknztpcVe3XY47viD88tFZZcsUvD6QrAko9aqcluxQzeo3qKFCWOmV2RBUph3vov526QCqGgiqHm6g8zmLDWY3JKr%2Bue7ZfO6UrzCVlP7DYvLX3llvTBTVpYs5XcRLezXLV843hmY86XI0NzXA6P4dEZtpE4CmbPS2q%2FTlqSnjrXkNVp%2FEKhWX%2BDJqYyjTtBJ1XggMTWZlowixiwUoaypIR0MP2OjfYMQFrWGZM%2B%2BwJTTHlhjjwDtPzY8LZUwWJaYBUvZ63SJm6MlCP0ihfHcyrcMO43rc4Ux5P3RNE3pOH0xGPduujNgLEZGNaXenKdQewPwQdI4nGC8TmPcEbHw01EKdCAR6zLy2GLcD300ksj9Ii0bbYQuAuJv4WcIHxMFMCxSP3jpS1Kx8%2FNdyVsNKx95S94if2ud93c3DDDvsbJBjqkAW6N%2FfJujAjXzBMlQIH6UU8x4X3TxRIsEatILKIzKPWJFUPkxW2w4JN1%2BLNLATTI9yQXH3aCuAIWMZhB9CKWCKYUfwe7JnR8N5shEkW%2FCtZ26rWwIdywT%2BhrqqXarp8V1Z%2Fr%2BwDeBBHtw2R6h%2BNRz1Shl%2BVIWo%2B594W5JMu5ktrV98fPh7CYLplLFqkzaUs7bzKQh7EWI2qjHaTkTIHonUF02rWI&X-Amz-Signature=fb07c4fb18b12e771c46077b54caab7f0fe815fb2e909e4e2152e9485da8d4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

