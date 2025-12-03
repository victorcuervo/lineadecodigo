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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RP54ZEI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC%2BNBzs735ooCYJZJkzAskqTU2P29duYX4xMzprtDd%2FDgIgM760baCq%2B%2BQSTM0xv%2BZuN1NgzhqeHrSpxRQDmrcCRGoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDLnLRxD0NMMwFg23ircA%2FcDUQJs70%2FaNpOS7xlM5i3eRwjd1Lil3uFqb7sD4JtPYrokE6ZzkDGwB7euU3kLvz24TmEgELB8a3S1HRYQ1pzBZyQqTyk16jrlZzsFRW9lXZbaW9A8IlgRveAZ277lYwXcxrLqd4ok%2B%2BlaljT29Zlam8Ntr6EiDAq3Yl4JE1dfciSXVzmVIZza6r6XNLUFm%2BMJG8KR0W3ih940R7ffiM97u6lZXxXODE37C7fkpzr4vxXP71Wzd5fCboYgpvnobYu6f%2BCxogzReUECZ7brT0l9d3cXr92kB7e9UVrF4wq4xx4KmBQC2IWoHCQdPsq13Gnxfdc1U4vJdTCHRBZRh1AUhdDp6W61hmMgzkdo74U505nUDTsYFaQnzg9HXM4t6gwMg93JgrxDbICoVUNVD480ZhH6UMXeJvoKmS7HMqLcVL%2FGctz6%2FGPOaUGA4%2F7WMoOmN%2FyPwwPXIMw4BIK%2F%2BNaa%2BvRKQ3ajPiX89W8uEqbOxRO4m7KVNqi5ciSuu83RmmKzUsafKQEcgB8TVd0eS%2B%2FO%2BvAxBIK6ixZW4FXi8xf4u29k%2FFLNYegP33z2GIV7TU2pj%2FcrhPnudofuPi6VhRD0XCRqKfyw3JUrWCt%2FHTFKgIaw4KUddgeW5KIYMOCXvskGOqUBKPVLxKGMgQjYYLqmdwyJ9Vj4ukhJpMC3w%2B%2FbXtswBSGp0rIe54jteEsSoeu%2FHW%2F7UMY6Kncu6YaxUDdwV2ybH%2FGFquwqle6aF%2F1t%2FSAzIgKV1QhsEEa8n324f0B5i6ZQfbZM3v3ysoNiN566EKtrkzVyBZgNrX7RV2wTMolZTaSdM5RIy1nZ%2B0Jt9YfsOLb3su4mDyCYiE%2BScQO2O%2FWni2XJmBWH&X-Amz-Signature=d9261c0ee0f394888b016df00e6d877f8bd36d45a8c7d039a9d7b46431006c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

