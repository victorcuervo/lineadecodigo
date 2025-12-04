---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD75VN3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDxyhz8Pzplr%2FiHWFP1Tf06jQYMZWqinE%2FVPTzPInxUdgIgQ0d7W%2BB%2BLd%2FJnhyOywz1K2CyjOOuUGbhJeW2v7b3fsMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN2JHKs4DAKZYAo%2FiCrcA74pWKNWRmNKEbxryiIVwM3Ur9PlBhQ1LKMzQzZzbyADlA6yhFIWwyF5VNQiS49O%2FPyMv5XTpc25kJOk0prrVjhhvKPYdEKl0zJ2Q1kBSbYkPs83THQ8IOUJAXkjYJ%2B3gZADDgk0Ky3DnU8UCLPZqcY47QXLNCi7GJs91aEU7sA5kPbxuHOkP1pzKcEZ27qburHAx8qkrZfJHhbNIMqapqZZLxbVHHE2tPQmCDUE8P3jRdA%2BBfVA8G7jkvMULfexp91v0LeZvEXrr%2Fqng4LgJjgLrq%2B1kpltfmnSeOnSPUdDcN0H2%2F%2Bp9amaRduQy1J3dsAxF0CFEc5WzJo3qNvQ8r%2FZV0v0Y4un0RbTzyMFce5HXgqn6bNRDEO86CCnUd%2B2Mmm%2BWsTXFJoycjicmZpSeEHzN3%2FWO4ijbjDp6QwPd5gwABOlFxnBwtZS4tplKoXDxyaBauW1TDKalyNK%2BquNDI2CK7XZrycdjvo02%2BfbE%2FTIQSCNwSoKeMsC55sO72nFL9ik76PwU6%2B7fOWGwi4xX%2B10BXnxFUhBsN3jPqM6Krtekrp7rhAI0inrtVqgnUla8QIIztMPE6scKXcspgHkYrsNHope%2FX3HkNKzXQOClQCQWnd8UuUggXKGjZb0MKzKxckGOqUBNT19gmgfunYMpqi9elDAaIZta8M2w1nQi8C1Sq2Yd2lEffpo3jrsaMjr3w78%2BjZNubiZvqFWMQR1GBw1bQkZ6SoQYG%2B5j%2Bq3q8cS3ByD5uWX0gbyl3vuMMlW8NcwnTkFW9pNezWDI19szwgRv8boEBnjYIBGhKG%2BZWQ4Uls4XdF8fsKxGzFJHxTs6zKBp74pwDgjPyE7RggTnMgQzyVaYQmNtwAc&X-Amz-Signature=8aeb948664cd325ec846d44850b5876439ab088264135dc6aa0af811d39288ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

