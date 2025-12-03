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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMTY7G3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC%2FccxAaMr%2BQrCYhAZ1gMKn84u91a4G%2F7DBv%2FYKY2G07AIgLo%2F%2BgvDJ1e7qrHztZlR7ODvsY1R1rQD1XOKyJf8yJqYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFesqnUR4iWPhiRO8ircA0YpG5P5GD4jMEWa0C5mFbgMym%2BQzECTQIUaXonowVC1kj61WFUSrzCeX4VLkEhkd%2Bnm3Z0Hs9ANIPk10iS4nxiK62dGB%2F80NofJ9l9lQZq7SsRlgvZQTiS3nDULArHFu%2FutL4AdceE7AMfzkaLyjk8VV5WnWTma9XgaaXuf4PyPr1CR%2BPjge92X4EFAI49dW2lB7l1r60bFok1zqoQ3PKYMVJt3Hl52oAS91VtKMOnwN6o0mtmNg7BHNhsIeozfZZBcGsfz3PyhY8%2BjLolaKGxRfvuuJFXWLd33culv0Cgah0vLH4MTLEYCBbxrw7OIOIE%2BfVsOdUuNx2YN%2BfhAGpnPNTVrTzgXwRfynI%2B8zXPrCaTIOLaNil9iucwuWP2ehM2eKEBrvSTjIgAxY52rsPp5%2FRup94ouGy%2BtjuqiZNy9Fg5yuhy3aDsY91mGWcS8DJQXB8VpcURLOKnv1V9wG%2FdF8UULo%2B9GDpiohDTnXg8naUISkgIyu40fV8557lRNLcIQZvoA666SczzwIWAfsm7aY8Ma4lN9W5EfKOM8ByFeyX9ewMha%2BhcHp9hSFxUNOYL%2B0UqEEFdBe3YCHjWQ5eREj6yGsfv9sAhUCHQbJVQwfR7hlIrMQxOSO4ruMKeWvskGOqUBt5d5hruV7YcevLAtvpNww9FN5gkN%2Bcl9WMBM9u%2BkOdtBraMK1frn2sPEeZp8sEXv6wvwQff%2BO1fHrdvHX9dZm7H%2F3HF8MvK4xsmUXlQqlJ8w3%2FbnO8U38c0KFD348aVVqml8TrjeUY9CdbCatxRqVWNzvRePa9voPfzQhR%2FMVhXm0JlFuZrqCHT3F9WAYBBBX3Jq5%2FMsAlz0n6%2F03grSL%2BGwF8%2Fr&X-Amz-Signature=7f242ecd7094e02df420f6123d22c901522b26de52c815a383836a63cfe1a5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

