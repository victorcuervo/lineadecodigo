---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLPCOLWY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDrmXEtB7%2BimvVcxjHUh8owCzu%2B7KY5pJ5gbglowI%2B8NAiAHRVGfcsnQre4T2L5yi50hCf1bTLeNXUHI%2FTGM10Gguyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMbmCmM70MWsvJ4CcGKtwDVa%2BoGvoiu%2BCA4WFf3hznLcB9dWdGrsC%2BvSJNcNoGyLN%2FZ7rmKk9AyCH3aGiP5NYfPYvyR1YuFiWq5WGLi2AeYbf5oUO9p36Mn9tVivciNwNCAS59HPzjpENt0eX%2FrF6cLv4LxDANdXbpyO7NJZvwuunYIgoj5jPUZEershUcdidPDqEgaFS1GxRfOmvJoS8nuiLxQUXOpkBlFlcNFn3ZC%2FIWcQf%2BOOICYuiAJEV4vA3e52LdXTi5ulmj%2BsCv4XbEyPnlJjV%2BwgTT36FpKlUny44O0lyHKR8FqJuA7kXu7TIvco2vENOnpAYnYFgXNUN1abb9Mfx2QVCdfJGuemq20s50p26WSqhnLFXIDt8nprChc4r8ZGM8sDpGb37U%2F5L0EEFAJrcOuTWc3aIuG6FrjvtWbj1IyR8x4%2FpYibYyKe2zQ7PDOVSHE5jtyeFtKOyOgCwMVbTNqbuKDJlY3u3EVY2wtDID4JKZ%2BptwjIlA9JgY7kCaXC5T8CRwZHyS3mRHWvD1gEBuAEwkubG0oWvlWW1CiLUNeyD2KckEl%2B3XE4Xwq1gg0b5Ng%2FT8NQKfPcPpEPDFvOvu7QL0xnZL%2BVb%2FfaWKWK0uzNb9%2FO2CqOaW0qs8L8fga1kbyqaPR4IwhobFyQY6pgFQoYeTF%2BNg18SS9GzX0dvp%2B32SK8dOdjdgsay%2Bvan9n7CSxIvuFqfWK0YUYrpauo%2Fg6INcxB8%2BB3INtN7pb5qCvqAdOT%2BC0eHubIN7dq3CYe%2B4UtgnEtsqUnniUzJ2pP7nM%2FGk8D0Cwr286u%2FVpmPx5MvjGvnRlgr8cJRxQuldial23Dl1IA%2BjtqDQKeJtgYtcDKsgG4tt43Utm1Tidqy6v6srTnH9&X-Amz-Signature=199d42e816e23747bb928f2828a5479ace579f38fa5278fd44fd5e8c2a09a177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

