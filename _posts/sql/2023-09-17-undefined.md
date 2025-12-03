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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7TLWNH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDqLMQlfNOvsQa7FmCJaCkkeEWETt4QkEmXHI%2F3XoXrfgIhANZcQhnDq7geWebysOrN28NyO768WxhBmUJFsQn%2Bp3eLKv8DCC8QABoMNjM3NDIzMTgzODA1IgyPDycyxtqM9nTG1y0q3AOVS1mC67MAmTj3mo10xwXz33PoQteLBOIqGbj4%2FlSs0hcFMYfX6Fj2WvLxNeFD8KeTCxiAWG6kPzEf9Tl9pV%2BzcVFM1AZ0sQkY5wIlN1W8DRLpJ3g%2F9PoYAWK93xZplr6f1%2FuA9MRUlr8k2XbRi2Y61iMQF9cb7V3R%2FTRNcbZavijo%2FnHCjOuRDp6%2FSChD0FV4dsmsr7GZlzUwDVMwDNFIjA25rCmOA4noOe5XYZLwvMwsYOmSc0rS5AdAfL72D5ANFksrckA7Fz4sO41mWsLGPPJ%2BODXomX8N1o0VmFA9IlLasXoYjyVhFKPhWbLTrYXE3FCpLk4zxcv0ZyaNbMwKpc9vWRfm3DuKa0YZlBQ36X9p5lDWmDExmotdsgzSGMQtXB0J4tUX5DgAKI5FWgE0lkdApxnUfSUVRYwscLBu7M70M5s8gQO1pW6rHot%2F3vWkc4j4W89%2BUj%2B%2Fu9x%2Bn4ZiuqYhx54VHoEbCItaEhM4UoqsO6RKDalD8dlm%2FlOS3tXRKsd4iG4sqR8TffoOJvSAYpDW2n0CI8gNcN7lXwiG2x6xZcmx0s1tJZEB9rKhhFWfOT5XWq%2FP%2F4Bu8a0wu9BWtQzdWNgO0sgfthyHqG%2FBulxIXzpmQR9CzcWSwTDAh8HJBjqkAYuf%2FeEXHcrdt3K4BTWmBtu14ArDJOfSsRQ3bb9319uYwNt63aTnaeGCc0IEZabbea%2B%2FHR%2BjrsG6zjw9gqvenrc%2Fj6ef9wGMpQZGO3a8mx3TC8KGJNHuj3g0fpIPDfAK%2F98a%2B8RaHfLSQ5bWdQdNgPAmvLq%2BOXENYGTAnhkbumdLjtw8RFpiD%2BAn5DNeVWY11Ao7RIfDzFvR8fDI1WfHgTErSZzK&X-Amz-Signature=1ce95206432b732be3dc8ac37f86c3bdb0df707046ddbf292e49e95500844d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

