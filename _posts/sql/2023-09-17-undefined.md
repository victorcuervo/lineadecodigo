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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY7TTYYN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC%2FmOZx01KXu2N%2BiT7VOrUx%2F0div5oohqBOzwjIR6KriAIga4Q5G%2FY63htGj0KkkJCSx3qKzfQ28xyaDPC4IocC%2FIUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGdUg4jnl7Y5dzc1rircA7E8H%2Fl6TKVVXq9QneORfBHJdoLAsm9RC%2FiX4f6mZ77oVVHzq2dIBrRKNnw6d3WcDh%2BAm3MGPaWpxcg%2FeIcba1D5JOTvbt1qP4qyc0TH9bXu0uB%2Bd9WXnL6IpCX9U7Hal76kmweInk6rFTa1TZfmSiV2htYPXxY1MlorXMiltrL7WfDNuNyrFWyapJCB49IhzfMAOyQHYpZKe6XHpoVxjdYjptyAOuge5QDdVscDtN0D68A7tJvJrGu8ul78w2MXjATx76mr1tlCzG%2BnSFHHtvjalB3u%2FUGxGotOgsEv58wQFuvtIN8io4BHAUnx7FC%2F8e1jkC48r2ueMzK339vT%2BQbLQaivQk0Zc66XAELoD2BExoyPWAcF%2B3trQw2%2B%2BJtrSvw1L63mI%2FKmmQM1nr8gmLPp1VyBWdvNCwMZCgEuIk412I2KwybuNXMBNP0uLBgGjWGFD3zPdZHG2a35amv%2F2DboxVdZxvxn%2BrczNFEx76OxbX3GNclpg6%2Ft6oYBunr%2B2VR8Od%2B4mDj8GsO8g0tSKYR%2F1En10MvF4UgrD0%2FdRceADnYi0pqk64S4gjfXPnKITfm1wfEjJV2EetyTYclXnyhq4J0g88zuyj4WQrqzReh3M6whyPFXCD7lda32MKr%2FvckGOqUBgiNocd0sUDArlw6NGmmIVROvFIlwpxbPyAIdHag6tZUEyI2tL9AZ1Ijx1r6y5rM8UJM6VxMccm7b9vyndkkftAoUbJcxQjmPv5ofRWd%2FZ9nIV1Qp5mLGFyXhAhnXtKFBqqySy54zc%2FncxVVABqTV2bB11qTtkXxnKjWFUvtHBSnTz0shSXNi3IdNFb8fLDaYxoq8TAZL9dygeBCLJoB5Gldl2iCi&X-Amz-Signature=2ec19fd9a23c55c046ff420d9a4c351e03d9e9b3624193e0f3a82b8e50c8cba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

