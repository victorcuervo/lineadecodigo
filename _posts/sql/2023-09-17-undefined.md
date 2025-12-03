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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMBHSZ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD%2Bne%2B7N6kvrjwtT3FkPRtUeKhnDMiW%2FmXa9qicfXJhFwIgJwdAk%2BiY1Bli97cjPDm51%2FWffJfjdK5kdOcj%2Bn%2FmUfMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCoF2377WnES69mtgSrcA%2BgXRxhleCOHWKTUp8qr52rqrm0GvwCNOLrGNZ2BYpd0XStD2eawM0S2tAiXmNWww46LOgpHCTkxQ8Kaj3p%2FTW5SVGmWpBVwCTN7rr88HH7yeK2yKGI%2B%2BwFcXGFQTtjXNse0rfezXIBZf48F0d6fI%2BVhxBSw55gokfBAULSklMYaq0E7oOzOvIOp59Z9k0e3Mz%2BJ3Nz77QEhJb4OQ%2BeSTXsscbfGEzylGNFQ%2BSj6yG6Vn0jIWuSamTjA9sme2XGoJI1vAxvJO5YJ6Je8qtAYEAowoF4PrrK4qszzQfkfvjv492qy8BQu5DKCOdpSV1fkwmkhFZ2hl76wD%2BlaSIqbcV0BufpWtItFoeeY%2BUndduyPojx3x1xFAVqEQDvYwAmOgbfplPpiPNbslteAx%2BZRXvlztLjCkJ8FzZcOZIEup3mt4M3h4xWWwoS4sbhu6v4glusGGrY6vKeq4OCWuO1CcYrkpYRPYJhDNbvJ23y%2BTN2in%2BEhV%2B1kv5fjfxEKg8psprEHr43spyOSzMD3NHJ9rf5OMN7BSJVPW%2F5Or%2BRpyc6E%2Bl4um64oVixi3LrtMzLKhKqHhq%2FZqpXMEiJCpneVXwJPywNmda9aEF%2FGmoyF2EC94iieAcb%2B5ZOQs7bVMN%2F%2BvckGOqUBrjWljudODlbvWqGral%2BrUQaqSZ4wHvybGjOHDsF3Cib64hvlH1SAa3VfxTsx7AdxcEXPpU2%2B9JULIPtPdWKXOeSeOXy%2BkHoM07l9a%2FH9E48toehtO%2FXcnjpk%2FrHQ18jCP%2F8v8c%2FKCXfSmTpRGzqb%2BQD2FBJs2Vbhs0BWcoOKDNM0EIKEQ9JpK053NUljo1FmCLAfe3nKE5RIbCnHQ6mZfWS6QNxK&X-Amz-Signature=309a36b8d756a6b1c740b8ee57dcf485a5ce04e0fb425acc9f951aa896f2c7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

