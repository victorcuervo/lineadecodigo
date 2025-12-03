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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJ65IWV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHjmWZCAuoXB2B6mCuGhdNCgTWZa1Mdb1%2FvkfS5tQRhtAiBLDGvGIq6LQUx%2BNRzxU2rOVZgB3YyWTOfY9xGVagiS0ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMJkVtdK7jfNTwRAJXKtwDzlqZ8uUxebnIYNoZlrIMRE%2BebaJfg%2BdTjSFaAIVoNdu%2FQRlPsTrXsb2TVRJKSB%2BX2YMxXWLn%2B18cLU8Tm8bVK%2BIOaQrfxR40YoPBm0kgir1EZsGDYm8vVo22QWhH%2FZzE8nm87Rg%2F7ORYQ2PnS3KhKS8GjH5f0cqjeN24E%2BIw7eUB22PJj16BUkuxuW669eXetVsRACg2oq75kOifGxMDNbvkI15JuEDYWdekwumtRCHGLDJl7pDBw1bmhXze4pNnpDYy13raB4jbgCchmLGyvHZDob%2F%2Fvb2KZTRHbPMvux4cGjD6cwzmMucB5pHZYbsVZdJuV7uVfu3F%2BhYAjpLPU1yrbNSA9Jy%2BH%2FN99qEE%2Fw6cfQl7tkQe0V4L%2FDBTPV6dl4vXIjpXlaE4L4UkqNHds1A74fBAoBZkXQWgGSiwdD1ehcGGoT4zz1yYneLNuz1PDtOrutRqHFUDn%2FAtqh1KLAnm8R1xZEP%2BbLmXsckl%2BfXjzWrm59Mu33JhEPJ80ztUHpFsuO0TsFXy5Kt46ObNTP9hSR9s8RTLDyRapSzG4JzhP7JYcqvxX2QPa79uAsHOJH1qCvRzlrj%2BwecUe4YpjKHyuiF9rgTugOd%2BqwFUEwzNZ0La0uj4ppspnaIw6szAyQY6pgFenEzIUpp4a%2FKyicytlKs%2BCPL4sS97BsIOkkgizLOeQ8rSjWOKgOkf%2FcDIF237VlYf8xNXYuuKA%2Fgi%2FMjLipfGMz1TjwdKDETGTz4ivW8Hx55RED%2BySNSYYXIVsLjcx9KCaD9NKBzcHUT%2B2hoLO2NU91X86haax%2FoafT%2FY8MS30h7xzD5ENb4%2BLLf5je1RJYzMyqEW4x3k%2FKQ7xWidKCF5E7idyst0&X-Amz-Signature=33f0e33be2dce8bfe94b71a2b848c1b38875dd0f6b5066a9bb47d9f8e42187be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

