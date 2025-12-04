---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26HJFLF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDZdmhhqYO4TGaIbS8UMLJx7PS7pAxzRt9cSwo4QldgTAiBhxaLMjk7dFRyuivYYJ9QoeG7J49sCjqkf9LKHCLgo3yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWgrWSu7zdeyrgmynKtwDMnyOHESqh7rRDtLxB2raJLChk07iIVCHTlpmCG9PLTqd%2Bk0bA7oHyo4LBoBRFmPSIVo805GsUqA8a5cPsEs95iRkpjB9h2txKoVt9G9AJFsbY8TZ7KOsNVHg%2FFTPcLdsgvIiD1WvJMuZskIMZYCO6erdiXDzQdWLseJ2mbaED5PmM1dTv9FIQb6ld3xYSaZco8GwR6d6%2BpOKEUYh1VhJMXU3eAtwelJGotFP0LhDCrBTIMaBswyQAsnPtWBumLWB987sQdDzC2xquyJzRYgYeX0854xinoGuT5FKomtgluox4MF%2Bu4GiuHrc9wM3%2Bey%2FmF8L76GFQt9JgKI%2B3SRZSVzGKdA3FZdot9ItUP8UxulXbeJ8p5OftjpY2OK4P3vG7xLSZY6VqgBMt4o7w9cRQCcTdUXO1CwQrlkehvPgQkcDywLtzL2A%2BBvzuBX2oQEfxMYmilptKX00m0F8W1BU4WowX4yunCMJ5DV7k0kyN8Aa3vnKiZiKDoB3iwKfnmnkQ70HAucISVt62iWcF3IfcB2ovrR%2FtesBDvY2wfg%2Bps8NLLDaWhhu4OS%2BRTQBlMSxltMMoV3Szz3RpqJ384DKVO3JqtNmpRrZb7yjxTntAfJa%2Buza22jztzbuxlEw7tTDyQY6pgHniTuUx43e%2BG8ybaAvYwCcpn2Ybcob%2BTq92micIOW4YobRXeQ%2BhxJ%2FpWy%2FnDrf7BxbRrE9VUecKvYDdXtfUTEEqxS5PKB2gIvcJNRz50HgM1%2B5JmhU3KuhQDANZXMwH1uOaMQqGxZboAqxsDC%2BV5UmPEb8RUKNFNN3tkpwjoLnFWImgBW%2BTE%2BpQT6GCzc7fsNLgFVDeArLYbnKHooI0YPhaRafg9u%2B&X-Amz-Signature=688fbe728e1437e859b5185d9f354e691670b1abb9204a6bff1ce4e263990311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

