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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFIKXLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2a60KdXbSPFUcG5YEh0%2BhQjzNZUHofiiUsGe0BNryowIhAJolezz6jCLDm%2B%2F1ZVyvhAIauseF0UIyQV035snU6Q9RKv8DCC8QABoMNjM3NDIzMTgzODA1IgxX7bkyglX6ij3Tfyoq3AP4eM9ojMBOC16aOTkEEbmzpVdpBoaKnQujdINT3zTJyjit2bQ%2B9RcpFUo7h62Y7CKn6yPnYkHhK3rrfwbNpEJSytNSceVdgT75LbY2MhxEi7EIU0PiGc%2BTA2rXsHQmV7w4ZuWqEtyZ8DDcAsBQ6V00ULSpX%2FxtH%2Fyk1I3HXBCVrCUtDdcNlfv5k0WaKYLr5eHrP6Oj32j%2FArktMmwIfWumoHJxYg9jjbnNm7BUNLgbTIHstty7z5H2oWyuoQt%2BjdONyT450jPz0l51ADXU4AVyPm6HB0bSNI1HMJAQDx8BtpIqSMaarrjzf%2BUxUYL3kKjleT2o8fyRI%2BvPu6Rvunxf2OI0uWAueOdjgEoCL0gysvVCAHgEOBz5ETYnxdf6u%2BSKBHu2FItcZEEkyB6h5IbqZCxorFh1oa%2F1miIb5uIYgeTEZq4caOiCnQgwuzqmYrkKJBnQ0BDZnhi9ZckvCIl%2FTa2%2Bbpf7nKNGUuOX5U%2FTO1UlJ7wW6ECS3KHYfB6IQIqdyjsy0kkuVKR8Nz5VTI9tfm%2BJnBVgfY%2FVG4bdNqkfzU581MVYpca7HP%2F%2BRxxYV%2BbYVUICmxEdzre8D8P7Nr%2FJ6dvFiXXd07XGV81oTchyi%2FfT%2BR%2BQkNNdRQ9wwDDAh8HJBjqkAXS%2FnPwudtxSM6m8TiaU43Wmk7Tu7%2BEDAEE9AFMM78ZBoFI4ZT5MQzdPpvwVoTAMMPKuZbmorpVly1l3h2gS%2FF3laRiXzN2SKYNXadfmKaTwk615Ro4JUOfEGlcTV2xgoCdgZr820W3JaoTOL0fFkL8cl0MITym2pEzy47CQP1Wp6grENUoKGNF5uYu4RfhYgE4%2BWjCgBC0EEjnwKrnKD4BIjv4T&X-Amz-Signature=2e541485c0fec7baab4207b78ac68cc616de96900fa411507e6a82eee028d464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

