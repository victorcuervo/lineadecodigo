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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJNP7QW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDeBkALE8FqFNVOQeXVtqAOK3abU3yPx5430CtuUv1WEwIgP9HbouBXlREPFcaKP%2Bt%2FjQJQf37gZ6my6%2FY71IHo1tAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOpIfLrzCparuVcyTCrcA787TAG3rDF8424s0sD1YigdeLH5cowsp08tCGfFXjvN5x4e8e8HhhHahmX%2FZRbM0uj%2FMDK0w7WQ5YuygURtjvVnsZrIgjj5IgOneYLWOLBzYjSOB0hJRZCRlS2DIOYOodKaFTkHwywYPYuwjewIVAABTlTIKarSsJMT22kakw%2BFMlRSjoMw54REBqi2OiveXt4jmT%2FzP4e%2BT0gHnQVN1RlpNarEkIp8BwcaLiZ2UIeVlSGSmJHFRU2bWAwC9Gdr9fyl9lEFN%2F%2BEg31vU0L3j55zoA8amGfp%2FdhJeAIdol%2FvxKITRknVPpMQ9dt7NORZxxrfstpu6Lw4jCYuVIQk0382LpLL7hIiGSGhBO5lEMX1ZaG33eV2JstfDO05nLm79zeOYOdUKPxEY8s%2BaugJ7SSzV0JcpbSpg3JInEW5dkw4i7H42SEc%2FMI4j2SXjtada56rafl%2FX%2BVlqfe0SPuHZK0SuiFU6l82tviqA6oNy4IWssa9dSaBR%2Fer7iPS3OaaZ5gRR5XzlUxZxFxxfSckriCUE3YDKL4kFeqAUG9Vr2QUCNwTXyde49dXxpB9ai0T5RV1RTPs3kpOz8bYAOU%2B%2FZ65YPX3tiizvKjtKeTpkE2RX6JkYPrt1DI%2Fqd8eMOiWvskGOqUBvQxY7xbmyt1DHsjeN354bjFVmFiaKQTFMUHs%2BJsdDkz0KzacT1TECMIP65OLqhMoW0TfCzMyZdi%2FjCOTtmIU0sIZiCiwApos2huuI2LHkNpbpniB1gCQTF1vwijzIJ%2F4M%2FVznwmiFvBD6kYgZQmqb95eVtGeKZxYu2XRaeUURhqh4519ycn43XQE7CZomhooShsxskUxFF6TNOpRddtchC8Uw3Iz&X-Amz-Signature=85baf810477fd25a4d2b83df370d347320c721e34183b19720068c0b63e9912f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

