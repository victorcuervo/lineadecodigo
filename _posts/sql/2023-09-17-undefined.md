---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3UOL2Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDUqP1Zy1Mb69YEAvIDWJ0S0xIoXuR9JUyPf%2FWBuqrFigIhAK%2FbHSZaveuVefIfOQvLCZh7Jw5JLcfd%2B5DebE5Imwc6Kv8DCCIQABoMNjM3NDIzMTgzODA1Igzq3chahFk8kTaM74Qq3ANEv7enlEy26OZOtXXWkS66TgqsPRfP7z7bMc8jGl2c21UAtC5%2Fwq5rAR2%2FPYIofk0UExc3QoiUyzoLv0ar%2BCshMb64QP%2FiwkPoKbGb5U4bMjMMb%2BCdHFZfPRlv4Y6y3t0WB2e%2BD9T8kl%2BeQj6p1GQyBEP%2BoSuuCxb3CRcPHPpeRe7WeCf%2FDq5jpez7BFSCqw1n5VgAJTV1qCHJec9aeUF%2FZjhXyWHfHdFG%2F9JKGNmdRWm55d6BTAXKFC5yLvk%2FLNm4DxsgsEuzOPCaC577tIbrXEE9yoHO2PqYl4YaMgq8wvQCwdDBEz%2BKaej7ZByeO%2Blp%2BTs51NJy81CL1HVXWi6eDckJgr1LcSFyOFWMqW%2FjQ289j2PMYVan1WpDxURDxio%2F06lG6WnMbS%2FK%2Bbx1vZpmRdLGJuJnRASPFzU0q765%2Bd6hm3Vu34bGSxyjoUGmXUaxqWTMgzpq30QBTzZrJtwG7z8OqinExy0juLb3%2B90wJuCa8ug%2FgB2A8oVQ4oXMP40ICHMt5e4NXLo64LNcET7PcwiyE1ihONgVEGQmR0HGDEm3J5Mb4tOJQia66jA5HN%2FnYJhOMdUtF8R4smneom6pUd%2B4WuP9h4EN9W1j0Vj3HRdKgO1%2FryR1q1mv7DDolr7JBjqkAdAP2vFyGhO%2BsEf1bcD1bxJIjtXXLaETQBuAW%2Fum1Y2TLqfOWabo8sudSytnG7NQPmuoG2KecxHDd79OszOK3Sj1qxoiV6chO3%2BEHCmGf71r1H3t5Jg%2BlOwpbP6Z0qiZPDEVKRa1bzy%2FRRV32UvmBZG9BIAb4yL08s0Lkt4U6j0isK5lTm5kmk6xF8zRbnLdhkyBXtUEWTAI%2FMBHcietSO5nGIX4&X-Amz-Signature=40fc457265fe428cb6ea7e8729e2dbfc53e452ed77a449c147f7b5a498c49146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

