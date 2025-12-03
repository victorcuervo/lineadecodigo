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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTUVN5M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAV2OxD9bJ9Fj4l3x0G90Pwlw5xuWUPIlp52HppGEt14AiEA0gDZXLTHyRoX07pQQJ5A6pKPNb%2FQiozLAkzwWayfHskq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpRpaDIB8nvQGU4TSrcA7ecQMhID7cxm54M%2FLiy%2BGcrHTLGvseUcuSxGid%2BtjLEck%2FybJUN9S5fLQZnP21Ox3tL9FiLaS68boWn%2FywhD2TuofqLrt0PC8WkOvGsXL3YgUmsSkX4QjKyOxXcLD1pibxlT4Y1oLRjEmxegxAcQoocsgCTLjW0HioKEfxSoOJmjPCUqzbhb77QypepsFDcKQRUdZwOHo33URhMEYC%2FsjeRYO8Zm9AaFYYjG7oQ%2F1i30yr%2FOqK0Gf57IkzxB3rnL9ByJR8jxKuKMe%2BIUiGoVhhcxS8SzpqVPwUDOFXTC9HiQa9%2B2cJkQ2iQsMVqNNX%2BICWz529YACMpoyIB9s8mI8d2jAC1LU560wmUU2G%2FCnKbVsnGqHj38kXFnTxxIHLQ%2B%2BkKoFJT4fZOAYrnSoCaXmGoOuNqvGjX1tTaVD7ek9uv4HXayy4SqJVkGKFb%2F5uD9CtNHpuLNDKgFKs9NcIuye16uFTY6%2BD%2Ba4RkiS5%2BrSoSaJ423JVS5fzE4OJey5lUg8%2B6YOGk%2Bb7gNRTIf1KWUM3JDtZAdPMFEGTOwS8Zu9JgAkaL19rvVZPNMgfMEKpFLMyamPPqKhE0n5y1bqP8rTCzW1DH0C65e3SJ%2BCiSju6rcjwEDL6AqsB%2BdCSrMOXawckGOqUBmvGgVt8xujn4zK5K3SPc1mhipsbVgwmx7bH7qfAzCpSwLOcapvx%2Be%2BgPQDhBczST%2FC7%2Bf3b7aX91MzV2Xb54C984uL%2BsukrV7vUJnp9m9UWU%2BRvwjOV0h45aSugZCykZp4gIjcr8%2FU8yxG1sXJox8IypE2eZLvRdbE6SEhWlYGtdZnVwTKhYcnP8in6XSxyTmArwboI047T2pFZ3JD4C3bAoIYmI&X-Amz-Signature=fd67f12392c58bab79092ac528499ced05d3c8830ceb2fbc0bcfedba015979b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

