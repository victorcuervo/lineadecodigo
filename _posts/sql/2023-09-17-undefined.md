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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYRA7T2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHNYnu7I3KMjZSM64MDV7DO2iipEzXykF2LnN4oTR%2Fv8AiEAuUszKmwzIN2jP6NYyg7i%2FFyWcbcUgXZHPIl18Pzztvgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM5J4TTX9fJcBfhu1yrcAzAbGz3kpEPp%2Fl6Ajlzc3H2RI2%2BdWEjruJdc5cDr4n5pUfWdB2gHah8VvTJ28wU6yVNZSsIdBOEbeagQTckcrLvMH6Tq98qPMnnbNzdjUtfgiBCjDRFOwmdll0QfRvyZTfSXwNWrlwDNdTFu87K%2FDdcTAVE2prGNN%2BE2z0GyRf1LPBVaxYAlcfVK2V3CdV3ofx%2Bl%2BPuQghyggeE6bX9FHW7XQVv41r8HyXHq3kQFtGnd%2FlrOYgeoVg%2FhSqJls3u%2Ff6QlIz%2B1AomAdlBhRq92l%2FZQPVQC6EbJ%2FNItVXb7UNW%2BqSNb8Fkevk25kXVn%2FYaXGJS26ZcTBxau%2BxIU%2FHY6T1PWCdFtwsuC1ernaNfGJOir1vGzRLHT0ejp%2FXACdd1LZ7%2Bv2I5Ohqqv975UvH3UFzK2bwfKV6qunrKBDAMXpF5Yqbb10rErmJpcIpZbvArk9CcMYFEYMCdw3rsqTl%2BtGaaYTU9IbFI%2BWF0fvZVemn%2F2Yt7xQx%2FxWGhqrT%2Bgimf5QmBk426KazbIO%2BckxMajzrKXBqHKOrTl1tVByQ%2BudD1gHM60JWuT6BbLp6hNefRaQWgpHNpgk0crE4ezKgMeM%2B04O2itTQKnkFlGh2rDgXtEdAzc3qPmfGtAEL%2FlMNmUvskGOqUBdHHT2hf6AFhG8f%2FT3FvzIW7YlyeCbBad2UdiF2db98vV%2FFifO0SgOkCvddc1FmPDck5WxqWbba4eyDkUOT%2B49TH9agr3AOOa8zgXEupPZyt4cSPa3R6mFzMP1NuytNsS0Tpl8qoaE%2FjfPkJxVjBAjwx%2BInq6t3%2BXMrpq43hc3mB%2BnwKOk3CXr9nF%2BJoK%2BLAE7VpEPHZ05YLsMXU37%2FQfcjPE8Sug&X-Amz-Signature=8d81cce58a22a92950ac3a1f894bf50b09ddd431abe52a4ab1b763c86cd289c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

