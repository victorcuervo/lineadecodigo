---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZAFESK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD6pJgTu8rMCz5N%2Ferg7J8eZqTCGllGR0HdUC5agSfaDAIhANDUTXWYfdYkZbVxwZrIAnanplRjx%2F6bqech%2BkL0vZOzKv8DCDsQABoMNjM3NDIzMTgzODA1Igwb5TWKc2ypZf4PpPMq3AMBRxet4QZPlsIpqxUD%2Fr8sGWoKPIQdYbUJPrYTk5xj0gJothco%2FGIb0YMZ06CCSPZrGtWK59yTa3yMmcJwEU6posGiJqYcEDvTs9ZcJAEpTE21sIbnWAi8qv7KVh0RuZgmEPzBdqUh%2BFsHekk9LDLJWPGFi5lOOC6CWjbYWi9XAx4jIR0LPJF7Yrtr9dMn3NvPkX49ZRg3s0PHKuqFzzPZogYcy8Jltlgplnjmu5qGW%2BTwWZ55imAMU2CNlCBcU8nAea2EgWbk2XB43GvJnVtWM%2BK7D2MF0kiaA7AFggyezH4xcGXP7toj5XnW57NKLo80b2ixPWSXM1wS2MhyT4x3i4STkgcxwWWU6dCpHuYQb9x3aE4Iur1WwPWDwefO1b6mIG5L2uR7Gr5Bo6gZnHokw7XRkW50LhM7xw2wj84B8Bbvgj3POkNX1lAlzU1eXu4JNXwo987hpGZuX4mjxgch2ywSa8t5Aqi%2BZWN%2BgqaS4kR07SqgIbAXkh6vMnHa3OfLMhNUkFmwwil1S3scRRM8ZqgZegD%2FfGBOAkUYg26dn86EhkO%2Bs%2BraFU45HxMwAslAdeAaFqU4zo%2BibzLk3Ef2KE0OfBR20%2BPZbGCe4XDkj7vv%2FW%2FNQ7s80I2MHTDh1MPJBjqkAfikeF4xio6Y8AbGc91sfCSG6QSjJIN2Qgo16svIBTk6hXWpE%2F2U4yno4fa3A%2BXR0VFX5yP4dIT9SRpKhZAy%2FBMlY0C35DGtJCVYWO%2FWOqbVSod6kNabsL53AfZTFa2tR6qtkUdvOTsKy89Ku0hXx0sYfaPZwemWGRaN9dUT2GyMrrv5atnWELpbtojoFKUpifBlsDYw3R9CvJgB5r0R9cE6F6lr&X-Amz-Signature=cdf51cb705f806b530c0f04651c23ff20dee7e4176b3e671587a949a5fffd23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

