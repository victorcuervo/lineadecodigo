---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NADTGPZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICFJLP46n7AgD3WQvtv%2FLZNTkRfEJSw0WNcaKiSDpMq9AiB5DZOlbE1t8nMO%2F96I6egErV0ZpfMz0Y1ZyzqivRTXRCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMYJW0SbzuW%2FDCGENJKtwDR4%2ByuAxO4yS99ZYbCzGieaQTrNvdLyaVJ3ZgRkNUBGIzMYjqLmOrNgXzy2HYXD8xmJsKi7m0AfVmPwaCrHEkP6oZUfFwsQL%2Fhe4C4quSIx4m950eCEgdcC19Phj%2FsZr6IPsFbfKsjflY8xWHakF8fK5zoGlk57LVSlMthJ%2Fntc9APPbelN3VtwYz1ZNgQMLeYV366ahrH4nc5RBDidAA%2Bn2766kSbmhdEf%2BxE1kXfG4X0mgCFm53aWtwQck9MdbXtN%2B6Ihxx%2F4Ld8gf277x1LU%2B%2B8kUhOJjTeWbVKwlhRYDNK8ruJzUiaIxtHu1SeQqykS3VumBC4ZlYPElMxWzSTN3yxkbKfiaWPIHDIz8%2Fbu1gV%2BPv%2F4wpNuCBSebL42ktmtS2a%2B0xn0r0e9DYnjvs8nWSE7YhtonPEK%2F1USX8amUeF6UTdiYW8So6KdCSsu60YBd7TDejN5pNCiokK6lMfCYNKy1Hi9BKuyfzKcxuWqWSUh4TWMf8cWqUcDm5IH3k6M2h0vc4hmOyl3IrIwEoaaqfy3iSEqduqT48GXY%2FFac25RP%2F48Wo3eqHa1%2BRLzI1TRFa328%2FuRU6sr8QWMDYonlCHiQzsKcE%2Fw%2B%2ByLPXcoHgnKkUbnmFXgXfkuswx%2FPDyQY6pgGGS7hBHh%2F9RxGR5fAb%2BVlrM7kXZbMibqhatWdrZrjJAalo2QVUtA4RVjyfeQr6lItTQMOTZXN3yMbJhAD6RQc1846DblIoR77ML%2F1j4sd1pxnijqSXlqNwYGw%2B4me7M1hxk5uc6S1pUrchOwUvuWJxEks1Kq36BlRcEx9EaBHiYcimc%2FoOLhfCQNT3o%2BSJ6a4LZaubHzvjrAl6cCKOICyK9EYj3Yv0&X-Amz-Signature=c37ecf3094f651189e3a93818bdeae4e11f084d99080d7f342d8724495ea03ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

