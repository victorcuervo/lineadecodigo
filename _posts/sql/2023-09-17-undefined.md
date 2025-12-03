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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3OXASE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDcm3SffZKrkroyRhf52Lq8BFVDuVc5DVVH4ixlKUff0gIhAPD69oDJs9M2B%2F%2B34veCoo6BnqIvk6Pl%2FXdn5POrlgZhKv8DCC0QABoMNjM3NDIzMTgzODA1IgyCm8FROsN%2BeNco89cq3AMNPdHK6koYa0%2BQlfX7zXmh69jldMCwtCJZ3DKuWxpcTp1OeWF82gaNQ0mJ8vzAupDBxFgKRkHYunkYKZtMTwEicAM48J3Jfq5017rp5O2oZcSdWIO7qkyBrdy2Q7KBHD8Cz5xbRcgzbYlergZf7gA0%2Fbjo3D96d4m%2FR6duERVS0k5mJJgnYuSdZbJgpE%2BKjteKGczDCzEQZPeuQcCg92ABYt088VhaPG3dWkKbYZdxpHpF3RN53M01EKdml22Ky7HJT01enX6nb1KdnKzP2G%2FsA2PDMzwpKz1%2FW%2B2eBFbb7L6HEOc4toc2ItyalkK8rTJBFbFrhcp5HJyasG3FdNdTJXIj4NIF%2FTU3p8TloI7Mue2xmG1wWiH5t7gs8eGquplr3xhH4e%2FC2z6eXTn%2BdjNQgsfiP3C0oK7Llnd%2FY6IOfXX2VYDUIPKBMKn1rFA%2FAqrg20WfQZqdfqnKgPrK7yP5XN4BWl903lXSbwATaJg5hKrSnyame8e0KG9ewijJPXECUbxUYL9wo6OY17u%2F8xTtKtt0kMiNuaRvI17oWOJ3IVafthsGGzO3lDhVNu97CJPKiBOzB7kukycQind7DDTNo5tNxF3lr%2FJasmdu3fMSuPInIAjwgSA095Tv4TDPzMDJBjqkAVD3UGTjtS%2BcoboX40Wxfe86Fh%2FFy%2FzEUdAK7nXUizJZgOy6voDVL9HHy7RbYKgm7%2BfOiMkhS%2B5ZNSpgCg9j0k3Ss%2FM%2Fh5bg6GfO6WvgJ2FHhVnRmH3ZYrY9XIGKxPhniGnZ9zDjSwpfJ9DZkcSrCCtoE3x1Mbx3keNFo1C7MeCu%2FNSyi2YtTXF54qgx%2Btzxn%2FqL%2BI89ZPGLSnBprF0ZGKXYWf8I&X-Amz-Signature=50115dca2ebe5e457d5cfc2f1b3537f70ba4d0220848ed12d5e094f019c01db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

