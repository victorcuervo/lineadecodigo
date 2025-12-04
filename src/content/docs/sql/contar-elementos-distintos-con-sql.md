---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJHWOSLA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCbXwxJFeSNNgBqniUP9cxsg%2BjFiVg3RIMrG%2FjytVQ28AIhAKH22PNtxDJG9yGvchMlcOs1LvIdvl3g2sA%2FniRLoQmdKv8DCEcQABoMNjM3NDIzMTgzODA1IgyOoOI5HJe3jyop3EEq3APoRt6TWHEei7jvAmGWo4LoRMTh0k4vav1LYrQs7BvDJLC0cCzjNq84cK7wfe1MOXoPlwpgg44zUYJVlDc2%2FnN2iobN6eoDWToMlPrLA9U2RN6Bs7YUtZtpZsM1xQOBm34G%2F%2F3fIXVftxcFTb6FNOSs6f0IEFM9rTc2DHfvgTEMiXHcQA1e1HmtO3AItMTzXdnPGFpajY7ORBHed7yXrEOLtovbe%2BuvAFShXK9hL6BPY4mdFx2TejtCjXMALLBQCIPlAZn%2FC8AKyFUlOLHZKuP8eIhiU9azQycs9KlYuL67E3qB3%2BY9Q%2Fp3wAY1j58hArC8O%2BM2H0Ld1NSsRhg%2BSOPq%2FZOwCRYCqsCFYOgPaqlp%2FppS3vo5dDd0kaT%2FE2T8W5jwTi0Ll5zAXJ9MQG%2B5GLjWz3YYancQDLkKxoIxsE5qj2VEvL%2FrGNDQ0x%2Bl6OWhheifGrAKqFATNZyjURCzmPUzCE9SuR7vsGRtvj7DUzsvdUeSDCJefDG%2F91SYC5Yo6hlEhbezrUU5hRpmvz5X6xgDjTaPC80xsGx35WFYYinfrrDQf2J3S34uFGOlKTTIG8DSCpmKSKjvZfYHbmWkdwYrN7tKT7TFLfaWdxoFdy5moJIGTzZTA80vu6HbXTCRosbJBjqkAWkflTgxfHy2GeRzxmevTxMEFuTseBX52nWZ3mewumgDYPnT8lHTYeY4kQNuab8EIFIU5zpTdmSuGGaiOgYDb%2FimK%2BCj0yspA%2FmlSQ0H7qEqPZckgIIWSLBi%2FrI5%2FLPVcKvAR10oEBfvlkblLkTCrI36bzTnkXG8ilPFck4ND9bZtB0kcm0K49bfsRC0yMrdyuXv8yvP2lIUYZjGNLA0GqxdAxOY&X-Amz-Signature=1f8751c08273deb66dde94d3e623fde900eb975cc5b52a88957c1a2060409ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

