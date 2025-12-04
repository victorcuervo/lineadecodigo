---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOARAHQN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQG7ZgXNexh6KZ4OBY1QUx090WqV4cQMC7ixW5zLWs4wIhAJbtZPgrZstIZpD7xJbN71YMOKGQqXzbL52c%2B4q%2Fb9%2BHKv8DCEUQABoMNjM3NDIzMTgzODA1IgxP1dm2evh2Bjthjrgq3APXB5ewC6sZKPT4xIw%2FLHb%2FTRR6nRJzBU0kQ8DCbfmE2KPBnyYxkI1sDL1%2BEDuyGOHA21E5AJuh0qlVczmzW%2FgKj7E91u412ch76Mh2FBr5PLS6hHeMw0mfi2V7PKtuLVmQlAvVnjiPlyMD0DW%2BtdaBIIRlJtHGlpFmL4p2D%2BSIrhD2JMqk7BFiUGMGMa%2F9q62%2BEaJbsCM0AvPeUERkbyXlZCdUKum9EA7aZzXO9nj%2BCOOXHQaAnD31CTiawdETAjG4KhXh71Y0SbFM3naCVNeBZTMw%2FwMu6ON4pGW4ysoEbLv9GmYoQtYHoh0mnhvRZyfQUJw8Q2iIlXXpbDZ39v8axWhSHwOSrWEUxcwfCl1KzefSQu4CX50aQhSBa2B%2B9qKBeEjPn3nQS43Y9IOqUHoV7807ZkCwx%2BZs%2FUd3GEkmXRoJNPW1URFsV2NgUVFQ%2FH3iimZu5ckpSNf1A%2FS2pvpTUqYyogYqIpF5P9wCDkaQJDOQ5HklYn9OUyJbPCZOCWIVu%2FI784m6TLBlH%2Fa7sqCSGARYjQARjeU1sXw242u%2BThc%2B6aMeg6l4mVR87q20qatcILpPCuJD5jMYKxjKwjj5kSyK4CVKkpBq0aKuJ6ZyVDaN3fG%2FF4pK4kjejTD45sXJBjqkAZsieiNIgd0wmTkuHgvlqkq1hsaz31mpyBQnUzraUV99JmSwMiJyvs2mgeKUAMbBnoGCgBEjkvx7a7ccxdubKO%2FMLtBoC2mvdKMocH1hncrHfqHViVcjQsYtTQqXmfBZIlGmD%2FSsutn8Hkis4ToENGgcDZApg%2Fl13qZd1xkkkxZcYypFjIUhR%2FvFq5M7dbDi2WvGJsjxZgX5riKvalZpM5LU3UtE&X-Amz-Signature=bcc74739f25a6dd8ca54429b3f98d701ca0e760e74ba71528871d0343174a2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

