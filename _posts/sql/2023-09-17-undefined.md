---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXNFH4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDtn9eVGIFGOKAZwvxuiTIBAfgW7QJ%2F%2Fct4YLQMYpheLwIgVLakhSHsws39lKQdchCCKvqx9RSenZcMRYVqi31kiBsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGYdsHmS0FFsqizY1yrcA4fIX1Mc8jWOMVYdGQoUXi88%2BfHF%2BVtFGeRGZ9nSJUw8jSPlkIDnwiTQ3OHtrDjlfb%2Fwf28ZSYcX2de%2BXZs6QvkaBu7aMVXqaBvRmMGeq6CL3oGfalUIktL0kEeLVoZSCk8cb8ZRUqGTXHCBNqZMHa6tv5EyG220WyuFbxca4LiD7wX7jW8YwcFkEJgpJje0mbhW1CaOlBUiA89LR4cTDFWKdI971feKWG036X0TePtlkRvV5TqkG9eqEhFKL7GhRLLNBpAkNO9TNlzGK1Erf54l2lyM1fhZ5wI6hwvjXq5eDMwQxQtbMYFzU0lSeSLfHGZkVSD8PgHivgN3NbBQW3s9XG13SQi%2F3SmHUUngTTbYXvMTrelVC9Z4RoOwWAa6zQYDcOgRPceFu9OMvbQxRK5YxSL2eNLV3CLE93eFQJIR4BoHI2F%2FiRul8FBqPRWhtzinE4EuTUT%2FEzzK6k%2FUenq29SRLmrgNH%2B7LZsbywE4rb5mln%2BPlfE413JSRteQ0O6i5Bv%2BarVOI3wpH7SHq0UUM04fASMcgqsWNcSf3nIXdqhINTJHV%2FkQj1uMxzXXGRIKT1IBXMyQXPViqLDAmEzPhR8KYkgTXw9ZoKo8PyEUK%2FTjNS1dd6lnzSPfrMOfAwckGOqUBuZWani11cT6y2dQwJEtKiWi2Izqm0%2Fza%2FYnw1Ar%2FAIkb5tVhOPpTY9GFJQ6vOXQIz5JquLTOM%2FY55KMoxctyc7i0fuYfXb1u3sCs5U%2BXyY5rOCoWS9zL7nZJxSN23a6NKYe8Q4OegNenn5rxk4OslLIc2GEpz34Q0hOV%2FwFw9riUSnnELhEKX3I336mdNUEAcAb3TMh3eNdSNRHB2Wzp8NCthm5w&X-Amz-Signature=926170e3fe59639406aaca3b8861567a8b1f99155840a37697e0ae65ad88d218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

