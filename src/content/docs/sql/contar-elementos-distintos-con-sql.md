---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOUOUND%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHw1jBnfd7%2F5fK4pYhWYcG4pNmBHv72GMoCTiWhsB3uCAiEA8lnloNgZzS71509j4c3BZbcXeBTBtxIMpGxQWYDB%2Bnoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF5NE%2BK%2F4Cnti199vCrcA1SrxliGCot1annJeFjKotZSrxZQJfyQfNYj9q3O%2Bo9Mcf352R53bxrZMWS9%2BkvR4mBSO8gbA%2F3g9mcUlhy0zsc7c7bTxqzkHjZ6ssszninpmEBpu2UzI0IiEIvihhP6TEOSGHo6589QqOLO1Uyw6bwyr8OmRYwWoHTiw4p2PUImNN1er5qibtLwb3LsXSWY9kpcpxsS%2B0ccLSbmBT6fM2nyDBy68B4bH1Wetp6yXshWjOIVeXnDt2IC1C77ToAH6jFAKQABri%2B5Uq6OhlTKQAZZVmi2K3PdBkrKKZk3%2Bq3UjT2B7OM6DWHqukyzTBB5cerltz1hy0R3AeiqxoWGjPzEAl6zhn%2FgJhxRyj%2FdEM7bNJw5%2FT5aIhnB%2BvRfJp2TGrShYuM7Yy3neoOkExLKjVNnu5rzoVy0W0SlmZvGERSpmh3DCQokAX2AAE2wDWmHtCK4cASdAZDsPcygRbqkZQW5S6%2FNstEArmLvIcxjzCzRxl1Ti%2BDke8TYPOL8uzu5dSj5GEQV1%2B4X%2F8PtIZNbN1l%2BN313L%2BZnJlSddURRsCyFdKgRDao0r5luh34OfiFgWFfnZHbcBkay3lYoBlhBXwyVGhGZA%2BZm8Gl1eo%2BmhFjiwt16HwQR6xgO71q7MJ2qxckGOqUBgT222Oi9Lmz1uPDYHyCs%2Br%2Fa2%2FM4r%2FlPjt8DGkG18mPF%2B7VqjbRKk0HUrc4OqIPp%2FAM6co8W94e1Du5UXaYQGkGfg6zrkWJMef6gHiQjWr8IWel7XvjdGVNuI64AbpWNlf5JO6ae4eTiCSfFmXfVqN3g7DVehwvCe99NhZtg4XJ8bl5hUeTHMS9IxBS7PHBkjCrcV8THeS5IWd5emI9AWDj2qEoj&X-Amz-Signature=8ca0a2287ba1758148133e37127a6e26a4de8ae40b5d8fa820b0d84c47dd4394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

