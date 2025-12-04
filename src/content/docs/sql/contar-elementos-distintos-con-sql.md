---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCNSZN5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDO%2Ff21iLGTMOimHhVvi%2F9MgTgK%2FQIUbXRlNqeat4a0LAIhAIszw4LEr5WUq1EsxHvHrOrBu6pwezAcmQLY%2BiyHLuphKv8DCDkQABoMNjM3NDIzMTgzODA1IgwiA1fts7qbFmbhMZ0q3AMM4ov6GRMp8Eb4n39LfcT5fznK94iQKN97j6syCaIG2r7CDG0v%2BkJxXVg54El4uJoe2IJDGIvk%2F6g55JSAXP86XCd7GGLPfNz1GmvMvya9hCq7jUMOHh5QygduXkhYqBuwghiKXqdJXXoYYLZFJlV%2FqTrojMPKozPO4sr2DP3uU%2F7rRGEnX4PWKs8iiMY2Vc%2Bo6%2Bj40Dim41Dm%2B29p0Z7a3POZmyZwb%2F9wz%2FuvpGN0v0RI9cmsKUbUx3%2F2PQRrc883BFB9cwHqZ1EwJ3LcvF3YBZ%2Bh72VAbhkO4WoM3H7HGLwkhP23trQ5VS2N5bVziI1N0Z6iJFjlAceA8idFendzo78CHFZTJcapP63w37kcFeND2Bo9Md5UeB%2ByAse%2B0k5trL2yul32uAF9HK%2Fbc5EcDqpjiDWETyT0aAJEACNlKW%2F%2BUqUCfG%2Fy44P7VhRSiZ8M2eeUCIidFWYi%2Fs4MJhNQa4fIZl%2FhqZPjRYcVpCxWOe6Yavy3nFH%2Fk%2FuO7chOX6468JeKN5uUOUEZ%2BXLbGEoD6TEMBADXhkOer1vbXlwTrR6E9GRCnscGe7T0FloQt4S66Hp4WaJhjSIAr7cAAqi5DBE%2FJyl44%2FxovKJVftCmiIWE2d6cAaJ1svBoCjColcPJBjqkAZxtYFJUDGqLHA20ZK9HZ1KtalpMv6Rijydr1PrDHM1DGzfykBQIgh5kCqip4geUaREj4QOqbkOobTisRMnYAfGadhFqfFM5uhPv4eBczTb%2Bu8m%2Bn%2FZU3pmLCGranLuif17EhK%2BuXdQs8wq6g1BjjcT62f5wHES%2BFomqpEhHWbtGi634YYY5nmFHN6muIw05CHgemfQSL2gcHPKpVB%2FajBKMUZ1p&X-Amz-Signature=5b36f0f2d6e61565da33f6f340a42910be03fe487087c2e86c64e8b7e127bb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

