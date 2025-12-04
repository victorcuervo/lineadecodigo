---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYMGZCH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2PNBSZfcPmpnr%2BV5WJZ9upBqCLdbVSaYkd5pjUtoTYwIhAMks2mQQkJ0LMmQ7no1yLmS09F5jmq34OFY%2F0TiM98KBKv8DCDsQABoMNjM3NDIzMTgzODA1Igwk7RBjUTgRF%2Bgid8Uq3APzXBsS1m7uPzyQe3LaBPLu2fbpHkSjTR5IahvBIvLIwF1ArXolei1roX8%2BCirZByxcIoDRzkeJf7t3WzBJMys3jfg%2BsEiCiYjCCALqSSCaa%2BOsLC7rhOhh9kmAQLIZNnAkoVeMEGU3cstUhI7pq7LymlZ80EyGmcE%2FxQW0wrTGkWZx7d1PP51n%2BQzhAMpLFjkdj69nfGs7nmRSt8%2BzNTBDv1lNTy6PFWu6CLXT8zyP%2Br1qelPjD59t1ghsbKJCFXTfPXIvRm%2BUtN0DlfV8562D%2BCC6pdlxwdDx93DV6qIRwk89u%2F8LPR5EtqSUZTU1AGojJTCbVoJCm5LlP%2FDpK6UfBAS%2Fii89HECb5yFOemnwo5igqR0PMMr3NetyrPqfAdbe6o4gZ7fxAZgvF5wSeFjWwuMELKkz%2Bs7wgHnWTeTJF3MP39gi%2B634JtVUGe%2FvEN3h7LIQFprRVvbtO9Il8GfdbgtJgQF%2FitPqrxO6mxrEIhVJz7%2FcdLvFFADdqwln5iCBknh2%2BIplDBfgWthOT%2BRtZZ0oDdAqi6Yz3M%2B69C7b2shsXrIW3eCALtPs1qRglalUarL%2BtKzXMo9q28dShM36ICOvip4hjd3CLLcbIt6uDDT%2F9I03CK1SLrBjhjDu08PJBjqkAcw9D3iPPwL9%2BWxnewKzLXkJ8fRjjSnKpRJnWVhGVXkF6VCGYjnjV722OlkGe1ZJd3bfnJqWdSKY9rIQC%2FffRRrcPDkOaHy2l3Nx6yRo9vRRHMS%2BmVZuyVMh8NCVMl3M4Q3Nimh8hROCOzEM8mUtEzC6Hm60ZOn5rfH%2FcItpJZLksvgN7N3gggtoiryQfQ36KKknfcOOFNUd9JJPoORUr9SXP9tt&X-Amz-Signature=4d83b0204401a29504fad894c9cd62ce38bb7d365f03112575795b26b350dd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

