---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLNMAYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAnnGNm3Pa%2FSiG3rPsgN24kttIeMnbrlA2qiqsmgcVN3AiEAlUNj61411eexZOXdI8EwekjmHlXWYO4j52LDT%2FEuzlEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBfdtvobrDb6JNdM5SrcA%2Fzfyg8jUTkIfYL7ng9D9tsk28r0u6ZGz1VJI0KB%2F9wtLZgHuDCu6FmJJ7PN9ggQTowSqoxhI%2Fz24%2B2oNSjvzarOftOO8O%2FHUi39wxxu5klUVfEstk7CHdVIPnEEm3Qzh5nk4dyxtrkrgk2AQQjDt%2BRRzH2uftDVaibbb%2FsLBIWbIhDgv7K7Fa%2F4bBu%2BnSMwKo1D8GD%2FMtpa71lxeY3KMi%2BL%2BOjLvdcrndMnW6DAUcbOEBtmRY4dA%2BktUY7hu0yIQ4FbsYbdxP0KpLwKmYej1FB7LkHdaMILECP2d5lyuxTnXmLVl4RCyFUtTw%2FLgSlWJ4IrVivjYjOQWOGHSGqt6ooYyzZ%2BKhu4QBWzcaRR%2Fc%2BLQp60rSNGA6XkrCu2TcxMFc9b5CgVObDh%2BL8zowroIOCrhHLmPaaapQPhIqPxNOUy4OgWM4nESSY3wCPaTqjky8%2FV6T0HkWyrM0bBhC1KYZpTUKTWR3H5JCj18abrHzfR7iRcrxvpU3KDAG38I7DIQbgrzCq3BvcCjlC2t1MwrdBYAEfTmlAvwKrUYHBzeh0Y8%2FSs0vPzDpBxfGGnMRUy8f8xnNyaRtfdTVAvqYUHNYLOOUb0Ym4IdjVFND9Xr9qLckbi%2BT941W5NZqPuMOG%2BxskGOqUB3urojeVIs6rVETMZEz6jBK6%2BKrJ%2Bt%2BRlvuAfOUBxI0VrYg4YqkQmBEwG10cZ3GZXdXgshigOuGbsqC6fijHeAJqQpCHNln%2FPwI%2B2q7t3p%2FZ45tMp0Yy1IaA75UK%2BN2HQp4fxlI3DVhyRI%2F%2FT66SBEj5bGg%2BoPv16wSVdoSwewktcEQfJRXp%2BXF%2FsCHIqmRS1Nuzqhybsw7QPcEqFUJ5eAFwY46e8&X-Amz-Signature=85888d88c5a0328a59b217cbdd998b8e5f95e1fec09ac935fc26b456ef4c61a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

