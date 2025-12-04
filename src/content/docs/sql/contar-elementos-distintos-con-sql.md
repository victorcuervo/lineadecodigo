---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVLC7E3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDfILMR6hliAQJQJdy%2BZDdJynsYG7iPIfy3Ld3O%2FJl1XAIgUZbR%2FEGZ0vC9pkaQeWNU8C0CRqx0e0YSFjcAO3xwbRYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDypnXylW3ioQWc7vyrcA3l5DiFcP69AS%2Bok0oHc4ynUNWPDFN%2FuJtI2%2BBzncjrMJzjSfpS9yZdMKRnl6qTL9aAnY9pYsn6h09pGeuDx3ATm72QgSu7c%2BrsCpNMRUB5bO13QGQU%2FAHsXAn25zYLH%2B74BZXR8B4ZDRnkhr5xeSFVXtgPMm66xUgiSfP%2BllPXPHnyxbZEYdzRgmTQ5TKZZgTYqBNnPXoGQvGk5hFDRXu3I%2FBmsaqUbvmn5LIZ7wFecucOt2KwYPFtXhcNDko9KrdjsrBuKexwBPMXgV%2BUfrIHrYRU3gj0coE7mc17BJHeSnBf5fw4HT4zFGP%2BMzdFEkU2umSHm2Btb%2B58CkAZXXZL1r4yMANObwCjFSK7oF2LDF3AsL1uEKR1%2FZOv3yGnIsAZ0X1Lfa7jyT%2Fn%2BC6iY4%2BkkIVA8cgvZT39RvmCJSwGxxp3X%2BK5BZkfyxRbiZ8GBjqnyMxrTZ5sg6a83vdfNiWMpNU8KOPBhTUdhlBFYUyjPep8g%2Bt%2BvTjZ90C4OEaHjIXJt6n1dDVrqG7ZQrp0%2FdSI8qzsQ3xBaL5%2FQnF0RKDeZRwaGmTQSmv2NHrP%2FBcIYdIG7hh7nKthP9JWfsx83n%2FyuOrG6A3DMuxrdaUs7HD2q%2BzXm2DYpNDA0JenQMK7mxckGOqUBI2sj8jwcKZ7JdwQO9Er%2F517ED1f2R3OHh1vzMACNEWExMxv%2F5cqbpCt4%2B3ls0azH%2BxWVBZzgqjV6BpHS4dWXfxRcgZWxVzx2Uluyx9nmNxFXRRLc9qK0d9rhfiDLqXASUjhwsO6hj8P41bV4XzkENhw51BYAizPHxR34NTT7QAH0qY7RQ%2By0oNPzvVa%2BojPowSIJVvy%2FuKkPcVAwv2pZqchqk%2Fhs&X-Amz-Signature=bcf79323c1704cb456c05004641014f967268dc5af6e0a65383fec94794d0c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

