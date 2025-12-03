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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUVGE7Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHH4Jg%2BthFPH04pwz%2BJsOlMDlADpWFljDbJEUdntcVodAiBnP%2BAEjIH2i7de%2F4CKTH9lepT2jLVpMb9qOvLjO7wMhir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMTanT%2BZcPym2KVU2XKtwDCNHiQ9u9CNoKCBcMaEkqOLWX12GtV3Q3PtbUgYbEmN424qfRyY7%2FHdfRiQ0MspBnQDvG2gHUeTBhXfiEfImDVDH4EiW9wsEVPHI1AARmsfXGgCwnM9ecDkcWzVP8ouXysjjLJu1Oqj%2FnwgoqJPkCgQjw%2Bf%2BVOSWrlKFYERKU78jTBXYWQkeGkS8qqVCBUU4eSoCDa%2FjjgRysA6Mrz5PIeXXiaW5pzd64jHAId2AMfI22L14wUnNow8TAeIJN1%2BivNLfiQE7cq%2FLIOqzKyT1Pj4Sgocdd1jQ9oNAGPWNeLw8gDaPx42XqxyxLkkTSUJMr24Ft%2BUfWaUy3w%2B65Zq7wBvZ8KZfiGTFwxa6j%2FgumYIez2FO4%2FnobwoMJf8cE6KFeQjTUYKCILBjrukqpxps9WPAsISWU0Vqq6MpN9Xn6iKtGbV8%2FPqjI%2F8eUSMlcWLRx%2F2xQHphEPxhkH34rVkLwlWddO2RoXfswysYcRz51a6enaj0t2gIt35y7T58OjnKDLqGG0CDibkWhs9CabZ3LAb%2BQPLurj0EQZ%2FNMF9GhLEHcMe7ATQA3%2BBALgSQThJsT%2F88EmRJV8KZlvAxOqmn5lndh5m6KURhI1HY3E9Xit%2Bxu4JcfZlNubfjs42Qwpta%2FyQY6pgHy82fS%2B%2BG%2BuzAUVd5tCsjNJzgcjdyNJhZXo7gQwlMOdDv%2Fwr9nROmo37eqXWNAndttIBLrY5coHx9l2%2FkZ0QvkpHPHrPMLok2SviHjF8%2BhDqh4wFFRpcGlEQArbr2%2FbxUKE%2Bcn8UhqtQuWm2PBEpZO4OY%2FA2gYlIFR84pi8eBKVw1HnwlStDvbqJe0b40779MS%2B%2B9Ckar%2Bdb34E3eX%2F2n45yoE0pwv&X-Amz-Signature=b193fefdee856d909f17544e79c1e72ca66a61e12ecb163a6668e8be04d3af4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

