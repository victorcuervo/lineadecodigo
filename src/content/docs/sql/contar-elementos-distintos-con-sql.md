---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4T2R2Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDchHv4sZSyx4c%2FgRkx1vlhsp2AOa2XQwDckQtojlGsgAiEA8tBFfkPzBX29jP%2FN6eyvAfpJA5OewlVeiCscaC5%2BERcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDB%2BepVtbLtNfnCd0gyrcAwF3Dc1znr2i0CofBm9B9ww%2F5CRgrrH1ythpqK2hCeA99mg6yn%2FlQNgL5JNioZF2l3sYkKqKf76ptRf3ij%2BK0wcWteE0aan58qd5JmJwFtfSCqi%2BF5K4LFVwJXxF0XrQqp9cdJPdDy8tQVveAgsICLKb6iaJuxYnMt6Erq38%2BqZ6omtFW5wYJNyDgFwnJm71V6nxZD7jcQdB54Qw4mmRK2OLhgJYS9uLeiTvNW9Ve6XbDMmV6pJ1%2FtGJ%2B0rVf7Oskuii5DPaqkG%2F6%2FzW%2ByES0VGJsnENg04bqSji2wEiTQ2JpYbUhICrH2TIn2pV7gPVd%2F1t6EYzD6eaIfk8fMbR42RK3MxgowPMge9oXGChmthxuymigetGNNTzORGFL%2Fi4V0Q6SvFA6qsid1PFimyf2LzDktAmV6K%2FbrkS56tot9warGJvm4o4hVGbjEahdnKchvghyciHOhY%2BcyQy502kAWmV83FBoieqstvRzsezkB4ZSKxibqmIrHutoSO7H36gjiTa85USofsMHY7jLHGpUdaUCOiSefY0VxuEOuALphsmEzAevtGNfd%2BG5udWw828yWlWoAP4RtIGBNCb%2FEVB8wM%2Fn8FzmqLWIGUV0bQITx9heGiq%2Bt6PrixQ2AFGMNzUw8kGOqUBn7mMqgwhT9O1XSvgTDslaJPIpCS%2BwYHf%2FMJgMb5t2yCDg3fj6%2BC5Pgqeids%2BgTAt2ptNJfByKc78yPFSFqd15Va%2Bqr1ZamujV4YNd0HttweePZ15Xn176NN0GvuaRbWc0jK6zZMQNn7ww1UDq2ebd%2FCe81jAJunwG08tz8kNh3jS4kGeAcDHJ5p84kCi7%2BiYAzV3fOXTNE%2BUY8rfLVclcxEck4LM&X-Amz-Signature=36d3484eb6e3775238dab07b95e6d88455f5cc937d2959ad69bbec3514e6d5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

