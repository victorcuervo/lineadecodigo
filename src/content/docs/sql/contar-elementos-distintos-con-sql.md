---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2UU75L6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICkO2RbAqXu9zspBKgELJcfC%2BiHnNn%2F8eyfIYmabAHK2AiBMOxEedJa5Pzhz%2F10Z8nURYrQOelsM9wpxqooOyDbUfir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM1cBwhUh%2BwzJfZg0AKtwDroZRJnRPRvTn2pNvqaS1X8C6RCVn1UFmGhCxkpYTQuldk1xpJubF4uGMu13k05CRYnueXw2u65gTUbD5Ld9HlS%2FQTsyXw1WIHMaNf81e%2BdJOslWX7ARFjmbcvdVb6ta2lhQw%2FyelG0yNCdFJJa4Ar9sZV4cCU3GhRgIi24lW4aTa038QZOxmKoxK0ILvKJHs9QgWUEOAuRF7vcVj7HZBkszcG9C3QAN8QhKzYQ9oVmwmbl%2B4e1sdkF0D501dwJa48Ch8FrBclrR%2BiUwY6DG0zr3UGP2TE7YCH%2F4%2B41kDhFeZKubGb4x65XgQIDluRvI7dRMgw4War66WOfT4eM6VRTgayIiu1gloHKLIZD%2FN4RGPNIvvw%2BcUE0N5eZWvSTbV%2BD1g8jkNIwqOnbTylmihcIUGi3qnJ77tASZL%2FVuBU1P8i7atqM41%2BkRc1WzY2ttZE%2FGEHEDFvEJb241Zx%2FFIXPtFXiPp9GKEDv1RijTsBxXvgy31ItfAN%2F%2F%2BcLc8TRCaQ8anbpy4hOt%2BrW7zOk4bIu44L1v%2FfQgltFE19adXLuRvYrCYZx9jAvnPW7H8B1V7%2Flr8dAVsE8N%2BH6odv0EvY%2F%2FhWlEgun%2FC8z6Pk118cjm67yQX4wp8uy8RXuow%2BcrEyQY6pgHqLNVPyZcCzoqTmBWS3Qv%2FHhfanVZTicwDeiUm8SCo91FxWhVekql8w4Ahwyi0S6SR9aYR1JPV5hZWo3GKRbefGR5ARxhtmJXWkpQLGWW9HRko4fquEMToiXLd9vqEeB4UZvn185ydduwM769%2FKdMiXr37bueAnI7QqKjKsZy3ut4DsELdnSUPAYzZSqCrFLKkhp8g9reVYvYuG%2BofLu9Flt%2FZzPCr&X-Amz-Signature=42c3e6193373a32bc1778781b7b0a1fd9afe8597cbfa83e8352a2a0a782f7f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

