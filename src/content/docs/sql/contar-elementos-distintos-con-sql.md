---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2AUX4A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGcvxCYAcgHpJsFfjqFwukYceOlrsk7GkpVPY1FCV5UYAiByUpztf%2B47mHCWgzLJOadaATwP9hTt39%2Fzu8DlEgNqXyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMCsrJI0CdAqL1F1zjKtwDT14dk9%2Btj%2BcU%2BnlCuARHiEt0qxZvBPwyL87jTbAizpSz635G9RXWIKr%2BT39T%2BBxjJiEFwvlhi993AbFLG6kEqHdPNkA9MQb%2F3VX5L4yGvADKHXtJm%2Bjvu%2BZhDIfSaeskSKQWQJzXtjy0u%2BgUzoOkroHk1ysYk7EnadJrvwbSPS7tEFbL%2BXros9KuAqr9valIxxe42VO5%2B2My0xREOnDdm%2F16OH1oQgNOyZDwNm5ZfDGbNSKbo2fWGBvHSAc9WuCnC8JI4M4kMgiY5tTT0%2F1prvm4Yg5dALyqhcEkhSBhgh0HKpIRYD7y6hyDGzv2z7geR3T%2FWM2X4qVkZGh1OxDrg%2FBDZONdPswm3cOSGKoskJdSjQCLPA4nFFdpWQKW9aQrtJPGtRgiO3rzeyVlIKyylGWgnn%2BcekO5J%2Fqq6C3Tjkby5vW7Ya%2Bu%2FYbx9zS42QeTNCPzgpjWvRyj4esl7W22jFYboWe1lNy%2FjLEaNSvC0GsECiv3gDq1XVcCrE40Rt8ARpNdDt4UzBY07lMz2q6X%2Bvajd0FZsMvQyRCINN73LeeLfRTnONMd%2Fwah03TlQA7r4zgn1FWo2QpIpF4sY7L34CJINc7o6cKEZWk%2Fq7wG0L34tIogVTmm9cuB%2FmgwnZXDyQY6pgHCzM%2BdaF05hhFsycukzbsvgT1fogzPRzWt8%2BT746m0bD%2BF6THOln3e7GMQdmPp2QxeYrWYPTVTDWKIcYyU%2BRdK1lqE7CRZ58%2Fshc3UvPPvAekOkTzCe3uiPU4IaBYcU%2BM6zBt%2FMNhZvhEcBJMsCNWJzlMzpPHQ3hJTTI5hQUR6xAwK3Q6Yu4JBk7MUg9u8TrB11EOOHvWNnkWUxxU3d2RMo0AMntO7&X-Amz-Signature=e9d1695aae71efecf473d8f9bb7db8145f6282672d154424c0626b77c7f48f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

