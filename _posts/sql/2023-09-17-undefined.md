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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNW23SP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICJr6EshHki4I6P6qBI4FF%2Fst4ZYVxtqWT55cHBbfmaWAiEA3G2wyMMV3v60Se%2BDx%2Fff%2FfEqUiux8cwBED%2F%2FWOgnuKkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDqQtODO%2F4TO%2FcStqircA0R8LRgfQtl%2BwRmvAvh%2Bd0o349%2FBmJQzJ6EvJcVU4Nzybn3WtnHQKp0u%2FmUjZhwOG5%2BBep6U7XiLNZn5J180DYelJykTGCnBFRl7Ex9wyldt0Rkp5OSPVC2viIvjRxPPFRYEvuo8n%2BdYFOXpY8j2Ea7P7dG3sJV1kTmzqqcAu5CbhEPIusL8XZ1eQAUUyR56lLUsfAKd8F5pF8Xk1kydXT7nvXKeUABPS7bfOGs0mPD%2FTzDz5bAoaR%2FwFHOWVGWfqr089Na136L5Mt6shCca%2FTVwvF6l%2FLEQflVqWbDkc8qkA9Cu1vQkLVk1ZYmDhj3ZYWJSeRkCC1UEvC5kpTA6ZweByzqLTn6csxZ8Z7DRbe958tJLvX9vvMizD4hBoREat6wakXLZQa2K8EX1gTTufvNXWdvOXBLveHuqZMJAl%2BBAFIDMpMiFrLWCPoiX%2B5vKJHX9oeZK0vSkLTQkJOFXVeLgMCjZzmK0yQIDhXHfKlNCgPtNJcvQVQHazDZltn2qwdti8DdEvKyltrVOFVwfppZLBiUKWTPyQRnpT08ykG0k%2F%2BkHtmFTWkzp7PYSPQiXHYKb7425DDdgA2fO5lDMkVyo%2FBsyRLsYFc6NC1KDD6LjZpUPi2s6N%2F0re0DdMO2SwMkGOqUB0Le%2B%2FpLQ6tUsoGLmZOP7zgrWdas6WFvUxmmkidCg%2BD4faH9NTOGH3Dgl2gHnmdMyR344HjY9DjK5MAnxKKtMDQhXUpGetqvNa7rpmbtAxn1iYS%2BWsOhtVUYFwggQE7bUUxlWhEmtjFvXUaiifb%2BUASuJ5oHZ58eecpXaPiaTnabMkb8XCMA8%2BBBxGDW5TNjuFHfLJjCR4aO1lH7rTlLJ8UOg1rSR&X-Amz-Signature=458d9f3e11054c827631be2b7128c0e8f1f74af4b92ab1c6fce033199919f441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

