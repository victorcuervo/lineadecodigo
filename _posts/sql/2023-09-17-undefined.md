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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CDEBPY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDd%2BnSBMPw9Q4I8%2B%2F%2BYQLMuvokpICcEFOjM8mZn36dHvAIhAOpffvSISF1oMg53g1PkXlREejcEOibR%2F3HrSaSBDKKuKv8DCC4QABoMNjM3NDIzMTgzODA1IgxJ%2F0D%2BMd%2BaANIOVrcq3ANhHk9QZNehcr8uoicSZDDv6ImLYhOgt8udUOeEwbF2LzSwqmzCn%2FxnkZoPQrsRA79K1btbC5Kq6gYBHK%2B4KzpUdnLzkfanecRpj5%2BM4QSaJ7ZUtPh6KICC90hqzjaAdXQU30K%2FOjdveK2zInRn2bQIISK7QZEMSarrgUFBCGkKiorr1IvOq8P8A0t2fo2w7T33SRrIpSdpn9i8qZjWWq6eTpjRk5asUsi7tDiOuIG9lFPuykR28fj8x1d2zm3QuvTkel3gsBpYVoL3erxga6frM7Ws7z6nhqC%2BTTZnffNT30VgWcergVwgKT4%2FglmoelVsdxrZ1pl%2BJeDsB49rZ83SEaGAetefvIZceGRN5En6bCWbN55IKmSQpFCcYy%2F8LK8%2BdcwdA0M1ggF0iTOh%2BvaGkU30478jcv4nrlfacwY9s2SgDHXw6t2fDLrTg72TmrQepP1Gz8%2Frnr9Q1lPzK8%2FKED4yrBCeX22xQaG5dlSFp8U9HPpEp0xb9jWjb7rpDlo8JqxwCRgO%2BfkOqYLirF4ILs41xxw%2BIGSFs5C%2BNjSeVFbwer5pYFUh8D53MV1%2B4s%2F4gfH4Z2cVnSkXMPD7NyJvNRmmY0Bb%2FGeZfuAL5Uz42RdMY01w9mB4FK0YKTDd6cDJBjqkASQcp%2B8HIQYcVPhfDEpB%2Bshdqa3QtF1dWIz57w8UfitgxNLuIdGdHpE6QQucmE%2Bf510ykpYPcy6yh8BW%2Bs2E2EZ8LOhGO6ZwsPXoUbHwkg6HM2of2B8Qo9fAQLaBd052RfYdSK%2FxMZrm2M8ZiO%2BFvgRpNX%2FxoQV89Ad2QQRnUS%2FCQeWDHUsQpjMwGnXIlPRafrcgJ4LoKLjNF%2BiZATM4z%2BWlkUya&X-Amz-Signature=62e8a75d4b70cb2495d5c4e1955bfb4b4cf7af4921b50cb566030fb3e7ce72bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

