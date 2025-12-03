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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CPHWQ27%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDHkyz8ig%2BGM%2Fjnv%2FiwL%2FlsPXRSzcwKO94bJUlb64Id3wIgVlJ1aTE3m4vj2Lklk4lSHi9XO7p%2BHS6INQ2niYc7yqoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHHJdmDlPPZmBbqdpyrcAy3qcM7SJN2Gi5eLCeNo61nsCEhOQLnZRmPgjqxepNVmudAafISdEjnK%2Brie74%2FujmX%2BCu651GC9O5edvSXSk6YHmHxKRyG7oFy3XGAHJbXmVUn%2BcfpQUhWsTNfRhfz5tf2dzpjrZRyerE2dcIaLpbLNjSQW%2BSu%2BJfrreGR1crIZm5qr2HuQ2YOxRSNzQNWXp9qEqy8cVBtsMeW0mpcen%2F1IKhW%2FLlywJZXONkAQB8WzctYqdYco%2BVkE9Ja3uUwNdIaJ5iNAqXIeFgFMVm1RB1zRnUREs7xd2tRAIIB2U4vM7fGNDifepOIIpeWtB94wZqDv4p7IlfPYc5A3bfLAKtb3EfmzKuAXooyJQo9tCH507RYDjnI5GFl4JM3QXYmNnzB6xfTwZhs1u4SGjrJZPNZOGKspjAq6YSmg%2B0aE1BpLiUgbVaNogc%2BDhobHgkHy8%2Fp4uQjCDtYxZQQEi4nerokcg7gjC1qqf68XSIYgkggE9zgtrdHGGi6MQe4rbOMdpVxeRRIAPwyJhkjthQzEfT97gOj2BLEiA6dzkZH2Ek08VPSj%2BPo6IkrOS%2BKpB0%2FYklEL2Zcz6ppbFPz1Zgmk9ztDJQ2L%2F2Bve7IqIekN52QzVHQGDWm%2BQft19xpcMP2UvskGOqUB1%2BBD9gCnrIcROXtW1%2FlHd5O21cx9JAWrZ2f2EJFadtBEdlA%2FE%2Bu69LYyEaxpLwwL50rtPppZPFGq0xi1qR31hil3UvRDMDBn82YUPcmoKkF7kYn08TgM4%2BgGSMSAwFeRH9YsCFEJOsEC%2B1AOcSQZOQCjuJS%2F2QuPc6SZ73SM%2BJ3H4alYErm9QcMUqlWK0Bl9oHghEocOk7Wyap%2B3YNzFnLOw1Ry0&X-Amz-Signature=756cfdf78c105a2d8ffcc78028ac70319f0971eff302c52d8931fefb975f1980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

