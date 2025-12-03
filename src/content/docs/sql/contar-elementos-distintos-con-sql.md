---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJRJEUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIG0h5JJW5%2BlL%2FSBvv06viDJ%2F0pIcbegud7S%2BZdrRVgspAiEA2JDwtOxvcdWxyH9t0HDmFeMF6Hvgss1yswqyoRfEBSkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAAyns8lY%2BcnowgmtircA7F%2BS1VuFX%2FYFO23gDsTtiD6bILiWPXZ91r6%2FlerUlIC2G5nd981CLK3gBWyhVYMhVMnUIv5rm6ZVkE3owBlbAEqrNqkt0el4svGJhAe5fVDPn3tfNwQj71wYoFgLdr3pox5ZkLI6M0Fit%2BKSs3wc78QehZ18faWwiM87ZgEWF%2FQgEnPoXmm0%2BIADAPmo9KeAoIWY1OG6S5V5KMvDo9et3WWeKNpB7c2lP9Xd15dfB1f9ZJMTqJq%2FF2acGypKG0qGceN5Kl4%2FP8szMwtaAhr%2FTdBPqdKB0fvt7g5JIe04y%2Bg56W5TyywToZf%2F06qnxP%2BJvBGjNTQ6s%2FidywPJB4LD1cWV7svIdqQ46NhzGs7sWe8jC5u0tKa6%2Bs7X9RQC4o0XAYUKaqLl3CGBLXXBt21C2ExVOVREWFg7Jvbbds4mB3tAuiGmHvqiKx%2B23GhWjOUlc6sGf%2BNN3eBMmfWT0AWar50EBFVvSsLhBQnQoceNy%2Bp37d2W2DtJVlVv4oIz57Bu5VCy4V59zqrAtZrR0piprDpAEWqKjjhz9v7nwInPozog3QCcE67UZHdsDvL2vgJZhdC7HnTX6EScoi1Ya6AsDRCFGrO8O9ysXy%2BBfeKT2ZHyECSoQwHjRYDD1jvMKe9wskGOqUBmHGLeKAqZfpbmGLQ32HCL5iIEq5hU%2F5c3Y9RS5WC1%2BQcOEXYrGuBpwnhwo%2FREgrQ1PDNau2d%2Bb%2BNqMqrhiiktLE0SbgaeBtNIAS31Xu9Yg5s9FhMrEMAsR4LsIN27IhaODAS2KLZs8cURb%2BrzCidFEL3qHLdSVYWlCeLeKjspdvoLd52i7KZX1BuyooKICB3rlFqWpRCxC8loU8wlDrz%2FQSxUL9U&X-Amz-Signature=9272e0267b899c9df2725014a2363ec0a80115a368792d6b356dcb769f72a70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

