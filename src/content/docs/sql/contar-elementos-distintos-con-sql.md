---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJVS4WH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCs8F2QB43RRr8xyiYYNJuRsxKfrfZRW7oTs9JHgg%2FZtAIgAYPDQAhPH4URXzK7LC4YHFL3PnE8LqPrjmjEn99eEy4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOwZ2TRh0Ex1xkdbbircA8WjbH4mas6MheGNgeLUliW%2FO1kILvYT5lNa4GoBCRyQmcyfud15KafocTi9nF3cnkokfoIRiKPELJrBeEzWK5xpcszFdWOWLA8Zd0qEfUJmmQsKvxdGTqgcVqFv4yMADISlT5LjisfnkGCMToh2R%2FEg1vMyFZ76lvT%2FERvMGSKZKOGY6HLmgv%2FSPCO%2FY1IFLAgca5ChIIGH7KEqGezDCcSOWSsLBY0ycDsABUxATM5c5EM5Bzximv8VoVkYW7WbeceA27aZspHa1J9B3yRhnuoJ7I%2FdNNtqbL%2BI%2FKvbkHLH1jcSp0pm%2BPXJQOeW3fvYnXTJBPB3ojNM73JBW3zL68iAeiqpY1%2FFtOl1wsYnpSDlcxbR3QCpxF4uvSKX73n6swhpu3w%2BGskV15kztGNCMDwTmXXfgAjdJj6PbIiRlChYnKp%2BJaysvjWfdIIND9GLCYF4vJOEfaYL5JgoVZ4RRTN2YJrW8DGdPY8xjbarTQ4HCyiF5E2jJpH%2FuMMQ4GJNJ2NsD6ckRsce%2BYAALrqO2yT5w7yBoe2UEA%2FbQEMmvoM0mQar9PplDr6sw3%2Ff142gegj2nGJEEvAsQhF1I%2FTeEZDLOJLAkztAUgU87I%2BUO9nTtLUVhCc%2B%2BbSYg%2BxZMNi9wskGOqUB7s5AZ4BlHOPdP3hoMWutVTHbNFw27wbl0%2BEXPFmukJ7pnf9kBaqwLCK0pkF5fY0byom%2Bsua6XQ30UkPhftbWQm7PYhqWBNdf6I9EMeGhZVPvKZ8ZbGNKt9UPj7i4GEHYzwiWCR8VU0lm1Wdoj4DnvaJBjq1JoyKQVz7KpOLZOazUe8ketz4wdGzjBOLIqGh8eqMHkQc43gSUIzhl1cknfBBttdny&X-Amz-Signature=45bd64ec08a6288595d8af1f17d53a06f8471411a1dc5821db7bc1e75082483c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

