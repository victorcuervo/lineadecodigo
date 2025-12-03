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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EJDG3O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMaCwBmRPIbDhb9tjsiwEc0OG9e197v2Jam%2BeY%2Bh6Y9QIgUb5oC3ZDQ6lLbdYFnDbmFVHRf5Z%2F4w7ae%2BI51l%2BmcgQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEA%2FtcTm%2FgyRlJNmeircAzSuyLy%2FiMX4aVfV4bi1xEFy7fep17cCHxbHawg7OBC8%2BVeFOs8ChTbERfKanRe86%2FNM%2F06KKydp9exNXzCLC202iAx5ZWauPeX1PCLwALU9dZDqA97PsWSCXxFhuBjW%2BACtz5UKWisluS9TuVrdl4ecZhchvEmK10vf%2Bh%2FPo9i9Y55YBZUO3br7tRwiwcAu9YsPI6wZqLCrtOR%2B9S4h8R%2FBSCsHez4JYvcwZEqRsyHOW55ype5UkvOpiUrLnomcGUHVDV81w3y2WMNWLVL8k9r%2B%2FJaDhzpbhrUblc9I3MzvbDWnHoy35l2vQ3QjrIbzKHGEUnRgC0PoX%2BPuj4KeSMMZ%2BXwcBhsYT9%2FjvfdgAJcEu48nnx%2F2K%2FG7QacCn07o8Tf5YPzTVvODiWaE%2FLop8uDrStptB7cv85AQFIxXNuduffqaGM3j6YqT%2Bn3fwdfY%2FdX1Za1LN%2FOKQuNOLxzj0J12jT9M8gcX3rNL7dlClIbOsfk9HQ%2F5nr1GkmFMPBNW%2FGdZzJCYDFdCL6aU8q72Lo3TLNiGve9AZlPrRkdy31xmyC1OnPZssMxzCW3a1fg4Sn97yRVMxcC99f8dH59x6zykJL4Z5DdsxbCW46iQ5ZNHqjsaaAIW4R%2BhvJxvMNOUvskGOqUBh72vZ1LQuo4mhiJGEOWMGs4JgWZEXxcNhHA87Wc5pC%2F6ivF44VdxwBfHNy4s288Q5f93IgoKXKJt3s4bUuLttZyPj2IHqwBC4X8jJnpI8KWAjaNnyGOu8MrSzPa1hb9NP9w7IfrmF8OJ%2FHOqobbTKoE7FFJnlR71AVl6oThFgwI7ay6ehEIIh18Wk7wq%2F8xxqcrwGTraZSOGLCmo5YVcJVGp9kcF&X-Amz-Signature=68f23de45289b2a811a0a905f0de9700bb0d03b651e83698ca30cbe978e2f8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

