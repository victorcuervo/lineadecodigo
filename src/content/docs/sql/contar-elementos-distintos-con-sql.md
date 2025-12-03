---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U54MSTW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDymBupV2yX2r7a%2FT2uJIVAgdFVpbE87iOgxymmGD%2FJpwIgTjHaWYp0KAGXJdjiOD%2FmWPw7BnzHzPV0nb7x%2BMB5Du8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCk336h4VC%2Fg3LJhOCrcA1lo8NhswtYP%2Bx71m4%2BmZIDC%2Bwfrpjm%2BM19bw3gPn3NylMOCBYBp%2B4uyoM9E3v%2FwhxZgVFg0pNcL4uuwK2HNuSPyiupHXidixkHGFxIwVsli6dS6FW%2BjQVu6xK8zihvGPAvSbjClXl%2Bc18j0QrlEIERG8hJLKyTrMBYvZy2u70u9JxRCnWnhNQdSFEm0myZslIiUyWelwpshW2HhkbFQwecHdnySQos25kYnPC%2BL64QSHlnUH4XIIPoNYYnu2ex7BhAqtn%2Fuv2yFa%2B9hEJjNduqdSgo0AM0yo8%2B7se%2FLHj%2BGtFvkvS67z4Id3HEykiCldjjkrFf85PYCPz0jNAWZKW84P2OA%2B08yuSP6TbUdaTYcMHC8AgtGkISTMoxSDZ5rvYO2MV27L377ZglLcCdRry6gezAbXZHMnYtROFyGW7Xq8CQEFCbzuSsWHpqA1y1VBHj6CIewsGSchoFae6UEJBrIiSq5Dlmdu7ZOPJP3GnrmVGofwQhKecMUWtAsddY45rWVb%2FaLcOvjZXZ3dkbFiEjVo7FNGCDYrqwcDocSYsCfr3KN9NAsK6pdInJ02AwA%2BJwkJw1UeCjuWqikp5UfO38B6AWFIhewN0%2BSowA9it%2Bh%2Bw2ajRAVc5KqIav%2BMIi9wskGOqUBDABGJlYt0KNdXJ5E5kypIbL0jKU%2BHwvYHTyUfg3BmUjF%2Br7xssoN4TeiIrNx0CHMnSaig5fmWxvURDEJOupjhvBGI%2BtovwzHx8opIAzzcttMW1vLQbiZqr2k0k0S3g2ObGuM33aa3XVqD4O8b3YugjXHVU0Y1QWKsnRwNec9lRRj0B9AMVtCfPan76DS59PwbEClFnBLqkmap0ATqROMIQA8YHoi&X-Amz-Signature=dbedcb4a03f8fa9a03103eecb8a795825686a292aaa306e33803279e1cc20a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

