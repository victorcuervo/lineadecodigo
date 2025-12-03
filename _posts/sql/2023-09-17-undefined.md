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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNSWNAU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC5xBLMPZUhmHGTAEfp08yhOdOJT%2BL8wJFAGJAYs5Y9dQIgBx9I22hWr%2BtqpBBaxhlDVXvW9SzXDDJmA9aiCXkQYI4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGU1LiYHJUN40TbPSSrcA%2FpbAH57fZ1Hs6NcsLb9bL%2Frc9LzIwPJQ9T%2BlQHrMLHLzTe18%2FY05HVfOsfCe9Gpw9OYkUyy4uN9oxUd9dreedhE7Az2uPELQ6RFuVehHiOmv3V3FV4lWgL7Jy3QuzbzxUJazTC6x7BjVxCAMlfiO%2F8SZVlKGV4M3oJD7JK6HhVI%2BW69GfyuPEFjlvAYgEKwqTAldWvB%2FNAEZlgkZlhutt2%2BqYVXSJiP4v9MEFYLxbllPrBsCitGNJJcq3Owk69XLxuDzbM7smGWXv1cHQ1G9VABq4EL3HCiFAB0MqQ2qBCHohac2WuHwLvgaOpLgn63QqIuQWrF%2Bh1CFRTBbYKxuwbQuHMk%2BlSpLacwlc9wiMy0fPAEj3leS49NxewX44KkF7gzn5DBkj433xQkIhGZmHBcApgvXQNmlV8VP7S6VDL0gXyyQquUWuDcCjDSiMrX9mZkPsR1ZdstD0Vls5behtvmiS%2FdOOnQHu6UH2UBJ4ij78iGdWR4%2Fcy93GnlpRy5Dv4sHFp7F754nydb8DuX2fbFmGqFTpEnvj73U84RlPyqwbZnrHtnEZx6woW7JSaTqUJLmQ5IgUzogmly8jLQNC2AJJ6Cmf2H9V%2F29ahebl9KhlU9X2U5UU6%2Fj7QYMOXawckGOqUBGjku08%2BpJi4cSv5DKDpkZ2BUtSEI9NdrEE2qUjeKptDqgpXCGvY8OPqat1RuT63mdlyp3dBDsZjz0OCC%2BFK8wn1by0WD3ESl8O3vcHjxaPWwyCdGjJR0c6wshVhFEZaUQDGNs8FjJgSXP5LcMtx3JWSgbec%2BG2J2qoWR8HHczCFP8%2BrxzKSt%2Fe5zWVKlaxOm0rqNpd4QzWewQL9osQjwLqDytNnW&X-Amz-Signature=76046fa236da0123e3afbe3435ebfa8bd5c031576fef77ef2d04966ac5f5b162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

