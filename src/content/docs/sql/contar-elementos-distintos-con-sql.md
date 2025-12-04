---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GBA62Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDBZc%2BwKByBfnB0zUtJyqyqduDKSqF%2F7TFodYyPoFtZPgIgYEfEXvXZHA8iMCJdMt%2F6RCmKmyDyDDRflcIklprrGMUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKj4laVWwnChsZgC9CrcA6aqBBqVEM68Kp4deHJ5UWSPuQTWXb7nD44Ts5C2g2uVbCPovAooPjTz7443%2BQ7mPBa3UNJkbR97UN8YbSMpzJCtE8evhPKR8dZdw%2B2zfyGXXczNu4L85YH4lFBpDMDHWC95T4xhCCE5%2BYEpZW%2Bx%2FndNv2%2FZIsrTOYd7ILOYilrq68DD%2Fy6vluogArKfDSo5skWLxWGAHgPtuI1PP8yOkUkeZD1yAxHf0q84U0nh0Vw7Jlnr0QqDy0RSJH%2FX%2BabELH1kYxUxoLXNz3YecpC3Re7kijkZuFwTdUtDSmsfMRUddmyDvaZ%2FxWVJtaHt8Hc4MnA3oj9op0Jwl8yR4KQkCF%2FQweUfr%2FBdqLOS7t9RL7za%2BzjbLUO68neUUPRUYlebJ%2BVAk5H2rC2tOH0LY9JvtvXOkS09oj18ONvgtPb0y%2B9CsGFZpbup3ki321u%2FTr9LjlfCofuA3yTLSaZBAisRX0wOVY%2B4yrGsimoEy32ISrk9vC1NXVJ1FzLjS8QIphGWouMZelohGaVeSRjKIW4XLbjGsbJKT3VaTbAuD8Bh64x%2BzfiZVb%2BbltbRkU5q7253O5iqmbHJJvJjyAp%2FA4E9rsdKBLHblmFDhZWBR4Uc89bTi8QUeHOZXwUFPy%2F0MJy%2FxskGOqUBbpgy0C7F1c%2F%2BMBR6cFcFVslRWpR%2B3LBHsAQbshkdRfKkD8DPwps5MxnMlB3iy%2F5HFbTHqIAwBITq%2BxpEY0mwZv3em7c747Y1%2B%2FsA6wDCOYzaRvlc516AW%2FxrZCQfOLyyHKRYsMbtDc%2BDojtO1fdyh4YzvZZrjncz6yrLXluirOJFGyB1hvyveXN4TPKLexx4gIp5TQvt7Ffl7HLyDAbvq3bXONVf&X-Amz-Signature=5e76d4f20aa664c3e48d9193fc7d7c4614762cc2c70b64eca54ad4d900082db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

