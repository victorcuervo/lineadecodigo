---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXOGEYF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdcflIQupgxQNFY9Ugl3EetZdgOegaHzK6BVrJWlJfgAiAGnd9aPeN0XWbrBdftaV8JfhjZbblNev9cicKwcDuoMCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMBsWHE0LJsC%2Be24%2BhKtwDf8BVfndUJXBlQ87mYjp%2FnDLXKEafitajfZ064SYXbos6IhifElnByzsXGA%2FNuLMYqeTxl5L3TAf9grXeBvESTpkqTax5YlAmHQB3cDDe8My16ccB9kzdV4zsP93C22cCdtWHOT9cIe%2BJdfvg8oxsT0Mn%2B6Qz1RjwKLEjzd83Kmoc4gQB5YRDYMF%2FEKspgEfidSlYIYU5Kd5iWhsFAUyk157nFf0mfxIPXL6eD4jPtPD0QW3Gp6v3S4LmjtFeti4a5H9xZfiHKPd8ykL3aXv9i0i2UQ74ZAw7H%2BmQltFGUrxgixrC97W0xw4D1P1XhpK6UFmuub2z7XBnXeCWEt9PtyvEV9%2F2R5PFTbIYp6ThfmLPDdLSE%2FFrvUMTkNPhSw5HLotS6K%2F%2FnRKAjU09TacGqYjEHOxVvSkL1GC0OcD9MOW2Z%2B9mGdoFwzXG%2FN%2FoIMELhUvmrO5wfqMXrSb3OPKHeeaWLGsH0hiSWPdaTOKAUU1MXAUnJxizYYnbf1vGUMxRgQ2efBWzDjU8IvB%2FL1%2FgeMLQnLryVfXhCkHlMDOItINlAt8ri6BT6q7lyS0wK2BMTpNYh8YJmzI%2FwjwJJ2DnjTNqjnt7bl4fX4DaZSJTxCWZ5ZpZiiylBwCsDHcwqtzGyQY6pgFzw8uNAuiJkHO4Jq8FDxuIQDXNBiFZXevdO7kS4Jvj2bFDryaGXQmk%2B%2BNhf5EQBI4GK%2BJec1WM%2B%2Fmq4t2Ic3o4OPmCLCQ%2FUwrCAt5dbhkXD40xUKEV0MbDyYboPdnGvM0Q6XsXDw75gGLDVPAujd1LSsbD46LskCyXYVbwIO5L1%2Bhx2xggo0LT%2FOcLsVLWHHk2arriM6JnlgFq2tTMYcrFjNP9jpYk&X-Amz-Signature=aa69e090f78afce8778f1e88b5dde7d3d19192e8b6e38219aead1c2043a95891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

