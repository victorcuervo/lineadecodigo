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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSSKJC3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDbhhBR7lH90Vd0Vd%2BXbo%2BqbbOGmZuCB2akDKgOwLXACwIgIdnVONkf1O%2BvRoe2E8F5g42DwSdhG3x7w7kx1OQINGUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGLnz5ggSps2mPHpVCrcA9Zj0Qta%2FKk1d2Dt8jK2xfv5S8t85Vggj2MwwMar%2BjQ5qi%2BVhiMV%2B6kb%2FZSS%2FpIi%2F9YPL7Sp99LFrmWcFLkB8FmS8OC0mbhTjdkdQEnCsozIx2RGIc7NjTBMtKzclfO%2F1vFjms%2FLVqhrTfEmda8X7H1pRyhsFBftAe8zX40f%2FGWdd%2FTtRuxL1UNgxs5pMyx%2BMOd%2F1bfejjSHHgKU84%2BJuajbQXujcSj%2FQy06BglxzLK2PNWN8tvVA%2FecGhFb%2BkKHX7Nu88%2BmGtTm%2FdiPqWei9Z0Ql0oc7ncXYpMwihRP9ULWTMV6WDd8ysPpyLkQXA%2BTesqtrRxGtNdKoAV9oXDIN%2B4yWrX%2B2Wm0eMbtZeoTdxvdeDAwSsi8Xurjri2L2biabUqRTn4G0vvXeE5KualqMRN2syC7kVZbjXnZ%2B5lsylIurRBZMVojJ0ZYIURstCFlabOuSKoHF6FtGBNQxvtAMYAW22ji%2FowHhagNXXPKy8TSayhyTGb1AwflfFW0R4HEjPCK8Mtq9qR1NWF0TP9unCCFNp9MPcScxigZRUiYJZ%2BUKPghO03iIKr5hXNNYHvjwpyuvk%2BeQk1pnFr4Z4e%2FSO%2FbvwBOx3AHlorVIigbF845jwaHTWM%2Bxmhoqz9ZMNW5v8kGOqUBomZa5OBqXM%2FsnwxbpBldkhI3TeT8WNy2Z22wQNkf75YnHQbH3kAeCtrHXo4R8vKd1Jh7aYfsZ8ZQn6A4UDsFq3Jxb9u3D6xA%2Fy1HKDSV7UzhQhLYjJJB%2BNyZ4UWF3GtDXZV3AZ6OwRhw0QJf1ZOUilAKU0ENf7K8YK%2BN%2Fk5hi7oSqPm70T5gkPrOjj0SFC2N8V53wPwwE5nJCxLp0m%2FQNRUO%2BDId&X-Amz-Signature=382920edca34be1c8e707e98a10d91d28fd3b9eeaadfd3413b34fca620cbbcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

