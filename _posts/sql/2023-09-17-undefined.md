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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYR3L6H3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICsT%2FqdJvMlCv%2FtMB7MoPgo%2FXA2P8SkUu83Q64g6bTKIAiAgpHRgtwYnJznQ1yIcJepvagwsHSmbgh%2FgfvgJ1aUzEir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMntJkFnDCXWsvtLLpKtwD0ushgBxUsxm1s5%2BL9RAmaHBuLQ0QDef%2FJvBaY06uVQxfXRneSld8qwDTTLNnaIV6%2BbPdyje7ydCS3XoeSF%2B1AluU5dKqCS%2FybrcSEePh%2BvYM3bQzb8xO3kpcuuMyL%2B09g1Mi9KfdvRLT2hGOru4zr%2B20Zrb3OA1FIhDvNuO1OAU%2Fd7qGk4io53rKI65sKXN5Wpa2NBEr8gQEc4wer%2BzGwfZcTlIWqucbZiDAaD2oodSFFidYQcuT9Arb8JqsBAC%2FqkHCVzh4%2B6Tf8hFxzMIS3Csu50UysDI3448lNnON94xsFs97jSfNB0EARvX9ib9KTbzc2%2BehNaTdgPgYn3F0FQQg5wJPxNoT9jYOKPqtrqexehjDIy0ppG4VnNCJ05ByWpaLjfn8UVILBJZnpkFblHe6n7oWIRv45Z050xmGlLo%2FAe3BCzv%2Fk9r65CdJpKt3ryKUodb66pv9N29WqN4VyAoxiTjNb1sIPtAi0xi6hNmBjVywsYP6XfnMGhuxIjjKIr%2BaDh1LQ%2FjesSWdRcgmN7IFjVHog4ewZYzEQj73k8TfaIybaIvxuyxyjyLrQxAIWistVDcXZPVkX6COw5fEIeISuxps6y6C1DuyHO%2Bi%2Bvr10HgpASeefTJNDjwwtOvAyQY6pgF0J%2BRKk0JIHH7esH4vlzZiGtSqyd0%2F7A0WiIT%2B0Fpzd0OTRBDtXl06ENK0TW8IL33m11rnjzKfoN2vk%2FQoQh%2BiU0t%2BlzuAW%2B4m5N3MPDPZgmuK67tToP68Frzawgh6s5vCAjyvZmt2TeM3vc0KYINuZXlJw7snI6DOQgQ5vUCxJLENVtlLg7sUMyY9JzXjip6QqZSx4%2Foca%2F2lBg1HA8H4M5crdbVK&X-Amz-Signature=85e47c04e55c51a8c4ad35d0e1a053db31fff68db09cb8c97ae05f87a5136f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

