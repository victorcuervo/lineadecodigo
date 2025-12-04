---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YENQEDAK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD5%2FVHgRQ72ms5qr3TGmuTDUFlsFqmm7Q0tgW2pDjuUdgIgHCywgi6v70C4XukZyzE5wRIOWkY3nCchh2lDNo1nsooq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBC1XBBaUBGCqfpBuircA6BoNzL180gRxVo5nXE7uwg9ZtLiJ%2BWxO%2Bo45sfP%2FShy%2B7cOPAvaMUoN5yS3c36Snhgrkq1FuZhJJV81pa65okdz%2FV3Q1fUvWhuOFBUt804I0LyboMeyrFDmzwWh%2FJF4P4b4Xa8Q2DUNYiBOZfwxTm3NwRFG6eeud5fCwiCCEIjexY3QbvsyGiJc0pwcdYu3C7JL9Wq14Io%2B87TQaTGPDnXURzGIHOcaZhc2GWNI8LUz49Es7%2FndSn5lpjZ%2BSg5F2tjf%2BTz3jA4UGFl6otD7o967BEAij0ep%2FiCmDi%2F5qAHE5T1RfkACWOh2QNt2v0sO5SFwdb5qqLMEXur1BFHnytQ3OCh9%2FzFdkD8FHyDNHj3ittkXG7GfZaVFuPhrJ2IjSUzQdpzqsFpus3m%2BJhiyYd%2Bcyg%2FcJwwPA%2FWJY0AU8Q2ExXU0WwrePwDkCS19Hd7O7l5L2WVc1ZNC1QOwYa9g9sjy9YZJn2M4oOxFzUC8tQJOuzbv3uORi78AMtZguya5udemIRl2bpHMJjHHBqe6D6N5%2Fo2tJeGt6gOdUOJ5OY9wGJHvkQy%2BW8VuUhSl3u1PGo8lBzQk5OpjuisbgZXUeALQ32TgcAgQ4tRODOlJySwxnIOG8m43OCh5R1HfMPC0w8kGOqUBvN2p9eyLfBB6Ur7OLq6RJQjzzFQVj1nUGLvAKf0qYeftyFk9Kbr%2BVOECc4XCTDBLx3qRQPTYWzqBQ2mfJCN%2BdeL8K1N1MTCv6uJ31vrosjukZ1toyvfAjT371Www9v0IDeiHifA5KL6VOcgVPZ30pexcdsL9GKH33PRgl0Kl1dKwyRkfqToX2WLi5j81lew6jK%2BNrQG7uLkO7iN1ux%2BLnO2NaCa2&X-Amz-Signature=83b277b96c74ca063040566d531e03199598505818828d421df0ade2e52ebffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

