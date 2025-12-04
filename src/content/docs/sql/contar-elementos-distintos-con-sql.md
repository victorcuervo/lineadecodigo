---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5TNHQK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHzXaPR0QGy0ojW5QSrncNAdyeHmRFxYzgVchp9PBGYAIgSfS9jY3pXXR8%2BkFGY6L7tIQltTLGl1TiOJcSYGFhslkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDyUv17qP3Std6ngsCrcA6QJB7LbkH8%2FMYJIavRQlx4%2Bv7ARma%2BhZ9Ayr9SA4UCcSm4uMCGx3mLwG%2FmWQAIoKjQgthuC5yDRKvCngPUXcLF26crFkU2KW8niy9BsoSUkJvoTOYlvfSR0slrqfk94kLIsr8PzhN6AIukCxTneNZPFuAIjK9B%2FXxXGiBLfH1ZGM2KnUdz51GqC%2Fgz2lViVrbtZaC%2Fz9xVWfczgQYZss%2BJ9jalOFcDGqfrUrM8AB8gJxSJ0mufnIDkpIR277KyGVWccMmTVFlGfSxtfVap442I%2FCFHgQGTqTczBQMPsDQQ6lZQh1nICcohVi7tzyxX7gmRys0sGiTB2O292CXm8Todq90x2IzbvGMqnf6qkxcM8%2FbY0UUekDLTA2PRbFFlDwF2kc5npNT8zPwSIVVanhIxzr2q5S4Hh4LJdAoJrx%2B2sTskA7IWK3CVDjW7xg6oOgzIPgKG%2BL3jOfSFmlLy7Jt10Z3UoH8LH2rA0KlS0f%2FWkP6Ni%2BMDKjo4aGPgSxoDr85eQOEMJOE9p2mHK1UQXOWZFYv%2FicLZ7XmQahskoPpM416Hj6cWOQ5ziJRGVI5TaANdMRF6eRx2UJD%2BlX35Uw%2BiYbjIteMU6VEs%2BAUvkEW06NZo61Xqfvre5m5MDMOWQxMkGOqUBgamiyfr4HOLCQp4dQZWoZzUkVUBQM4NaNncI9DadTyp%2Fouasy%2B14Xm2gSvJgnrGfEa4biq0HoYor2i8HH8ooV6ZJz7NXSKcPbK53C0uSlA%2Brtpuwcptqc5wvnar1wuFNc1uy8DlFPxpUxbdRYeIRwBO7vIaQiUCutYm1SJutOOnssC99gUUvTe1yD0B%2Bq0Ed%2FrXub%2BvyfdBtl9M2XmZWTQErfpS%2B&X-Amz-Signature=50775b32cddc2d2f2aa0a911123ed9ec38fe1ad2f5afd5da825566696ca9f50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

