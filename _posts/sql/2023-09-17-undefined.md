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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PDB7V4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDDZIUXMZfP7AiJfE5DXerxE0Caz0VD0uJgpCm7nSgdDQIhAOlRqqYi%2FTCVIR9FYQ1K7bN3T9FHhmXYFSYuTSLPM9%2FCKv8DCC8QABoMNjM3NDIzMTgzODA1IgwdmmVLULKMObNeE0Uq3APofLRn4VLaQSluyu03AfgM9qoYB3rdp1H7d5KBN2hKG8YE%2Biqydar0VPV1Dnpeup%2BEPw%2Fvw3ODEptjZDRKTtraC%2FBixhWur344%2BuRgkT7dDtXTUoNP0hngKfqWRCMSIiy6TVkyBs5vwFLOPmmDYlDcBo%2B39DYX7MgtBB85eggsDEQJGltYJpoBsLd9HR19J14qb3OW%2BFMoVJMTREwbLyIUKqDmkXtlHJh4pnPJvrGFzyvNIszT8xdeKIrize0JsR2vjZMctrElXWXMDJ1DeayLCqmggzrQDhmXNWjSMViQFqfyv7IplgOfqKOFLyGsrVFY46eWGgw9V9EjNIZmSVNXkMFJlWmRbFyDf%2FnGpQ4tGeVboVpAfspKfMdT6xHlySliJfyaD6B8%2FxdkAjDXJ5td6ycUC7PsyLezDwHr6v6LohmDYFl0%2BRnZtZ8wAHXfSl7o%2FOGALvpWb0JXoMwjmv461d84RKUpMOhdgMPwndS9ocEyDUSbvMu3pjIlVAfNmTcuT4GGx6gbQmn4PkH5lFO2Y4Dwy%2BHxvpKtN3U%2F%2Fn6%2F5tfJei4nhPHQU4rJdnEkGQeHsMLODenQ0tVv8JQr1caq5nkjxR1mYdHfnHAQA1xPv82tVu6a%2FsZo5qtyUTCqh8HJBjqkAabLyadpR4WDwtUKOqIZRrikILZRDViLmaKxgaZx65zDQ9e9biPxuqVI4oMRJknr3Ooja9mqYlALN1Y9BZAneA8mw2%2B891SP5rEWpEpkhiZiWPKfryqJV8xWEH%2BEoKwux%2FSYVA8DLU5Bsr6c4MJ%2B1EubJ0DKgFnwKlLHYL11g%2FtwWq0re97L7vrKYdRKkPkGNI5Fk%2B1c2XoDPVLr%2BZOXyBW8P%2Fht&X-Amz-Signature=2d746f745c00e06e260984893d2766569a43809348c894cb2978496b059277c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

