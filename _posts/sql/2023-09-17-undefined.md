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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXICJGZO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDOQHmyvanRA31RbT4ox6aYAJStC3WxO3Sa%2B5srfhZFlAiB0T4TAnTNSlM0R22XKUnGWCz%2F5tuaNpGmwm0qZ0qn2OSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMzCHaFPrqpjvh79NvKtwD2LMhK4smkPjz%2B4Hc03u4NZl%2FHkEN8KRLSAW2qxQFVgYOqboJI8G4R2VhJ43hei9v0OmZYxeaHaDOMS0uS4C5CVsa4k2Om0jWW8xzEdlbBhc5zYDEemXWo7sqpiNqTqOiccRb4TS7awNxuckdjgKUSIsrfBlog0%2FZrC4mI%2BVdCHPtRFtP8SFA7DUPvyYNC6E3xWllBgUaeJ4cvIO26qOU%2FiWLrGPiyrAMxs%2BmNebmP5pJ9OR5rxLqYWJlZ4%2BwHMG%2FJKggaO9lpWbv1OZB6%2BmA4hKmnpW7axbkLNx0Kym7djIcB40Hqy2aTAnCOKesKi18Ws4nhnZkCdqZJudJDDupVnlbqHQyGHhvIF9sagLl2Kt%2BZ5YduxDQGsZcMXn8Cy3Kk%2BMiFJzjicNeSOqikSv1SV5L2n%2F8hSrlHmv00YIl7AaVm%2F0a5Yfrd1XaXKNN9k%2BdhYbhoo86JDXO%2B7gBksrWAEDWmf2t6sDKDDm5EEpklONbf2WEBWivOqKfkkKO55FwiNmoAiKWgM6Ax11235987vXG6XopSYeG8T4FjhDnN7%2BHa9RBouEitli3%2BBMiwOeovbxKMpC%2FIYI72a%2BGYeaE02rHI4UfqvS%2F6Ne%2BjIoyrEq3gfPTqjzAiUjgK5MwmojByQY6pgGTD9dItgoiUBMu7FhfYRr%2Bi%2FL2XrQjINplYaNfHpgaP1eHQ0NqCtAkVA189%2B6kRtQNjag9KzEumYi8EBk4UeeDOZJrdCtYWot7AkfYkB5bk2P0LxTjobbfWjC9wtdoQsRDGcqK0acfjXwvmltlI7s4SOwTm1YpZiiTekUooQD9K7RstZ%2BwEKBv54fsa9%2FxAGn62nm4y6kOE2pmoZfCQLh3ivnWTEo4&X-Amz-Signature=cd48f96fdc1e6dfd7aeb45307fa371865c6a496850d16bbdb8ed696d6cb4ec03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

