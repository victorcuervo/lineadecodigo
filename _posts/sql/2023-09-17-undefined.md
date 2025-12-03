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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQL226RJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDdhi4W3vP4yK2NtjLBGxykVDGA8TMo%2BHdFBHPbhbdhvAiEAq4D4dJ7SPERPD7%2BpEHcAWOlH9TOh71pUAxseYGDpInoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDES8wCIJWRsaWsdloCrcA4LGFTVpwHNEkyOWXYGEmz2zMVgNPX0pbH66eWOznuYIolFGch3ILURSOt0FgZaGG%2FGWbAJ7atuwJpCisK10FtKDAmsSHwjBJ0jGajyqvVe1AQTxAkSy3imTIdJCbh%2BuG4MeFdVcAzMNa%2Bdfw2yRcM4IDc3TU3vhmd3avhbJzxmeeAKSUAXc8ootlf%2FBEN65R1mi9ZKUVzF0emNDC7ZuMMoSOtae07EHkWbCrxY8PQ566Meoi6IsPnGHSEvLRH0vtKI0frNcFMcTL8KTCpsQpevpEx%2FZAxhmFEkWL1VeuaSHdDw5lgxC1Ry9lQe7llAwEuZvcM40KIUTX5WEDBRUdpIwXXrGSRJdRXv8qpKdxNnmRvNnrOftcu4ltoleewmlS2Q8%2FMWLqMFY%2FemLKzwx08VSg5FjEyEyNsGB3VRB8NlR4Qf%2FNSHQy67JqQnfb9LjB5cEQKv9NQMxEi774ACs313PsjR71HlpbItTcJWYfqgQvY5eTJyoTI53UrtSGkbcbstwCowJKOdLc37MkhEn0QFX28qBmAP%2FCUebwhGrPOiUij66XCy6GVoNunUzFyUH9FllflDbYoXSNQvowENxrxcufNSPkyhW69nFL4gOhBK4XQs5ZGriNB9uppc8MPDAwckGOqUB79VSJY1iYpl0i255Km%2Be0I5a2NmT54DSDj4N%2BlIPqUbmAZqhez2%2FtAjshBF3FvzMEsmpluwt2KNH6j0XMmnlelgQ8fbTG%2B5GKa4vqynLNOWp22AxU75C4xLQkVohegJ09Fh6OPGTn2rabY9xDcZIhKSGSCFtU9%2FJKzMfNKErh4bT7xLVxOsqyx%2FpiF%2FJIlnJoURVD7Yd0dzLco1MSJkxqR%2FrsYXE&X-Amz-Signature=ff9a0b6d92357d4b383fe8e986414a4ddd1a30089e393236eec789fe2f2843a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

