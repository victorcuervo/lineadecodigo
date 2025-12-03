---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQETJR2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHHoNH9SKdKRQRzQeC7wTZ8E9YscpqaiIFGDksb3dM9KAiB%2B7lIJEYuczktz7mlo39QiwiGYuRSAOGxRe0SRD3cODCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM9e0JIdiEYD%2BBAsvtKtwDKpfHkXf%2BOE9%2B8RoFe0khk5eOGf%2FnqUcP4nohxYR5tcyxqbApfPVVBMbQ3BHMUCtCV77EGaRSeCB89vXVjeB6GRhOoKDXUXm%2BtEKzY3zxRHGeHvzFEYySEV8II5hdh3XOSJcg07DBpK%2FoXDniPatdYEJqxeVFDD6WhBX23Gef7hqIIvIWq5yWI3HvWBlT%2FKrPcU7fSgd4JZm6Tmj7Kc3wC60B0PZVc4b67l2A5B4IyoJy1HnhZFePSX7WpKGqXmE%2FQXLs1UGgVx7qK74RB7DABv%2FgIdRr7uEzLh3V5as%2Fj49XFnLR6j3V%2B%2BEufKG05lMmpV0Yrz%2FzJ4%2BbIghIZSIcCZAWk%2BIZhowvVUj1tBnDeqaDFqj2vJcvzYH%2F%2BeCPcld%2BphMoQGTqk7eWUNlCNkjd%2FGE9u0FHl1yNpgt%2BLJ%2F7npQjG7rtP%2B5tC5nYik%2FAdSmdHyTZr8ySBTK3Ltoz5mJ7MEZ2v66zznoL8qTNquYYjfiEZfQkp3VwnnsDFWckUowDKGieQGIc%2FZ1gHIO%2BKFJSwVjN2fxOEpzh8iqlkQxW6IC0z72fe24cKz%2FVl9eqLS6HY%2FJDXKHVbhj48shuRxGDbC8AbWqSIH%2FKkYVxm7dTGv7UVAruSwo9dy2tyFEw2%2FfCyQY6pgGdCE1QYnpyguTyTLb6qWmmTbThUr58haG51mWgWzFa3CI8G%2FVp%2FuCq%2B70dme4GoHpGiouvCVX1ZYsR1Zw2EKAt2i1Gi2kldEVV1DAP3ZaTLlctUl9M0hkAgoAH2f1nEelOZIae8d3IL2gbrbg33a%2BNXHb8PFqW1LamRR5mXva%2FX0LBh3TV1o3qkZY1jkID7F0B3shi0KqXC8qCUUfJ4FkxK7wKj1hP&X-Amz-Signature=60de3d65aeb12232821e68d44b04fdede42344fc31a06be9bb7aa146294063e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

