---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5N4T4J3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD1lJ8JvhUMD%2BqiKdxjmdlOa%2BPMQoYcwJCWtXtIEQ6pbAIhAKw8LZMKfXTuR2oEEgJ3gUD1Gq5CyMSreVCPAjRjzquqKv8DCD0QABoMNjM3NDIzMTgzODA1IgxdQkcZrBJ0SJdMT2gq3AOHm5%2FDGLxDSuwF0r0zGDULBCEkFD0osI30jsDv4UyZ3ACZM%2Fw%2BddeIXaxlSsx0sqq6Y7chzIs8B94FWOfP04l1Q8P%2BtItdMDpkIZEuxVbA0u0PECN89QCQBvpJE%2FLLaD1Zh5uO5x8BP2QpQwejH3%2FW%2BgQ%2BfOitGtIW2AX8bDYCCJ9ZXoK%2FDXISlz7FI7KRLhIQRogd0u2s%2BU5tdI6fNg1%2FJtvmSJnuKO143c6lqfllhenq29SubHEaloKD8o46km5JPk9CMfZoFXVUrzL%2BDON%2FumoIIVL0jnDYx3%2BGjzafkszJFck1rA8G0q61v4rgiD0znJagyGiWL5uWd0EJlGDE4XoJQLXehclF9%2FxOjEehlXAqbkWEyyTP4nwFh00GROyZi7%2BKycrUDOp4jNpdJ103NFkTilGt3hbGLl5nIoUNlBeQ4osOzd%2FmUQ4P%2B0kch0CsjF0MfPmkhJ7g1rDoUzrUpXH8Xy1L4gM6KExaJBoXswwOdW85kZjaE%2F28Zu86GNzSbdlF5XZ8skgK0ySX6LD39aosQ%2FKeDG4JNKOC%2BKoZpKNoom9ljZ8fqA6QbK6Qz2oFSgOWgMhUBHAdu6kSrUpAY0jQa7VSYX2TFSvafNNV5XQOOCcE6KCTQ5SviTCIkMTJBjqkAdKN8FfV%2BEiRMFWCZiaMkb4bmsRMMUmd9l66uITSKQ5q41vLeiA8Q1OvBkgRHy4X6HQGOTo712s4Vb8JaxAG17r0spkBJM8DiZJ7A3tznALeFPOGILD3a7U2Qt0B34o%2BbNxUgoToGaIbYBbxaJkO9T7Xfo%2FFl9rIY03WjdCmKsISD3u%2FFCyFAXaV0GWnfLDMbh4CrSWG47nH0qJEoxCpbdKWDsx9&X-Amz-Signature=1b13f280c8f5de28f661c623190eaa5e32b880debf58c73a06ed93b719d5eb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

