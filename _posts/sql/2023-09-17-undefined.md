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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIAWODD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFYyPcT58SUy5Hg3Gw8m5KU9T9EMNKnL7KtUXUfbu6nAIhAPF0DYUGO%2B2Sj39YUy5w%2FiCV1Ahu2bM%2BcbyBfSFkXDIbKv8DCCsQABoMNjM3NDIzMTgzODA1IgxHVrFMFQj5qElJP8Uq3APV3KvrzF2QYh4d3TLCVC%2BDDI%2BJs5dgdcQUsXhmq1yuE2qWn0zNKUGFLoEc6F7V897sbioioPI4Bktrza8VAlhWuMSNVPXMp0jWSpJyKNC%2BvT0EOfl2rsW51n6Un3N9FUZxsk%2FdvSIeXFAOgBYx3q%2FKURmyYVrAp3%2FzdpFLDzkswvNzKLYtD3tDrsL%2Be%2B8ULgQ7ROaYbXVBtRTqWGKIZg3NzkW7r0g898G6TTwCXWBuN2TxhiPTqWQBwOtxDt2bFh%2FiuoyxDaYcUZIa30wQF2rRmPghsrtVAcusxyPFvNYB%2FjUm6Ic5otsXiMPVcxqA1%2F3Mb%2F2F6ofHzEB9UOjFLXbG9%2BOB0C%2FNEg13Bue0GmYpv9uMHY5T5vf0WAafpM93qmN%2FwIu%2Byxeu%2FdpeGaCR4SKewLX8PnNImyGUHzKelyvGjaKyQy6oT3M4sYNVUVM7zYqkg8F1yZFkmzGB48AdqoY%2BLWUi9ecYFdb%2FuS%2FzWpGcwRKfZWlTG9EMkCfaGJK2m3Ey%2BgvLUf90MfRRQM6mqw2WSWXQW3wLaFzcUXaoV3NuXAkPxLnBcey279BpytuAaF7qqsZ4WRFVPtJrUIjaAsmBgKKEb4SLH67E4BibbF1B9NIgUlsbwjQlKTywjzDpksDJBjqkAW%2BcTX9ZHYfZXj7ClzsXnW9XkIq%2FfeFoVdRFHjtsl6QOJ09vfOlO5L0hqD7zTWJh5jqA0BMeUvwZTm8BbEdoVhFnU84NJ4Ir0x6zXy%2BDuI1qI4Lv1dKWlbOeHcThDYwhurRZP9PByqKF%2B35ZqHBRiLmzQMDVlgblG4boa%2Fg%2FNqNGfkq%2BaWSK45hxEKZ3lL1RFFZiNjyMBujk9pPdQgI2IosIPK8Q&X-Amz-Signature=aee1c1ccbb797ca4dd4148c7fe1b33a80ea7c88e68830bd6cc490a2ecd10906f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

