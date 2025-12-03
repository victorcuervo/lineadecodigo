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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ64BHN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCubB4Ll93vzAlkKEROFMNKG2CCNI2d10OSV3VVUj1B%2BAIgXiCu5pFrFIrrU1jp5BqPD51OhTApjY3p0zFkhPMjoKMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIT5irpjQjshb5SQOyrcAw2Mwz8Dgedq28XLR4Q%2B5qmrouzA435RafFDSeVdD5YFHW%2F1%2Fto873AHr5J1Xl1COQCJC4lmnbaNU6jCLcKWNfZP4ioPOcIwQwqdiZTkfkSENdSKy5%2BjNJ6axS3LsAjnWX%2FW2TV68FSfMvQG3yV%2Fg5Bh70pkxjw2%2F4KQPuDvF0OqHP9kfYS3jYjatVVT40FE1F4n6MRDECDuMJJa0cBznJ%2BUTebA5y50StABqUr2PGGG%2Fr5IHml4PO%2BwUdqAbAWL2OgSRL9xPvQDWBlANZImaYVtMni6I6T4Iu8HtI1EOkgKmu4qV%2BnpRAdUYJvt0jL0HXlFN0HbB76oK9plyjIdxujm2R4oAY8DQn%2BOlPQm%2F2m9YtOBX072wtwsVJ0eYnVQF6fAky3%2FveziH6gGGYIUNQV7LRpPk5BPHxbD%2B6EhWtfSrEHz5yq6Wiqzu2erZg2hsIew8pE%2FF1OokovOXkX8YdtBuVsuzi2ZE48i%2FhaYmYdIyaPMX5FInjXnF54594Ih7gIj8zCb4sZE3MYLmFy84GW6823qT27IVMG1abKNcig904dTJiMAMKE6OuricBs4c%2FwU23HhlEbkSNKNR%2FIA9RUktTWHShvynm8jhqSBClNfqN0RJt5LQVPjg3YWMKelwckGOqUBYBE4lmehTCyCXaTLDJ%2FNeyr4wzk7fguc2mCnN81LwsgZOq7GAYDK60W6Hr9Igfdqml2eKXVTVEVgvIkS40P6KqZnaReAMmGRQrK8%2BJYg8qYqY5RGBkLy3%2BIg%2BboSqkvh%2FpKUnQfBEL8uuAzNzRyrQeBstWakuRkokN2eKDoqlMKkvcSYv%2BaFWE83PVPkyN0qPPGgQ7nwKllsspXnyS5nOEdE%2FkoD&X-Amz-Signature=334b95a5e83ac2a35813286efa0489586cd4fb889d80500b519f0b7e0c120ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

