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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHZUOH5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBjJeaSUESqhUTtdQzAq7wTvqR05403sC4WZeJbe16sCAiBpUoiP60dBiCzHJ%2Fg5WRxjyzFzMXpARhyEFUfAMWl%2BjSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMteHUSU8Z2XvKKe8kKtwDBwjfuYZEEzJ4tLfzGZD94hMLa57pHtMcYfpfHn%2FFF4g3Slr1lKWYITEcp7oM7c4SeoHUj9G%2F77jS4tCXz3RKHhpZeJGeZfrKMIbMVJ0d8SIcZYwIdP5bpRukJuJNInJTSdbx1UwzjGOxlrtw0w90TdloNtaTnLUFW1H1GgKu%2B0AjQDK75stgJFO%2FX9lllVi646KEhxpqq7tGl0wagYJQGCxLpgShp4iirD6AFbP8bNrJy5ZrR5QIVqoEuVYT3HJk5V1D0hgGMQboV1pjst4oJLhrmPY9UMw7zL03dhCYtq48Kb5L019a4gQ00u0AfYhYTxGTm2hPN1BwFI6EfwU4gTFnjbDryoVtCZ7U55YHYWE2ag0HChZf9Mi1K3Scg96IIEb15LeadyFOrkpuure7PnpFy9mQS5zT7Fs%2Fu5zs3All0znaODyXjDAFG4E%2BwAFLQuBPtxocXivs8M8rTPzVxCRYcxBiIbTXKUw5MLHjs9dU%2FRbjocd0W%2FSCGxk70PU2hpKYGYuxZ9gu7ulwuW3s%2B4wbEjE0CHU%2BdjP06jDl4nYnyk5DZ6BZe42ZurctKkGDV02S02d42S4OrcgqWwAC%2B3JlT244BCywCGwJpEHUTIN0AuK11m1qTrppxNYwuMHByQY6pgFVp2WJ7l%2BqP44OJ1QkoIFDXd5jBflOr2GuCoHw5wjwxsE9af6bJmYY1Loe7tqix5%2FuM0W5v4fFgy41T9JSGDpR%2FrIB9fENsaH28kTq5QvE7DlkFjaJbmHmIl6pGpQRPzZZ0qm92aPMbBP%2BYY339cLRUmlTp272DvKhAXC0agIMXeMPSxNRMTitxsasrC1uEwQgWnSscOtJhoQsg9Jke6aq%2BgIe3EjI&X-Amz-Signature=3d45934cea8ed5a93f357218671a20cddae8413caf1ae7c55577ed9ca204e898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

