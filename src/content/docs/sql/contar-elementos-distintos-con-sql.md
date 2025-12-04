---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YUPS74D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBNFaVv5FeoNhmrxd3W4AbIUp3bzvD0wYsiX0kQPb9QgIhAOzenBfLs%2FMHpDt8IsMOuzRGZius%2FoI72bcoujioKsfGKv8DCEcQABoMNjM3NDIzMTgzODA1Igwq%2F7f3xo3zwCOWiDcq3AMGOrtdNZouunrVOFoX9bYaq128zN7bUoOXwAMq5Zq3vnBECqxjhUmvIKMmlgerQDKAdIKrHBPFzp7nHS74ZYvnNGGi%2B%2Bv8ON46OYOi0St5uGXdVdyYh7Bfd4aJobDmEM%2BP85C4FE3RVMLSyVrKBRxUi9WbBB6QfKbJZGOZAK6VLE1%2Fv0Sx3nUKms9qolngQbjzYxaGlm3WTpzR7HQ611m7p3QurrV2aNPOzYgb%2B9q7BlV6PI84EAsRrldZC9wBbrSt2o9Sd0QDds5dBDFR1Dlp8Co2B0v6uj1vuJwhKuyOUlvu2YyljYJ8UNpAGKHgR4SqYBur3fOfgS9UkpQR8IpSGjTHzvBtnu4tuAb1OSNi7lpOCgc%2BY17EDbf9KVrL7ashMwzNArRpNPoks%2FkeNNWIrYpN%2Fszc%2B%2FEBx%2BOXpsOOa%2FNlkM6ppbMFkoixeAjdiNH3PqTryQ%2FRr118mbi35MpReloDKz8W86%2BYFG0zTsid3WTBoAApVnIWVZbPVr5n3GflvEE1LDYeS1XFrEj2d5ytZ%2BBIjZXeLZYw5qJOghaTS4Y8C7T8S3Qv3IRTSyXNHLXSCTOnIifyPSA%2FEeSxvfjVOPa0Mw5iWg2GcJSABBGRXCTOe%2BaioX6iBE2PsjDEosbJBjqkAVgGuzxeAmTajIZyqG9vEQOhXVXGrSO065RvQAMYNQ1fvnBaxN%2BvZ%2BPLmOnEfhppgQaM%2FKPIVA4UpYnxgbrU2J4syHq8prneVTt65palDa9lsw4N9z3ZpacdHSXALO%2FHuilSZL9HSzuR9yAnQQK6exgmXd0OeHKp9GP5S0Jj8NUlXWgoNrfTx6eYIXtEjMnZae5YZaXd3qtmEcQY6GOvEwQYbnNm&X-Amz-Signature=0dff880dffc94a130c5bb8c60d58d67060a2dfdc5a26761820edf1780256848a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

