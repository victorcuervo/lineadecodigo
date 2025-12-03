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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY52NGK6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC%2BFaZGSQwtjABfGYfXinPNVJK9uKQZlu1yn6s%2BRSZjVgIgC9i7dppz4AI4sewAlzEOuqxezh0gbDzyKv65VliTlwgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDzXck5lTyG7konYjircA1wobhAWJ1OapsH1l05MDwAx%2FikLLz4JKTHq7xZeFRM5wUzfE%2BmSR21agJKbqoeWNEcZx%2BCjAg61O53oWZFMezGKgitF76wAF7aVu0HLWcK71ojr4dRfjZzOuQAR5SJWyQnTBOET%2Bfq8K%2Fs1zaU2gIDQB6RzOAm%2FTqfXr03iyOCaInasrg34UN9%2Fn%2B6DNrUUto7KRO3PeQZM3ujj6ivXxgguKS6MkNG7hnqyD5hwG4fLNF9tqtxusb1fUc76fwiGHM0QX9LY2t9zoP8X58hJk1f2nwA09OOd80gSLfGJco94A7f5j1F7JxHa%2BOymFCgUeypT5uY5dEgby8GBrYKp286lc5CHUzgcKLON2JPUmh5CN40KohdLz5Qoddld6AESROIOEmpXomGbi1s1FUsjIUGIWtx%2FjpvOELqtj%2BO%2BkTElv0p9nxlDTpYqTJ7ATQACeTUbmkEY7nQc7my6Wy91tBgsuhBr%2FZPUIV6icv6k4HOiD%2BrqZ%2FB1cI4kLuUKOlyeSeDT2grST9jd9dyxU1wPBF%2FGPKLUGPlaqVvbWCBo05Lh5tHYku%2FMh61HPXO3iCoGESAVudpycGWmeiGWFdrvewx%2BvakA02ySeGbWIKoTe8KXnWA7Q%2BynH9cxlaA2MK%2BWvskGOqUBij%2FDgU4%2Fik8UUSXh435kwtX370omO7aljCTGvQTt6RJ6LNCIzuToGt5JOvu46PrYm1FGvh5JXaaRn7F%2Fh9vQv6TNY4iUqH%2FnnagvCzcjIQdqdb%2B%2F31yBgff7CVqvnTho3gFdmn3LerBE1Z4b%2BzgoTGbwaS9c4OggcZbg3Fl08hUOml2hr6AwH6%2BHhu7d%2B5kEwvOC42a3svmedc0fTp6UMHo4f9AP&X-Amz-Signature=443466072973e21452e8ce9ddaa7f7bf88154b1af19ff37f2cc3c79f6508840d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

