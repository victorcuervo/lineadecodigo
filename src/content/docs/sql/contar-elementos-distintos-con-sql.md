---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGN5CZGD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCCdCZWebkruWdkN5f%2BdES1SJFnQt%2FY7Oe9SQFb1vJ7kwIhAO6j2dfNfkG27ozJ3oZw7Vec4uymmQ67OqvGQ0I08okJKv8DCEcQABoMNjM3NDIzMTgzODA1IgyXoa69%2FO810j0v4f0q3AM2rcwDqwSzKgmjrW8vSMJhSlD9TjxKszHsmsjV2qCDHjCaIVh6dBr9ldllEuQ5OJX8gN5V1Drt2zFZUPr4fXfAIdoW%2Bp44tjOveCaClOastrfyAtcfcQPLpHfJTqXkHqvriNhcOzTHidRPU8KOrAwep%2FHwTz18Gj6CC8JMDgxyGxvRkfZYLn1MV7wEq7q2HC%2F0qzopGwmJdvrbh1V3lrOyIGs31hLRmJ%2BKWkd2GzYGLCcs3S5xKdU7z0JsNkDKd1k9StTNMpFJxntP4ib9mwyhsm3bIS8KN60QdXl%2BaJtowTBZQipNYGnDoHNuivG%2BU%2BU5PypFA8mBZxQmCj1GqvEDt%2BxMrlgyrGXgKyjfWcbKwqM5X8gLksov2Vp3QCayq2xgNzlX%2BEt6Sx14lhCAvB95dL2iC4wRRAxB%2Byl%2B1lSHl57un%2FnNSfQzgwbCKgdEnLGjdEN39jq6a8sJun%2BoxYVHbTL%2FTYgafcucp%2BUG5z%2Bb1%2BgqU6VB0dWJCiAi%2FfV%2BpLACAmX4pTDbbQp5pBWTZ7bApFlar72o4pM2%2FaEs%2FXBAMDMDhKcRvV8H%2Fc%2FmTpKoAJ0NL24YYM1D0UuwfloOP0kcKNu13q%2B%2B8Co2dKY4z1nSxH6jOUQfW2DBFUagVTDMocbJBjqkAaw6nHJ3c4A2cuoNdvvIVkVyPVqLXXfZxFMWbM4rjyCIslwyKWM%2FHLt%2FNQIZudwld44bxy5buh63HPEzdtGLSdXVrXvm4lNMvNL8kh14IwJDiK5cJQrAQjOW5z1Hfieq79rkmT%2FhyXQDEIZc0qfTZ5RwAhzJPuTancHgBke1IbORaTbAkVOnLSEzN5pFEr8Dq3MgjbYQ%2B1VZ%2FZp6raGJKSkxe44h&X-Amz-Signature=e560b04a6fd7e45faa1d6514a93e2b276a498e809c1f68ad21c10d8d42e7aff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

