---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTOW6SH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBrj482rpFvaRnL2ZxX4t66KLUFsfkNhwyNVRXSRVRApAiEA8WcaGaorzTZ2EEMzoOByfp2QqhqT%2BwKwwDEadhPxMp0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDC4BlUZzDbXIEB57AircA55ilZK0Xifa3295JX1DvN61RoppsPKuUDom3mt7SGvlruz8%2FrYVHXH549Hn%2FHidlPWW3f4cdYj9frN8QAuQQAow5dJxa9fuXFiptwodgSnuxjXDLKOQ%2FJ%2Bj4CwpAyZr2Ryzx0Zf6Q8hCvcu82BS0OkC5Ir0%2FNbfqs4GI6%2FHh%2B5GSMnoxaxuYco6yBAj2xnpHdNPgGS3CunwZhzJQCQZJ8YRFSU5IYeEjLaJWhH1yimGAgwDMwaW4Fmmth63RJLv0iL2tDy79g83Iue9TmO8IisUPcVotUU0%2F6xFh0jczD%2FMZTQWnJdXz9H64ZA2fMhOYOX98DeXHx3nFKEeXfwJRqtwe9n1onmdtZyzh4DY0fbXo4FHZJcLNNocyt6iwJX%2Fw2D3ALgbpHxZSMVFYUWN9sz8Y4rtlvGGKip0YJXip%2F2P84MgIW3k3HzwskUU%2FSptiT8%2Fiu2XCCECl0HEMk76yZmAkfku0jtN544cSlYGdG8ZP1zqmLP9J5mw1wQWcjHCAV7eNOOqb3jLANL5YFhmRLtwxcxeReOtuE4L08XQH%2FOh2DJGNnHt4h771pVG5RijRTxOcjSKm7NMwgSA992OTwQDm%2Fx9ea4sMlKdOaG88uCejAnr%2FscetpBXscgXMP2QwskGOqUBbgRrF1QBcsITqqCcTgWO1hDUersmWBgggDT522N%2FvdGyRqWNESdsNNL8FTAkFNp1l9loA7Gcv3HkHex9tFmkTGUWFLxioEWcdAv%2FuzOUrIuw3f7KUtKrYuOk18M7VAqSQWjQS008WNOny4t3T6RGO%2FReZjlYQLxLbJBpydH1zd%2FEKMtPgoBYdZ1v1%2F%2B2EbKjnMXr4m9SGEzahJLugs%2BppBA4dZ4w&X-Amz-Signature=c24b9fd1bb5376cfd40e48c4e2ee3094b284bc0d2a9862d6cf65a0a9759da3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

