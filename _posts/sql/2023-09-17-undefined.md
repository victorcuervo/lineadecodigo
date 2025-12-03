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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QX5I4K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCX%2FCjMCAVfCsbiu5yDbwqzTSwKMUngwQ45aeBJ5rptVgIhAI9QWJ7LDiIZZIl9S87cGlcf144st1XsSHQtdBLzmOOaKv8DCCIQABoMNjM3NDIzMTgzODA1IgwiUnKmmwaoqjnHFgEq3AM6Vm9re%2B1P99CkEW0ljNX%2BwbKboMhioeyD9bbZ3v41icy3Vk1fmF%2FOVWaqfzxqzXAoWo9S%2BQiu0ykm%2F4Kb0vCyj5Csc%2FOGSPQfXU1oxwp509I4hmxa16Dv%2FHh3NRxZpsq5zQNyLPHkD6uqw6KuejJDC3fWqcCcr9j11QQRESJSA%2BCXfFPMdzPL5EvY%2ByOmGR6zu1wuOrzpWM2KV9J6ZlPhv2Ml6VYUpGUYq324lfcwypz6PP039vNwpAow50QIcwYcMeHZTIosUlfh9osK4PHnKNRzEDa25buhKlHXOyZVdMfmQii4gsJ%2FXZp23wURLGcxiw3kt3JRiQPD5xm5j4Sy%2B9uYG2L37keftdmk%2BvYM%2B4Pa0ANc9t1Dyufko8VjyZq0y3qoLW%2BlEvSronDgrmdo6s1xG6QxpGWeyTsHAxNqHw79y4Ed8M4Z5wjGtM%2FXerKR108tPi9lOlOFkxbwcdpKpa3UhyfTvUhh1BVIYGkXxiw6ohHeN%2FpCYo2qDAHSm7DLTBOg2x%2BdH4%2BW7ximDWMIUo0GT52H6Pp4WUQ%2FObBfr5HXEzYO4PZdJ56vhATogGvIjcRDJ9OzYHnP3zXiaBlutHdOTochKl%2BsaZN91ZCcQZfGbWy9F7mZZdUP7jDVlL7JBjqkAd1Bl8akInLcBwOMT1%2By7ZiP3sCztRm%2BFXf37Um6KULmiDO1yE5FRBRWKNkaROiQRnQ%2FkZs6KfGcxXTVX7RN5TRCdTsLfzv8Vhk7KCtTfe5jKMnoShUMZhKqFOtsUy9Kpy4XObzY6JL6YrBsCshjuJH8TnVQ2pUSc5YLXxqHg3XDEyLIFDLoKiQyPNP14XMD%2BYXmvfo6RNaU7MjdaJ2K7cCo4ejP&X-Amz-Signature=7418b80d900b4cc3da22200e05965f6f57c8d650b0e4b7147b466a8ce4613467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

