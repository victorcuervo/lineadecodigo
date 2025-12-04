---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDU5VYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDneCO826o6sqhqARF72e09uTMPLrRNzWezWAiKkalpDQIgHMH65eHKufMCvxFHS8aRFfeGD92M10yplZlLqKX4xVEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMzGH3MhmDy%2BC4pk1ircA2%2Fs0RwlOwD0sWXQh3ZZG00FJSypFGHhU2UoApCsrDcDRFk%2Fi8fWj9zX9%2Fd49foCKV0dlt%2FpYuQ72zacCbHrZOHzVHTK7pYAiAzT4tVNzbY4D%2Ft1nAvxnVChcHBHCKYFrY6qxmhotF3EcVg0G%2Fi0uXE4%2Bjh4GoqM90tpS8lNggddMrvJHH%2BLIgS1kvSDRv0BNXFkKM%2BTqlUDKltMobvQcSo7pr%2BxCOPjCloJ40ioGOWkPadqwWWAHHubwZO5QVzAGOtsh7evwYtRR0BG35dFHq9ryD56YFFSYqA7nQiXmdpUh37pAdFZOJpGNzPVA7H0oFTuQkpGzuDzzT8IFLZGiRSrBaJ2w%2BlehJxGOIKwnWaiyiBZwF6Gr1%2BmN0fnIuKwMFeYLT4i8f%2FSKHFcy02xrufbrMGivv1de3dLttN1Rb3bPdQQYRbkzLuNqczX6gielQFQlwuo6PfQIIzj8yH0yxPpmtKCnmVGBIcvFk%2FSMSddH2taDk%2BGf4CFsJ77zViC182rgLaQhSVNuIyRaLe%2FYFxT7hHCF8UODCZ2oSw8TtiU%2BJDARvicl%2Bo%2BJ4EZCq4uD9YjhaT3j1Go6WTdR72afuSfN5X7X%2FSyTuvw2tl62mS8CI3cCrgG5naKQ0xQMMmGxckGOqUBET4NHgfJerQs1OJ048QWKiSluDhsgbkI7KYop2GblpYUfSR0EkM1O3Eb1NCWL3dr2I9VkmUIGUNt8eHQ%2FSjLnvShMldd4BxRPvIfEaSc2lxVs2Y9EE1QRU6zHS2DN05NkGaaLKZD4MOLahDziwDOXQ4oS1gXsXOW7g9k5IPJXccW%2Fg7iFX%2B07%2BSFwnaENYLbOZ2MIL9YpH48dX003Ml654DNjhNd&X-Amz-Signature=cbb70d106868f54eb23259ec1e7433d35c02b9defab5b4e78e4b3eeb29ebb949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

