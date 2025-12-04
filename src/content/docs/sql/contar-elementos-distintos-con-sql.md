---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHTC7JQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCZU9jWk1CFwmFzGtTo9HZA6rpoy%2BA9HJ2DxHpfO2MDNQIhANri4ZHmdf0w7sCGYfO%2BklOzWiP%2BYuaggh50ogmYiXsyKv8DCEMQABoMNjM3NDIzMTgzODA1Igzu74ivQ1Bj%2FsEGrDsq3AMSPIgYsvfKmyW9eOC%2BELlc7TM2AgyYmyHDFM%2BwsMEunfwJJcAuL7VzvTEz9q8cB2LlQcymgbNfktm3OyMw6AG9La7epRmLfMBgqm7qqPkuN%2FTzMtREP0lMifo5bY8J2fkORVSmdz8ZxzBD11X8NYYV6%2B2aaFZAT7WYo6%2FQgesd2vIdwOQPhv81y2664146fJuq1wZQDRwY6o5LG3WZ1gYsQMo8svQhRkpzwDy%2BsHvjqHgvlHfs0xL5aEi5Woa5u0pC34gooNfyxLEBDbLjv4qZ2%2F12LVQLxKR9iENCsmfUj1STZ4nx0CX9VP5NFvS2Zzhj9FfLJFl4Rg9hvluyg5JGzfpFIgM%2F3gycQxcfaAmBGMXfZgikQnITurnnE6%2BcOJE%2F8n75F8sg%2Fm3J3kq5StUZUBPtLstMxL6uBXAJIJu3PodnK5l9X20HKRCXNnGqOhPbX59vtuuY4NecSjEOY%2BPiP01yqXoa9SNdUls8FNdCcPWctDHYx7l4E2ilRGUsTcledBT8mAEm2K2O8Jml6xAHXIPFULzAg6MTVTCIsppS4ckEO8iQjvCmPYdT7%2BfVNU%2FPBPi0AX2ZQTA9MI9YUD5ha3GfNRZ77L6HnYMXXOcFl3FCnAnZxfIRE%2FSH2jC5q8XJBjqkAb4HWyJ5ANmY2eRrVqJyXBTJTHKUI5dQkR7Ot9zuRcR%2FDNI8BkJbe3QDXf1K0z2wnBx4w2AyGMlWCCp8jOQyzKRVfShnVvW59NK05y5fe4fDcym4gW240pLf9UTr8I6e91ZB3rz0H3CiM76gHv3B89JlGKb8zZqLqJKq%2FmKr7x4KVcdz2RTxDDbVeNEQXOCIADV18UQNIiAFR72s2lqqjNolHKil&X-Amz-Signature=86defa4e250859bd1413406bf31e7e0e3d66058a07a3a2197065eca98c1eb619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

