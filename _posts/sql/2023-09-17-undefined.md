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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APO22MC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC8Zg%2FLDraslvMt%2BikT1Wizzq9%2FWrr9EaVm%2B0u3teGg9AIgbsFJrFsRKaVp6RWgRyPTiNkpda8oD4SixTlLel9JEo0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDbiRqCkQeL2qnx9SyrcA6wMSLXJipXdwCN9a5Ma0ItQUrcEtUQnfhKY0E7Ndx3b48HJREBz%2BdSfe6HpXoeO0Nn8Ov5XwGgxwaOpyJaBfI9EuweQH6QcGIuuXMNp7t68OPdafAe9iCBnLj5nEGd%2BKNWf%2FazkJQ%2BBcVg9FI5LYj4FXGOfLWyMUyj4qne0ku%2Fe2S2pEVZ9BjwiOerkGlhU5nP6fOLl3j%2B%2B6jot2FxSKqZFVc2B9pd6Itm6xQq23okR2vF998p6zTsxAark4NjvcqAdfw3200VR5GpAjBGu%2F5TCezAt9l79D0OCZIH9CwWyNB0Jc8IpO5qOZFYIPntdDbdI%2BgbA5ZjOY7OZ4GKFp3jMTawvjUixTOqlU6XHh6%2F7hR2OQ5ZWH2BT3NpgNAKijzujJZlJoAmYb37goZ0jqCzAzjq98sDRhceOLX6RSh9Ow69u9mVwoAz6%2B%2FUyvEuORGUiZ8qWEnZyC1ajEI9rWrTY3AiWqwxwKI%2BQjCn6VZ8r4BuV8fyv6DHN9SnVyhIne9yUItcvYsrICALs6CTdCfsHrx02XPBzeObdCI17udgIHL07%2BQgFFkT5Jg%2FZ2zO2UVIuGR2Ho0CuJ8r8zmCWwu6N9%2BCo5XLfqMgFb8OGaDpU5frSHE7brsfEchMKMM%2FVv8kGOqUBuNgnCR12SG4A2ilL11SjNZVu8E2NXN%2BT4BoPY260%2BXRoDF3xTFo5Caf0KRj8dtblA1DzRyIY5di%2BiK5Tp8powBY8kDDZLlCXNaG7B0aQM0XCw%2BrFR3RYlA%2BijG%2FwtZ9IF8W9z6UlPm2Vsnclv%2BpdCAIqZV4mYXaWGkfVYOVepAJo40BDwgWxwsDV%2FHS7x%2F4vphkKS89s9VGnzGMIP4rDsw0F9lhN&X-Amz-Signature=c5808fe0af3b862b5a9cc7c9f6165dc096cb58a62ea9be0c5a66936641d7526f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

