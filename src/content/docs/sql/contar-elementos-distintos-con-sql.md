---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWYC5A6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB135BIZtkEc983I%2BPBnn8cv9zxNTrGOGaOnGtEkY3emAiEAyYAbhAJh2jNhnvIjJpwt1cDc6wUU35VlV9e0vNB3AiIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOSik5p1qn2GqsKC4yrcA1HE9mNWgew3jWXjuzgfUgp%2Fr%2FhY0q9ee6CLw0qcT%2FJXQqXoIIJkGmF3EoLnlNEWmlEBeR7PsP54V0dS4BKBF0py8GbzIza7GXSNNnxWtAUoyw7c44APp%2FiqkSmzXrvO1kso8iAi0iEFxtkqewlgNGzzL51yq9iucQUjMgn07d0BsnxAr2EQ%2BfAQrIILx7gZYtMaSroS8i%2FASErVfd42c23zV%2F6TL8Uhlbedx16aNsVa4HgChu6rWgkzIhx5A44HuLgJkz8Sgusn4MxhcHRvzU5008KKflXZ1Y2gTmdvCDK9QKY4msvc6SABeOGvOYNZ7ED5DZfYk5UCheiI7L1wLnBpyxjz7Mx4dEgO7ispbrtH1ris%2FK3hPF5IGUZ7cVIq8qNuBUkq1vfwjOZIwk0t1WgetLgGA5CjJ43D1CdyZwez8wVfqiVdMFCS7gpVE6tzS89SZOjYr8HcdQCFndnkp02pq29FJlfQLSprGozCDlclQWjb9wgYz7tYv8%2Fv1n7ESZs6NNP5iWNjEWqCgV0xoxhyE5hQdIfrbb2lAuQ96u4oU58IzBPqpu%2FnKrdeRZH3LvzIdeLQ8SyGnHDJmGlNVl83j0bAtOi8EM8STStbNFk46T590hLBDHRHBLxrMLnKxckGOqUBjx%2BUNDaK735U2cfe9URTxKcW1QxfSX8imbPQZW%2FBxLFkooiTtgsa4pa7qxHFTYFPKPHZWgw3QmcqGh61JFhZzJDug9NDJ1ITnR0sVUzfroKFDV2%2FyMAX7C7MPZp%2FNJ2pMDxb2LZV4wG%2BBWO%2BCyDxeP2LT0g4rP7Dr3uuZ0%2B6HOUsJ56zywcSAtljim49D4vkXSWZQHBKFu4s1HeDilDt1UKzL0WL&X-Amz-Signature=34587b985bdee34bd2ad6c47ef41fe67003ce680043f70d20308c5726d58e093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

