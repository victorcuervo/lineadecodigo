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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAIGW3O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCBZ5HgfXgOOiBHRP3ykba27YzPVaEgQwO8mJQHkb4hEAIgQ7v%2ByjnD3UT6bO1HiiVMtjPp%2FV%2Bbn2KCUzSoGS9106Eq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNuOE0EUpJ3h4XqvnircA0FqMoZPBjzcSj%2Bk3dRYwkb2O4mdrGNCg%2Frz%2BsLDOL%2FGSG7%2F%2F8SMxV54WPSQUVvRr5M8BNmntnGddyrHPjsjMj8hn3jB%2BvSPALkEDuYTF%2FJoCpOdqwq2kqaB%2FJKTQ%2Fxz02ouUoR%2F%2BKf8Q78xf0NZETICmg1A5pN6WtQ%2BoLzXxNG7L8kE91dbHft2lt8IBMqu%2BPzVrXCNg90umYqQo8v5pPQof6L4mIHphPg5zUvQxWVsQP7OB48Cwd9VM3wdeKRmYP%2F%2Bk5JqT8AaR07jjR1Dj%2BJ2JEbMU5bbbP2Sa8yLybBAVYWHAFtsCnXonNnVFuUyfeihM6dzXZ75izIFdmTJc9zKhEfZpncS%2B9UBTEbe8rejgpA0k20rnlRnthLoZvGSwrEaOwtFnDLu7gU9otz3lS40QG%2BIRbO5zaBApAb7flEMLkIr153LBKwLkD0Vl4NxBXSXH9z57i6gA%2B1SFufYJ3dhSRRSB8sPxHWdyqMa7qu6pLD5%2F6sW2lIhIZd%2FpPqO9QSHAdf0HHOtSHsE9AxAZ0CQNr0c4CNBmhslSpVQRYEbm9WndE%2BmlFQ6zxUBkjGJH5EekgTYgXa8h92GYYQAScx5XNzFKO3JSHe85pxxpACVIXScpDNFj6tLLBq7MJiav8kGOqUBIGNP9GgsDKlqojqvT7R0kSSS1B%2F59OVgL0eEbWYAZOqJ9gkDL6%2B5LUU9XZfxK%2BrK3eh4XK6mGJvgfs1ReIb7TniMA00MFdfy5WOBGE0hBdn3KlR8KXyolE41kzufRvFBV7UW3E%2FK%2Bm0%2BaHPnUzzWNEuhFgVhb%2BvhXpieZWJ1rflu4ZaOao0lwPB6Ch2jhrHqvEFoplZMf5h0Ce2DGCV6z7EMMeRn&X-Amz-Signature=377445a38f0b3518b986f76dac63367a003af68ba85901ee842fda4e0466e3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

