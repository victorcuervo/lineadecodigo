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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PQ3ZCKR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCY1D2yC5sDiJJGeyPjEMYvQ9Wht9S94FfxUgDF6Q8Z4wIhAOKJZCPnMOtp%2BdgbenIStBpL9JERTxScuoYC9vZhAvH%2FKv8DCC8QABoMNjM3NDIzMTgzODA1Igy05jlK6q9fsSQKO%2Fsq3AOfdSstYJiVBJKi02%2BAghJEPhZFe2ktP7s7nV8x7NPUcybNVV72xg5dAcYJaemqtbzg5CacgIvKUj3yr5kcgdb0l9Q9o5Paw3ETHIf6o4VQY%2BZfL7oDvgD1ZI0XvHo4%2FP0qvACatp%2B3dCubQw8LkjAsjcWNyDxwE5n7CeZ3%2Fs%2F9d4ptoSIHwklpHLPQkCMwfiobupkJoBJsfgeM4T3KTjhFETA2pBRTsaDQr2Tje8VRezYPFftSralY988j%2FFdT91RbtndNeA49d%2BAZD5ApYOXSo1VlLxzu2fWYXYNmELMx2Xpq%2F0LvVwiMRoDnq4mFIjvYEGOTGQ%2Fb6ro4oHiKx%2FMt6SuEeYjjesETZ6biNbItJstY1q4kdbJVoKAIE0i8%2Ffi6ApSIGIz816UFZQU7EQ6w%2FuWnhYbJrDVMrTe51MYr%2BK0zNnDt4zM%2BsbCHx7BWSfl%2B3gmv9G%2F2JGfkxqxiAH4h2XAYX7apTdt2ovWvUR7e4qpaItDmD8IKcdkb1sR8adZKvinYkR9v0re%2FfAexx%2BO%2BHdUnZkpYcHT9u4SxaQKTzR4NxRUfFcGc10uAiZbUJZjXXa%2Fl45PTYT0ZfpFWcBJzDdK%2Bx8h6D2mB2i056%2BrOasQLdHuHW7NV3mhbSzC5h8HJBjqkAVVUfxLEKcCc%2FF0YeQRqGtpU2YDfS3%2FnVfissMsPpZMY3yyN4ZqLTlCqROW7KdrsuGQpYuQKzXLVkKb5gevFwWDHE2KtJ%2BYU8V1G26BYZR1087i0B1%2BTR2MW4GjRkWdSO3aXCiHhXIrf8oho7PfB2m2CLvrpFa7tYuXaXgfWcIXXgILXprMsPtbbwBwhKAL56QOznWyQZc%2FIXRLs%2Bp6KrDXCC3Bz&X-Amz-Signature=2bebeb882be1c0893d24af9ff2ca29801f4f42adda3857296b763d5cece9f471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

