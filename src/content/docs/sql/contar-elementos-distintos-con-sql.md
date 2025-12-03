---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25HAPST%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEOF6nVKsDMThvMq7Nx%2B54ZhQprpKB%2Fi0e0eGziVP45uAiEAvt7Bq6%2B%2FDrcnCEvVxMagoRtoPcra8hl5CIYR8dfhOzIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGFJBkDIgBOPAbvDaSrcA%2FBeRvGNm4yispJfu4qjYwrIT3oHbfi3O75nI9DlyKd6e%2B0YRaRRjKteJNZLJhS2U0DqS6gSv%2FZwjkmif2fV1CTSryqiQVTv4E0jY08em9L4Cbax%2Bo7j7TgA6nI3ypKvWipsUI8sfXp5S90NWuR%2BsmjkpQwj33kaWjBIe06MiMDl1amgPk74miuV6GqIAh9BkIKbJFJ0eQwoYx9IyikbfNr20w4TxP%2ByQbMv1%2FbtvZKFTs23Gge6ursMqwXV34L7cKypSreo6ucxjKBDgr47Lyr4MmP5LaqEEAQpYtwoOn8pOdNzjys6jVO5YdYHRiGCGsl93OYD%2F0fT9kLzzBKOXgzxyM4gPX4YKVXgLMzf0oR1thC%2FvNoRd4DMNLRGPNZAdwvyKcUApW%2Fpx%2BxY2PTpc3XmG6AFNbJ0so4wC4MPJvt8%2FYKWKzZRyqG5N4tMgyZhqscDWl9W3hfOs05VKmVpDeLjhxIPnx5hmOiAKabX11SGTQxZHYKGC26CHA6NFANa%2FO0Y29upKH6RlyIXb9WMuqhyPvc61mKA49oVstm5ZhZh%2FMlncuQ3Do8nHB9wpusbYWnMJu7a8suUNHLJ%2Bj61B%2B2fH%2BOA91RuJi0DSeAnPO1Xi7Uxt%2BiNOj0KIHSeMIK%2BwskGOqUBu2ID0iCeEo%2Bpx%2Fcx0H0w%2F7ZFfoP9RjCJHva0E6to84mlEEZGbTQ30dsVGriTTEBpZ3NBwXhjh1WrGBZSVq%2F0018CimWcQtvEEMOcSAe2ZNsvJXQmgnOeNh0bBCkJ4oUvhjjzviiftbVmuZlXjgJbLQ9PCxPxagzZOfR1SaeIOd%2BiLQGusjIddc1Js8%2ByeZQq8g%2FnD7syGIQQznJ1A39%2B%2BZiNbBEx&X-Amz-Signature=1fce2ad69e99081b8a25fc9b4790f7278e7caab8498e026bb701d718e24fc1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

