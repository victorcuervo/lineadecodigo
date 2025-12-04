---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6QJRUP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCl%2BTUZzBo97KMh7tCW9SQ4E%2FpinGOPCsVdSFQY04XiRQIgGSTWGYca1dyk1K3R0vKPzNBJoS6eid4MDmBKaS27tsUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJZqjbRQTdiXcj43iSrcAwRAFV3%2B5SYr%2B2IgQcUb3qQkMmc%2BeT9G33EQ2EqkzSULPMwmM3kx06cYKWDH%2B0rNi07yVX7y%2B6L9S0UFsa22WKQrrZ%2BffWUE4AHS56L8K224wMwwtUHSjIydcN6a6SJ9QK4UdItJdY3r4yBNwaijBCZG18aa%2Fq5PDujMvsv6h3gcnJLXfLrHOUS6CSTgK7o5IdL95hWce2s0Pb6jGbSTwmu04A44vOAuQSiTTUi9oq2h8nUFDW4Tg%2FMA%2BIC9J%2BREDncv6VXDxEZ8W3aW5hUCg7NYVV5J31oFFhWwQirCeMI2qdbXSSaZSFTvSP3wElVFdQXgPzMdoNRSp4urOGfx7QzvwAv9Fvw%2FUCa4SMJTIRNqh0EGYd3PAHj8bmDVZ7ojTl9PGo4WKs7NgLvi3wPmUKNOm3XHYwmwQqGuG%2F7N%2BNTaL%2FivodXTxI7uFT45u0r8bunOdRqQGrySZAbXks00cbg7b69kMUtl2JmvfT%2Fe8oCcMEGoHx%2Fb%2Behanu6YrdhIH1zrfgLKltWTYW0TprJtJwGRGo3CzbdIoZ9YI3fLxMoFI11nH9muMmvdBQdmUTM2fr1o%2B9%2Byy8%2FDga2ehjNYJ9qPSMBXVdCxOr7B7LrFV%2FNQ%2B7pIAKKQ9hkCYqT6MPCFxckGOqUBRrCWn4bJ1I6wFuH1WpwuERj8sE8WzfNqnpDo8Dg2JG1K3oUKtR%2BxRsGrn7eF0OvlvWTb14otPH54mR%2FzZe6BfFmrWl6r0NYMGwuAC%2FcBzzrfSQ1zGtg%2By1zPqhM1zFEtAUt%2BqlfuLIpDdAkPKPWXpMXdxcif67%2FLKoED8qUiNd9AYnBhiLUojoryCPPnQJo0QappV%2FUqkAPWqGB8ikDA969z0qB%2B&X-Amz-Signature=43d36f6eb976e0f2f46fc01eaa98784fd7f9a0c5a18170165990fbc5502af3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

