---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCMGIPK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD6%2BL7G1lxcKfE7b%2F3IA%2Bc8j2yhaFReH2ATAknwIheTJgIhAIhOKszyEPQNeETEWpMyqs1ABXeMM1tqfkuoaQ7BqR67Kv8DCEEQABoMNjM3NDIzMTgzODA1IgxUAS4UnGw3uq4581kq3AMCO47wBndCFUIaWMD8lZpVrrz4tNn5sc3OTdUkV8TnOOUCSE3aWhimncemxc%2BMKTan6U5ovi2g0T6dWnNDX9PCA%2BjQZY%2FkCd7IuWcv7Wl8AteiO7RNLr1M0D8QTnCI5HTlVO0cMC7b2avYu%2FWU1%2FBSZOacEW9Jan5eBgL8kIL703LeShRx8b2jPDORjW6XI0UfX1RbzYwWwhgayc%2BDKUnjsxv5EVWwgSfYsIkF5VIZ52wBZBfk2ABzn%2FS8oeAwpuzLRmuC1UcPBQ2fNCGJ8ri3SjOUUnbQ6Zu0pBSCwU9bgxZQOQc%2BQfzeBJLyhYk9NI4rJKEwbx6vlVWGLpg1lcEyem46t5DqN7aayko8IZqD3408kK3bmDyC449Saq0tzxPmkfrfhq9fuJHOLS8iPnQsU9WwY41WGJ8jysdXZJtx6phd71RL001Saue%2FjecDpPqypx70zBwQcY9T%2F4ctWPG1kQ7X%2B1glM3p7sZ%2BLbFbHyVMfb7wdDejWM2kmJk3hxU8%2F2lGVVhBscJbs4ZuoHiasYV9Xi%2BUQ5wziPZxsRbIpVt%2FkVP9%2F1v1tw8UVH%2FJsPc6iqMixDNf1wBfZFENn8zseQZY%2BylmUm96l47HifnsZ%2FfZu0TAZl%2FmPuXvyjDCHhcXJBjqkAddWOPG6zHeRIdbaGryoKZRBdA5hIHjUw2AbBCx3RHp7c7WK6KYHZ%2FNqyMjOIeT1VNeVj%2BwSrjtssatkv8w5XwNLmX4z94kwBs%2B09yRENw7novGCmmINSewCiPco%2FuBlH%2B04H%2BCEevomekzLONP943zH8OMWFhoNeDC8rRjOBVRPc%2BfVDT0aM9DNrZng0XWwDGGbk8Tx%2Bj5Q76Rhp0hT2%2FbUSiNB&X-Amz-Signature=a35c77de20416c4abc3f724cd00ae1b6d27d207ef056a230b442568b7d97254b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

