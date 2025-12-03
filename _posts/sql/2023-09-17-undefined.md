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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBJ2KUT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICpuKV17qCwM8FnwmjF92uPX7pYYP3bhrp0%2FllXIvaARAiEA3jxIMFq8sYIPP5Cmzo0%2FyYxZ5Ef6hSXsbwoywx5%2BnjEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOLcV5rmfh6u%2B16qzSrcA6mAWkPts3BRScCFmA%2BGAeF8FEw13qAV1NW3w%2Bh38CeIGRvFBQsvBzgN0368JyfuwArwHltbMAtZVAvu9N2R6w5ivqKGauLNQ7pD0gHdQyfa%2FicSB4O7YrpFq8DmxsMeV3eaR40rTItCjrBPfhUtvARR9m9ysWaSBZdJd80yc2EhWPFStzqrFbT%2BpbBGlVAu2P78C56hBSsCHVAL8NJsEjgBzS3GIKif5ye%2B7jGUN3SNhw2HdXz3H0duS5fe9PPyd9GuJ%2FyRximAFzZBT0Wwdlqkq60fbn%2BsT%2BEGEsBO5wsHSK65ojzDMKlSi407xqmKlacZbhcI4s7EEzmWGVtdfYSm2KAjfcoYtbSRCNjLGgZF44XgcJrWBf1FThh1kzNLwQq56KYSs%2FREGsJo6D4J4%2B9bD8ZovAgVg%2Bza5fX4nJOoLIJMJ2ylTwT%2F%2BVIr76z3QH4rZYMEQSBuKOBMrVtIQfEOf1ZbBzvD8g%2F0ZhQZ%2BEjNlI2VST7XjmzVsL%2Bayt5JsdxeFWr4iLZ4Dmnrja8EUrIct%2FtXlm5JptV0UAb%2F4osYKUvaeyqGHQ7CQVohlNrKPEunEYC7c2lc%2B6gbEPkaX7Qq9ij%2F3Z0SbMH7KxCQysOpbnQVO2WUAtxKvK9pMM%2FVv8kGOqUBze5OwaQzQC1EYjF%2Ff9yPmQHXseu60bNPcQBP%2FvcxpSETgbnNttwyRbX0C4K56VdMCprzqcGcv6rbczl%2F5ra0Lyqg4mYf5t2DYuMwu3oJta4U8J9ifTKVly8TLDC6sIIrrrCTIJddSBVnWud%2BbPoBIIwPCAufevsyUQYxzdxNXb6XlnZb9mNT8ckIGPtvEODDF5T%2B6wkT0bek36wjGV%2BtuW15MVP%2F&X-Amz-Signature=4046925cd7bfc3b4de1210936a134c711a6d8d90bf3078bc6c94441de6f9c59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

