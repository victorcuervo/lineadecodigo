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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IQH23Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIA3pU7QY9gPlhoAyIhjATdr2uODr7jwdsRza8z4XxBtMAiAHIEtjK%2BQdv%2BIEpZdpO584a0jSlkBCiN8ZPmdLxdnyYCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMG3tCGkCKpbif2%2BhxKtwDU3rbHfu%2FMByiY9AsrWKRfT4vyrRucWPTL%2FfTZKOeJP%2Fuu6Zrq4efODuVORsMPiMTYB2cBk4lY6GFG%2Ft11mw%2FjtQh9JkdtQy1flA9KMF6%2FGyyMPyXyzFkLFk3ALeZYIjMBNlwPqLNIdYZigRqavlyOJ2zY0WPbAvuiucjKTPLpgGFFXFrJzsX0u2XAVTBOuBdmL91HgUvAsf3unQ%2BWbgNkmAAqkyoXZIoyPej1g%2BTmcZjXJTSRkaN3Vzd4I6b0jB434U%2BBbfL7n8wACzTB059%2B%2BOBwUUb6Mouk3Yetun1Qcy73orpUQSf66W%2BgNbJzWUJmxI8IZq%2FocBSX%2FcnPhUBt0DcQtC2YFzWi9WhDkqqRynuoULiBHlZ3YodgFN8UaDB0c0DGXhQAvkGXQPWFDYmEK7zEiMojbUmpE0HKBta%2BnRioafmaW%2B5vZr462KmOTiYr5Bot1Yxd2tqCzcLPoJzNcHpztkVt193hc3STLb8qePCXy5RBtJW6vEzHmo31HxYwW1RERiAqR3NSIaCWqhrdqUwpTAxrnVajZzFtpZ8%2B%2BX3a%2FodsiB87HKQu63DHvxWt7wXZhn0B8XEKcJCRRJAZIhBhc5nwlC7rwyBZeg3qlxDps0sXvv%2Fh0pyI28wuKbByQY6pgHaj9wg8j1S1U1u4L5Upby9XxoPFFD3s6suwAX5nk36qKqiVMsde7MdcWdwPhoIXD%2BR2TU3ofJH%2BsNndU4baljs7De%2FaQrWFQprupjm7qaOoj1DiOWEfnVwx%2BuTpvqDrReWkedYGyyCEvchmNTvAK37WIMDE1J%2BJyVaQJ%2B9SRfvp8alN1qlwWSaWxW1VdoD%2BczjnOqxVeV%2FAHlIwPFUgTRk2%2F4gmq4w&X-Amz-Signature=d0a8d9539f4bdd5ce0f3ba68cfdd75e16bf1ce36d848b9fbe089a1bffd9bd14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

