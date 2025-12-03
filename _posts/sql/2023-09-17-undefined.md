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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVHRYI4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICMqotFOlkdKx87%2FkE%2BmKqwRxnSP%2BKeISBGWcDhCx%2BhFAiBKUnzZUtsu4s4tGHru%2BZR6OAg6wX3OcqgkWaDd7ypHcCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGRoO%2Fa5%2BZJmqrB1lKtwDryjTAFB9jFbMkxN7%2FPckAQTRKPSljAwgHDMhvRvfKPtNI3ZYkApfpMDz2Mbk9XI6cGXAlzDPdfJNCsoV%2BxLkIhaRNou79ssBFSig1snOVJSZNIY0iY90cG7uDTKAgRMKOag1IeT%2FLlBznQ21H3LLCXUr%2BDNP2NQRPIWLFFL1y57GArmAbIFAigbCfKwNDJFu%2F%2BYvOT9sJkFywkZg66DUSqHhkRcIcphMwPFXiHTKNRliQXSQrv3B%2BrKaAjbpKh9o5Q8HSpiatYOUaJQFE5uHlr6TFJ5zI3XNQygZ3wO38utlbyOdZJwx4V2sh3dPCqBKA6cW7bS0TiyRzB2ACG92aUYWe%2F794YlsvtQpIpicv2qduzUZ1BNtoX21B934%2BiY4pIiHCYvxdTc8Oz6gfL7lU6HLTbRQG2G7qVsOTmCw8oms8cVI4Xg%2FddvlHWf72FVFOaQBs4lpd05z%2B2jIZX0mszUbybiCIkney5MVy75XohyWKLzExLlxFO8AEOyLh5NcB932fyNWi3jtMOU8NBXflVe%2BBCF5i%2BcHVCMYvGIJOETmLCmq29ggNMRIVsXy1fR8ykMNzTluGN4vGj14BJtajR%2FtGAcl97wuoio8%2B37R%2B%2FqR%2B6cynDay7olfwTYws6%2FAyQY6pgHXhsbedcTnUsqN88hSk2Boj87JB0GXxwhlDnXLcFb3QvbvA8JdPmZXMm3jMpkR3Gj9%2BppXTvHJPkKNvqG7OhVU9VzOusQWq6A2PH3AGaHH13szm7jXTHV691uzaEDWmjXvz50Uc2iYvWfI0Ahc37cwDQb1YVIPn3SRWOJNUtC7GnYPBF%2BG3CoV7VfrEuixtzFHPDYzZz0pVa59M7%2BuqmZ3apmcYZ6P&X-Amz-Signature=652a631d21b5584aa8e3691a0790472990e19615f6ffd4d57f33ff2e10b48bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

