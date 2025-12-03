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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZSROQP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiC67QuzR8PBlKbIP4t73ceKnC5uNEvtm0CntCy82L7wIhANhW04pflw0gcKD%2B%2BvYbnEJ0ZTYx7URf9sn1LYhsPakEKv8DCCgQABoMNjM3NDIzMTgzODA1Igyth1q5yt4zDwXz7AYq3APEtOwh2OfHPQPiKAqxo4JLQ7QNBv398%2FaC0T6b%2FiHt%2FO3dmkKszivyG7Y%2Bo6jeLuDYhYVh4xgreyRbc%2F6RLPRCjqMknyMbPq8sGfv7QNy3xjK58ZUP8TJek43shhv3uo3r79KF0lscwzvcHfjVv1mlTQQKZL38ucnBGds%2BHAwsmYAB25%2FVH0%2B%2F%2BdzgRTZ3tbhzfVGEAGfgSjASAJDFFN8rb%2BNZy4P5jop0yhJ0GeDeANSW2X81hLk6U8ynFi43iUV7RhPmvKV5Bt%2BWPCVozr1kuBCHjlDK4ytJWSq2BY92wCFTNTZPoui5n1J8W%2BmBlTCCcneJUdhc3vxzWSs7GjQ1Fma2vpChxQwpZ38WumQOGzU7ksQNFXBEm%2FrERPuMSgNsBwfpX5g8%2Fy9RJYKX5T9pq4v9D3TZ17qX0q%2FiOVS98iwJjmte%2BkgOdTBsEw9K7XdEEHmUAqSMnJ%2BLc6LX6jfvLtSUo81Nq6Hq1gLUx%2F2DWG8AxffktG4BJSPE7iNv1cwr6BrzanKFDYX7hZSMomQYkZJP6H9LDDpy%2BV5rmanguZu6kwaBVUGikOGcCiXqYEjgLhJLActVAhACFwOhGXsgeqxcaDBTkyiQfD0VmpkgFOZdR1DeyvojcdgdTTDEub%2FJBjqkAevIOnwMte6W17Y%2FBJRfoMXKfQi28ezPlMxMbSEUaieDAOtYYGnQgITmChH4qg0U3LMkuzdR4N63IKlInPE93%2FO5QPLXSQBdR2CsAVsZqiXVrs3rdquZPJxFYjgRV5L1mJytvIP8PwPBgxfk5T%2FF8Vwknf%2F2k%2BGFpDCkf9ilnSNYtHZThYf5MwrYVFY%2FzIIdy6Uouq2zmNnpIGf4BVxuymWBy25b&X-Amz-Signature=3323651f6abf19e66d0f27c88e437ebb060b73d7494ef43642d2e44ccd47927f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

