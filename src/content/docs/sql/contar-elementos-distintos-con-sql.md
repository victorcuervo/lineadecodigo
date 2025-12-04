---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTGNVAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDQ%2FLJna5iSGJWGs%2FSYtFTY7ebu7KuaAyo4zmowB7hqpAIgDXqD77R0QO7kkDZQHx02wh%2Fqi0Z3AMBsafZl2oDklzcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDIadJ4mxN3XVLRKFyrcA9yFzqxpb4HleDUDDhSdVFzHC0vdb2oZAVWJ0ChGdtsY6UoLcUAsYyVfTLqVAWO%2F%2FFBPFUS4jS0dh7BY9XPaosCBxB7LMHx4FxELRuTka08RnM82zFAynFBYXwIi4%2FusuYLfnP8ktiWQtJ%2FdYrkoW959U0DjIeM5NlSgjIMYUaqsJDub7CAn4%2FvEfV%2BayBDecMF2%2BgU9xI2YaBr1OIwIH%2B%2Bj4U3jLhUtJ5b8oXdyePnI4q2Z2icSCSQKk3D1%2BEqTEWSV6UBtKBW2rl%2FDEChA1f6lvePiuOctR6bR3anOU8vgOO0ODsmyjecavttsp0Kch9wP9jQM02T%2BkT5rFHH1%2F5ASV96HnRCS7AlwtSUutExy8R0sX%2BjeYKhP3PtEDIkFDCN4lj2nMedGzYm4YIMLdQrWVnbt8bN7BsE%2FZNRGA7EXS3MCEVjhTuGvoRNHeVcNbNDsPDWrGnT7RvOiRXdcIm1%2FCvNN%2FTWIPppmimyTwBMuYYFAl1a7VbyNfAL6DQM59AGZsgHwNnkHvsZN0Pw2QuUIZaGryYHBWAmjYiIRJeOkDf4wuV0CUJNowVscus3IEQGgVZnc9CREHtDgPJfxdW1bHig5ipS5JBxhKjHXQH9mIgkMciaXMgBBHj%2BDMLKQxMkGOqUBR2V4Ysyeo%2BPncwS7fw5jwQzMwnQ6o3AhWad6qShQBpoMw70opLRtJ98ax9d0Vujs3ppmDD%2FaaSV8nW%2Bic57ZrFUS6ry42TkbM2Eq9uoKhOHOyBQbak5Cm7VyJduRvZ1TO68YPYw50bgaouTe7oZJVyn%2BBjNjRRDlmKrQTdJUty2na6%2BWcdpfg6dTxrsNTJpcMVWUI6QkcQgidITN4HkpRQNHFHum&X-Amz-Signature=8e5255af5e70fc188736f160522bc3363932afcd88c73d1b5a4c0e8f66b5432c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

