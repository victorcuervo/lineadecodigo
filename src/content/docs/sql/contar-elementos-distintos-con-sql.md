---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLLFOGT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFXyS6PK7khrZy9r3NYRbV10lVJPJ7DaaMjHTdTZB4FgAiAkCQffH9qQMEjOU3z3dYD4nY1PP4BXx%2FFkTFrF208NSSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMgZHnoOnRwvZ7G1oZKtwDPVZMANIPJAFd7mp3zRzJklwNzQxrFaS%2BwE3%2By%2BiC1PPP0pkiGUQ%2FjdmKH9ZVau3ktt9PLybMcyeO8rZ3%2BbMTMTRNITa7dFa99EpdD%2B021lzkjjqyyDP7MWYPUHfzV21got3WY5rrMXYzZDR3WOPBf9U6BZkS7jo0hRwOZQ1elFCrKmwqROt2cf0qH2xl2YqEsGmnZmHI4tiDoLeXwwjh8ck%2FCRDprkeHwCbXq7oTnl%2F1%2BiVQi8%2B72TzvSUAdvQKAu0nXHYpb0wB1AzPR0t%2BbTHTek%2BtEdubYhbi8MrozugAhO2yufZo7szcEJP%2Bij0qQKnPvcGKrDWro2ERwdqy7MM9qzOk8BA3jZUmLvIqp9dKrYPmXUh9YozJ49RifH3CNdu4nGC3QGJ4s2hAmjYVSnZXzAiVVtHxEhu0KMtxqlPnAaJe3281yma72WAEdxOZnMN7uh1ALX%2FqpP9d3%2F1eK0eHSLh4tmwps5pj1RJx8DHgAZ7JDMQ5ugjAg6NSlEP1uiHcC8U3I3wouaZTnuCOnp1DdTi8nYVVOeP7obgtIZfVHEFxQIHmMsrbxLb9uRWlCa8xraqiLAnXxwWps3ZrWbhT5WVPNhCw63B1TS1tHZeEI5PVPCEPSFZaywFUwy%2FjCyQY6pgGbZkRX0ttwO%2F3wTmUgYQJhK0iirgmvxVGlpayY8h0T4oCVrvCROQdy%2FLI62RgPGG%2FDavuYw9uxVBP84ma7upDPcC9WcyiovT5rwJATD3J6J7kBs7sYi%2BfWPfkVW9824S5tiyFkuBtGq4Z7GCqNiBW5scfHRc178NnaJakK63PqCRd6aGMtztEJEp%2FRU%2F11OFMfdVJQ%2BViij1ptY%2FdEOpyUtgFyar8g&X-Amz-Signature=b6b288e3c500f9e1e6595da15c4e232c87ac478c44c96faa8f3a6d655a709037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

