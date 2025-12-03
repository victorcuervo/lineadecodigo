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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFCP3LP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDL767lLMB0Zgsg3aCOnkiK2zrK1%2F2j%2FjjyobsxoJydhAIhAOJGOvet%2Bu5TBoXar5vvgU%2BZWfPr8oW0rUDv2gic4qg1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igw1f3OMEvBPo%2BcJFX8q3APJh95Twhs1wfadsFc8e3TIKSRbi1o%2FYN7msV1TrNREim9S2Rx4BNmhoZJ77bfqh9YX3NXr2dEqHCxwVD0mwJOma1D0hU1TKrhSQ5Tx2vWQe6zGP3DUoyAWFdrk0oucJNbWu2xevR4YXynhW27VDE40mvA5J19uvdr3D3Nalc5CrqZi6mHrNjc4jblqCD8MWBicTn1YJHh92LyD4PIf3BQeX4qERlHvUlgi%2BAe0dbVkhcIiZxPie7kgzjbB0OlERhnY9Sux1EE3sVuIdfzNbYmeiPy5gl71ky6ReqDr0qEU51PRiB4I5IkGNmR%2FY%2Bc5eElNFBGYP8gn2CDx9%2FIDqZKqZ3f2J0LJY6Asf9Ys7OeSuMdIVrEc65IzcQ2Up%2B7zMxmDO1ZXtKDYSLakW7GwMGDuaWjp%2BAeBkxSAb6VXKFNIFXOxCJlc0eSdm06VZj%2ByUQS1jGZS%2Bt70w1wV0MpkQiW9GKP0m8CloOzoGl7zoavl2llcf%2B12C6N3iNgjnXdPaw7DNLzz%2Bsv7jgpLWiHrxsNDB%2Blwl%2FpMd0xO7XY14NJ7rGgkNYG8NeEbyNwlrPbHJKlSpPcPDTTxUYjHAbr5qaJEQnIpKsxs4AX3ECBRlOyA9gVk6wFvhjqXN90cnjDZlL7JBjqkATJBB1suexKUSsj6ETa1%2FEbHi%2F8HrO1W63jXXWRxBiC1SGFh2NUkXKgSsxIrO0goTavKZ3BuSEe%2BWqcQkX3Vnjvh3I03%2F%2BVdoY0eElDN0QBaDgpzQlDcf8xEMVKOKG%2Ffir57KiaiufeFMYH6W5f9zxWbhO6w5XIzZJ4JeXFq6NDvpZKagzM5VN4QU6OXuhW5ti8CJE8jVMS8mpxTEptGLtlu6lni&X-Amz-Signature=e9bb78456acfc1ff04a78175e3d5a1ade67cd43e855dc205fb55a6ab95697b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

