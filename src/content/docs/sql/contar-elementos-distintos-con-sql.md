---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WSFQ6W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEQaNd6FPEOVqm9GG%2FDR19BHazWaOjmLatbSXzyrvCrMAiABTfQk%2FfA%2BZOKPn4Abtt%2FYpMh8NtSAbDMW4Y8EfySCSir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4xhvtp4%2BAEvJburmKtwDk3Ot9JJcHd1BVs5NIvbJFDMJ9wWHtGkpAnoig3b216M1iHlOAFh7jebDU4X7rzS7c32XZJ9FQq%2FaHSQ8YtqE9pR%2BivVr2Z1Zg3MEPOIwjKdDCZ4P5jkK0tGOCqGuN2SbF6CPELjMubvlJWqzzKBrmBk2kCPQkBS8EOIye%2FcQdrW41e5SXG9MOYVPL5K2q11brZ40gbi6xes2SaLIotV63qBOmS0hmtogKmlpLybjroi0pVaMZNQYxs34nivAJp3jyQdmk4N1bdbGn2HGxCE7BslQTZflTCRcSN4ATRdy92aCkZunWoJdTfZgzqS0or%2BlmZ1RWyUPuvzUHhRiQ1T7qPGJEEn6ta9k%2B%2Fsn%2Fw3X74NQg9AljeCI3R3CL4hOhAM%2F%2FCoGuHf4EL3sZfpwkfF1PNZ%2BJmF0eZ8KLMLbbLSzzA76RZB15qvq2e1RKIcfwj%2FjOm%2F4rf7YT%2BS%2BYutcaQYPhqc7T1XbmFp%2FDeU8Z1s92t7uIP%2FJWo0c2QQcuvdpWEd%2FwlcAKIWp5OQ%2BhifsqZT27dlLhOzgrEWrnKTxGgmZTON5OXxGK%2Bl%2BVNW1QlcY2zhjoKRIHH9gjMFnMkjLC4TiB7nMhYUl4MMI%2BEOU6XbLUjugKxrODzc9kVOFhyAwhJLCyQY6pgH%2BeAPpXRF9tzoNhDtXs%2B1oSndnLa%2Fag1wOymE63iJ7u3Z0Qk3NhSKzbQvMs%2FcKTGZGxZKpKAW6PBHn%2FO9Z6VPmDoMIpotigcM7ifcBiyL5TNpbXDiulgtZLnRK05rJc30dfw2Nxh3KPao8jYaSUzwbhcCH8%2FVPQ03uEOLNXKZJ5JnyJ6ksJZr5u7Lp81euQq744D7riUmuhMHDxj8PfienNWAiDrLF&X-Amz-Signature=4421d76c061ec530dfae9e999a3884038a99fafc33984fcb7fa86bab34b7ec86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

