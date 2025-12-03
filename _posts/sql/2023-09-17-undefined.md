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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ECK33Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICtDTuazkfube2sbx29KXHf3AYmF5WK3KaqvIFGTKIurAiAcnhKty1y2W7kVNxuGDV491%2FpeneJVRY5ORlSTK8%2BXaCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMF4%2FzHFqTF7NTgwFOKtwDBgugTXlq09JmZjAkmnNdqMbExzqOgOJqdpoBCHLQq%2FUJ7Y7V8T%2FXAwEj%2FVHLQGppaCKK55f9YkkA1i%2FYADDhOvnz4Dm5AemSPB6UVZrRZlGW9VfJ2hZRt9ef2piApX9EsPoVhJSCd7pKOwPyiNXs7Qh01rUA1MvlfzKj45P2vrcji%2F10uwCFiyJccd9g9CEEPxyq89XxR8A5Pipgbi1qmeJnnm%2BaDueFbTsuQqX9o%2FvdsacwyoBajXouec3myVqn7rxcbhPyT6FeZzB5f5XPPPPpQJEfuaET9kiph%2Bg%2BUup715FO1fP5H%2BaKNvk5Swx95hM68dvvWpgbGf%2BpzpTFQ3MbhAiIxSC%2B5KE%2F7Lg5M9WXASgwMQabSNYilSmLYAChd7TV%2FxZ7OVOmOAenNSniiTrBeN3Z68hASkyd5MW0mCfZ8%2BgMQ15nQe1zQKu9xQsmYilpNMvlYQNxY5hNvsYt6kM6AIHGEINNq%2FOeN6IS4zfnuXo68lt9ML7QQW3Vpi4eyJkF6g7KHSyJjtkAkfvtS63PlFpLuIxQTam%2Bjh%2FB1EwY0Idcaoj2NqlPdzWbTaJ73C5%2FuWv6psL8FUMZx7rbAGG17nx4wcavIi2jKET%2FF8FzwReNkrXrJPSxKkEwx%2FW%2FyQY6pgEHY06zYu4RHE7epbKOMU1PqiDqNQVZBgg%2BxA%2FSj8xxJuUAn6QYbZ%2BLhXzcFc2JnDRW2dZwlqZbcUDBdbh4gY766FtMZupS%2FfNaJXGj5PCzqgJZbMqjf3OhHJHRT32Gsw3wv8nKWRRXE7RiJuU120lP5kgG19xoAlGCtphvy3q1vbA5zn9iXKdOJlEzfJXp1XRM%2BgDXrdGm17gLSha049hvmkXUToI1&X-Amz-Signature=1bb08c4b3bb8bfa71ed6e4c1033c0c57d7fd3b252520f540b1bf8a40629f09e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

