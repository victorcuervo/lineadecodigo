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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3P2TAP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEJh8lJ%2B%2Bb2G7CotIokj%2By3OlrJwOT509QuD2u5w8e%2FZAiEAqhj%2F4UQLl2Gup5UPLRd39p3ilt2EBqDT7ErLHdgJCo4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMzWGlXA3a%2Ff6%2BYSQSrcA7m0hWfKQcmr3AY8e1Vb6lbsN3zqBNOtQncgam0aLKqY21zkHDL0quoPxnaTUAYJ8Zy3k4BsTbsYqN2vNeK8dpyYqbrTSjodcc%2BU3nL1iEZhGcK85aM3jKvaSR0Gmgzlg3wb1c8SlttYUxqNzMU3FpCPEw9t8dfdGnwcHHIO68CB6yqozhh5Xb3k%2FVjnzB2repd%2FSi%2FgCXl%2F3ezhEBrHvdQMQ3deOMYMNs8Tmup6S5b9xgo7XRzXj%2FzbkG6nnpjRSyIGe5gHFkm%2B6eGr8vCVvspoTMiUFowGq8I3nHpKSw66BAuVTO%2F9zw8189zOsN%2BSuTMIfSc2J7%2FhzHuDBUgvSCiMexrLNpuWWEv7myLBeY2vBO7YQn6c7qL2S1vADKVv6QK02hRf8Ei041N%2FakxlUyBf3ivvKh8wdwgf2tnB7DwaFzEuwrnTmSGhBTQffScqmSRQkV0MEwci1NUuM6qNZXqebdnHhwdD5US7P4UvDkoAeS6GYRI2uCJKgcY39ev70lh8ZmOoZZi%2ByZeY3bODZwhQnTCFARr8nIw91SJuxyRjxpz9UvepihzHP3kKm6gjBz9EJZ1wInX%2BhqNgpQS5vo9OwoaSv3SwHcv4gzNaTOYkLjJnlzBZXMsbSNlJMLb1v8kGOqUBg1LEPVOtVU6Rkkmz9pxboBQ5uq%2BIqlP%2FJx66NTBPjetd9tBfDB9koZr7PR7HgyqnKUl%2BtxTmaE3Opz9%2BBLGlJIAoZby6hkte9PXjiV1hRdpFbGln9iNj0twZ2DxgcJP0IjlpU4WLRrslY%2FgbQy0eFI3A5xqeRm%2Bu4i8uX4Y20Pya2iDxgOnlHJ0It5GZiV%2BTlwYtip9nAcSmwe%2BdE9WIoN5vUjOF&X-Amz-Signature=36db9fadf1f79b5b82f875b8a38a0884f32ee9d05b932c73db00bc526db26a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

