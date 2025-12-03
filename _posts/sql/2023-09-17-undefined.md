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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX3GT6W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHHdUpoLvV%2BgLZC2%2FxK3QnakXVj7CfGJY1LLDyvAMaRkAiEAh%2BvxpzduhMOliYwOhMnePX8YyUent%2FG1o%2BW7Sp4G8dYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDA6D4%2FyMUKS%2Fw2EUeCrcA2lO8lTU4ROcKM%2Fmxw5xhQUGyGz0TJtJT69I3EE5PIfH0tq4JAmxa1h3qmVJKq3tt2ZxqZ%2FftqyL8Q3ISxL%2FitcoBZETQ4ILZ%2Bk7Aeqz5N8UaKjkpZOEnzUQ86KpqLXpGKfiTfzuVgZjUgqeXZUXPkYivIYPZ7RV3UxU5jXF9ZPKm6HWImwIcnRFiausrkzRDnjWT8i2qHEY76%2B0TpwoA1mDThgh2L%2F64VxO3NmQB4m%2Box8h65rxhZVOjevJh4caEM9x%2FSu7OsOFbQ4BiWwJ49lDU8V0E4XLnmFhEi2xe41TZgDwHaFjMLAh6NfsyThoicexvOFdZN7hPi6xtSsjR%2Fu0vQe5mSpqpqmuJxS2yQwxV5yOODCtgLppDNCCA2YscTNyXaUMRpFfX07SDdZEjryex9Z%2FJBbbPsx3KAgTAHkq%2FktCkRLy3FtzZiui8Jo5gDkxRewQ%2BmYq18ihJawpSjeNtqAFcGH9UcK7JA1IPu14JNSULb4tQXmlr1WDNC6N53OBU%2B0knoSZIIbf4klHsmpgtPOtdwFAE0saS307WMJlzH%2FKEyu0PbHomebRUm%2FZIuKBwCWynAzC8n3kp0wcOtspUY9uXH7xx%2BZHA4GUu8zgzT5%2FvmGoWtqEG%2FxpMNO4v8kGOqUBIm9QZlJvKwaF5gP3A9alvRpGU%2FXtC7rnbYJ%2F8dI1VRyKO361hEDUbeuGcZvw7gAkp6qvXGNy0m3Ja8I4XLoVUUgq1v1qlxkO%2F%2B3s2wzc9g0eKZH%2Fyv7vdZyFzpE%2BoKtYhv9OuAZQldZZzXXGQfFEh63IXOTvNeEPy1X9Lh2Oeh0fCjlCRdoCJLeHC8zutTI%2B6coa1mBBO2B4G4wl8sp23PXC91ru&X-Amz-Signature=cab344dcfbdb673f734559472800c5b489eccb3719728de9277a756b263d319c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

