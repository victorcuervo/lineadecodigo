---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GY6XUB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDfhyssw2RZs%2BCkQ1SmQgxKOdF56UKGgOiZ2JJHqumtnAiAEIYBpWCdLZbJ4l09S7%2Bmhl9zZvT24hBq7AwD0%2FNyx7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMF8fcyV1JVltnboZ2KtwDESnil8suehlfdCvV7vklL8j5YRK4Za3VU6yjREu3aEkBIPqZnmS410w3rn8shTUQ4KyHHu6LXr%2BppUD3o96rEnqLNkFEWw2rz7u8kvXlQ%2FbmyD1jj2Jj1yGaO91xASjJbBPqn4JvgOOjfeZWk7JbIY9irVJAhJca9Pi5HKq%2F%2F9k9VbefV1UNL1Rh033b4PW2zb8ELbwQPHJ5OTWsVGApYqcLqh%2B%2F5tu%2BJM6ILKB9fnFl144ODM4vPr60K4S5KdhNvQm1T%2F3yX%2F465XRsXZ8ghaA6a9TsP%2B0P29ddiUc%2FyhbHHeQTS%2F9aNr12AbrkLzTlPBOPW9f8ENEnmcHLRWdGJj%2FC%2F%2FYFySjfF7r%2Fuk%2BmauNURaIWFVfQIcfHyLghsM7tDMCKqnO9eV8i1%2FOvgSp68hGDxPB0c%2BFby0IGgM68i81tiDHJAPkwkqRFGpA49xTJNtHJFZaRLMUQoJFHLyQkkGOZWN0%2FXNENtCoOpdQiU6dJZ4hzLnu6FnG%2B6atwTZMT%2FGTDfCzj6U0%2BCbDwk1%2Fvebteu7PAPBxIDNECP2wcED5I4i5edwBseMpmmIhbdva0zG7t5mgtV3tF5S16emJ%2FkVkve76vOJr5Qvqy%2ButuNaUCjcn3dnCJudAzxUgw15TDyQY6pgHmvNUnM%2FUex4s8aJpeopaM6AD2%2Fe2tSrbljSa57v8KfcDwcUoAiKpOfB4mkXf5n454ZkZBJBgQ0rhfezu3woXjcPn1EVzRXbIEbtUid3oKAUvpntZnHiPnmnaLIBKxD1hPQ3PT70%2Foq7q8atGnzhwp43RIfPf9BPOFl0IyRoVaSZvH4awVN0v%2BkB%2BTRBvZMQjQiGctwAddIzqGIZ8asy%2FXSkRCVhVV&X-Amz-Signature=4af2b60cd6036ef2729ea71cd5b10d6283163b1bdb01ac73b43e319329f7d4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

