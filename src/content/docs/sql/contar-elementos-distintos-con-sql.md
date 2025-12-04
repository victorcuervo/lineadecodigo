---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQG7VZD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWcasO0Ki%2Fz4MDSU0nwVNfuva%2FZrJxgZiCqD%2BRZL6izAiEAqR2zjh%2FRVwHeW7%2BqYRQ1jOziwpVErGDzWV6W83bMJD8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOYNd0P8VAEUloKnyrcA52zTX5cU%2B5ZE%2B8qFYNf3ZELZSLVBrBn6sBkJ7nNMW%2Fchiw%2B1CiLMgTRnTdlexayr%2Fj3qj%2Ff3lfA%2FLPdVEkunoKBzN%2BW2SkOxeVU%2B69QhoMRFwFvESCCrDpuVEEmY6q4b8ZbOdtUz0B1dvw6uQY89FOk%2Bi84btysmtAE2gi1xbIEy7SWfFIoZP39%2B2zMXrd%2Fb5FTxP3ss1eMGgseLXihDkL62FCfU3vWpUw3Hky0acDh5y99KCmqobRb%2Fv08yGGhbS9rnGG%2FM4lX55Sf3FQxiW%2Bg9OUkJlpkx1rjRd0uyXlZVz1lt71hOlx0MeaSluitQGBT3N8OeEr5jpw9H0%2BKtRpUNJ96UC%2F7Ax3sjfotdmXRz63sGoeyUTTUUr8fD4At2YISOzDUSa7Cu2go0ouRBX9gy4%2FSWcAItYik0jsnEL9n2b6fFlFrM3sL4cjQ8fhs9RHD0WMT0%2BqABNgEuBWuEybVxeGOv%2FZLJif9trPnJ8n2xenhuYO0W%2Fcr6Ap%2Bb9tt38KvyFACmMAV03O0%2BpJM6jlgyK4ZbzJpA%2Fmxe%2BwUYhEBnGfHuS0SocoSnOY6vXIEVLI67oj2Am11TaMyKVtcFoF0b%2BzP%2Fg9uivzTAMGBxHqOkJq2nG3vz%2Fi%2BboEFMPeqxckGOqUBrgvCanuF%2Fs6WEqQvJ2UOzBysUibm9fbYCaDsxUfWZ9yG%2Bkyya1biwu5FEJHE8kjNYPBiCbAwCTWYu%2ByAudbeD5nVYwLtSdTNqOL9O6d5KOgwpmmMeyEh6B5auX0lh3mO3e8K%2Bi7Rrmv%2Bj6FrJ7XwLRrEro04uWP3iWOmhxfMikmQxaVBf9i9gKme6%2F%2F3hEpAG7VPlZhkAvBtC9Ys0VYDQdxNTVHE&X-Amz-Signature=de46069e0e5db37a9e3551940d2715ec9fb69d5c2f235e86493e032483583607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

