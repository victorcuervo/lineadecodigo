---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IYVGT4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCs2yBvdkPBF657%2BLRaAG9m0Vijfdym0Akixd6redWYTgIgUhPxEcQJHnKvrmCfmsO84D4xxn6ohqDi%2FxRI51fDBlwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCR3uVzDaR2UABi7SircAy1JS07F1nRkLTTMAAK%2FJYllRHWlqv5li67SttmoqXkg%2B5LGgefw4wJySMM1vJpDa7aI2lKBrwP69hsraIyBO3m3vE5bY5QM1RZLP%2FOSon%2FKSpgrOKzE6hgEYwhXjhwd6t4cqNnB7NgMNirpn%2BIIt%2BI7yG4Co%2BQt%2B7vJGXOBu%2FZVSrijcU627IopT%2B5sMsp6REoAsmOr1%2B0v0Bfrgmzcp8Cf1ZXRYpgXJG773GNDtGJ%2FB1WTbKR%2Bh1PcgraRqwLc8Z8nxkvhf8oGDrSOlaN1fcEv%2FmPYzoGKoIBZ3BTbl%2FOQpozT%2BLj3wVn3k80vJ1vFvl3nXata9w4gycg7cN7SBkO9zzxcEaC4RccoT3l%2BUfdVFOt2BdmgvnO3jPugMjuY6rmtnof0Y9eGrL%2BftEglU%2FUYMZWCpa6tTZcrCK7dKPYInM3pULBgEjbpOSiFTKy9Z7tio%2F4OlUFn4X68HoWV0oAjkwrnfR6iTjgfmifQh0LjnGZi5PAeREBf%2FsdUft1zkNl%2F%2Btz%2FyZJsQuSLAe%2FBfDvciWZNtu9FiShKX19UCM1WjSRCYkRpOgInPTkDG5KbTJpuA%2Fx%2BG3HrTu1vGeK8hcBZTrx8CpVYZ63pa3b5W2qFPAb1jXX9zuqaVA4NMOy%2BxskGOqUBtT9AKSurEu5wU%2FseUyHg3uaZ5EVJ%2BJkYS%2BCkudornc9UV%2F0Dw%2B20b4TUhuh%2BNgz6rnuO0QBhEx7lognJt9YdiGR6krleLu334OahTZ8NdCM4Qawh199nHpERnxznfl83o9u3uAy4uabmPAMVa1KlVT6HlgESIacSYNCcTWYVaPvPaQtS8O4FH2J5nfgZLcvS0d213odXBfGw5dHIPF3d%2FCxj%2BQXW&X-Amz-Signature=823741d5c7ab46eb790229dac9f0671201948f651e2ae5f0907decd383cf915c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

