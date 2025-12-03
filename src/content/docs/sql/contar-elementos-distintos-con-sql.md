---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNN3EGZL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDqu0T7GzcgfsSrPk99RHz0VrGa9EebkV%2F4BnAqImte4QIhAPh4ZhyEklufwvWD%2FpWUdB8QgfMEnG6Rj0v%2FQlVtStQ1Kv8DCDkQABoMNjM3NDIzMTgzODA1IgxGMm%2F4t3mNgnKsVwcq3AM%2F2TuVEODlbyr%2FykcDxPeYohqTwtrWJPvuuskxpjzpK0hbVphzDy%2B6G37Fil9K%2BswDKGyMXv1onGL97jGLzVNbKCPHQubQzpapGFCxa6G9wEA%2FdeCK6H400F83dVhnrFXeRL7ruNvauTvqmrYrV8F%2F2PKU%2BNOq5MEL1ij2LxFLJGDdpDOpLS2omqy8ECtJOTnybEyUlimT5fDi4bNlazAN%2FE3HnJEGLu%2BVITxBzgegD3cu8s%2FIGrCMf6dfQyltugHSIKQplAFGFen5XhTygFXLgDi4cs8m%2BYdBkcTPbMo%2Fm%2FFVyXpn3yDR%2BMVUQRnC6HgDWtWojF9SwuzBCc5M%2FcoJSv03WgsrXZIyZnev1DTbEFKpb382mf8ofTDGqXd0EeGiLQZcy7R%2BtjeIi1VENqw5ohHYcmc7CwqzPURKnYhfgHyjWPnAvIus7TeX8peYmt0OFS1feV2ZV7lwbJY7alq6zWFlJB6g3ew1KvRmZgluRICd7zpTbNWTWHf%2BZB7BndZlxFvB%2FNQ%2BmerKQ20gAVKNGL35i4QOc%2BsSjFm7BKe8WTYNQNcd9ST3pCtsPy2elLihYbHJU11LIU0T7PcPG78L%2FPFnBMh%2Fg9Uigpw4SNiHAwWuNaeu0Oc6yFNQ2DCplcPJBjqkAU%2FE52LunNn0vI2Sx%2Bnc9lADzWOtVQVYFNTqrm0FMu4Oirmyvp6zE%2FdZmqtjzanB3owXqDmJrp%2BoGDrJzgM0YXlwuusdu9Vg0R7VTEwx%2BQAPlyDafCYJXmwqnNPlFH5myPIejd5hPL59Az8T9vYF30a3VfJeaSxxJnfGrfl5z1v5I4030jBocXNBGpB6%2Feup6yTpuNEtNPpyiOpx6idyPFPcxNt%2B&X-Amz-Signature=ad27b8b20d786a9cd565e59fd01da1d7fdd41e9f70846a4ea24ff8ec0385e648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

