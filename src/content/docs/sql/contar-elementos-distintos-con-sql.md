---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG4ZJ3R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFp2WfUTltq5%2B1jy4Ti3WKlEZOvi1zXfE3lW3UCnH9tAiAInNRW%2BmPljCVkFbAIixD6yv4RwtdAkFxnR3OFRlIwQCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhoT289L4aXDGyOqgKtwDXtNT2KzIoX%2B9RJMh0u6Ym4VK2KVFqsntANH%2Be6TFNeeb%2Bd39juAVhewvPaRWiKG8cOY8sJRb4SC3o9%2FOr96ajhczGIMisY1otgyMb8moaLj1p2TCMzkyK%2BVY8YU0aYYs8Wsy38IJTlssNq10yIkbNSFPjBLy2RTQESkRfYIHKy61Rz3jreQDnveUHvsKzSGtIRNR2EOWAenxWTaz%2FxRgWeGBXT%2FsHLAbVOF9MTbRpUvE95PD0UVJVMOt3F2ogyFywJH%2FGhGc%2FQR7%2FOgf4pacmlhWogbTq6YVYENFoe41Wzsqo8X3F8Ar2Qf7V1caalr5pjEEmasIx%2BuVWcnT%2FffVqTd%2BPqaUg%2Bm5NraN4zI7LHOThv1AsPTEwDL4M%2FfIYXT1KX8CPkNOhQ0gudXBTaU705%2Fk%2Bf3vbKM3MxX9UMd7pFCEqb2WYbXgH0jegQCGJ3ODj8EXG163Dw0DoLeJ4efPikspy%2BrnSFtFV0P6lrharAW%2FVjdskwF%2Bj%2BodckBYqGHh6OWYx4YIETrrZ5iBBEdaeeHg1uT6ja9UMNL6k2yhQ4lyfJEYDH0mo4Rnfydiv3gDU9EoM%2BmHyzWjQUPCNIPsJWzsK5pNrelHZMcUQyY9RD7jmxjc8vxfg89WWiUw8oXFyQY6pgGFgEkI0sdeTLFQxcl%2BcUk5mgXWds508cU7pKHGt6h5cG9AKNACk3Vb74fxDRdUwyC4WZICRShs8cVxk8%2BSX%2BdW%2BNyKh4pZ6L9pmcgHSHMPkzrAmZdXX1eFUnJOgM%2F5kWblp33usSgXtYfk5q%2Fpl6%2Fn59HSVs9lU6YvoDAQkxjZOvGwlB0iSp5791El04utdUt8xzcdy06py3aP6ebg8dkhJHZiRKV1&X-Amz-Signature=876af992245e00f1dbb66fb7817c63520d9621a816089302dde5fe904527b39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

