---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXTSHFH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFKScj5AEfDXrq4v2OsHvEy9u%2F2Fsh1%2FTJAUXvbYfJKRAiEA%2BT2sOUbVMGUYDisJ3P9LYgNewgDzqU9BQwnNusHeCBoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDARNmExbWtM3lsiwBircA0QChT7%2FO7bc%2BoD3UwhHAaWUS2nmgjWMGLrTmvBh6BY%2FyV62Q%2Fa4NvhoXloQbCy0T2mtAsdMVD6eX0mu4Pnj4ZmRdKhNKoAE92xzNTh4mj8vJJ4UEU%2Fh1u0Il0ZGmK0gRqZleBdO%2FI0vswD6y9jP%2FFtKnJ%2Fb6ah6tAKJUTok8uiBonSgRVuFppEQ7RDojX50dSX0MIJzQAEPPIUvmUvWBdLEApDlEvnfwRIStQeZbmtaW9PgNdSf40VaPn9suJ83p9VxNLoQWHdlx64TGOq55qKbl6e6v5TeeetfmoGNyN6t5vmgPMMukJ%2Fq0Q3alkhGPN%2Bh64K02HDPKbVwJ4urV2pv7KvcqUECyUh76ApDvpQsJmXQLc6B0hWjMfflCD2NYGZreA7uC91MOZ7u1Y8%2Fp4N7JskDMsJ0hDL4SvWBxKuOSI50%2FybT2Mt1BpVLbL7WpLYolWlMXb6ETaso6fSe9rgxDfugFT3Y8XJgiP2xBZX681feyp%2B6ZnUHD1f9y4SG744%2BfDDj2SuS1iVrA9vmS8YWgkwI36HDyDm0GY2qsOgvhSJOpXPrz1goj50WDJ8htPOC8%2Bco29GQ5o%2FpfEV%2F57QN58DxGw%2B0hx6eaguPgtX4uyRD2ht5lDKfh8mMMO33wskGOqUBzrqjLiCkaUtEvDHJ7C%2Be58eU%2FZD5u6TNdj5FSk2D8x%2BfesqhfnMQnNClut9%2FSENOez8Ugh85SuJJmk2IwCW%2BiHnL7bdXaAPN190%2BGBPrKwy9oNiJWxzNYKgJh73%2F9RZPTLRzm4zgbOY3r1YiJbRkNwmk89%2FHq5HWXQluYRm6c4gWvtNGy8Y7xOJuf5oJwazXtgHTSJtaqFCGDMRlyFEjsCOH%2BkzD&X-Amz-Signature=433d4e2852ea580596ad179b0496e27bf11f124dd7a1f79bd11136c341987c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

