---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCXD5MN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCWcJ1Yini49i1Pn0fPvRfcu%2BbXJFvmHqv2WuZge0I6kwIhAK1UPL%2BrqyAgmbpcKC09UI2IcOuVg14PRT1Na4Cy%2BRcQKv8DCEcQABoMNjM3NDIzMTgzODA1Igyj8HphafLPzMpFeSEq3AMHU81BJxy7I7qBpcGFrkKiHRJcHITI%2BjRQhbfsqG9GQzaXy82KSNf1v7gxvkrNKrW5GH1QSi%2FR61QOeClxXrnLnNiansqQucUJjW0iXwVGYf8sotplpzBUIAS85ISL7iHcKpRmvpSWFF2q7UkuA6SB1VHp9XN1NYUNXP8HruGOJN%2FLhdOZk4tIGiinviEv5BnPMEgoBLwM%2BPImwGcwvlUcJ7veMI%2B3LHje8gm6am9vjgRPIelOjYwzKIjLYp9m1vtqS1K%2FQeLd4OBWMOSzn6%2BfatCf1YALs87EZ1nPQJlf6PfS2Lld%2BgVUeakamGOBLWV%2B4uTcK9kzscv0DN3uEp46Rs6jmcfESDQvLQ1BGSl1vPOzFv9g3XWn%2Bb71qxNw1iG9XDiFmscuTmA26jZpzEOvh07oPvdOlf%2B6YfQ2Q1eJnGVce17GO6Kx0mCXGfi3WR0tlzHNZUEjLdZmxV3LeEpcEA%2BsoukZrp27uO%2BfugbJ82XjgUY7KNFgvglAgnqD6lNtf7SHnII3kNV3cRyQCaVWFaHLHS8HaNR5KwM3yG2ezGEPlADzLiVKYPMt7fFmLhfqn4LxZDMG3lKG0L0pyCVjGjNGeWjYB4rVWn%2FvpQXh4cx644W%2FVXHLgcVO%2BTCVosbJBjqkAZhJlYl0%2Fhox%2Bg7Wi5eChBM9f8a%2Bd848ksoCjI05r%2FnVVNapgdN2p3zWa%2B6ypPGRmRCdRDGGVoIE3HIb2YgPhMPv58EYSUYBcOO6VH72GArZztMIhVY74U0JRgkYsUOzEns09OAfh48PQn8gmLwv5zvVBN6EcLPWo%2BROn4CUYi9UAIOs7MTR111CnZr68eEUhhDVLiCtN8ea87T3n8SCaferw4Gu&X-Amz-Signature=6b92953a83e9dd2e8175d6bae1a67140fabe7186ed75efd9c99918e1b11fee5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

