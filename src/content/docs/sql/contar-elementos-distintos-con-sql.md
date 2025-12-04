---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRUOVFK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC6jrVlsPQ2aAquP%2Fjiq5aphPXRLDGV3GGI0olR5gKHcAiBDiDGfsEiru15LFMHqyCv12oC8ZhLeSOtyUCFepCJePCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMKW4oAelbGcMCKVkoKtwDkZFHF4EzZmXDg0ko14TEFlNfBG1fbq4cZcsxjqbXFjiMjbTBxtxNcIUdiSoOIR3V3jTZFeINmoey9KGSLpeS4DgIscC0zRkkYqJFmfifuRlir3yPj9aYwH%2FR7eHu1QwkUkvIm7B2DunVD9dUe2AAfWmQll8bbSANE4WrsLANGYPDdVz7WG9LZCDSKZ%2FLmgQmnXwYe33D21kIut0z3%2FkeGHkoTf%2B%2B%2FYI%2FJzuUravjnmXJww2uYMJFDtV5cjWO990oTHpBN8GtHgSG%2FlxoTLkQh8N1EaLszA6Hn7Yb4xXHuiB9w1ijdF2kQ%2BVnkdOM489bykaIMWx84jjcMoDw%2FlzbtW2hdmYuIntF2P5hD4VLG%2BZAK5RMp4enFuEy5IPT3CssVfOQ6uE0tXVLxBV2ddzr5kMkwpfk41ffRQezTi0nH3IELHzUBd77wLF4TnPgGcq%2Ft6s7S2wAc47B6vKUveRkcJetkTMhqLt9dOn7mnEIIofWhEyW%2F%2FrDD0E7uhkog2ZjgvzIk5Dj8PgNeqLfiiW0pW7wkZDCjwb78v4OeScblsVqeSVCcFHN00rZVYkI8fczkiXXs%2F2oNnsIYhPtpb5VUwP%2BK6731n29kBu3AHU%2FYmqbwVuc8gznq1yJGx8wgKLGyQY6pgFz7G1AEZzl8bfUn0hbZte0CqXWGOCGw%2FWhERxt16DURRiWqf31O45md4ju0NpI8054DY3Z65uBZoqPK2QBDevvLgGB%2Bt1TdKY%2BGLImx%2FQYFdxQXkwK8DL1bsNlpKmCPsJJgiI1t%2F0E6TBePizkQrUyFZZB80VzTUlhyquSosHroJrKBHcBaLfwbuKje0n4PEoW3ew%2B6nWIBmuTPyHIEkOz1XMFxfSw&X-Amz-Signature=ceeccd21fcec2083bfea030a0f0d697136b51cf6ac28ccd75f55656e73311ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

