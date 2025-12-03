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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5PITDP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDYhsEU8hzOuKTf%2BfVByvmhTLmVT%2BK9Xq8I1OlRk5GmuQIgOHCNKOIOwzHL9nMFqxXZzghTTmKaDyfOKHpuYfSmLG0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOJh3MSor6mEkJF0YircAyu4rllqkaZglFrE0V7jgF4QU5h7HI2bDzbRtRWXl4IWq8QPcVtxAO5GtQnk4mY1TdJ0qgKHKtQOKcONz7DmmykhoxceVVT%2FPrEcZL5iCCS%2BMSs01yJgLbcrHW0X0yk2axxXE837upPxIXEs1htu6DEnUG7CGIuGRr6%2Fvqj2csBiulITeydTje1Ij%2B3LlxgKfP6U5WddirxLXYYCB7lpYSD0%2Br6JiqJIs%2B75M%2BUAj94ZUQcAEy%2B3UQSM5SPU9h3%2FBSmymwEmt6uAUxZp2PA3WWBRo%2F%2BLpd1OH0mJwmtlLZh3xJbJoUWEgbSbgs7UG4iace%2FjVAfHfmjpez%2Bm0BHWHV%2FThloJgxsSlMlGGEext3Z9Jgm0a2CONgg46AOgJMtTsyq6W3LEPTHqVbNAvE%2BkcEY4tPFkJuxuPxWtiMtl1lmYPAV9%2FHrSNTMhKutn5aJkcZ9ixDFgw3dNjKJa%2FnAxWg%2FXjT19sfp6nz%2Fy45SOihQvWV7b%2BVQObaoWHdwHh5PpZxmQut4dzi9pTZ9whVU8%2FEomXIYA72W34ycq9IFK%2BQxRBg1jOoXfglNvynQ1K4y21vBAScsoq31MXfxPgH0EE%2BQeq6pguP3SAJ%2B6l7qZOdyGCrfdvsDfdLcd1tD8MLWWvskGOqUBqr10p%2FvdkF0U8PfnqwZ8bV9HZTXvu4EUNaqamj2qZPfbShMUAlCRbINdhYbJq8MBRjYUaL9QiJfJ99%2Ful5C8zWq6IsSQTOcjSN%2BkN5FUyp7gtvXogo2S8Dw2Xq2xG1%2BvQAV3SeqZDOc%2BwxX8bnT%2BLkpYWIM0eTBYZYZI2aAtCGKx%2Bhh7qDzexkZYP5lbJLMZkffqqbXAfDUYEMCY0%2FjV7NEyljAS&X-Amz-Signature=a3dc6a39f46603a03eb4d0f079265400aa7e4cc508c9d7cdcbbd64d79350e5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

