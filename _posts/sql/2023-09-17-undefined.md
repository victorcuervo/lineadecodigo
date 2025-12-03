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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDCHTJ6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFY8glax0fCJEZGJIXxt2ud0UK4i80lfAid7D4Yo38ioAiA3qD6sPecdhynhE%2BsusrnGQV2sZk5DKk2xtODaO7jxSSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMuuZJbYNXGNmAYqzuKtwDDW51OyetgfUDAApYxzh9vvjNgFkcfMcskRXK6bteU69ieDpjzgM7zjmAe2JkJV%2BTiL8X%2BUQZ19ZCwI7CEMHowt2Nt4qHfflHGF7sUl3z2rq45ib8Th8c6A3etRfHPrHt%2F%2BP6LuAurOY0jLqiCxHojlu9SwlRVn2zlTNTcoew61NidapmUCHC0x%2B3EnGVPbeVh8qA3pdt6m0KurdEvRDq%2BBop4pjOJl3v8yJFXlGRJSAjNhXqpQ6633K7e%2FVci4zAf8Zol2mMSSGOHIo%2BRJ%2B7oGSM%2FcRziD2NnHPqfCXH8RGsW0p9Bufg%2F6b2Haui2KzSeLlkmfLFhtodczn56%2BloqRNZNMNiLw%2BDpZclT2e7Z7fVaeT%2FZh%2BueD42xdpRZt6mk3yAs4GWQlBs%2BkjlHaZevKC8EyTsdOPmRKqyVmN6Z1ID2Q3lAAgsP9h16V5fPEkWNR4NRwW2KBMd5X1OSkOpHBuqYTe3WCjEwx3HDEriuJDLR8E3jpA72Fc67W8qRqR4bUEhLeLR1a6W9TeSseXSbSwVJx3NTckO1OR7utwdvvoxETBiSylOKdWxXpJicTf229pM9CNI9DJrfbFEVgnQyKsg11DM7iuFqFsJ2%2BgsNeyX6VOY0ZP%2BGfPnlEMwwv6%2FyQY6pgG1xrR5oZFm4QTJ3sq5BuZze57BXWgersHOtMjwTX%2BJKNi4dk%2FpEy0agi05OWtRg0xlIxXz8jrgzyRkehInXVZbLrZzQdCcYbbNAOjPxHM3WOk8ILpyR953Z5CjI%2BrrTDIMSJm5utHyMuimXwO62gQfSbcGxBJiLHKblfHten22EArI7c85xDNEReLidvFbszWdH7gulLHUgTJ3GRdX40zf0UuIdx8l&X-Amz-Signature=13b2948b267124c9aa2ef140c6baab0efff2c39786afd44caa3bdfe629615644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

