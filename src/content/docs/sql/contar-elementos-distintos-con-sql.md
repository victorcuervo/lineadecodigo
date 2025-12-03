---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWVM2MX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDscevukPKCnFnbme%2FSy4a9FDDOrjXg4%2BNGXLtacs7bUgIhAOVzbDt%2FQvFzvEH%2FQLBHixvIqXcHRfkfyOlXOC13EVGrKv8DCDgQABoMNjM3NDIzMTgzODA1IgwfYEC0fpo7ADKvMzcq3ANlYk0wbdAqMjwFYtjJREurQ9OBFQTtRRjDm%2Fq1UQsMOg%2B2prgTJncM4tGGcPTaH7nCO%2FoHr5m41jyNzHkbFKutTZflkPmcSnCfMqA%2BZR%2BKl5JLkDWzj27GBDIzcABqDKtOzOC5rWmNZrhUDMHJ5LGqS%2BLUcYx6v9p%2F6FpxgRMKIz17Jy3T2LmSSpeSIRIEzPSDWLFeKA9zF5guq9MYLH3zmG0BzE4NEk%2B9iQzX2Zeh%2BrJv2hY0PN5icqQzbCglT541D0BpEs4bCA%2B%2FbGoFRgstUQ16xXe0pZIqa2N3R1uEwwDFpekQpZY%2FghNtyLFnWVGh9HaXr66i3Ut1xBDWWY0wB2ysXw9DKgj%2BdJXfoQgPOIR87%2BvF7a5mqD7DogftJ3qrlo%2FWPBKY4i4LDHTDkPWNdUhO74pg2JunrJdNNvtKUHxhF%2BRblshtxlxDCmhCRTIPE%2FUiekbEtEV6AYki7Eiu7BVjhIfZ1t9G%2FkYIDsLsmG0Yd3GWe7qkCbfGHEc1T2FQSGHN0pVtXmriiMF9bo3gIkgkNwH%2FzQ%2FutNWmVjkt0aIOmFcMerkzFfh20zkJit9zQXItWNqu3h9J8FOV9yqPoA0LtEhLZ%2B2MSRGukRiGHnEBzaks87NCO%2B0yjDCB%2BMLJBjqkAa5iw2GDaZXUBgyYWRV5DXF%2FlC%2FQydfQhMDloharrj%2BTqwa6Nm%2BYfT8a1qLDvR6SLlxTWl3LT0r%2BL3%2FLNyZOv%2B4wLm2O6oyfzetTeEXgIpQ8SdATrLcmAQVKdEXOn8Eck4s%2Fxe6h2bPEjsyTlijw23WXEA%2FStoPa0o3TuQcdwOPkluCZm%2FCYSjYxIK78KO4Oei%2Bj7qRuE28RUkuB0D4r6BoWW4hQ&X-Amz-Signature=a5b4e27a842285aca5c7f686d6e13ca24cbd605a39f8ac8d9a16b3e4baab2936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

