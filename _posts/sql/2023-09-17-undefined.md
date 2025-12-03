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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LG3R42J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCGiHkqKMe5N27kLDLMvSl49lEzb4kxTjn9UOdQOI3DXAIgCRO3l4emaNizaEuwSF8yeJ71Qmfvot5HdZzemHowUtQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFpvmkqZ6yiCtJRUMCrcA0RhaXEM6ZlFLfMV7R58u5sCCbR%2F5OMfn7OlmPq%2Bjh%2FVI747VykBSK%2FHJn05Fe3YR1yXI8S1wQ9%2ByCgdIeD4X0lEBf3Bo11GEC7Z9QLUHSd%2FqXfEBmPSusKhL0tDxcGql3ZJnJ9HQKA9NYYoj5WI6jUPsddXW21V%2FRl8y1%2BMyDN3c%2FC1Gkjo8WsqrhQX4rChItfG6Au16TARp8fTa85VP1cPX25UxyW8o70hcQ6o%2FIRPP8%2Fsn19uFOMNoWV%2F9AmIVQNXH51KgtGwxNk09XCz0LCjTX7iUh0CvkimV9b6sAb0yqWe4In06nNdOXnpSjQB5fflh2Fs7P1o7BybVBVoqbBZFYhiJm%2BbteoMpxCsIIqrvndj%2FpmpMnXLl3X5WOGThHCZ0SB1VM02cwRClhYX2NDdvBFVirQpc1t9B8bUZRD4OwlOQW2iux%2FupspZnOnS6JFQ7jy3RHd8GWNHgyCSnB0GZzICmAfma%2F%2F0bBo4%2BUiYrXs8a%2FhBeEtZToqQnRl%2F2AMuO3kS1QvJp%2BOfn19LadVNzqKIHL9ZU0%2BlQ6RwDv0T%2FlJ2nTRnIZJnZVBhyMo7Q4v1s%2F0ST7SRluEaB9K6Wj1UU89PLnD96CwX1agrkC3XCBrs6idMxrK29KKJMPrVv8kGOqUB0XSHnZ0ZZu5YCFk1R6w%2BjGnjeBsmrwKU2GQBbmJ1%2Bu1KUndfL1Rmipjx6iNkJU8puL3B4HkEkq6srCcKOgZdTZVowsgIC38Zlds%2BYExnYNJqseRgJYIRIecCMu%2B7SUFXLSSzuF8bSwggXaxOONWxIQiyJJnu%2BXsAzY4T0jUswPBwFOG6cYkXCDZlKC2Np6yihRGHzqN0XzNYQHBjQfy07rlHWzlR&X-Amz-Signature=d799eaf428cbbf3bc911e9d51c0fcd2ae41d5fa5070c1763e325ddccccee2e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

