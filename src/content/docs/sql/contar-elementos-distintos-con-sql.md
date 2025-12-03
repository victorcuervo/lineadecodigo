---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G4SMBU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHJfiLWj4Kz8CrpZJ9AdQ5O239SJskpIXBfsvtjkXbD0AiEA66z3no1xMkJRIvSbEoWBoiP7aQykeXh7u1BOmqim%2BiUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKXa3OXqPmigy4WQKSrcA1Yg7OWTc69Mstclg1WQdrUQ%2BMcn2OhSXvlPnzYUb%2FVscc30w0xQfKO3Orxlqrwslkj4yRRNuLvrq33DcqAx8gSRLIQaDdPAB2eBbTmGxpZESnoVhHacGDilge7MIClZUfjqiKGKep4%2Bfb0dPtaT886YV7QmQzcAQoyyNdGDde3UzDBOZIAb8ESEO94r%2FDG%2FaCBVa1PapnMGYcxYsGIgnPb9mjlQfUQFH%2BruOO11fwR4GMLWtbn%2FnoaaPGI0gvf%2Fd%2FcUfMUYWMqOUpah3D0J7GwfgcZga%2FKaGCGgw5UVdDZCqZ3%2FuPFPxZmuBxvbT0%2F2AkvMTTnu5EQXi2u1ex73Asp%2FVK3BticcG2gECg%2Ba%2F4LdD%2FePKnw0I0YES6wTQ%2FovsaL3w2qT39wZ13pCTUh606bTd77VfS4UeC2i7deRrzU0Ga5nlMokD9aZCBeDBQSOhay0s7FSb4Gx7IySdpKY7NOieb%2FuSX6t01BjXxjRSwbz1NP13ahVSnbinG4U6GiHF0LyznKW0joSoIghIZrFZQ0FcI%2BAwRdnKPe7envhkhqiUr%2FblkkQYp3fi1E%2FXIsi8GYcqQ5e4H2KU0ZXxURMAdZ%2FOSX5S5hdfLgM5FZucoEovCy79SH05Qcy3xa4MJ2Vw8kGOqUBsDpMt%2BhzNFH3zEkqMw7RrMw7DyaEjZffUx1J5DEQ2UYLXpGyH7TNKiDu5N5VjvYw6oGEzsAiaUscCdW6mn0N6ruuoOX5pbNsRjzNrxS2L22rkZrnHMzVjC1ziCunr%2F5ZYqlCoh5zZQNt%2FWaPAJ3IwKTOCXtyXEUw9JWTqxlNMYKt5wINwhQZNtMKOaCn1K0MkLNd1BrA9IPPh%2Bly5SX73YF4X3UG&X-Amz-Signature=1b1413102a8794b4ca9341fa29e4e99bd94090527ac0b6fd4607ed4c1351e790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

