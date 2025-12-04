---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXGPQOK4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDf5RbMqdeQyRrlmWCN0wZxwJi1DnM1rRgTSTL9n4uSZAIgJdC%2FuIaM5yqv9Hu0fK8dT67AhixKR4VzWWTjjrAXeLAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGEP9cNR0BAPA4S%2F%2BSrcA%2BlH%2F2qNCCyS%2FfzqD02WRrqLGh6fk5tw0gRzZH%2BUUqatz%2Fm16KVhwrSoIMHGjpHsy6G%2FY1mt75zBIs9s2b9txjuSpSKki4cu65NCoie9j7EWuYrCkF1dYkEQejpGIdfCn4tS1yrAiTPdfyLsxFa%2FtXlx8%2BvtaOrQYWjKONj%2BhmbVpVLk3D3pKLZNtmmGHxWs0iu2kfc6f%2BWs9dLE8Ugk0k9agJBnuPuL3Y1QwHd90EmE1qa2nbiVK52xHvj5mvD9g4P7mC4YDG1Ftf4Kq3vVGGDu8FBIVP57lpyBqNH3v3lVQfjvKXCauC8javSl23iq1Px2xseTsjnEcqgDHBNcbGqhDatw7myUfFV0ThylNV9%2Bp9OVjF5GFeXsKKIMuTD%2FP1b%2FTFulQeKeW9uxtUB0tAJprQ88uPiud2bZGTKjMbPZdx6UCqMkHcetMH59uLZnCJGquuo5Y2NRjfy81MhTjzcTLIEK0Gtlh0JiPGpGtMRI8GaAA3VX3KfqYeuJCr0kYZnzYymcBH2PnOMOHifCdmcx17tKtp2undko0xYKJqqLFAkA27%2FUXC1FBAfUTWHvR6HbI3sC%2Bs7qySzApk8EuCaQGo0fE9VDr01kWk6lYyxv3SB5VgnzJ9OjYtjdMNPoxMkGOqUBqj1UuhAI%2Fd764NzHkxGLMfuzBqqJpnaDR14Lm0ICAbxh3M3AskpNq6b8VMJQ9jEqIU3EZXtxlyFUA2sPE4GCjGxND9R9IJpiaSc0AnENkKti04TMhWywGt%2FhXJmgRCp19%2Bqkkvr%2BfH9sAslBpm0KMGuaQS4XShlWcNb9dPcVC3p6icqhnQdVziTrWNax6AK3fss6Dlz7Xz7ezO1PlgLm5ZhzCZKF&X-Amz-Signature=369bf6be932411544de8f041d1bc1fafe134b121436a0e6469625b929579c6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

