---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2NPYWQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDpORpoBAmm%2FMuGDADt%2BEDrz%2BPjFTnrw5qPdjGLVRdTqAIhALxYv75rMAupiII04%2BU7Fk50YlbE7WuOGrci4OcOqgrgKv8DCD4QABoMNjM3NDIzMTgzODA1IgwKH72S4VXxYnMEQokq3AM4c8s5K05YtfdcpxI1q2H5x74%2BvLyNQZm7igYTNRKNp6%2FbD8OJgpuSe8mlo6aK2ZHtL6KxcINwNvgM%2FC60eyEUMiV%2BJEvh7l5i8HMBK56Hxovw3t5RtlbLZTEAcBHFp9MCjKU7VcK2QyrZ4D2klhjwtKeIUtKg0YJ3%2Fb%2FyOeCBBO%2BKki4KmohWdk7c0q0ws0CZppp2QVguhYEEqC5hEWKGbtE37OcYaqdaZKrzqgIKdlqr%2FbQaShPLCMcMZFmYfXYDX5FJTtGCMyNsTXyPGv%2BoYLGbydh0%2FBgMb0K9%2FDRQA4gB1O4leg3PszC5lffn8yyI5k34wl%2FXj3%2F1rmSgKf3OoVb7XCluj0vePeZF7y8QJZgRUv4bvOrnAtjksEbY4huXdKoA4vphowB%2FpMJTOerFeyjhYmDQ29P9esAfOMd5tinsEITn%2B6bGR6qWdEveRxycp8nNtOvazDlUcGGkmJD14yG35BMMPVsdPo%2Fzh3rp6NwT9xaDhaPHcX2mpKIgRaNgPRGULQVqb3sq5U%2FMsuUoy%2B55kHDO%2BUZwwNyr4LNdSlUUhz2m1HpVPzoGeX1N9Sr38SKIL6ixby8CxLm%2FKdZsfF2tQR3sf7PpoIp1iFRRWGarR2RHbzMwtP1TZDDErcTJBjqkAZiLHD0zswVaMhtXr11QR%2BRKDO%2F0QFZuWNYahSENEOTdsYglUDxlOxi3k4kPcrj52OKAF4Ees856avZdS5NiEoGRJ5xxuIn3v8dhz2Q2nIF%2B3NPLX0GTyRXB7ZJtC%2BZsOhG83sgjrRU9bPZP%2FASUnPF8N7%2B9Ww16mUW3kzFFK2lqm04AjbexTSTuMHvC%2FLWtMLn6mQ5UToqWfg1tiHz0NVxblEbg&X-Amz-Signature=c2294980e36b4b64097031f95402953e3b7d009aec4c3e1f97a73eeba5aff868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

