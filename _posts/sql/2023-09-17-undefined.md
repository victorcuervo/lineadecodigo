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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GLADAAV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICYDus9yE7JdRmtJifWTm4Ge0Pz3XaP4zbsYWL1Nadq7AiBhmJMoDhlV6Z5a5zckz3qPvTMNm2wnMGFXbCxXRFM4Xir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMbYekusRJ%2FZRF3y9wKtwD4zktB4RvZ%2FpVdLDmLpYzXnBDu0o8yI2WKBSVx5HQHChMDD09GDUn2bhsnzDu8FyOuDo2wZINqgIXyjZ1MvObWY3Zo8qbuMMtFPq7a%2BBfNXocRqwVov6bfzci0ulGPAcujPib2M4bpjTmXSemZroeUGI7oxXZr77y5e4iok1DWA26j3OKjNnV1YgUlcGiVyxZ3151DmHu1YzCGhj59iU%2BNCBsScd0Oj3NkQimA9FgUAPhKHfvs4rDZw%2BKUa4fGJ6Ux0vXnRvQp6mxOvaAi9GrBwGFQyGv%2Bril7TIttAlgMcQGFC42LJNjqSZiVU5RUapxH6DGAGbpNfnB%2BLQmA2za2Ui8vXnxcfUHNImTetcA9pUBw6T033SDd8W8SADo4q34q9u5yVMOfdlpiMnN4PY7mw4kR%2F83mm5ENMpk2%2B54Ijklf5zW2putSgDzNPAxbAdVFVSFjKBba7wdu90EV8KyRRWyylbr%2FSXN8pq%2B25HdRLcWOBo2HmpBw%2FvvvITeubLqUwVwGjbUFx2LgWNP0LvTYLg%2F7IrRw0OVyinq3z7tmVa4DIABEZ8tgP9qY54NNe9hG1xbuwKHGdtmWJZ2L%2BMfV3k3gk6DlZbI96Z9Z%2BVneLOF%2Fa%2FvwKLBC45Imxcw4dS%2FyQY6pgGgR%2Bc1vuSpwcVI%2BQjwBbxIxKvZW5OueCysn86x7xlZMu05NtPk8q3031eRBamSCK220lg%2B4nKabO43MO8mYvXQMxLsHk7ymsudXzSwiV3qhWANsqmEuqKzNB6lM3aRtysBnQLKlRL1BQjQR69Ch1ax3XUMNsQW8B6%2BRx%2FIRpoY4GyTYJdeT9YrRWKjENCJk%2FryfJWOtxz1gS2s937LqVTFY932p1wI&X-Amz-Signature=9bb2164f26e561c02ed10c4ca7a4b2fbc1a78d9b53f3544c2b65e88af86c952a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

