---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGNPI7KQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDTI%2BgDgSgDyxHhWg2N8561cbpQUkHcfob8qCbussDsSAiB7JkW9UYwBL2fsw9RJJDSDf34MNYNTb%2BfqWxr8t2vUCCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMz6rZlC2GMnXAhKp1KtwD8ErCBFjYWzPVl0u53244gVn%2FvKjTV7vFQkfwFUPXTkMZDQ6JlSrvY9n9P%2BfVQI22GwBF6GZylP2f0zrwdqGama3rAK3x6ZGacQPVGN9tiXb%2FN7lfvJszKfRLq18r4LKO0R0ieUjLWWLrjP9N%2B7zNL3%2F7OntWej%2BXRlot1SIpPmNbwUbrP4Rs%2B%2FUwS7E74u2xl0TspACTMQnjC0h7nsnJxt0EVTO61Kfb1sTcyBZ%2FGiWOOcmpPEd0vx3oER%2F9SbKWzsqPFinZdrj3Ba93zm26mkzOpOUNLXx%2Bp4W6uFu9UJqPxG%2Bc5OeecNu8UAIf8BTqdlwHhJAVPnrAhcyehgCInIrtnJfwIZ0Wrspqq9VfTVRen1s2agvQyFyiVoVu8v2YfkYAbD6ASbBPIXTYBBOV0DXnr0Z8BssrhrPQaK4VpQyRwzrCU0ABfWCj%2FB6T1UPbBZVP6xShGcIqTffz3S5fSGgqVA0UNnKybMHeoMuXYVK92Su8hEDd9PwH0ENISGEFLikenkwSmJE1AKhe%2F4vdKNDrRJMlGXtWd8JgRa0YVIu4Fh2LGFr%2Btjwcg9S2HqrCMxiNiXfGNtNNa%2FsF%2BK0kVLAC%2B95XkrGtdmkdqqrwuX2S55RhLCmymMX34sEwqJDEyQY6pgGxQv686mLsL47tgw%2BeGPL328ahDB1RXDFznq2hs0T50xWT0tkZi1q1%2F8wZWy7DO1xGp6SQJ4YY190rHTWuRbExDJ8GWPtNWNX8A5S6sEwzMa8FlfqX%2F9oD9r1bNgdjkjg4uFvHGYGZ1dnOa1zptIDpjE8djTD9kgnosWWsJwkm3MLWFdokP9nZfpV0yugQ7XTS5ZeL7Jh0b8HHqkoOKa516gDX17tY&X-Amz-Signature=5f6dd4fd8df98931ec6a295b805e84c652da9e3b65f0b768a414a8c4f81f3a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

