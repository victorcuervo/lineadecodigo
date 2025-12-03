---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5HHUTP2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHUL5DjpcDGf57jANn6%2FN%2BwnQjxeaXYVx1wk4ae%2BGtfQAiEAgD7gWUS7uX1l2mlZe7Y74yQUov0guTiIoLB9x%2FfK85Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF5Ybpww3y6NM8NWaircAx18QmLlxDttFjQowFXboUNCIe2T8FMYsc2OEek%2BdPYcEZHxdvDsFzVELm4gmjqJUBKVxpV0p5iylV5O8nKgpXAcQ9g%2BhV%2BglyR0H82jnW2Ll%2FzZC15sbpk4rNNggpA9f5Om0Sh1LFUhU57LXcmfP8pMe%2F51gGdkiDhWTwtnnuvtuomnPXssNxwp8LrL4mw75zVeeToojX1ZlRkG0jfHIkDzEbGz0%2B65bVEmG3RQggzxPZjX1ks7q19CIPj%2BSJYjDyXCe%2BnnZTv92YZ1qwpYba125Ii56%2FCqUnPRwb0NSFKUgIXLl0DqbTLj4zPR4WnjGXzHVN5l%2BnPgUl5lTtMRqzs8111LAjz1wRWfGMjQ80d2xnqlAIrESbS8sagYOcm7ZZSHZYAY5VT2HH5RCRr3%2FITqo8e7JGRDl%2BpiV9bWSpGenqk4RFvKDkF%2BiUrLnjUyZ%2BHos3kXIJ5RlInkVFpk1MHolasaOCPSd3JVrAzRFqMz39msgV35TOal0aXacx0Xm3NIt1MqaNTOuvPi%2F9wy4XLoFhHp9iLwS8enntWAh63FOmFFtdT%2BHXPzYkx8Tz0XwUemJuaC3JDKsSfBqJWkV0HwaOKJs1KBID%2Byi5%2B3O8%2FrGYGSsRIC3mQmhZZsMMLcwskGOqUBEdSZMP%2B5Pg%2BzLx%2F1mnQyCOCXHaPphDGcNfA9%2FJM4sXKYUcixyqXgR66rcmjC%2BJByTuZzhp1Pjikv4Ady4fgZRa%2BGAk%2BQkv%2BF9Qy5eFBgWb%2F%2FfLY47WHQUSnq5wL%2F1GDw50GiPiJn%2BQj1zeBwY0ehHHtUdcWpUbQiuSz0wEFxaVfsnhbCeJN3zQEB3n%2F8o6CUhn7tUhWuwFl4i2Z9QUDF%2BWgN0zLl&X-Amz-Signature=45badaae44c5bdfe1cf82afd605f66a36f32c3b2ecde1b82a24126e323e6576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

