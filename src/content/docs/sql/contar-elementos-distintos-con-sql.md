---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQWSXR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCNZnkEeRRAuH8PqdDp%2B6qtAQF8jSGv07QO%2FrykGR6mRAIgASoKUY%2B79lUj3AHEBw1DZLMbv9Juv7twydSw3c%2FL%2Bsgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMu0epLfRhsnOYLeqircA%2BXY%2F7CV%2FYLm%2FOrvltRjGlLn%2BnGq31tMzDbbMU6XxTrPya8l5GEHZWl4rt%2BGt%2Bh2Lo%2FJW7H5Qikx%2BubkcJ58BrPjmYWuChkujeEELISLyYN%2FmXvOZcxEroFog72pAXYtZf2w4BM7zKXCvPU9Sd48LVk7uc%2Fo0L3xQIxIa2gTGpeHfyygpB49%2B8uwe2XxRfuAupjQyhVLFYgRpKGsec1L2h9y1%2B1NuiLidGuH4zRMplo6YQTb8g3zMZtJXsfP4rBEv73mK26R8%2FQZn5YDmx%2Bjz8PfCpoBaib9HgY4VosAiKcnjLKxiV%2FQPydY4Z%2BizpgvjgLnAG3gAqXiWo41t%2B7xLS4rwygRWValMtSEWrIb2NMvqOw1I%2B9Gp7gbRnmqJHxGe%2FS7rkhtewDfS%2FbM6GLyX78vFWg5A9dsOr3q86UvFwF6UsiI88hBo40NemDNafPN%2FY3aQF%2Fj03SxczSvQebfGIb15avdSKZS5nGoMmeOEfhxi4SfQuCcaKX%2FmQqeyW9nz%2Bl7ZVIx4Fb2L5HSaSYWGm0ewmvS7TGtuqJY8QtMeF%2BCmGA7EYPHnXhrzieu8YawCcCd8MCF9v2ksxj%2BWohIKVNji6KiylHdokagACWGb9vSVsP7%2B2ZgswhBJqX3MPrUw8kGOqUBjARe0%2FXzq26kIVhB5xnS%2Fm7DOvQgtX1eoaWUcCZBP9v1Pg6uj2pvQATkUGOVElAdHt0xpV3kiW59GXgl0jhmucHlRKKiafkO%2FmXin9sU6NUKK1VAFeFDxZaAlVNfkB4iKaXyA2Qj8edDOFZ57zD8MfAJGI7yv4siehqy6wvO08FJBQsBcZjlP9V0An31YLVIcjp74ncXFbpVa6uQdkqWuQR62jdr&X-Amz-Signature=09b84c31c37615468bfb9c3b492bb019ce6576090d9dbb399002fb8cc9c1026b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

