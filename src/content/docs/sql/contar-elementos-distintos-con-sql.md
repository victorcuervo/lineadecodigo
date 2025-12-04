---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD2C4RH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGpwMdGMwoLUrqVQ3ijY4C4jaNO37VUaNzaunBjrQtU7AiEAtCB34DP3GXfM%2FkKaZjlbjh1pxg%2BEdYHjHMy6BXek7rkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEfvbMH8y4jackOonircA4Ylclp1Pm1f7hwj%2BUDQoweGXTFZzrFhhNyljwqEPLzJurAo8UG84Vgx%2BDFj%2Fnf5BT8HEBOhODaP6r5JlXC9hPteIuvbLQDUVIsU0Cz2LAseqsxRjWfjSGKY4eVe0%2BPZkDbY2nhC%2Fvcu88CCTRCHU4KEw7ai4HP6965vGd%2BblvcfMrAKffD3l4ms6HpYN%2F%2FRYlONx0FlsIGLGxFw%2FRjjUst3cGl5eyd2rPlxAkijF%2BmkdzRmS%2FZb3VoTycQUYKe8WuGZkXz4c7ewT2fOhOnmADTDIjtVz0NQFR8MA2tWnKDhhHNVEo4EoYSMHp4UatPR%2Fcc68KyGJX0sm%2BF62KdO2XE9SgKo4BfRlMWa8w24vLKDlBcNtfBfT2brZemWn5wrOdrX3Qd6ORh40rxs9UbPKkK8MNviCLPxo35vTgvQ9Ln0Is9uW%2BCvq3glFJXqLTFYal5oO4g2MXdHphM%2B11mKZM2OGVHWnWK7f1CeuAgGizXn%2BUVJ4Qfyj2JM1hhXrJ9jaXoNtgEtJbKZOH6EkzDmiP1%2BpGTjTCTMlyjPkjgyO347aixNvbxyXtGZ%2Byuej%2FCWUw%2B7rU1XZ7btVfYEcdGPPD7jDm50uxgEuwfhA%2FJVqrMPQu64pfIIYKaZPn3dMLOQxMkGOqUBUmBadTsQ0%2FLvRVfCtFEGswacEHICRh7Pp0O%2BZEjuvnKrkVi9hZ%2B1OZ7erRQwGMhEXdYF5Iq6pDm3DOEK43lLsnH9ktosgeQwEzgeJGyryg7WCCIWDv6k9bV1q97CZkyQxzboZRc0jQ9QvbQ%2BVpirgRw8nL1RGKnql0gmrbfseHFT4yfRkq9PVZX%2F%2FIazkOXfU6qCV86f2j%2Fk0wwmO7Q%2B9yEeHu5Y&X-Amz-Signature=c019ca49564ac5dff86d04202a9c67593d3292f74ca4280382bdadf50421cb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

