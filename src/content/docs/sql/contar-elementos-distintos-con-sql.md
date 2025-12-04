---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNWUBUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCfJQGDKwa4ZAHJkckoQL1EPjG3dnUIPOJWFtSfzEEFjgIhAIRiK%2BnvNWKxZZQFpkvsNWwfhZMyfz2AIDf0nSajdL8gKv8DCDkQABoMNjM3NDIzMTgzODA1IgwMnjs3ZoxNZmXZVvsq3AN7mzcymnT3TvYtPsEGo1f%2Fx%2Fycc7z4XYJqXqergWSawOVBYbN6S52ljM%2BG1G4tI2POiHVRTcWqYQfWYlwsvqMHiLU15YCclDdzBbMaVDqkyDeOukTtYjwhGqkTvC0WHIS04FH6LoaEu9lQTpLPpHEOdqIMDs4ObD6p5yeYrNRrQqrkAXsk6gAzZj%2FMUqFTuEZFugQlN%2Bwsgog13uYx521b60sw5yMGfSF%2FbXevA78l2Ig8JVJQ6y%2BqbMYpk6v0rmyx%2FwkrM3NGCLHdca9d0MiElEzkfEFtdSnR8BWgiUXBssw%2FMCXc5ynb39eRe7N6ZzJ4GiPemXxUenVRPzw4m2XaSQui4xF2mgGxdrQbmumjJGm61Fn0v7y3SYuEUEKIzQmHMCUgRqCNFNRewDthm72Zm7azk8c%2FhB468xlODk8%2FZiqVOut8IaHwDrbOM24QPXRxHaSV53IKE5Yg5wjyQkFhf7HENBdyNnakxMOE9shTBiQlnaDf%2FBMCew3mfwDaj84dOIamgRNKEVD7E1I8oKFkHnAAjpmDt91O1n7Ug0nnMtg5y3tyERSzbfvz9xW3s64M%2F%2BmmT6hiXNv1MEvcvdmhxFQuPYAZOK%2BECEuGNu7y3Mny06yO82REL2iQWzDElMPJBjqkAY6b2FZ15GH7d9PxLCRsNgBqzLdP6xQV41AA78pA92lpuqlOl%2BlD8FXxWK%2F9uBpGZ%2Fsj3VijT51CH73q1fcofp8flS%2BQloTewF%2F6Ugda1XRZzcG6kgtSvFU10nAwlmy%2FEjiaPSgbO1UJRYkUmVWrcXWcOb6qjuGQr0KoqgZAH746IgutJamyu4Uh0zTQTqx6gKkW4T8bqcI%2BXj%2FGTeaZUQXLlsZW&X-Amz-Signature=bd569e54fdbdc464b00b9a457fc2f91976c2a4e1a6f880196c22893556fec520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

