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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQ66ZXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDZylu6Om1S5GKOyY6nO%2FoRIk52T1yxKg4V3TA%2F09Ph5QIgIrH2A1ZCpw%2BWNmFad898tn1jRHA7MFyOc0sWqCPgcS0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDArI5Jihtv3nfKzKSircA5yohqgEpZloQSSSqpUj63pFx9bMySUlGt%2Bxou1dbGTI4P02ID7M8jKzfEAAESEwjJlfcZwWvyUbulAii9qnG0xgUm5VygZECKmpn48EmthlZlrSPGyj1I7AqW3xpGgJxHq5cFO0BxmLPxWRAucPY7LLYH4%2FzwD%2F1iXMlQlHWrkC1LGRp4V6D3P5Lb14ugaDbWOMfawy6gNWdfhcVJNecenwjeQEvMVecXBYSOeQkybAPQ6uADDxJhNsH%2BVp9ImhSa%2FuUEFluyG7cEbmxHujfZWkNlMIMx5Q4hiXiXOYJ7eF8fU09gppi86HJKpMQOFbGC01kaTCglh7ufIrabsJy9VZcZ63OKinq03sS1v%2FGGmMzJp1ttO1HdiObIpCDqsIQ4O83ksF4FCAy56aZqgQltLrpmpBIX%2Fzy8j0EMq3JGogp1HTNSHWJaGKeBSNKXhLPyk%2Fa9GjKvVqn5Hb0sPs9zKRW4GsA4WrcHGk2%2B6T7lbzsyylrgtBegO4Tavx5xLJMkjeBfC9Tn3fWcj5ljosPeFBA3AH51pviq9oTgi%2Ft6mkBv622e5SYiqO3bvFf0T1PWOR2wV%2BwYO4VkgGaRU4ATjSSBkYgb3PvU%2FsTH0xvxpyxGZ5fL%2B01NkWx2laMJT%2FvckGOqUB%2BLZMGTd23HeHKC4Jhcvp4xcOSF7ZSxHMgLErgAfjHIOo7y0X2n8gZPB%2Fi5tBvD5bXwfGTLGc50Ibbek46GpDWHWG3ha8npHUAZSMZw42aRLBnstV0nTLEmJnC3Q5Ig0%2FuxoxIF1k7ICafw6J4tccYrDoebkN9z6r2FH0IJB7bBw0mrCHZLQHgluSn9psrQPSNLey2CVgtdEPEx2UFOTe2iaqt0mB&X-Amz-Signature=f38f12586ad14ffb69cfae9ba4d2d424578365a53d9e4d0c599bdac4509dc714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

