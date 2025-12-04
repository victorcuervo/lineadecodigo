---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DONRRDI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCKNep2ksZNhZofLl5cUHFW5w1jrOssYRN4b7%2BOPiIvPAIhAO38%2BuIwm6Xnv6Qh0bulHFvYrCUb4nNhN36AV7%2FDWIsrKv8DCEEQABoMNjM3NDIzMTgzODA1Igxfx7emXtsxM4yFXmoq3ANCjb1GrKeCsL7SJuiVs263TvfXntJ8cvjXrFo2QzTto2fi%2FCb6XzK6WsFPhgZhsTA1ikSHV9xqkkqqNDqmpcpw0F5TDOE18nnhAFZxchqyRgg5MhhZDk4quN610zqYTNtghLpu7%2BLCL9YSzs2k0kJ5%2Bn7wtOdqLQl7wgw1ulLbWuFGD%2FYgw5HoImxHwfGs7GggNj0VyjgpJ9CGxTXwTNEHOCWAybaO78CmEyakrSyOhjku3GN1OV0SQEk0%2BNUUbe1vh1aBHpMcTgbgOBYd1QFF4f5nrsHqSogFVQexWubigVwM2ilZ3VtschUnXIcBWhaLcTkUhLwjUkqL%2FNZBTFugEKVEc4zXRteHBiBZFhy1dde%2FQ%2B1AfDd3dqEPMCnQK53otoFOpoUnByg06nsg6UYqf%2B%2BJvSVWFhww%2FpLVW8nJCM0q8RZu%2FtAuHji5gufpzJAV1aAemzLQx%2FQ3OiXRKsVfN6tbuXcEE3W4LhC00RHP4HDnNqB3Zt7BCAIQweWg4Wo13kVK36SwIPQRBNYg4qeWVyftQM6lraTyCXQSGmC3SQp2BGrzHNUt3bJmwdD4EBxaEHe0jHqmd6olRO6DKK7w%2FlbeJmTTJ4o9uvvnQ7YCvgFjyJ7yyjJ3KN3RvTCQhsXJBjqkAe2%2FrcD7A%2FCIjt22VUFEzaZrGY4FrFCJ6AbZjbgkvpQf2JVlAdfyELWojfg1Z%2Fn2wyfvUonHA94bGRDZUFTmuNjpAVL1PfUIJf%2BWnndiEgC42cOU2tE7s0r2kwrCmNFpt09BG5ZBcOg8a%2BjHa5mw0ZusI3iFHIP3%2FmshnXQhcBheqz8Tqzl77dDg709%2BBm3fOp28LpIvqe8nwpscZT8E4XF60f8A&X-Amz-Signature=4a328a9d2c04bce5100c6be4d700b1680cc371affa634ee96f9f0e2f83f1dfe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

