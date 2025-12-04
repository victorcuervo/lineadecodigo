---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECXKJKJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICtD8M4KZ1Lu3L5d%2F6mzp%2F7Z1JLBz6eY%2FnUV7Ban005SAiEA1TaNuJSXMF3zTfJug1ARUZjQ1eWB6oXbI4MTr2hr5Kwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLt2dG7fsf27f5H4NCrcA7MX4KAQ8q80DDn27AGgE10u2k8VoeZAC%2F2R%2F5cPxnSJF8jAi3EcFCild%2BAuFgfI1YiNIxSvWwT8Uqpeo1wu3wCYCJKUrEnGj0QMrLxCxP9%2BXtbRSYuFJU%2FY156BlNDthudZ8FPOPgQHHV9v7rOCa%2BlZCtbx88HdaDv3w76m2l0TvH%2F3nVm7ke0ym7cfPrAw%2BgmtqLc6f4Fjl2Pvd4TC4CCY1dbeS9ADUELznLsZjkQSIWckw86JN4Fj8YFzoBlUMVTV5NzexU8Nb%2FrQeU8bMnhDqIWSyny1tRIrnJfm4WGruoP9nIop9na79uAE96U8bXSTXriTZYI4edHPsFmbx3r0GAzgiInc546yk7e0IHfWAlqge6ub6iJ7C320LGpmOQpRdXAxIgu9HNgFytYcQhNnacHSlF0SDKWI2cDjcSnPJQJczyem2Hz49%2Fegua9wCMsF%2FXGvpINIDwtwtE3izNgCh8Swts8yYGvwU5ASYSyJb%2Fo%2FsleAYHsqLXNGyaF4SOlN4CfGrV1qgHXgnD3K9oHe0seAOOPaMCpMA4VhtFYQ9dNEN9XSRxcGx%2BwC%2FLNIwD5DjoSkOFQifM%2BGN%2B277jEFRklxAs452JxItaTJu1g0o6NA2MiM45VK01nLMMS%2BxskGOqUBFDDr7cD%2BeSxRl3waqOVj5znCB%2BnxhxuV%2BjLVc9JpMIIrB8WwQ5qINyZRIQoJDJrIx2ss2HbUAVYBqKsre6rBEq0cHomHfcbeFNBQ%2FVU0otOaZa6d3KFFrxu1jJKoH0wEd3ZyUqsGerTjhpC8CLtob3m3MPJHpbih5Y9Qm1SQsAkzZwcECZr4t3fgDY8r%2FcfO5g93KoJ6%2BRGzjNk4EofwKbjj%2BYj3&X-Amz-Signature=6ca89da645949ccebb422fcf4b2db2cb28e7b2d7a5943c91156343ffc817f450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

