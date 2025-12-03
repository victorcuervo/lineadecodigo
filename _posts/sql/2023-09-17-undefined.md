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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653D4PGKY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD77UG6dkYedHbveSrykoMTlPP4Pjfr9hyCR2fszHa2gQIhAIxoD72BAYTfyWpBc%2Bx2wKxTgMYh1Ji32d36E%2FTgG8FYKv8DCC0QABoMNjM3NDIzMTgzODA1IgyOq4eckPii3qrn8XIq3AMxDaxRkP70b6OZHVw2Qr3wNUZZI4Qz4ki1nv1XmkMZ535vdyJFDTHdf1V8DYQFmzFwa8wxuDTkKWshUSJ304yV19ZoRAD8Oq%2B5k%2B5mUu3JaPdY%2FrPkw1Uk3BfMZ1Vv7WurfGy70k%2Fgjx%2FzWnCVs9s0jnWLsniO7lJgYXUWwzbGRgvNRvQuFUzqyCZ03NTHUq7cfV9mEFPpRAYKN9d2lBxY2jTXuaxEa%2FrakPiwLnKC8esj0%2Fqo3y%2BOOH2xe%2B3nw98MNXMEOzjEy93t9ImkSwUp2XrGcaAfEcETtSpKXNZG7rA3mSkiYe2oy0SxeNI0L%2BUBcte%2BsxX4CjIVXX%2B14hVnGEJez5D%2F1J4cpZvpDZFJ5IXrXcuYBbXZB%2FFMJMMOZ0mJ1wA2Zga1N122eza1Eb%2BcohEslIuXu3AOFZZBZdHDNs0ylRSDhKRMkSc18RM7kF%2BFQTCD88id4ZY8cky2f1uWOY7Xj702hRgnQ4Z8oBRwQu5OxkeiXTNtlhaOCIymPnRDDv1ODdEDgIKczzXl%2B8XTzzqaLkLpHIs3%2FHSNY6Efl0CR6lnaD4X55BHS5fkduaDEp10QVI4CAjdSX9cDMHrBHiVin14iO64np31hSRhLcsg%2BmPHYasgN7%2FOe8TDLzcDJBjqkAV8E01L891FX4nZAEld6xk3XN%2FZWI17oZNmYGnq1QBWmWUrufSXxGnDmuNpDdGBa4O5jAeztYalSkL8ur%2FYB%2Bjbsv53KNsazgRw7WpBSIeWJrYu1my%2BBjJ1zlbJP3bQVmaVQ1bWs6PUuFRSOPMXgTGvPaeJrGFDnqDe7Y7CAqKIwzuZ75q%2FhWbKGnAJcoghxRwPuUh93nq%2BsoIWbJ12LNJVDzsSQ&X-Amz-Signature=a0b48853e46b1f2acf4aacc0e398f1f87ad2ae7a1ef231ebbca040ca1d050956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

