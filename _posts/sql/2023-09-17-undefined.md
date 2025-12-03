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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZRKAUT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCPj3cokEEpryRiyPDYXNaJgSsEfdjOttx1j5RiibcangIgBY%2B7b6yUmgPEQRqdFVGLkEa3x5%2Fl%2FpUbYLgwBbwCjP8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDC8aHahCrrkFM3AmpSrcA21jqXxDzMaMcNjjrnJSH6wvs9c5NDYKZp74r3WmbWW8aYOZb4E%2B6d2tV1ikWQL2gDeMBWXEW9qz%2Fs%2FtyQkZ7RAC465wOJe75wvOLbmV7tz%2BRGCSQTR%2Fp8kQzo9%2F9YNIUf3yxqCw%2Fjd3PDvezVHSNOeiq9%2FNpoui3WOaCaA5ew28yc8qtD13i5reQl5B%2Bkyt5JJNM3JG840EfXYo09HJDAfx%2FOw%2B%2Fz%2FiiZw8csC8aKc2wgBceJaLdPRX%2BBVpSlYIqJXH%2FZ8qyFDH4xuRwltdg87BtMXXIRuu30Y63ZS84OWts6bj0q%2FjlzlVPwIFvNPDsNxJx8jWFPWWWEjxdiJql0Oe%2F2rdBYgdnr7pLuDzuu4oWde3CFmK1LUHdKQ0vZgdU7f4L3Rc3fEZTnWWFMWN6zrGkHmrtfxiaseow217tk4xPNg7aQcU%2BWlP7nSUMqDKNkCkVp0oSNxBmuwE8Z4leTM218Q4bpEXbYAjKDcQAZgaYaGdFuuaH8OsmGnWJAzvQthDMNNASZz5eUmO4F%2B2%2FE%2B1FMPFDDiG4Ewn%2FkWPky664SbRlWPNtmsu6hMiRjdGKtdDdPcRzPzzyz5O3K7kPiMrzMkXj60Z7JUey4ULzMz3oIob%2BJ6D7RlpzOsaMNuUvskGOqUBPnYZY8kyrxAJPMrJoHsyQhdgarCWFRw5T3O5FajlWwxKXEoUWmKR%2BmKt1iljlnfEtzSTZjPbEhJAnfsa3j5m4hEYpfKQINKGwVTzpn%2F0iATUR0XLl4IwxLZhmeHvxrJoT1IlRXPcaqMNUV8CQSaqMLdGDe8zS3CUvEAoi0ahbC%2Ft2nW0jFpbTqQhaFh7t0q1QB4sSrE52SaNothl24DNozJGt4N5&X-Amz-Signature=21f759ada614d35ec9bcc58dab90099d14bbd09f478e9b16a646ab66743ffc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

