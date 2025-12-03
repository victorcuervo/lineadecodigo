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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFREVQ6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCUzSDiXZ7euKrH2uH%2FdFdRumQb02y9koBsBp0mwVITJAIgQy%2BAKhREHJ6ekD9dv0ol%2B1c%2FLKJBYHJmQy13lHtKXf0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMHrNqSL42YxTh9fNSrcA%2FLrwDv6L9v6A%2B%2FOOnEiSZUyS%2FxsmOR7u53icSBy7ZqOEIzjVsHpk7Yp9LWYOlInqLMunoWEAFlxqyYy9lw5uRL9Eh3tHdMcEgqqgUqTsSICxTljNqxp8LZdk1TPTUpQJu7%2BTaVspF0zhBubIzPSDgtmKieStkN0%2FIz1cCxzhPRHA76IF4UjVvui1BJKFd4AN6I98yqZDPjHFsw10w%2FeC3Q9tNY9EpsJNdC1rOa%2B2nJfXrbh9jJdOMpsOU7%2Bp8VaJGzqpAlsjSTHEbVDAKJKUJ466kDALQvD8TKJk6qDOZUhFYbXRHc6%2BVg7BoB5Ef8XqxkURR5hZMVvE8F5o6UGrPsqFDIF1ZBEAPq1XueNi%2B4nOv8tMIaFplHji5C8%2BuwU7m8uvWDgopDX52ykp2WO%2BKzVwXvdHKmMJssT2Iwc0uOUNjIdTaokl85MS%2FzzGWJ8z6aPw6PNGtYZFRDPn6n9FDLC4fiBHRSKTKjyK2zPfZsYeZahvU%2BWzxe6f1Kg41Ygw4uhRuuLBgf4jS8vQtU8LCAsH7nPeszrYzNnMheTGL6vOkJ8NDb%2Fvyz3PjSinvUWFTZOUolb1UOPCLybssBTRBqQasEB%2FMDGfNCIdF0dh9qXuIU9REC8xrAIY5QVMP6GwckGOqUBQGzVrJjq3S0mg%2FeO3TAYlZFRP0g7zUcvd%2BAz7BwY59gm4KS3XTKZHui0dDvlwlK7e6o6ROMVULf19bmv3AjkCspvy7JZN%2Fn4JoP%2FzqsTJVSOOZ%2BKyh2g7oBOe0sIYEoSROczT4tWMM8FKjCsLVwribCtTHgSubFTwOl4YOAs%2FtH4uEJZl2iXD1Bl%2FaVHY%2FRvzUG7D3he9soK%2FUPhVMzGMgj%2Be5cq&X-Amz-Signature=125a8c32cf3fff62e5b4d52c1da6c11dc6b5e4b118f017e87e9d5040475fd415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

