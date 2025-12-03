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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QV43YB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDD5bzt%2Fhb1FJK7F6J%2BN3q9%2BJkC%2Bw1Nu63B7hjNTNqToQIgUDvPCbQ2iXBJAE%2BrhyPBNPOBsysjBOi2teW8q2%2BwFhYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGkQvGqfXSqdrXFFzyrcA2u6o3LF7PzDIKR9x2cBpBFzMVjrTwN03tKApSrpnGo6Q6Qn6doFbhCdbE%2F1Z93lM5UTWm%2FE5DGtRJpzb%2BvvZ2mbdNSd016ToBgWl2F14BZtLd1ffGAhGQ8sKHE5dBJP6d6gMx8YN2eqIDrpb7XZmQBAq5QhxG9ZBIeuRAY2%2FoDVWpIg5K91UergZZfBuM6X8oCSelrU9h3eyRgYmthVjzNabgLjseamPPgL0YXePgU3z3Yb4jtoJbmPK3vquQGhnS46gJHxK8GMnbraYIDYdbbSS4hEmTE8PuzRjO8evHziXt9vrgjlfw8XYphRJZ59H7G0GaBmG7A66gGdlrP1Fio%2FcDURcBROBFAoTp9ogCFHWGGTz6OEgCg45zwoqN5NGLzZeyCeObZsbknhGDCt8tJlCylAZNNpYBVuBFB39SfjfoUSTzU5cqbAcBXa6avlThQtOmNMPf5M0l0kQgGHI6KUH1lDHaiOiFY73snCjg4GTHng5lwgnxMsFh9JOKLvj3FyKLnAOHvU4Ee7L7HOMt7wqoutjpbRnP3MHcsQvwQ13ta9omb2TJtETFnJJFFjr9XwMIoMuNOefTEb6ra5vQRWWTVVoOkpHzTgnLARzoVdPL4SG%2FEb7a%2B0mvIfMP3AwckGOqUBM5BGBPczsuL2UO6JuC%2FdHKp29wa30v6wbBIiMpc2ZVFtQ64n4CRy%2BEj6enBQoN1oR6mBjD5P7oP%2FTfEValQQUleHeX8eIJKC0Tc5HB88U3DsGwsG%2Bho7VlmyC6dq6Ue%2BIQbpClHf%2B6CtW%2Fjhb50EkRPqGyQ%2F5bm0pjKhnNPyDWOoQu2b5zZ78GZvtLf3UmhzBiG3ih%2BfF59XVb00e%2FWq6PdeMWqK&X-Amz-Signature=01a69326a2fa9ccdc7335c6b56572fc85105bd9a7049bdf110ec7c8e75ffa3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

