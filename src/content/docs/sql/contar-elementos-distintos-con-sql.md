---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWJ6DCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDGhXkfrgRg87a8JwwFnIkapCHDgMvt2L8XTHD4C3cV1AiAMGsJ4oIeBROYHjE5tuZA%2FQcROpaQwd3PypdUF3EogcSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMynmz%2B4It81jqFaZuKtwDBd51DiNmWGLhFjtVK6kDyMNr4rT8jK0gVUx7abSF1dx8hWYEC6lB4CdcWCUAMXVoXDPASm%2BuB94tObhGYPYF4Ki6%2FUrBlGp0uPZZ8qoIJCLg4%2FeeQ7Tx4t0DlsJDlC56JAjpS5WfaolVsQZZcAEZC9sFtyzJrsugCteyDWWTC3oKyrW%2Fz%2F4pUO4%2BSSC9Eb5KXCFjwfuQETEaS0b4GcJLsFhb38BLYRZskfqBxTf0HjU6hXyKXcoRHI6kwyDnbGWKsZBNqmtTGoZyKAvbRMzcFNfNXPlrZRJ9dDUq1PeXjsrJJi2mHUyFLsm9QmJMUJ%2B0Z73H1QSakBXQOWGb9Pk9Wm4C8DER4S67JuqZrYZIToHbiO3ocnPDbiNv1FC2DmJoxyziSoPCz%2FdRoBvZlQtpkbnINbg5TJ9edNpGQaO2vCNs%2FkzRzYvr8NabrjAX%2Fr9GkWTD5d1hEKVNp6uvL3BjajWqIcqp2i4JerLKfHsJ13DhDIwqAFsgwV7DoM9bJuDz6WzEwkfvSknxmfbNvK7wFBzk4mGR30y9GEC8urvbp9KwHygGazxnlkn1mR4hp04Z%2BxXN%2BROuE90YiQqkMdH6ktYvAKJ12FfgFb8OlUWFSpaW%2BJoBBcswZQM5hdEw7pTDyQY6pgHkYrZYsVCru%2F2s%2BrReMLWssihMSkK8E9RwWdjqs5kg%2B7nHpAEyvWY2fQ1A1qIY34v%2BHBqO2WupGKouJS%2BQaQHmzN9X7fWDwhTtqGJaoj%2F8%2BUttybxEp7cULNt7iWIXw8EzaeqceWUFjVV3EYNFwwMO03KlYwnaqTXMvrE%2BC5FtHPy%2FuCtShMapEtAoqtI4Lu7ZujtlE35oI9S1vJSZU%2Bx3OsUt8fUZ&X-Amz-Signature=74632f63cde44c1baeff083061ce119afd295dbd0c70e64742e6983757273fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

