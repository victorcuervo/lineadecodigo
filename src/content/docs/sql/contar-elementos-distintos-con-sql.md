---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUS54MZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC8w8TxALUy4teCmpN7j5ltnXHzp9dtFtgwenim8y%2FAtAIhAIa77vX9nphm6l0A0vSPI1yjmdVJvQEBOfDW%2Bjlem0xeKv8DCDYQABoMNjM3NDIzMTgzODA1Igz9j%2BkAZaWMRGvqPncq3AMwwTLfBDk%2FIsPB9FYjRj61flcIU%2FOWGtFTMoaQ72feFNAyJHBBbZNFq3Q6anDWl4EuHpEJdoVoDvWPFn3NHPXHlOZe2byMMI4teReY%2FJBYoEOI9495vBBG93G%2FBRiBl5pfvoW8TiYyW8k1zdkfJHXPyj7em2xqaWzgG8IJjf6yWbprKdXm8ybxbu%2B8Q4qG6pzUanK87j7jRH94lnRQj4TzdzvHUpSMzg%2BCVfo5AW%2B36Z20fNPDTqJnxIPkZnTbJ7%2BnJo%2F6%2F6%2Bq9UCZP6BeAYgRFb8k50k7w9bFc1DJJQ%2BIrcWIVNccgBN5ZOS9E%2FAx%2F%2Fpg6TYql7t53NusKoU1OUAG5p2nqcNCQEMp%2FrqPxuvHonNjzl37X28PLCc1jBfDIFsEKjs8mZuNwyQHPqHLRQHmF%2BuxP3S8lOYhZGxzWUfyimPPVhwbn9FhekHPXJ53RvS9241gFRgqci3Ecknm2cMsuLyJNUydg3cDzLaAa7T3dTmuNqdJpa%2FVlHU48Lt%2BFIXyoh%2F%2BcmHR5QM1V5zfJWFc41aAdqO%2FLyVV%2Bbx4BsJtjxXxhCizxPlK6qNUM0CqyaqWXx2ptZU2drJugNwjH67k19nMp4MK5lf%2FxmVQb107McS9Bwe0BFe%2BTnsxaTDnvcLJBjqkAV9yAM%2FFD%2F5GHW7Co9KZaw%2FUDSgqH39Pjy5pTDgEKLrFKiqJTCp3KNz0dxW%2BzUUwvDPtjG1QopMQ0dkAJFb%2FRCnC904oQH%2FKCooyphuuZE23vsOvHCydq4FywC5gpBkVh%2FN3CNrdIBPYITz6ejM%2Fh9%2FuprWntkL%2FUfUHaQWBY1CsBVsny%2FLh6YyFNdzt8c7oH04DLXo432P4rbdASQBT8H%2Fzv1Xz&X-Amz-Signature=12cd06e56895a39024258d5c96ed08371af4498729b771ccd05158270e7d41e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

