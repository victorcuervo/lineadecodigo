---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHAJ7EZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCm3HyKg7scoVViZVLP3Am8bdLX9LsEv6HoZiBN%2FUi6jwIhAIZM3LJPQoGEeURuasvuv5uAUhHM5aV0yt34TYpMlAlCKv8DCD4QABoMNjM3NDIzMTgzODA1Igz7ODTmlcdbA1HQrAIq3AMM1B6soOt9mckBaKnDneLi7d7Vsf%2Bumi9eptSZyATxD3UJ76lG8LFT80lUOUVEt2csQaDSvHDx3j%2FpAkvKMlRFRE%2B9ajRjvU9dsvECaS4E8oFzo%2B7Ud0q8WiTaZJZYqmeBd8%2BiN2LXcsSHbGB3AXLEmnboF8%2FKdsIC6EBR%2F4H0OADPMg3h21yDhec7CCPGN%2BsiJ%2F4%2BMuao5wK8Nl2KjL4SwTYQKSik2VunLCh7XWE5Fu8%2BDfnPgJmraT9toxE1%2BhMZR77COGYAe32cpRJHaIwfxa3eWFtR%2B%2BXzSptV9MUjfyYunO6rrCHGclh710Ne3xtniM1d18pKW0eL7OkT9QFjZEQUWFagL2g%2BW2hZKXXIgClyGsNKaMhRIQBh%2BsEfj4npAYkuAR2NmY%2FEoD4tkUbqodIU88FS7Gcx2O2O9WEHQZAxucQf0M6woJyG2VXLddOsUPHsYyvHjaYN0yP4F%2F1%2B0GExb9v52hIXAM5wyn6vAAMnyogH6WHU0Ww7c8F5zuVz%2BOE9o%2Bouex6Hzm4fSHe4pC1%2BS4gC1T2ONsU9gKOunTPzN5F3GO1ZCLMPqRW%2FECjTyufn0HfGqo10qv7tT%2BUHOZI6FPEGMxNZznzk2ZzlBRYOf3I20xSfOBovGDDZrsTJBjqkAbGo3b8%2Fs9cWuVfQ4Cc6VA2nlBjCWO5%2B2nUcv%2B%2Bc2ME0PO4ah59ansXSieAgeLgSw6XyCRc1YvSV2HN8aL6Oz2SPer9XyBKLe6YorakYyjpgqDS%2BhqY39vXzAB%2FEncelZ4DPtYxY9QBeNJMwCj9z4bKbyhYRtvlz6DhtED%2F5stPqCW8EGIhyCBXtaHsGU2Le%2BBPL4ZYyGO4cpvt99sWBfV%2F3Nofb&X-Amz-Signature=4b212b0a6cf6b1bb3eadbc521c1b3b964c35bd2f523a8998a77adb44086ebc4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

