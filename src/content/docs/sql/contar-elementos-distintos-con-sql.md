---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DBHC76%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCX8YtfufU6e5sy3U059HCk8O8klodt0cMciOtEeycvRAIhAJyLIxkEuoS3FQzvaW4vFfF81qDrUZJQq48IhnjutnYrKv8DCDQQABoMNjM3NDIzMTgzODA1IgyNkOWU4Vwbwf1xJ%2BUq3AM%2BKJ57LKh7M6nIz8mQebg7ibKuQcMKx1DqQg%2F4o3fxBU0HQxZCndhoTaDqRSJ1Fa9tD4njTlnwURJiCAcAXAfHeyXLWgjjBBnKms30HOwoDbpAfUjQAhBxnTtHotvK7aYdKmney110PqX1qbhqZMdJehQwXQ5%2FMdFZaTir169rTsiNE0xYjSRfln8aoHoLVmlVUv41xIESoui7oYfYC5grJF1ej1t1HMWe0%2FB%2FvedGhJgcELJW8b5qg7ygH9W3jpuyp05WMgYCyzR24rmD7fb51xgL9HSjzzlt0pedMe0Iy1BA7DCO2HCWGnzgqJlxAx3YqtEm2io02yxBgcb5lX59ZUraVTyZonVJHk5avAWxBxNc6vXdR5GF1%2Bt6N6eyDYj9RZCPFeomo%2F1E3qv%2Fs%2FPu2qnQITbPRw9qT%2BR39eWVhRnJ8gcTrzG%2FIL6xMG58sIfGx7bbTA3cJSae8Fm8JdwWFlj3zD1En4r50%2FNhcWLnJr5N7Nlir%2FMwXitPk0m4JwDym727%2FNgNNpra4G8NsJKIJ%2FLBPOIgINZKDoh%2FsgyYPR3YtjkwnkJXn2YmoVNGvPc2BF6ZvUIUyEKvpn5XEVeIg412qrQOpX%2FOLKiZj63qlb3VBSlP0Jdigv75fzCDkcLJBjqkAVJJ8%2BsNt7nmeZAIgVYXv%2BT9RcP8bpu2IdxThiKxw1jUOJpIEBxJd2JGIsSfRzuQ9Mz0oE7OyFvidiKfzFB%2FPKEUkf5shKrkBQZH%2FxhzJa9ZAQlGIP%2BO89KQ%2BIQ2jrNAYhjnwMfpo%2F9FeWZibMM9D%2FjPEuR7aLVxkQUDB8lYBpMuiTeKvRVq8d%2F0WLiI67UfU%2Bjo1sM4mje2TNi6lDWotGuNQLJf&X-Amz-Signature=ba57e493b3931d8fd2b159b489586bfc9d6443f7b5e1b048ee54e7f6afc4259d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

