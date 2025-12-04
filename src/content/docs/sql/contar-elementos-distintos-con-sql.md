---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473EFRL5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDMDbEMuC3Z2TOnTH4Z3YJSFpEJ4TB898C%2BSRfIKlxjCAIgKvnQopu5trxCVLNYuS0GNDD46MD29%2FDRQVxXP6i8XQYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKdAfy2%2FTMGEUacArCrcA0oKMSOnOFF%2FS61lyC1NUyKlGPP7qD67ehG0u2%2BCmHd1Z8kw18KBH9gi%2FkxZRQt7ChSKiMzwrO22enSxSiKUBNlbWO75Fb0X3e0tb2tqQY%2FMaP4zf1ZOC%2Bq4%2FZfXRfAsgEgwFI3BxjLGt3fBpVBAat4bGWyuCSRC2mPpbKmpbdI3i5dEiZ%2FHIcIOQ7ISv4GTdkdMz7gtSx1mKIARHw6C69gOeF%2FbNPX%2F3JaGnZZrdGcmcmmW0RoHOnV%2Fv%2FZkQdpgcSpZanirSlfyX7TtEyY3FPfwttrK6xhJ3rzhF3Ro9xsQA9n7WWMxXnE8fsGUXnueXDIQQWlW1s1Wg7J3wXnMdwNCcUJF0KuNyhl4Qw3rvrzWBTaBU3LHvYloTBERIjyaVEoLDYVvi3uyY2VzBbHwkO1GrtuSQGNfvIC4HvenIflUFe3l%2F4VdiAix1tLdytUs63p%2F8jYK7s%2FhwJTLKEkKmHZXMgXrKSNkV4Ay08Yc7SQP7dB2TI3VRapvUBqgekmmgkyJ%2Fku5SbPU2oiWGXWxylaokAplUhCxQUFvX5AsKZBQQHUNGucCSeZBUXshGaV5gcC8rJtYj4a0eLVwQTKnsMMBezEoQaXHjxWx1DuAxXGIPZXUlPnZVlJq6c31MMbVw8kGOqUBWZWp6rwnI09i%2Be6NgrgxIGT4H1SKrst%2FPnLsiVZH9ur0YBveamru%2FsbURpfBl9KncOFVfrx2fUzN9uhimrx23P3TiWsNTe069WgqrwQ4Pgw9oaVxYxhkLBIn%2BhYsaY%2FfGvkV0Vl%2FvswdChdoDtk%2FDPYsRCuUK8LlkUrw7Hgsa0PPT21t7KZW98aJAUe42h2oWW50p8H05RcQ0Rej325EeTr%2BWII2&X-Amz-Signature=a6003f588b143779efdce73d9afdcf8574fd1b820cb6a3741e691210f5087496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

