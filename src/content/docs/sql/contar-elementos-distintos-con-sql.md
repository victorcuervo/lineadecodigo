---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KMX2S7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDwGEo6%2FjBTIQurH7MOo1zp%2BHnd7ELDNtX1oqt68LHcaQIgI0PXJ6qbi69GThDGDNoeQA5igGb2gMksVuWhhihhxB0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIFqFOdla2m%2FR3Ma%2ByrcA3vzIit9831DgFt%2B3dSxmsjjMXit8ZHlZLcHzh58FDPwTJSTElZcnWQK%2FQ3IU1TXq8u1V6JsWY%2BlAiUkml4HAks4dFTg8da3U%2FNJ09ItS5mHfJ6Q84MLsp7KYegfxkIZGiO0IjzU8kK55SlL9WoPh9lYGGm2keTWkCCMpdVx55Y2%2BwMz%2B3s6s99JhrSwcUzTBXNCbjitZ3ZQPyxlxK2dBsQSkAp3M84YQu3pAg%2BUxJm9Kjl0CDi03hQDqe6Aor%2B8Q0NFQ6ww0x%2ByffqrTN0p9aLOv8M16BDASiOVgvLHTqjX6dvGJSeSYd6AbKWK8dSxtyKoQZbN%2FDTY5CS%2FhVvgO45Kr3CcsWLpZ3o9vbhnyNQgWRyLiiB7m%2BvgWvqEycmNQ%2BdcltAFi%2BOfx1StNkM6Je3f0ie1SA7X1DuvQ6JTzoI3Ndbe1p8aX%2BD5no2LsDIdk8PsxNrn3x5GfTKoyS0a0f8%2F5pXRn%2Fa2xEFRzyI8fGawSlozdGzB9TNgAZ0suESoab5hSiCO6YsZOP%2Bmd7BBmk8PBWqrA1A1gvNNvHNoKIvK%2BmnNg402HkfpxqjI0XVuPE2JW0hU1blG09NIIVF2gro%2FJf%2FISertB9UNAi6L%2BiR65t%2FFbQx3kRkyOUw9MK6uxMkGOqUBQ03A2a8Nf3ZfqBooSJP6090E%2FjLkRWyaazcWxb76ylnXqUIjXlPPVv6V%2FEFCdisCgz25GZSa8dZH80RTYsRKiU6I6Z1vJljlvAxQeJn96R%2BuzxHTGzQebv4%2F9yme66SiUcObj8n0m7YFlnE43r%2BxJdZBT1gAlT3ao6jBtn7%2B4S43VATvlxDPfRUtcSFL7seAu6aAkja6QWadnJTiJ44WXgqcWZVq&X-Amz-Signature=1b06198bf5a6c27fc3b168b5869f094d8c210c47098d609d921a9a60c5f59b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

