---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFV5VU4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG4R8kRpz%2BmKumI9j7NkcrRi2nfN1aJMHhquS9qhmLzLAiEA6KwSEjadJO3V7RXkO4PZUzBMh2%2BqxCkh9%2FH7qMQST88q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAoTs7PeVQ3fq0KmmCrcA26Hj1DNOf3kNYtsWMY32Ygw%2FVGY%2F8VW%2BLh7xquykxr9MUOPmHlyslHHUsuyiXDvdixdnIgSGYPK4yyQOjGQwAt96HQiJZHzusmnO5npij2NcNzCVb1jFAqPPkA5qFC%2BxxBG5AU14nsfwb9YCL3Uuew1G5UxKPgPqCv%2Bs7uDOpdi67uACGrZVZHp61FMgSFVqLYmuil0YGK5DIX1S1Tv%2B7ZMOupEtfG3RG6yJHxP2pVOCx6BxsFgi1Hvo44z6x4hDxqMyjuiZDbWPy%2FOPKnCLMvgM9XMInuH8sH6UwdE7OpxqjJF6maBGZc%2BFbNL%2FO0lFLSPeueBE2biJtOQMJQ1u0bsZYBQkNk%2F9yOT1rMxIp6%2FTitzDA%2F%2BkkqabPuTgGV8I7rDgvijBt5RmYa6FcO47eXpNi9T7h11Dobn7XYkTuYcDuSbyZWbzBbmGX1PwvtBxxQ3PFv0gpnSiep94CcxbQGu%2BRhAWeqFW%2FU0NwWvbnPpYR4DCs0qHn%2FKP2dACPTzS1RTVg8WFWLy4dePRkaJroruywJUAruGU0raRe7lhYBzl%2Ft%2FVYzfujpy97ISzD2H0%2FgGsSsqQGSAYLLfNPgRmBNgznAMcXo8lEif4gh71YtEzhmS%2F2loJ77bS0AGMNDUw8kGOqUBJHR%2BMxm7kZbzpvIFVyNLQnH3gkBt2VI7tHTDB4bPFAXQmMLvJnS88v30aC1Hc%2BF7rz8Sltw4gJiUdoqHZsxKcSCi8bJI9rjtGiv7nvwxBzVof1cKwNtsgM4y0cZwnMFhE0IYPZ1%2Fas1T5Yrxar4hpen4gxc%2B61f9XzL3Rdl73Q%2B1%2Bq29bR2qnR3%2BwjM7UpLU8M%2Fkr711jpy8XM1Lnk0nRq1VqW2i&X-Amz-Signature=5e6dd9262ba65bad48a179193687341ec0d86c0b56ec5e0cca0b733c470260f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

