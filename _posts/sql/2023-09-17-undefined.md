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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ55YPWB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCA%2FhomyWOdOwdntLvDQuQMZRaMUsFF%2BB9OmEs19N4atgIgZn2zkgavqIhQ%2BFtyxz5L5Imns%2FnrF34Mn6ujQFRsOcEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBb7LkV1s5fKF0svdircA7%2Bq2EiW%2BQZ803zbwih7%2F0YeMYZ4VDwBMWJ14Duw3LjsSVgTia0tteZRDsQigMfrLbEnw6rMBFbtTTGCmnPKhNlj%2FpjD6zwEISR6j3sKsfyBApW5giLFHPIbeUWycfoSPjpf%2BEz0V648ZLLUUkjy3KZRMXFiaflrjyF2ZSt6shibRNYhbYM5qS0rR%2FtO0eu8qxY15p14hDykr%2ByW5EDFaNbK8%2FhNIhRHZj%2F9EHKb4UJvITXz4MRfEwLbzi32ag0DYKeXck4TchVXBMVqAACWxYSFh2c4nMQDiiGWsmH7Upegr4jlWtfUa64XC%2BIGRz3TIfqpkKaMti5GrgjIkNf2FOxJJAvBcfyBC3uAn2Y%2Bjem2S%2F%2FVvvZk09G%2FW8oJhbyDkawVEd1kgEA6JeDcfdZ7aH%2B%2BbAbrt5qiYSBxGZYaaKtQw3r4UXBTzeMh6jUiYVeC22XOcmMiNIFKaYRr9gYXtUvtXG21D4BtejJSSQePdBR5Qi4gQUtvSLSl5%2FkML9fN1tEE90M%2Fc7Xswj1W0UWxOyprekX4k8rkPZVmAJEEtpvEoKqzb04mVnzilKdnKfzPzoFRvC7sGGz%2FbMFUWqhgBFdA2vLY%2BTxN5uCQTSnBEgoESU5JC4TyT8wCqkkXMJrBwckGOqUBM5WNXIfAAl%2F7OrW%2BZIjzrei3nLWQhF2SUlQoo5Rvw5ZcQvBUsfe%2BCGMXMKUcAJE18N%2BJUnJIKnjxIn8ozncgqK5J6LnIPFIgPA2SUxQ%2Fhgq1EhR01Ed6UGBHMrx0bBdmAkmuqeaB%2BRTmGn%2BrOly8Z3fsbdLtdEXDt3n9p%2Ft0VtEgmGSpdTY7sG81oh8x%2BCLxNuyr%2BA1cvUTDKa5%2B%2F7zOcDq4%2Bm9v&X-Amz-Signature=c266a814dcfc264e765d5094af8dd3f70695d2977cc72c54605978ce3a017dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

