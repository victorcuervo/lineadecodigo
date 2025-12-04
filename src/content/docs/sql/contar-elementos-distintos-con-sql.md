---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPYWP53%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC0mGT7t1qGaLR%2B8CZ3WHk9G5Pf1r2wd7lwYolVWSYlfAIhALDODa73Fz3oGTo3gW4NacvsoZkbwwKnEfZwneJC4fejKv8DCEUQABoMNjM3NDIzMTgzODA1IgzJN94gRkABOP%2BsSwYq3AME8HojQ4CIYqgydGo93jzuAnDDf4sE5jPL0mY4VVoBOyUyBsLBs8KryOZ%2BF72jOXYZVLkl3qFToPQNQ7VKaiblY4lmF1s%2FbHyp7kNg0wufsd4R%2FMT4uMFLwcjgfOfr%2FVKE22wqtNnh7TjP0%2B6HCwDRL9K%2BsZEhp6fyh9yFWLhF9LNeTH0qLssPgk%2Bgu10onHR0uuk0KyCYRcdZwAnMRGqbwmtm3dzWbzX0lHGaXzvCPg3Q25gjICY3I7vIT%2FDPwWgEySFDnUdi2hbWa4yxVaLYJ%2FwCR4JAdeRIzNYG%2BDFJ8BU0ihtOzdeynCDNkYxBuZ5oO8MQuaX%2BAJimPn%2BrKIknML3qG%2FjPc%2BYkbpr3dJOIAZGfT%2BJzv%2F%2FtRxQGSk46cWMHN%2FxFTygYzZJ9FoTBDIju6Lh2H20wQEqPOZRUnA%2BrCn4zMM5UbMkLC51P9SyWzYdC7WDEWr7KfEXGc0rKPoe%2Fp8cb9lBIDu%2BwoCpxApFirZffdRzuS4hKDpQ5IrbjtmPAeFWuXpFcas%2BTnHBFJo%2FhaRbTBMX9s2YKoypoeZIm4h%2BgRbjUTh9Qk5B2PVYM59uGJu%2FfL2jNk7WZVaGc45vbWEb0Dcf2nBbLAn6pQPyZdCAhUgUUMdqfB10AXDDr5sXJBjqkAYyrhI5RWEQjwMjRCZalHMt7w3U5AlpmbjBZgzp7moUU3tefKfdiXqSfx%2F8BGvgS%2BR48VlCCY5lBBD2yydaOul4inJiu8ihADTCAGkKC09R8BZ868GSlyX%2Fja3oNX6e1lvDhfGzrDi9n%2FGxVLxFciBdGYfNq3Jac9bWbNDN2KnwezeB7NDFybHbMdurvscFTuTahms6NQ9HN8GqKIZLZ4T4KHu2F&X-Amz-Signature=cc71f380dc4c8d23e71da89a7a573bb87ee74c1501f485fecae14bb0d94dee93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

