---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDW2H6DV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICo5t2q2hMEvFJBvGE5psKzNM4KmQuxAyCaYyf4%2FA8tgAiAtTe6elLNC2OphE2W5YzDFDlvv7dELhTQkOPGHr7%2F7hSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM1mU3YNhx7bx3zDtwKtwDcec2%2B690t81dMlbv0ruURhomklplW0tR3B%2FFXNOz11OBcjloMhBKjJDdsUf3tf0DTZ%2FwuR0hHyePV2ZWKCuC%2B1%2Fsa53hHX5HsOGX%2BVib54gvWZ5YpDbhiBBDgFa5FJAi3FdjeDgjShzjmwIl4JhJHlWZ6uUAL9s5MBoikTHQZd4lK9pP1GD0t1nLGEmAD3992P67K1zOnNFc4jaAO%2FPpWkF7V0JAOcILwh0xxHw8mLqQ4TFl8GEMm83vLNu3OSdEwmJcxjjVeB8cl6nutlHdobjD4oeOwymvQdrlULvpQNAF8CgsHw%2B5bITK5pr9SvQtGMqkzRCLuxRLVY7izpBskaA5PIvhxx%2F%2BkmVB8ay%2FVAOvCq%2F9fjVw%2BRjb3RuOUNgsH6IZle7vDbKaW5XqOh9HYjkXqixPOw4spL6FwpOpIzs3cKDB5Q4K6dxZUja6Z2vzkThnguwQ%2BxikhJxWHPLfcZDGpRWv4ef5nc3dk5Q7nUQFnFQHkC5zAoUNvqh09eqDDorqz8lmONIEq29kxRTsf%2FTWspRbBy9UJjiWiiKk9Q7PbzW52keDB60eDazo%2Fnphri6yzHrUtRxxFfIWpCEQdFN9amySUa7mZRvC5JtV87e6rZ3q%2F6cFvmTXxIAwjL%2FGyQY6pgF6PpKyrE2lR0riAlH9FYbfvE3WNFCESYgLDuvZnrh0nIQcXAPxW52wwGLdI19utcdi5NOF%2B8QgkuPTWqrjLR9Yipwipqsp9nWc%2BCqE6CplA4B5109%2F2O22h9vDSUxzYKl7zUXaVvNJVEr%2BA3OcNPblYjAGeAIQ%2BZ5k8s6tOA3VQrszZChoiBYPJgplxeBVa5LXx4rqgEs1UXkJ8ro8GhgBgdlOSWzM&X-Amz-Signature=d253c033717f77214f467a3ded954ba682e3aa1dc1b5652af6dbe0129be6fd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

