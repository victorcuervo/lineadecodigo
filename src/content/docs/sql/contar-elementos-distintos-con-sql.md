---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHAJ3VW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAUt9ms7rcpXt28xhivHzxYUkf9AUDTZ3%2BsDJfPZPZnIAiEA%2Bq6MDTuCl5yXcT%2Fzhlze%2FtTW3%2B%2FMqT%2FIt8uNDtNKtLQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNU1VG2m%2BNOv6M9sKircA%2B82D1NeHPOFu0VopsIQhgFE%2BBUqTA21rjHAvK50c0zfd4JPeQTRLtQNTO2Mbf3n3N94Ys7bQ%2Bsc7mEZbAwOdKFKw%2Bz9Zw5JCeBBj6G7eDzx3ciwmdgYIlKgOHxTdPqVxTaP%2BiV%2FvsrOgU87EDBwg5XJMf2P3le7Pd0xzvlPXmkM6o8vzuw8YjDPg7%2FHaDEn5IJM35dwS03JyOP6%2Ffwkf%2FCCy6CiEWh4UqnKjsJr3XHtKYohYXaRcwRg7pSdhPGeBA2lwrBmvmQS4o5bFazi7Z%2Fzc3VEHhyHhaGfU8jSv3CXmnRle%2BuinI2q3czzMeCR8%2FfBu2%2BoUS2%2Fb2Ib%2FMOQ4Wl0BWqEEcMRzIgufDdc5yklkqIA9ozZnOvuscXPjs30g1Cw%2BfYBVzNiBch9BMpLEeDegO37Kn%2BGVnhJt6zZpEELWNSvJ9N3RklXc4RNeX%2B7g5wGL6exgy%2F5MGeqVgxqT0CGvz1cAifRb4%2F2us%2BU0F9%2Bgya69Q01doV9rtW9iMP2dTflzbnqcFuuroqupTQIvk4%2Fvn1yC0ayflLG5Fqt1qzBuhA9Iw%2BVD1wgiocw0lzygP2khARJdlgppQCyaMXthdGjhvOCv3JL4kLsbhGVKGPoNNUsbEGeZtQ3NloRMKyDxskGOqUBmUwKuFaFK2%2FDFTJskdzJXRXgyzjra8iYUnu62jLn4De2iM20T287lXoX2z4hxt8Exiod9VLP3nuh3%2FZQpMVCMTscJfB0eN12Ehx8XqXJzGSaR0xirg3i5Te0rmNhj3fBDqwsOlWjvCB1CRLuwmmoRvE8eU%2B5gYS8jF2lA9gBBQWnKCwBorErDYMoRkVDJ%2BgxxSZi%2BaAmUJQMtskkd3Ud1t4bpAl9&X-Amz-Signature=c12acd89928662897287bc44eb368a9117f3675fd0b704f693d2e53701c0c643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

