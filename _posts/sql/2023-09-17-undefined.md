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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAVESAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDTqjoGFZGJHkRTNU84jfM2PINVUBwBNXwvtIfOYNlKlAIgEdRYaSwEcfs6usjnuq17ojt5v2yTCMfAPy3iZF%2FnlwQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPap4VNPDOzuwn4slCrcAyeSqF7C88UcrGD9HXdoSI0lkGhWtXTXMYYqHbbHnk82K2pwBtO6Tunpe%2FZ%2FvBfIq%2BVuoKo%2FDgTP9%2BwUPad5wgy7cKFwIkh63c9Pn6aRu%2BcfNd557HIbKCxQ50VOKdWjN0sLqBJoIYm4Rw9wcM0KRBo63VsxIb7h49C1X5MTqfYeuMMXGp3A76hQUdx%2FnkvwS5TOqsLxEvIuIP4eTb%2FngKN3biHXq0t8qL01Wtnvp2ayqeZdRxhZA7R59EUz379lU3TQuSR6ylefEtaGNdr5rIf01KurBXpb4OhcxPqm%2FRSGyrMI70fUF2msmylfnCGrFW0YpblgBCMSgWsudq98u6MP4UCtNy2RDFd7sdM263UTryV3q4FzUBvuoTBBqd4F5W0mm3WD2pxzwC%2FTPcmzxhnYqCS1h34i7XyD25A3boBisBkzOAEoa4ikOKej1zAWidr9OwJ2nNoXQN55GPGQ4vz3UGkQRMevAZlsUr%2B%2BuAtIcLlplBUM%2BnvLfFce4NHS%2FTTfb%2B9ql3EWfB%2FLmrTzGk%2BWf483K9sp42vrvQP34%2BhsUODNylgol4qPj8cgOdj9vv%2FYfhr8OwNsKz7Xw4CJK2iZ3p3DlOHr4ypj5BqN9tAvtuJ1v0Bg74PAWX5eMNGSwMkGOqUBTu2E8urocc8kbUVzlw%2Bojw6NJxuiigCnx1PogaPgIyCAAuOongAZ502NSyjUp8GOwaTGTi5UugTagWs%2FX9tRQQIhIYvjvGMR7YXPy2QrIkfZf8AlUvMyK7lSQFsyFQr4XNc4UWF6LGgmDzY7S8r%2BLcUMjhjjtocb%2B9yT%2B2i3VGtyeacB4rmxrJi5AvtBo0mQ3vnykf5kktztdyJdKLnm2LmLz5Eo&X-Amz-Signature=b3b7dd92a322444c171766a15d3467c3add17d0b86e5b1dcd2f77ae101e34e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

