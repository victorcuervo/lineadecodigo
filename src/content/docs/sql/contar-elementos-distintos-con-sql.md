---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBI3454%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMB9lP%2B8%2FLIr%2BTrcOc5NxuUXm1Wa4yl95BkD6DfEx0FgIhAIjZygFHdUbm%2Fm3whSL3%2Fd7s4I%2FvlZMywzKzThlV1hXpKv8DCDQQABoMNjM3NDIzMTgzODA1IgySQkoaDjuEkbkCwfUq3AMiEg1jDiDsKPrsDlRuVqmy6xgl434FoduoiKZ%2F35IPRT2b9vm3WjhI4ZxiVrUdxOKTcXAlcaeM05OVvPHVQpvWyBWA3Zb2nSU5YeprPTxT4MrDQgoM9KT8IrpHD1sUNl8gppvMfBl3IbkMM7nSgGrlpkhSfbtOpgUf7Z7grb9a42ep4x%2F2iV7m%2Fg8aqUfltiAcQHtVZGNMaDCPK2hmD16HrS8ljGU3ApQnXp%2BfUncajqpseu%2BA7xg2WS5Sy4XrIzlyRdOcPQcqSAAkadPMlqWhJVtTRbRyWTvDLIvwOLKCIZrw6UqbOh%2F0wHNYPX3FVYQ76meh0hEPyXHy6J0AhYmDUxVSRaN0tY5qDfReLK0JW1V9zN9IrPwc1pFmSrdRH9zjWFt08HnIWdMyhFzmWob3NBgkrwr7gD%2Bu4jaQM%2F0TcdHZ%2BQbI5tSVtGvEepUaC2YAehAuBgJk4K5uG48l7F6WqTJXCbm6bVjdD%2BWRB5nDhIia95QazFH8KucTeNt%2FamvUpyLx5J8khooLC4u1xJfcLZ6e8czqZm09%2FlPtwV4OIdi2GXMX0%2BOlkcOW%2FpikHC6tLl5%2ByYLhggGq9YWwz5hPCrtJAQicv%2FnNwxfhQjGD1XPWq9IvwLI29G7J2jDMkcLJBjqkAaLDT%2F7mDSFxN2z%2B1Ijorciefe5fKv0KTQ%2Bl8i8Nv2CaTM8sD6Sp1GcTOWghI%2B6HbnaPSbV%2Bn1%2BVqubEs7HvmFpFM8nGPjwonn13Nst%2BJdL8dwGTtTWEILagf01MwuwljPbbcTNT%2B5vhpKQiaVt%2BiJDV7h%2FkFYC5On8rFMxuS6ltr05qoJiMz0Tf7PFAUokTJWf2Rpprbd0bGFdP4vzqUnk9d%2F5n&X-Amz-Signature=f76c902e506d35287b1d89beed4ae13a480ea64cba19d17a53db7c3923cd632e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

