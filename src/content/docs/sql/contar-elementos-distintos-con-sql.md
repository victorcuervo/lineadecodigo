---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYC4RFQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHBdRDBe7usiQdaEzpqxEb3MUGVgA3moT7q2NaT3x%2BO2AiAvF62hVLi6PoJbdtpTCgFF4md3c97SBWYjVsYsrPGK2ir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMjJUOrR3xwxBbGADkKtwD%2BTj4yGyWfV1hvmGoa%2FlyKvsJ8s6MLteewdOXPGFBP8JX1VTSTAPSm2rZ%2F1JtjY%2BcrbnBaVDFpJiWMkzQvxrzQYida78g3GZ3ZMhPurcEVfBEwzRv3NC7sZzCjwDCklgZod2BnzCyc86nfRPv66%2Br0f9YCg3I4vCKDlkx%2BR%2F7ZJFGWdhrYhyOWEwIt2UXt%2FpSATcgpTqpPV5FKODMzF7R4gl9GxIPtTk929AoXiJVPcA3myH7eqsFlGokiFf0HgEsaLBhYejFHZL4jk0hK8uTYS4y7O7qzryoiWDfQ6H81LFcGmodQhtoLfJ4vTT1Y3A5deBAlMIPz6YKhKVti9L8DJQUrgtwjpRa7DvUlaTRVsF4npWl0LzQbODAAcgcnnexrUVDZqJE4jyhBSPiQf8Cxs2gSqVkouhSTMb0VH%2BxbOOkSAbbU6WPfpkn8gXcJ%2FnhLVOMgbr4QeiZmp6HSzgwpPzNFILg769K%2BkSxaDgWtB02haA%2BS3GYXOsbL3%2BJ3ldNAHT0%2FwuKuKwypegZuZ%2Fw5xduKl7hYYAwXyDj61JkeGv0Ybqtx4UcN8io5FZbrWLj7iDratHSljP5HN%2BOWeqIKMciPtg%2Bozsw4mpn5mfkRwUeiNgE2tjry2uIJpQworXDyQY6pgEMAmGQ45MNP8CcYNJhgqvgQX4PqWkLKBT56xR4cPbhrPWLI0nP%2BL7bhRMtg%2Fu3FrKow3DMCu9NO2HgMskb0%2FvJjJmU01KVBwk7tJ0hlaFSZG5bjGYue1bQ8lAWQukA7TiwGgAG1bseHDp%2BwLnJFT%2BvKcEXKHflqFM%2F89CajSzQ43FjdwmqRYOanlrHSDYm%2FLx5TFYLGKOIl%2FHJgxTlMcg%2B2GtT0lnZ&X-Amz-Signature=d31331a3b0aa49ad55d50c341735730641e256cd0dfae5008acb4b3f8fc246d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

