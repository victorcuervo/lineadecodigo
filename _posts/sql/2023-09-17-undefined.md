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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6MNGPZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGcFRMV25Qis3Z%2FaQJC9Dm7bLNJAIdZXzcPWmYVGjhNOAiEAyp65mUeFgoDr6BzuoGSXNPR9kRpswDKoZ3DqB2BX%2FA0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDs0NouvP8SpSg1e1yrcAzcVE0PBR5hX8ZZXMPMmZkJnwnhjPFw6Q9ywQMyTed3zGbqy1aHvNo1Ql8KW8IwZlV%2FCmR7pIJxiPPchZZUBo3BTs71iAqZIAa6E6detqIwZbIvWRlLsuLa%2F66uHiZ8iHHOxOphDwH4WQyxdOhmN6hLBOdl2H6Pdk4tJ5Tmqw5geoOWdw5t7C2Q%2F3WEC4pra%2BoTlD7y8Z7uJ4ySMuVvQCv6eu%2F7wCd5KaVe5PqrJ%2BLbotM5NWw%2FxnJMqwNVzhEP36C7pbkdpcpjMgQLS%2FireK6ZyeD0Ih3Cpyyiwy8HESAXbwv8AvAHlas2waandZLBHKLhpHJ6%2Fc7twbiFsBY5wWyP0wkHnhU6ep47TfJarrK8uAnq1Gy8ub2CW6Mp1W6YAmSdK0hJ4ayRXx6XOST5gGmqMf0HObyWaSH6lcvkVvXRf0tTsub5OsXcMywid69oAN1ViH48tvkmqYkwuFnj3n0rJK0strInSv%2BrsVpkthzU7kzrnZtuDP%2FXvUfd9TVfVCJYjhKrB7t8GwwwPL77s1fW3nOF%2BLt%2FaOu5VOkeWj0QL7EsetzrENyCQO4UK4vBQo3HSH1AGYUSRwHEnefY6cABbscbT9GrJ%2FU%2FfUHjYoKXNmPnLsTzeOiAzorLiMLLawckGOqUBx0CoicgKQq0dKviu528LI7DEnBMUF7Q4DB9pDofo9I%2BTw36kDQWb60JBsg7GwKSCEZiHVGqzkuGkDERGQ83Ry6n5V4iC9s48PFxIfNkUToccrYDNSG0Cap0A%2FRPlVr%2FCLV25jDXQNlmggYr1KMvwsSHsme2XIIj691k%2FHmYAjCzmqyASOZDKNkTNKcUy6WvXdUCdQgNcsTOIXLyH1i%2BpdR3xXx98&X-Amz-Signature=0460aa1a44f451820483352aa2f18daa613f48bfcd4b9bae9fc6941e0c53ffb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

