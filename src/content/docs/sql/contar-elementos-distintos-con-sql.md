---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFKTKWS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDjn%2FHMA4lbASEiINAvoLBTMquYNhUZ29%2FXFpbSIpB3ugIgQgchtWN%2FdlOHOvera2%2BTOEiYR6M6vPmd%2Fn3ngXirBfkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIHY3C6ep8VaN1wIZyrcA81ZthRAlGStIiuJxB4ip2bnUCFxbQlpuo9gvIsWdFHMpitrDxhf7nB%2B21nsBVvIW0RQaPy4gzNHb4zuPFlv%2FmXCxgHVzAn3WUsTA1xN9DvkDU1ksL%2FZrtEeNyka6zZgfnrYGibkVCwRMBv2ssbYJs3EpQFuz4YAQ9l5LQte464ML4Ckoy%2BEZ%2FoUvwNluQcqIIt9Sw%2FOZz0YPj7DRaeNjEez8lwCozweYOHTAMjFXRYlYhY5G2pS%2Bsdbni%2FZN%2F%2FzDwDHdjcLYXCurrRGWpgj73VOEjt4TfosCx3%2BALMFqeMdXoXy6v0Oy5U79gL2SZzki49CcmW4oT66gySh4JBP92IZEBvjwlZXGjoqmeBMhvYB6Ep8i21Oa8QNI8gQuW10Ylw4VdudiK3pDneR%2BxV30j3mDgbZ%2FzhGHtqcv630mqm%2Fms3mxxV0R8I389uHOSiAGS8qRm%2F2q6cMqwielGLF2%2F2acNiC%2FWTR%2FpoEjtXXlfsQQXmCh%2Baga8APwY2QWgkN%2FSqBPo2gSjMbFBlPxcwRulz9uK%2FGCMKNoLEoEh2fdOSmbHuNGC9QDMWmDNhEQ2UTNK98GEzeaic5UM7Q2yZwwL4VF8d07qaimyIX%2B1woKS0EVtfmRQd2LJYTrXZTMKzcwskGOqUB1x7YsP9L2L1GdPX%2Fy4SayNVuxPT65Qtstuqnv%2BZzIgip4ZFzyQWtM1JT5NhADZbJxoKO1m8DL3bhPZVXHyrq3uC9hfdrgbB9vOgz1E8gy3Ea4AFQh4TIQY9EFu9HHwHvcfoE4uFVus4YpTXtReTj0K%2FkSgPWGAicN118x%2B03tuXlBJQILDrHFojCNmfnF66M9Bdr7YYD9n1MLLQT6OqDPvmMdkig&X-Amz-Signature=0d87aaddfce247d4639ea9a2a456d0c5d65fb3641c044dba1d67043af7e315d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

