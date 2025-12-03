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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBYTO42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD%2F6gvIvmxu0mqkAqM2ZD6pPeNbRR%2BAHDWzuL7LZ32jbQIgXusnRIhzfomvwlDf6I00iZsSZNT7Cjlslq5tTqX065Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL82YioGLpGD2EcMcSrcAxmKYMYIVAJ83nf%2BREqqqW4lzG44FNOV7FOMZLjusAw3LqHpVAy4UjNI72L83gJP9B9t3onZb0Ehv%2FST05a2cU8Kf8ahQ58LHOnfyXZNflePOpJf%2Bbt1rI%2FkgxHnovHPnDt45AXVKc1q0O6V575l%2Bw0ZBGqkIYiQCK5wsj0t9dxMv7ciYlAbc1p9wH2jxndjQntG6ImZpPNmH72F6vG2%2Fmk5kM5IYWRdsmlbthvwzWYXikAX78isTb9%2BkqK%2BQsAiz1qciTLUVLJocE3vPX%2FuxcB%2FVgtvNL3jboUkoYp5j1ksmRqqMsccS%2BCuz6s%2B4e3m0vJsidQ1b3rOE2rqVLVWlTg6qLQB73AKKcSWONO2ayikFF2RovfQcbs20PCQd7Tsv%2B5xihm6zgZ1N9sqJX5hOg7Di8LJ2A8T4%2BGg9fs47ty9c2PtrbEq8inOeHBPDrswWNzTU0X2E%2B9gEIEJ7CkY%2FLUYyMAspkfE5LeEPq7NI6K0SpqwgjKBcpFZ0VKl64fMUHkB5%2BgCu%2FrGOImsVDqqCJIZxbfqGuMdMS6QnB40UmFUeSXOubeJMcNnp2%2F2wzbHW5j34ab2YVYmK4aySeiFRAeqEIe5BTWf%2BzSR04sIxZz8hsFQlD8XlyHo4lLxMPXawckGOqUBOEJ08%2BjZwYwfz6shWn6mp2JKOlCpg7rmu2elTAy%2BCRU2M%2Bs0k3rCMx0rS1BZc6PgAJHz8eO2OHfDcsSyLY2niypOyphzTXbRiNsLMB648MR8V7d0VLTyb6G7VRTtLemLpD8BNK3KK0g2f4X6%2BLw69OoNm0iwLUC5QuQwfZji6pzqXUH6mc16SXVNv2FDeiDk8qJnqphOEQlL66M3dlyKqFcgUobR&X-Amz-Signature=d92e5b7e26f0a93e164ac47f3170e92c3dfdbce179ec2c6bc6b52c0130ce5df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

