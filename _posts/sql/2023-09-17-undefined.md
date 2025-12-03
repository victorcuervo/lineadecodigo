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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4CELS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEjmwR8rwu53wgUjPSTtrEx8y3oIEq2RxEdB6BmmtyviAiEAvsR0LC6ElN%2FuIWZYXHKF9eKgVwMXumzjir0BZ6qmWOwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNgCnOBtFJmT6dCmDCrcA80HOxg%2FNbyPAL%2FxQsPaQK7yUOx7agZ8%2BEVMnyBSSzdSJEaCsL2k6LPpxpwJcaFuKx%2Bck5opVsKKvwGjyyHfjtqhtCzIywWpyVHo8YXUtEp117mCDkzc5YiqaQzQ2aVuryu95paSEOFkiavvdYmVxDzIhQaUiSoXt5%2FU7qEXWw5Xj8Fe1lKAwsGQPpuE%2F7C9s%2B8bzvc2nvjf%2FCS%2BwCyvwk7RgytrxGN5pkyNAGGX2wYHr814oJheklus8u35bsAbLYGKrdiIdEA84v5mR8bOKBkP4qqTesV0LNOXsB6blbDdVFpLdMhcMxBiLH%2BcornsiBuQPkFtMA%2BEDkxtB4VWqUjmZBvqGiww9JOr%2Bcf8HBQo8fJu4Lw2TYcLt4o1VkbEJR2FPjKjyZ2zx3HW9NdvJnSjqw6Iu2UzzYrGv5X%2FQCtTBb1V0ohI5qIAzx8kccwLM%2BiCWoxqYYjBHyunjdfbkkO1CDOCgfvmY6N6mMLnftTUnERCTUvY5uAUP8ir2oaiYNZMCUxyw21tdoyafGTeyABBV4RftesUv2thWhHew%2B2fZNhmEtzJzDDvK5IcaVLCzAiK6LSv59gW9803AURMA5Jo1JDgDPZW9JdE3jZUYHAKjANaykOpLLVPcXOiMKO6v8kGOqUBjLh2UkGXleiYaixUEek0TTtbYaMXTVluybdB89i1vbkQnWrzPBbfJYOKrdx9U95ZJkokGxGhgG8FbkQsjUgeGEQEexiud08O48dwlWYdxLvTVCUANLrCK42%2B%2Bxfzlk6k5LjWi7KHCqlIYhkX1NaOoCETkuwJ9NEzu29rnVXbvctv57X8ST3vZZpaGS6H6juYYe%2B0xPco3uda9tuuag1RI%2FXOypOx&X-Amz-Signature=08f443dd28e9b591f4dd715361d04312f84ce9f13e7520571209f6f219a187da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

