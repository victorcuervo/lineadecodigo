---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVULIEN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGcgDu5PzOPzgy4BFaBH16jJg%2FyFvhmU21TlNTczJqvWAiBLB3Os0kNGhe1SeNASDzRTsWk1IG4oLrSqVwrxgJQ85yr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtjmJR6przxhdXVxKKtwD77z7AeqNtFLpC6pTsGuVBGNPlbef7vc6FQeP90hPTXdwKKGQxKCUSc7GbEnJRvLjmlQyOQ4kSXDXPt6tjy0SgmjaYWD6fSf6wyKF%2FMq2TgFucjmhkxUFsc%2FyGfYnfJGX%2BA9GwXpKoMCI2qBVdepDZ68T0mDlMC10Jqr48pkKFA9c37Bd9VGi0mvmkxJRStlXFLNFSi1KK1fexPMJed4%2FsjxD67ldu9eZXWFk2CK%2FZ6zR0BKb0W6rmkKF29sgmkUo7BiYP56AAyw6Y9e%2FP7w6jqpYgYBaFFHUyRo1EXdWNG7%2BVIFaPjfL5%2FO82NZgX37ZfratOnwrGqIJzyJsXfNM5%2FgmsXB9UQ4QMFnnWVM7ieaCQP6Ir0R8f2vFKpH2QfIzCi7ZaikUCsLWfCER8%2BJKuuqRJEuiINVgBdSUaoSklKSEI%2BfYb9%2BEV8SAizLvMmTTliFx8eE3nwnMP9%2BRl3kwwDtpxb%2BpqDkf0Ddx7Nqy17Ya001Ignrvd7jzckCbiheBXu3TzR7nAwXVAHF0erC4JnXg%2BqqtCsvwB4nnetw8anF21lyr3MVlUzjLifizyEhCj9CgY3j6cNHqYjwxYc7yuakmWo3ahvoG65YLouSHauyGNIrIxcQX5KuZzpcwi%2BjEyQY6pgEUQ5u1DmTk2qpgIrW3IK5XAHou%2F1dUL1vFLx1NzJNGZK%2BIVeB4wqnqEJ30xqnO56D0Jzd%2BQBV%2Fmfb%2BHaUKLCAzt65DTfn9Z81brwV9USwf7Oyx1%2FYMFSulOXKjulFkWFQORl9KABNf3e0K8fuQZ4%2BEZvws6N%2BqyItm2e26G90mcSg%2BL4H7fl66HvwYKu4Q6tOMH765jjIX6MNY4QpktxoKgwLJw25j&X-Amz-Signature=0ca849afdf44908f7e4d95c7736e13f909d7716aa19796d30881340996442eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

