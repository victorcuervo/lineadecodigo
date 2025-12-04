---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCIRFH5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEtqhyMAwaHNixsRzXT47%2FFlrYVSY6EDATRKSuIcQaUAIhANufX1dY%2B%2FiMT6GkqzO%2BxqY2V8hiCaVlxjhTn2GbADPtKv8DCE8QABoMNjM3NDIzMTgzODA1IgyYJxTCChuFZLH931Uq3ANJ3M7ipXNR%2B%2FtiXzhtUueHZFyUcNi8q2Yyiug26gg43y5AyZSfMGDGRo%2BnFyVZWWqYP7XVhhtABlhE48zFiRUcrjn%2FJgQBdcRiP497xcgYEFtsDnV24GDFDKJUHQ%2FB04qnwiPO9tv0HV%2FTyO6DOTgDeE%2B1Al0ijd82KgjObTRpPpeon5tunmeeo6QyGGqUnpxIEIuMQH6CQQs8siuBJ1WDUauZyNEhZ6MV0KQaxe7qbH3rE7dPuaw6d4nuuRd%2BdaYMWdgxolF0hjhlfjn4GjW1NoEGAM4FDtjNq4kecNkWvxBVdH3Rpa6OqWrve60ivWZbHQ%2BUcCWMlMqSwu05oi6vjFiLxC9DwfTKi5iz6Sf3oYFH5VEDk%2BWqPBkK%2BhT3nrt%2F80AL7VWJTA6ocjUV927vA5otNhmJ3pWkF10ppRBbns9X4bfQmXK8u8Aqf82IfDIL6Kh%2BAK42GOtHbvcYsCDyNHun8x%2Fd8aX3QHfSA%2FrkosjwMwWpOXpCUztDQw9lOM5647ZCyaz9I8yxIGGoVaqeuYuhSVQJNlSyJlaRRrGKCtDEVZY92GMRC14sNrsQM1rviVq%2FCcCnvGGkFGinkHegqV4ngQ82%2BX0zf6%2BVHq5dlGuy6KjO4uAKWxQhdjCrjMjJBjqkAXH9M%2BKdVvYWxC0r4bz1%2B7UJwrkUCLoS6vtZXJh%2FLcYMibiWIpM16Ed1lKjg4C0zxdsV1U0OOxjc2LU2JQ2W1VrAvZmIQxRfkNRlqrGhdrATRz49nD3oasmZkMZUpwBuCyNeoMkAyFYEzEEVvIl87GJwacvZ1luQsRyD%2BNJVzUBGcwYonUzIbdYu6utwCu%2BIEm%2BVQlBRs4tDhA7Qm3Z9qHdGrPp%2B&X-Amz-Signature=45d2c9e4bea904de5eb38074fa5e36ce415e1304c8da3188253f6b6d4818fca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

