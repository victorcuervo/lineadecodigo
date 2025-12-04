---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PI7EGGS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDaymR7GYkP0knTn3shdqoErYzzMu9XxbL9RdnE%2BqsyuAiEA9xJkr4bpvAk1iR3IvQsGlP6IW%2Frs7SBtM7Ss7Tm9rrcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDDQ0N7bcv1IzNaKkyrcA3%2B3%2F9Ayptd6UAcI6Lbu1ayeQ4iypBn4QD1q3Au5Yb8DTwLLH3DhcnHVrrNjQiXXdFLS0Q53IXjcWdt706jI7EO0I3al%2BQ7ZZyQWCjFep4MkURKX%2BRGkAgx%2F38MO6jtI4zCI2QYTvRoFaqSFvcYldzt%2FhCQC%2BGnNfs8p%2B4zAqL4WBtqWNqA8iz81hK6oufRLk22lk9LOyy8TV6deh4GK75h%2BxS%2Fkq0rR2meOdVk%2FBzpG3EP5wAytYqfQpr%2FXdX3%2BmemgQd%2B%2Bw0POhYs98Fy0edgySKBIGuUibRQnsI877O3FUKOBZdNkxqeuv5qX2Kff6aY%2Fri5sZG3OMe4XF14aV%2F%2FVVwFhj90LtlXJqDgZu%2FDrAMTf82iy3ZAp2EAr%2FYvUghrA5T%2FSRV4P05X2MBCI%2BJVlXtqrAVjwvBR7ENOFe2LtIWIchVk%2BYcyUagET3djn1Q25oKtRXBBYayHXx4nyKMDJOSepwhjFmgkT0R5CigaYwWvOzlmJA4ctSK6N9gPRK3A2Fyx4J33mlMRpHYDTc76Qn%2BRnsR4tEGX1bXPOfOJ0cdRdg6JuLFrE1xU3pjVPUrYK%2FKid9YAWYJxqyWkpBzl%2FJmCbqO2vvldShRF%2B9sd7dpRDrhertYuNJLDrMOODxskGOqUBXu4v8Je0kQbz8lYTLj4ZObDc%2B%2FzeCtZCAKa6MsoSzru4bORcMfybvvc8KCWG2JkJvZtugQIA6r%2BFNQBXhzfwn4xRRRpKZ25zYZNcKsxISBfEnvYoLwCMpHlb4xGRIp6Wu5m2%2FhIbZPx37MbmDFyprPYiAYqIXRrIIH4fbWTMnXqXvHS3MD92PZwp6yoqKj2QSb9zv5ak2GOahP3XobuZjl4q%2B0h5&X-Amz-Signature=88a35894e3805fa80049727ff73f3107f0c48bdb66b33f0bba61f73af14b0a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

