---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T62FJAKO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlMhLAxf9QWoY2itgbMhKrLH33p45WOf7%2B4GfBy64FyAiBgdxXCImrUSe5hf4rgsR2YyptdktcT6hxhkwca0b5zuyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMB50obYB8TtPy1RQeKtwDoV08%2FfnI1g5b6b1O8fl4cv589SHk98eUDohItNE%2FFTF60qxhCPU95mtRLqlb7aWVjt3fVxH%2Bv0Nu82J5yLTGKbvF0j%2BgKcksxyYmfHIOmRZZ2w5%2BQNaCFIHCQeBk8hTI8cXNkhtI%2Bt5LrJs1UhhtiC%2FGl%2F7HSH9c7L4LwAhz2nHDI16PnIAMQsMh1NdmrBOEFIp82nmeKilJJCv7HU9wOg23Bgi6LGhyc8jemH%2FwmTjFeiAq0Am7VD827snsTYZO6RBFAkUcTRGTTxeeIG%2BQFIJ%2Bo30XiaJzTK7Qf1oHmC%2Bra3lcEbeiHloIsr8abormgAK%2FexKnVctKW39r0jlxaoP8%2FWdA%2FBQjHmbyQ7S6SDeaOyRvmQJMxoB%2BigrttvKJp6AJnT7ygvNR7oy7wR037AP0WdTmZ5uYpc3nhMkriMsCzlRG4M%2FR%2FClTFnxam%2BkTCF8FgW2au9W6XilgyDWjtO%2BXiAr7cZuQG9deNabLu8mroDv2z0RvHAEkAcRAQFuhIa4zjXKauusEZBiOsHTC0BcTCwEQwmQtSpzjS5LwJIKQ%2B3149UdBsQWm4fvoKcOog1dSq978xFfefCDz5ENp0E%2FZy2CiLTkKBUc5FZsMH1bz%2BjIRJnc%2F7rRDYa4w0NzGyQY6pgHLa8I6mYSxGVrPW8giZJWlGmJ2NiGnjwMc0nlvSnkdoMo7JKcAn%2Fg985FfpLE%2FJjPV2o2dEFcZcMS0mr4OgKhbv510AeRBugt4XH%2BXUtfwPE4gMLuoG2g8i%2BMQONCOj06Luujn6X6raHdJOrlDyO9IgDXToBm3HLZ3eChJlCjMtp5cjsk9oFY1vrwAIfD7X%2F92opnJfYCRjEaG1v6R5Db%2FPKzVfzH7&X-Amz-Signature=2b11e37e467d0ff3d439947088956acd54e5efb6643bab9845c34be651f864d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

