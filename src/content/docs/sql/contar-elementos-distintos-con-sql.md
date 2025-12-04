---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXAHIUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC7wnih1fCwjnCN3e43BL2PpTPh3yQAd3GmMbMkNnKkOwIgQoKeLBEHR%2BXghm3RoF4effLVHMp7RrMaeNeTKcE4fpIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDElDWJOJl96Cnm76FSrcAx6ZZ9PCSRP%2BJ0m86e6ULD%2FM9shc0RgFyEOa7QrXPfjtt9oLOZHzqvL%2FykGfRkklxfKdxRWImoygLzGo1oh6XGu5MWCoMeT4Gih5B16MvgYGfT0in9OHXdcTWggpgxwXPcEpbOoO%2FVQR%2FsnnWbCUAr0Qhf1l%2BmsGqg%2BHyef9gu8pUD2%2Fk4wJ5SqwNsadkeVc0bYVXfuQvTBtdhlKKAyHrT4O%2BBi%2BxaZbGFfPm9Cm%2BMNDZAnkfYP7F70xrpvYYJrdVWDALZJaSTnQ77VH7ZqlCKcrDrjTtoFwxHMBMu8swwRiwyXtCRr2uXWc1JHRISgL1S4gwUjvNmBZfH3vPVPd8Zg3dsJZi3LXA%2Fna1Ycr1NJwizLQ%2F1gA8ECjKy3Nxla6I3RvkM4Go6WfeZ48vhWaZjpgpD8HiW7fkrsE5vknmWnwXdqF63ZxJfPQGfkuL3txVQxc4TQnFKuDcmZLMANdOHRzrQ%2FifEcLWkzMXNF5%2FVjR8ri5pc0nefplkkKIcPv9mth101miMcfgavpKtFIkXvajh92QUkCWxZz0ZYwmyKkmXnF0S6ZGvkdNxaWrkhIxr7hvHAwZN76qg9h8l%2F1YWQv3W2S%2B1KTddcFgKXwZE8EXTrx6bo1K5IlWdJMcML6%2FxskGOqUBv09NVxrynekNpOXx9EjqjoRKEyv6cjhJQhNbCH33uILGEncfhYwBcr0vbqyrjzBH44KXOqC3oqmhh5%2BdjGHWwqnzsYtnVShtvM8pE3JyhgNTUQzce1OIeMbttXMwa7ae%2Fexzx7qDhUTyzkwk8BoXpx5YgiaTA%2FfVhitAhENQ6EFKZJb2Vzo%2FS4XgEA5KCNVlPUjasUbQJOfjjugl2jdS4Tr9Vhp7&X-Amz-Signature=0795f828362d6984186e8c9974501f9f731e6f9ad6821a823173ffeb24ed8ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

