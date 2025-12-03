---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFXILQC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCLYKpJT73Bp9VhN%2B54qutfveW%2ByJYs8bloE5qcTSgfYQIgVkVDV46xFhW93eK%2BGBP020NRMdIu3Z%2BcBPGSrbxak6Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJQPre2cVA95RrNz9ircAwIpAe2ZCSpN9aw%2ByitUdVR4NON57EBegjtLC2%2BRf0pbyb1ymMnojGntHM46r1Ei6YLK6mwTC3XVn%2FJs4Cr23xZYyRYjNFSk2FPi0vkVGEKmxqIxEfI0ShKzLfB5xJ42c8CYaRW4sxAWslrLrBG3ICIPFY6cGTDWgncGCZnKnEgXysRe%2F9EjiQd6xERnR0Kj2bIuAYMscuAYCgqESWO0mqCqIbMiBx5y6PyoGEbbi%2FdlL064t4GvAVTlfIZJK%2FnxnC6g4t%2B6itFXOFBzcnee8Dp5LaUZJd33xE0zjbgOqUkSdr20DnR%2F7KNJYyr6oavtSpmwp3oiA7zsc43WJ4nVlJgE0VnkrzzwHbuoBEqwNSYFhoQfezacT8x8wnI%2B8jcDLtSnCqDqRxib%2FBxrUvKxFzHIlyj7lLac1xFn%2Bj7BnPA6FnNpKioUYrgfxpdjRiTDNRFIwSQSknnapF%2B2BMPabpUyl1GSFV7LAKBf5ejj%2FPGjfrw6Tk%2BmDd%2FIoiztrTI9tlNiRF7l05tQfNmuMnBXEAMJ4I%2BCqm0LvltEEXVWjeGOrxgk3NgMJySlb%2Bh7xW0rcjTjhl2SABTGCgrJ7ygrlMFVsJWURzQqKVPsgIosB9oUPShZNIuR0KkUZ2zDMJDcwskGOqUB7pAiURwhwA%2BZemaW%2B77BBnL%2FRzPOJio0D6FwG2%2FdU%2BX0M4fjsgHZhLMIo64hhicyv31Rru5zX7ncff%2BH1PNNLLMas611kvaWkb9xe2zQ7o%2FBLIYu%2FjRivHMLwtqWw0tN%2BqF6%2FOKqTcBTQ8pt2GAupohzh1BV8usFQdqOVL1eN4GwTtgnKj0uo4Y6gFY2qULK5xBU0uFAoN%2FaCL1STqAjeUnNq0cT&X-Amz-Signature=3bd196a3d99f2f1eb558f811d5ad735bb14c913bcbbca8adde49938d3574e5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

