---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TAD7XM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCGxwzREvkixt5WammPeHfsax58keZI%2BT3bR8bOVOz0qAIhAMMa7ytdnp8jTB1dO7QKAHcK%2Fl05ewAV0of07xYBGG1uKv8DCD4QABoMNjM3NDIzMTgzODA1Igw8UBG0y1mbxdQPFqIq3APG%2FB6J8KtEBuDcFnWPCwjFX9xVY8WmNA91SLwoY8lrbpQdLo2tT5lZvyTJKnHHqGS%2Bell%2FX%2FJB1vx4ZldpnUiBJC6mCiNDZHa0z8tBy63exuJnLyLM99XqE5NjqtjNKDrO8Mg16%2FjVfgg2G02k26dz5fkuREEEPD%2B72R97WgFVxWmcT8yg5%2B%2BHCW4RtSBOTM9krFRtPJAU1vz64ODaXfZbStDLi3vb0dhCx6lOaFt3lI2Z5Unhpkt9yLdRVjmjV7XojS3e%2Fh3Q0XSocTst6gDidY2%2BUJiiq7bv1nn7a7Ksdfl7IWH1kqsXCPgHHulM0PRdGJtxjSPLXWOWknV2rgcC%2FlDkIDtbpp9%2Few40Ga8HJBRGSHx4b0kJ9gIiTAdBsKclIGTqr%2FAiPiNSKU%2BdLoSyiQYYHsaEXjTCyOjwlomplLhupL6oyHLTidvE92qX5LGtc%2B7YFFeFngSmu%2B0l046iRJ7Kbnu4CxX9pEBmcDKgQeHgiax5IWP3nnSf1e%2BqC%2BACV5AK1W2xvreIT%2B0cGrCBoshifTAk4Gp02Bq9yhcSCoX2IAYM32KVuPKz5mN73YCtggoIkyYb%2B96esktis6cJ4EjfCTf%2FkDvIwyy%2F%2FpMdLLimqw5rDYMJ2AZmCjCtrsTJBjqkAeEk%2FVmvygOohh%2BB9li2PlsqcuCV%2FTI7QHGyrmL7hVrtuMCb9cs20tl%2Ba%2F6q3qL%2B%2BDYFdNyhVv%2F%2B%2FU6no12t%2F9nL9ytEAGgND3wR5q%2B7mGA0efl0AQz%2BzN%2BbcmZa9Ek%2BYDk7vrPdo9HmCqVZlKUhsnU6NJjjD5NyaTOIIFKHfC9n0HbGsq2sEaOqt6QixueEivKce5xnFKIKip4UssfG9lmGGd8z&X-Amz-Signature=0f5f4a123cfdeebda75eb17e8cd67674353d2a36dd3c270522752f1dc6de46e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

