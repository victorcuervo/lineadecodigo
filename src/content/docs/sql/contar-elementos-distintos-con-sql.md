---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGFETW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoM5Zx2%2BWQbUMhj1ycCc6pM%2BSaZzUHmppIM6nymvmwQwIgGvs7iUkm21%2FifnZzZZqWG4XLOpyrbb3Gn02SY5ZcrRIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK8TI0N70uRlTTSubyrcA9TkKPSb1OjitSELL%2BoXYb1ZYeJrZ%2FCqtNl8fciLjeobxwjzBBpvGkKoO20853U9IuVfcrLDI0TtE3g6ZIAJhfQC4x%2FQ5yM0YQfFWzSNMDmTqIkfgJ%2FL9w5Vy9RYWLIY4oKKgJLMPU6NoW9cl9hDeBhUF%2BoIoZQ77QcWnI0UMJMQNWWjlbXp14f92HB%2F5w%2BMsqBWBOZPlLN%2Fd42rW6r9e3WI5nuo1Z4zzzlLNxRDH%2BJlVm0BzETqDaaQFxUUWIMfXDWwjRjJEZYDLDkFFFH2ti1m8EeqYxKzzQIno%2BcYghTz2Wrs3aVQ7UGVGa%2BD1UgHHljFv84kl7oMQpKuCF8b%2FDDinIeJoQonIOEi52Qh11Elrz048t8RS07RaJ6rDVU0tapDfvQcSUdI3XBS8adh1mpN%2FJAIAwEF3burdSrcM2x9Bx8iDmtD6fql4yidrTUIv%2BTZNR6LDbVD%2BPcg7l%2FpyVzXDwD%2BpIS7U%2FLhH3dIGGabpPoVKWsaORIZGW6Uxi9RoqVWeuRo%2BzazuI9gCi9%2B1kITU%2BU4PPEEgWu053GQZJF7G%2Blz%2Fisyer6Rrb%2FX1zHqCLW2Wllr6eJ%2BDxPZGahv3XtbNMJy%2BV1dSm7U4BP5HXJtH3ypZJsxmdyBJstcMNjcxskGOqUBnZQmc%2BRa9ViKFh7KZ2a4nzfxq%2BcDs6jBDTmZiNMLf0pyCtUBa8PobyRdFu2RfT2AKTk5o%2Bnzq0O3skdB30%2FW6yP9dua4MToD4vTkWG1%2F26ltYEUlhHjjiA36ctgd%2FYjP5mv7q%2BGCD8Nmg1bFwuTrqQXcOnkGqDTVfoXuH%2BW2%2BciBVO61aFMTEHbi8Vm25HsitOL0dd644MuwKDqKSkukvWVyUyJy&X-Amz-Signature=06a4037d40df0cdd60eff04f42bac3177759368dfba5e5aab8475e17da2b601f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

