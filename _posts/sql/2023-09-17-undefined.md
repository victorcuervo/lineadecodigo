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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DWCHMU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFYGp1Wc3Df7bbLxEgZC6XRpFAkBw4IH4byMzOT4hgUQAiEA8qQMTWNlrdEh7KMR7mi4WAN920lmKzCyQkPKIXaqpz8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOcPu%2BSYSyrlWLsCcyrcA6rNPpnortMvxZNSron26tduQ%2BAChEoQql2x74qKozcmSDGyJGl7%2BdIfkcabwXGGdmiEFa%2BzC4uG%2F6y%2F5ojjnLAGKjD88apt4D%2BHsaQ3pnAfzAwMGdR1kh6WBvbRN%2BI3uN8yVRNnnL4q5bgWcM9EzQis5PpBgy30Y2DW6ljRDvlHT4sXqInGvaxROhgYnTTedZ0BMfKizNdQ4TP6zsGqhObbxQjJpT8cy2JJQEgWuY9sUw5Tut4ETanFcycRFbVJAaQC1C0rHvJ14uWJ0BkF2jnocwmZWThQCdiczqKaHstz8xFQewavGc8FoNbqCtuyrNwfIbPFI6qP5i8aWyr4CctkF3gqpO5q%2B6h9ZhDtvq1KDLAS58oXDB%2BwjNvo67dcSsjoeq2yBqBzObB1p7A2CHppyiWiGWXQXQEBog3CvXC1B0qaQlMkosqhK26ybbaDv7EIIwFzsiBexpE%2F365G0ZfEVEyhUGu06Il9%2BBoLRrxI8IFegbFpDfNEy9K9eTCCbKH4silZRSgoDK1bU0yVykg69VGK277E3hFaifSmwLC8SlCnGlgQpR4BrEhDTJ1jtk3ezgzhFPckVgVG1iFEoPoQd0WLHSfBMlHv71s8v3VlBDfRtssaWQftM%2BaEMNeTwMkGOqUBl17RkGazEblFkkbkbHPJoVDO1nJMqMJL2jBp4JIbC7EcsW%2BdPQGSM6ey63SI%2FI3ysXhqo0iw7J4NjnFVWYGvdSi3PHqUncI1Gvr%2Fse31dDzs%2ByDNZBqwk1JXpvMpJXXRV%2FhfRaBnwKyo0YrWsqJT4uC1gBhB5VUT8YURSna5RyIsCguRPtQ6NmWS7tuIk9QSyqTrQi6bcABObexE2YSvK4ycEmET&X-Amz-Signature=cff7ccc0704a8e2a79eb99d3eea718c66a578732f14a7c7bea763450e2528158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

