---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE2QLAVW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEl2MeJesk1JfDuEWnQYJafbzMLENQOh21zssY0DAGvRAiEAjGrUt4yY5RVC30%2Fggg8YEpyTG%2FNOveRfIyyl1%2B5cTXQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPgTiWu2K9JrRGfTSCrcA%2Bjvu07uBv0jRoSngNI70Kub7hLcKd9in%2Fs4J0531bn%2FzK%2FFRx7zwzTkbHM1FD8821cw%2FJgJVm2%2By%2FZQjxviHar9NbFQ9bEkXA5eExlwGP7GPTOqv9CBIPZvrpv4Ac9JWDp%2FMP9tD74UsFF%2F0a35iTLn7Dd06XBr%2FcGzxuaDW%2BKjD3V4xawwguQPk2KJLw%2B%2BgEw3aAQ6%2BUiEt5qVQM53PPLyzBTaD%2BAagMiyQ81iI42sCzWoMBCJb5ZdFz0Ni5t4lx6IkKbkAtpwUFvTeynEJ1sq1dUAz8apemEmPmVqTl0rYCLIow3T1VkHoTslHTxCk1bCgNEZdTWoT2U1PTMzrX4gIUy1vaV%2BGSyPxleJT4ZZl60z0SxF7s5ccUnelGMIWYrHPvyaEt1zSU9C0LUFGP%2BvfU6IfgABEVGBdReDrj79YUoVDUizLVIVWlVniZklQtcWLiuxQvHzwYdP5nYMF0wslgLabJ7Pwnx4Yn3uln8UdSLn5SGLtGBZSvztqDwO4jPPUWo27eB6wq3w4EM7kwe727bmsRhVvqvYIzn99o7F5MGW5RaLguwygaSV2aJgOcaUaR21k1NlEPScRl7N6FvK5zCqSlgbKYM9wtx0RarT%2B%2F11qofJtLUnf9bnMPDyw8kGOqUBpVn0QUs3dVuNqGuil9gcXcZubBqEz9zMEkc5U5fNZJaXGS4PFqBwh8H3uYXpEXl6TBl0tC%2FSnwXpTUDDumnZOK25Uckz3wRcGCgf02dNd4q6cfoutMRzHeIo%2BKadpQyBC9afhNJvycn6wey9QbJE%2B6ULJuBmho3B2Et9IrafEbon6lDh07Krwzh4mB%2F%2B1pmBVKsJiY9ZGFBPKbMP7It3axfi6ytI&X-Amz-Signature=8dc552c5b658172293ce23801e39d34e3c369a17e96002a6dcdcc536436f3f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

