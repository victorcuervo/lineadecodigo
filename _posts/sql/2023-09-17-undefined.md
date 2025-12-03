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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOPPLIG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCnA2vLQ2A9xTpzrKtzEK1HCGXdD%2Bq%2Bra1LVTF2%2BHk%2FpAIhAOZEwEn%2FLI01SF4kYmJUcqUMZReBv4TCCdkK976ylP%2BGKv8DCDAQABoMNjM3NDIzMTgzODA1IgwzkH2U3bovWNZIgiMq3AOBcMFqAWDFqntm8QyrTUN1UywaJphGO%2B%2BsbENy%2BRCV%2BK%2FZ16v5SyuW%2FiAB2G1Aasv%2FwmiX2xAseN%2B5E4ednLuKbiCzgdEdb6%2Fdgr3PhxGUqlVtrAbySI8alL7DGlLzGouFCh4wCC2ZScKfeHeEbHDECxProzKvr0JzQDaPR0gQxZCoPt7P5%2FKj2hIdzqUAKNqtoVYkSMvFGBh2mXA3FX4M4ry1evx5O%2FcqYjPVcoUnDjeep7n4oL3nl9LUWkwlFXkk%2FvXmn9cLv0h2XlWWmN5DZpnL4sxrNIAkOh03YfALZPm%2FxYQu5VXDAILcg%2By%2FewgQ9dAthoP26%2BQfz7y3m55hKA0EI2lkBv61Op70Rpi7csrO5heWSDOpadXDQ%2BvlKsHavY5jzkbSGSegc20eGbtlD8j2%2B0KeP204P7JGbZDMnTxsLULkEf9SZC0z6ahREImcrl5uGq%2B9E7La8gGEPlvL1f6Lzr4zvNsM79ZlECdn6M0vowTfoPKcvA9rZDk8ue1jB4fJcluRfP5kYGTUDiaXF8HQfCOJj6xJANVmiffXcfViqF6tYW5SleeRg7HCdFC7LjHuw%2FsrEnzIm5JXA4926iqNopWY687BXSacg%2FKVXBZkqxOFghhtA7VN5DC1psHJBjqkARxj9xZBZVkZNRTDnwTch3rkzFVd9XpAmLV0GiSIsK3Z1W6hAWDipGdQcbBrIa4LynbsnKTZgSyKGz6FhPNcqOMWZ8AZ9zdth1F7Xm2itZJZjKUgVSDmAhwSSvok3tOuINd57V00Gw7Yj2vMZW19bYfLlO4L%2B0JXD4Z1j9%2FwvA%2BVpvaNbfmutDvth71PluPlo%2BKbc%2FBqzLeZ%2BycoLzdEpi3clGXa&X-Amz-Signature=07626fd2d93e250d4fcbd21efd3a7eec4e74f90c33da0a046f6873ff933c7b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

