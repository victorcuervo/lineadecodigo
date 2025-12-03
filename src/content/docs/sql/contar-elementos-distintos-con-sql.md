---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IH26P6M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHCZPOhsEqHklyxQr2g%2B2tj0FtFT2ADMKJRKAqLCLv18AiEAjO6rlCFeu7Oxbn84H8jntjML7WJoWXR5a%2BAQl8XHhqsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1TtUs6xxM4lwBHdyrcA8by7162DSBa2%2Br10tE%2BiNZfgwlO59BjrgyuKNNM0ESh5%2BYLwjw3Hb3kK6Iw7nwF6fGL%2Bww79fVe7j16y9Fkq2Uq2kmQ8rLt%2FvylQ76n1%2FmrO0NSFT%2FoDGtQ3Xu%2FS6WkySRBkxuTS%2FuQAJkqz9AeXLAYuzbaNsBB%2FARa6KysglYOZCnHpfweTUhTH0CTqYdu%2BsVyI30ee2jINZTvYDAgWY%2B3PWEvmBX8fTQbS2JJQDaoQ3XJ72rPSFTEahL4aWm7VA8mJiW1x8LN89qcTAocsjl6srGwi4bX5q9QsfBL6D5aub7YdVZJo3FC4jeSBQp5cSnt0O2YoyzEdpQRoOIQ4AWVyJOQDl%2Bf6sMY%2FGBS8AwRpk2DAkbfvId%2F%2ByQg9f8OiEfqJWbdLPZSIzeRlHch9tKIBXAMilwLoqIaAD6C8TUdoLFFST%2BBSD%2BkmTwbdyEJEF10mcSoFmjMqCB0OVhwcDRQF%2FAkcOrIq3r2zHYP6Y5aq0so%2FJ0r%2BwuHjnv9GKf6p1uTfQLH%2F2GAss9fc8m92M0gKsnPUqPkuTXekoY8xFaLRxNa0ViYFcqz8KEgJjcp7BGHe8A%2F61oX5jKV6ydvGS1epQs6f65%2F8mgUcK%2Fsk6%2FxJ73SZFtpPxYe0eJ2MOm9wskGOqUBxqm93e97fmnem0Seg13jDdv8FvksuCnNdexZWzIZIFYyA8yKkwl7vxmkPAwEw2Twj%2Bj2Su9NA0XKbzh3Q9u1QgjEq%2Fb7F38T2tA4g5s7bbMpT79gH4u4GMhdf2WZnZxFdTIvTN9uX9cnwwahJYG29Z%2FKuVugbItbiN%2BJTYJiU5dP4%2FiGolZaEl8T0CPTXxXf1CKmYlR6gBNcMuZgPxB9o4WVl2UQ&X-Amz-Signature=21f5c913e896d13510cabac35cc1f8a7d45fc30489c5489acb4028e59145e6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

