---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQAPAQF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD1LDk%2FSgztrqDSXRcmLfTgMTyQ1CkUcyMdpoAACrGrfAIgAMpHvRaUKDr%2Bdgmd1wNEKeTXweAk77nmp1SFzazq31Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFTJyd3eK4NzTXa2PCrcA%2Box2Cjf0niX0d4Rdis%2FG6611IF8LJ%2FJBPZ1P6aAXGJTMlyFhnWaXhZl2dtPlef5ikM54bUiMtY8FdHA8eC%2FAZZyDQg%2Fl4y4SCEG%2Bab3QMLJzGgnl8dn%2F%2FaLeOfgZMM17bC1XCVzf23LmaVJyzL0Mii8Xqc%2BnKa20rCqx71znyY0OrIX3H1j2Dfu0jVNyMA5K7FRZ2Vc5b5R8se3OfetukRuxxWmee2EZ0yltE9N0d0Y27OSS%2FrZTxTpVYZu350SDgFfx6jCSPGXcgrel76q%2ByRo3nwq2ZeDEJPXbX7Cd5HT50poVHS%2FLhIajjTfSo6Gt7B6jMmRqrpS01rsVUDvD4C0eDx0ERcsVzqo3E%2FFv87qNQZvLWm2tmBwDhEtT%2BAuygsxVcwUgdr89a7dtNMBMd2JVBj%2FhWIpF5ylBA9Umr536hljQJAP17UkxQn%2BZxHLrOMWTx36qi%2BUfPwh3KzgBxHUj3b5DT02UBV1Uv0kcMYDawsb9V8Dd233ckl2hkmSBdlPrCxQlGq6nV7jc8v0o3y2mbAaHyooJTsf%2FYt0E%2BMdg0YXH8nvlfZUxAa4xPEl2pVbk56Q4xhhIwS7sL7gu7rbYrWRBY9SKWzbBObccnIQLFwus2K7TG95jLI2MKWExskGOqUBhXv8IKd0udm9Am%2B8JrILAehzfiRTuTNMY6c6GIsrGc6mlOCad5dYnHsqL6%2F3eyZHaWlSEW%2Fw6dls%2FIlNar1sQTDSN%2FDnOb3V4xly61L5ZyeldUmHjQYBuP%2Frj0wENZXndxhPd6NVmignY9p9ELdVHcvin1By8IVEpgDThvK7SByWK4v29hPz%2Bw9oHG8k%2FQ6AM0l3XN2XmAZ6C%2FYo1Lofq62rWr4%2F&X-Amz-Signature=a5a17a186bdc4133f917e8380c16dfd133894feb4e9ad2a47725f18660fdc82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

