---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SESTRGL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEVG6Qer3rwUyV4RNcpsXFEVCa%2F%2BoWHBJos%2BFRyqzP5WAiA%2Bvh5CXDx2cdbwbG0%2FRxPThQ2NuqRsgWdbNCOJq21J3ir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMB9gRqakb37N5IIACKtwDABlwB3mcob%2F8USrPwFJHKL7oQ3ub%2FBb0H0NBSWC1Rx9PhwtyJb%2BMwEz3tSyDUKsVceug0PH5LTd4I1xIMyc4pTH8F6FaaWg%2B56xxdwh1qCbfJy3FbJ64yakMZQli9aArGLe7bbihoLsOPMWS2VLur5LlaXW%2Bca965QNQ9PYsnFrPMALwudzPjd8JbYjZyjL4TOk3RXN2cPublmD5hIRXR72GVmkLjnZFULTAJM8Ng1gUFX87wL4DKgsNuvJzs0QTK%2BR%2FyHjSDy3%2FmGp%2BxH4V9XHo3V9X96V3A11jmCb6sVA%2F%2FeRxix%2BXeZIujiuI%2FfrMyQfdl9QKgIx58wjENm4t9IeUqwnlhYWL3EelFmCrFRNrTIRB%2FXUXTmixTDX6qQY7mIFWJozLiNytN2n97LkpVhs3Pho4T7nNEdxiiOEwWwGC9rTfgBZIeivCPLIpl20v1E9y4m%2FQ7LTizM3iCBFmbhKZBW4RtY3Uv%2F6ztvpJGC5Qr8ADlud0vhQEwgjjNcSUXrlyg5QQjJugFVlUdph4U46ddP7MzfYpR%2Fzf%2B7EBmyifaB1BUVrvHGhCnI%2BQzNx7yPlHYkAiboORjJ0Gn5OX4KbN072qZa8u9iyHTQO%2FsaF0tayCf587wVvs8%2BIw1srEyQY6pgHvYf1DVFpqRxxMg5XL2TsmsO7N8QoI2CgYekEB9g7%2B7OiYWUh4g2q9cs4Cblc%2BEPbUmAXno2GCAYaPKoRXcZkecOtOClgYUiGRBuehSb6FVAf%2BbutR%2F7G5sCLaMaO3lWEdfrR3gnATlsqvfoPZ2NA8zK0zmTPxySqu%2B%2BinzirnlRCdr6eTd9jIaO6XELI%2Bj1b2pdA8QKXxwslwhH1%2FtcXkX%2B%2Bg6Q2C&X-Amz-Signature=4f7f0a072da392326ecc0b89d1ef182ece39784aff68e7e8e16483ae461b79e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

