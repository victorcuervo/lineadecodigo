---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXTVGYQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDNFBvSE%2FOCzmVn57fRiumMpIdFWs1aU0QIIK9V%2BJlbhgIhAL%2BfqLjoSJkfJM%2BGv0ladd7KxQwPwX5gaV1eL25Pc0WRKv8DCEYQABoMNjM3NDIzMTgzODA1IgzRRYeZ8vruxf07u%2F4q3AOi5izdfmEO4%2Bl5u%2BO0YFztuz%2BkrFH%2BmAwsWvYMM4PcsYOORuPj1F2FDntm7gjZaAInYs3S4NkdR3GFJ9zEZD1NJ78%2BDbHnR3s7PG4I7uYXSMheRI48gGPqm8XMAI%2B2LzXIf5bBAQe2z8nciK2QU%2Brlyx3xWXGXU2jpWhjVXY5zxGaGxpvB8HFk7nWlN2ArOYB1HCSuXFq9Y1cryLtrdgcg7wlhF2YJzQ%2Bg8ZoHCzXNsQ3hWAMS55Oq%2BanDqyXayB5nLlHSQBFOOR2TvLwtlDZlEoRCDoMrfvGaKbGRTa8GJFs557rqb6bsY%2FR4lZIM31VSG%2FRHTTYc%2BS73FxcT1suLRAlVwIg4gISHVFiYP0%2FOvGU796cPx99jly1KBRETZFXc2OfEGEuRVLE4Kv%2BKfIUxgWzTDreF%2FGddFVA%2Bnx00fsUYFelrC1evOrqjUQ1I8mDr80OBEGEg2zqVWlhXVNimeNW4bf%2FOeuQBnt7mBY5yqZMnU0tK5I%2FssV%2B64Ppo41DxaBcP1W%2BLkrHpajcoP4Kq8KL%2BcOdYfx7LUrMRuFvnAvrpgdmpEAiJGxNyCq2fMM171te8q2j27hks5lh46%2F0LwsV96SOiWA9IJF5BXpFBQ1Fj4yarS%2FUnoWoj%2BzC3g8bJBjqkARSWsNCet1INOzSsuN9nTMZXhW2KEfY2r0b6Q5HxH7G8lVsXb%2BKKQq3WZzjbYqSWaviVzaK%2FjOz2ILHD2phI%2Ba0R4yhqgtSuIgfVqATxTE5VJICjPrjMPS%2BxXV8a7SC8Pi64S2OzsPq5pHSJgakk6R7%2BGj7EHVe6cWpnckYoq6kG24LTkm%2FtvPUTvg62KQalVfZw5bSkj01lzM2vIJgdX8mZCxzz&X-Amz-Signature=ba4595689369f7fd550bb4af00973d585360e22c7e34fa805cd1985c91bcb7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

