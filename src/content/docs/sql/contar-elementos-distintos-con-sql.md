---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6F6ZCPN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCKmjLwDK2l6EluslVpSosb%2BwzKK%2BR4cz5pdLDNuyt9QQIgL8RaphtiWSJj2LoAmkeBiSd9XaKXj3v4Nx6Ks53VHfUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKmmM6J43bHsdkAEeircAzQRHywkXorxpCCc%2B4m0qmiZ4%2FXtWA%2F9V4ab0Jg24y67zHRh0T3ArNdNGbZ%2Fkfuf73iL4YhuTPjBxKlXrKbYezZN5zZOrIqXWi%2Bg4%2B2ANQxyaJyaLUjaS%2Fk7ylwzOpXivyCTurRP5l7%2Bjs%2FBH0RAtbC4vd0OBfTn12c31UIzH9K2dWY31p4hq72eG3gpBs2pwNJCycPRrWgv3hsqHuc0j9YpMfiIUJoF0XQEFMSr0vTQcit6XQszwce7Oot%2BGKRM6MAWwUYjVjEEYcGmxJKlHImD0xu35owk4Z6jlRYYx4TziTn6WKCk3HCr3BXYRRhGKVRGeD%2BiymRJwX%2F1WJquZ5l3de83CzKFWVmnbAj%2Fnhs3m4tuhTGpZnhinM4SfYXwnlcRGMAmMJdD%2FOmdn3NNOYESh%2BSCYkekWMD6FN7qzcYLKqeRrc0BFoOWMov6pg3CfSDWTkJSNtNX3pRfBHNIZdvDABXQrBeN7S32THtAX0M7ufIM5v%2B9SnEUp7rmA%2FCtP%2B5p%2Ff4P4tabFzyqUutVP3gaURe6qRFSt2R4PbTu9I%2BicH02BVhgeyr9ToDGxNCyCGgp6uSXWUwZkDlz5F8OcrrqVrTlRtpakjGpwglAFiGEjNtgucwmNx7N5ozfMOahxskGOqUBOACxyJnQs%2FDjSRdeFPidoJ9VFz2bOA9HP4Uv9F6PcLr2ugKtkhR7GkCXDlY1zb3lpLQgq0XFhtal0WE%2BvInPMGEPzs4TiDwpyFwKPpoHzrFA0OustNZjErOBPlASaj5u0U%2F96mtsRAo2r4g%2B5rC9mmca7MsJ05fZULX5Mk7FIjixZ0LAFtHz23v5n8e775OJSxKOdfJljZjzRvyciCQ9JkHh4WVg&X-Amz-Signature=8b3cc56cfc818988d4ff09f68dc94681706cc1d7031b95ef73746b9dc332fe5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

