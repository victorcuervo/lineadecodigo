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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATOJJMW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD05Scajw8jUi8pIgj6YxrHCw9mDeoE5h5BXSkdeJSDLQIgKTNmIBnEfNM5xuRkN8VGCUwhyXiBaBmW8YRD2VRHLb0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLFeGX1NWYCuyF1%2BYSrcA9HKHTq31WFgRxtgQKFMC%2FUAH6AhWWrTuKHl1VibO7AITdntIJGiWk2G8THJqzfb%2BmBMMqShOGwi1infNbI4x7Poy3DamJy%2FISR%2BM9vwtK1Sq2qLTKSQhBfMSXuvCdFyPLpg2HXwVoCfBbS3GzzPZh44HHzjMqpDeFTqGASNgeQbeKEkcqJUL797psEvDw55iPUQqP6Ts7t1U4rhx5Y3s59cqLja8CUFU7fmKg6VPgMv2KmdckUbevusf7FoXZQCKAsiNixEs9Q6hHwuwAjFm6Hzcy9kYBcOZviZ%2BsDotBbh3Uh3e3CuGCMlmQ1vrOkjgLpc5KbEKczx%2BEyxQ33q7UIVV7hOwjg1O1wWsJVKNGFfm4JkZ2Ia3nSdbjCI0E90NMM4sNXXLT9yMBFc%2BY9OHM9QTHf4XZ67iSdyyCdIMQQSsK0QFJDz7HHOeBE6bGU6LH7M7QVuGTbbSiGMrCbXYxZC37a%2FijmIzrwTwGVVA4qg0uQnVloVoVRaou%2FthIuIkWws2s8k3yZ6p%2Ff%2Fhrw2pqWj0sjjIXQZl6wFX%2BX9X4l%2Fd5A5QPLCeMPaSqljRvPp%2FNe59erl54XVmqAN96GTbFjqnZ3IhuK8AaBoF%2B8BCMLfJZMbGnexoe2JIzoTMNfbwckGOqUBJEjpB4gZviFoNKmtHSGTkT0oX0QP5wYA06ZWx5L%2B%2Ff8aq4BIcMY3QAIUOwkgCqOTD8yKjJczATc5uOQvTF81v0thT%2BUUoK997TJEX4dwFZEvng70SAP9%2FyxQIXXIhKx3Ol8X6IxQioPF29S8Y9RurRN5xpplbIX4jrtgDA6w1GMEyjFdFPIFA6IFulCm%2BAQseP15nKOcVrQaXaSgvRTRbPIjQCoA&X-Amz-Signature=ca6886b73d2017ce4ceb4a37a62d083b3168cc919135feea5c7070ae80191881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

