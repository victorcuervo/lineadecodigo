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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTQI2B7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCtYCyJIsonpAcTkHl0Hty9wh%2BS5HkbY2N%2BIybO3sJsrQIgbnt1uK6k%2FWrGLNjMlCxn218w7D3jJl%2FFiYYIUE%2FQkFsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDA5zcOVT2DbGaUK%2BTCrcA0yuHbC9XsIHx0Cr%2B1Hxm3fJvXvtxLTlEQWuJxYLcnASMn3QILkzEEykW3Odi0d159JDtZCwzOKLKSGykJMhHDgj%2B1JopIScEFWitsWVJKW8myaAe28s0GxRALUK8YAyT5k4%2FDIpWjW8EZwFjqIZIAgwSxOsCa3%2Fq5Th8RztTg%2FpwmwlBPM7XNKjr0RJlXuuRr9yuM5%2FZ8hgyqT%2B7Ej3pSmGjbxhKIU47KPFISMYiyT5rhwIinwUHyhMGt59fX75fiyXjAU9q27jDxFowfyNVI2oHVxzQKGM0HTN4Hg%2B%2F%2BaBN7PLywYenbEZcjbg393EHi%2Bsy%2Fjpaj66MIGSY%2FzT%2BtwfAUa6MK8dbxPkkXverCA5tLpKDlUrS5iz6DQyY%2BiiS6MNLipC42GAZDqnXsUrz%2BnUIOiGtRpk9jlfTj7Iu0n3OR7s4f7UGeXOj2KFuv0d%2Fe6Jb7RKEXXsDossp3du5IjOLqLA8k4Kcy8svb2sPG%2FY1q3O7Anq6oFP18hqvYxsXV23obnEVr4GdiC8FFE0pJku2Sf87I%2B7xLdMuV8EFvzgljRupjf2jU12T4lj3oHCiTaJfbYqU%2F2OzJP1Fr7xZoAnROWSxYo7R1g6GQGfZJ7A6U828Y6%2BHqRxS4xDMMmuwMkGOqUBWic97SO9yxa7yo5uDwisnFI2FTD6ORY%2FIUvCgunmVsTku64LmVGfiAOaqLcBkZp4Gm9fE5C%2BjU3Hc239JraPtgr1cQHiHdwaeuV4FAdCetj%2FZXWje0ChDBWaDtsVkho7%2B6REhcXmzK2LAVvs2l9EDIJyEzOYj%2BTH1PZfUOJoHxUi0lXQN4PNWM4q0BqLSTXQ65hpOnzJ%2FCBWsxUm76P7I%2B5zyTHp&X-Amz-Signature=3b4f06a3eb4b11e4b088512698fabaadcaf658263eea281c043d95132bbb335c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

