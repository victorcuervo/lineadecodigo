---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BRD4RGL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIASElD33SmwEqeAa21qbkLyCTnYVXzlGTzQKnuTGVpx8AiEAup%2FSUG4Mam7pAChgTfvn6AwWooW0Zsg6Xeig08aWNY0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIMRKidz3VSxOM0ByCrcA1aLV5JP%2FkKyrMMe5XtZ5Hyc%2B3a74USIfnkMhZtd%2FPmR4s5bd4EZNQxggKeHP57huvPMjphB2NdflJyBw7jz0J5Er2UuAQrsJDaqrTFtPe77k3RrA0M8Wp%2FoDcJj%2BxNY1JZgChMJ2xxN%2Bkcna3peBeF9%2BBJdk4oloz84ROu%2BzoptJ4CXSdZlPb5W9pzi%2BlBy58NzjhjCqSsLiyKuMybb9ES4Zqk0fB%2BWNSEFmr6Sn39dAnQSViDSoBJtribDh2tlVakT9fqTbaJw1wpK6aGzCrPjtD3R2MgyjbrmCHkX8yE8IywPwgEhXlRHXc%2BPZkLTFzMj2Ih5vGNdlnan4CEo4m0tI8qjRyVpEqmhndDXPldrkd%2FCPxQHhR7OcgxhtYG5EHuTt1u1QqklrTcOcgZa7D4p8CzAaxOZNB4yPnxjLdMNekU7%2BJ1Co4IWDF69pDL1nU5UPdxCJO0zcjLFHduJld2OkdWHAhzbrJKwhsTDRnoxN7zPLqrfyYb6kYVsqH4zChQBxvhoWm91Z9XdNj4leieNdL9dTpdhUwat96mu6B5bQlB4sTHJMaCmvjRs1ZSUYx3QwUWyXEb6qGeoDHkYNs5FJTTrKSVjzZ%2F0OkX44pu0hXhb9oVV%2Beh%2Ft8DhMJKGxckGOqUBcb7OW6onOEqVgn%2BHXkIkuQB%2FYI4jPo02xUWTNaHNYYDJEDcgasGMuy5lDK%2FnrccibVqppWzk2Ku%2BcwoGJ4cA7J%2Fo6qVGeG18IGnFD%2F%2BzGDg%2FYfll7M9Jv3tKnSrOn6PgutAhytxsTvpEvZuAYAPi3c6pRePF7bXmnx59%2BpVaTDT6ivuQadihjUi1I7wqvORbgUu5qGkRCKgPSrjUJqJ%2FvXqMRLfc&X-Amz-Signature=82aef033afab3c15ba0cc6236d82fc4f21ab475eeabaf72af295ba633bdce980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

