---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMCBTLK2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJxTKS8%2B2EijIyQRknehQIjCMXA0Q7jfM%2FDkW4k3CD8AiBbfGldesqtAf0iS3IwQZE9k%2FGZdjAPwfK%2BQvJ3eXhtnyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMakGbOkiv54geeT7yKtwDeucmHOSmKHV2Y7fgX85SzFNfpf9VAAzwQzvIF5RIifOpyxvktrSejLPRIf5uQePGsEuvXVgNUpJbUFe8Ix5iHRkoHuTYamLJGDMql80Am06vqRfWVAp9PZsh5Tjwkh%2FfBjskoRETN4mDg50xYwrARRN27WRqM7wt32qe2nzluvljRQ8ua2T%2BeppYY1nvPDlxFvEfe3WJO2LACarxYMXRu3zhLeTotOdt37HQiCCzdX%2BTUkJUIR8zwbgAovcshFqAC1p1y%2B5FQ%2BcINqJm83dyiIml1Aa6HJ4MeiWpuZFrH5fUuEBfMai165HZ8684ckef%2FLMTI1DAFVOkdU%2FmnkPhf7E6%2FOcUIqRmVYLVwoh4FH8fUt%2BDZrGzyMbu0NeLvMA88nCy0pbFG6vl0PTlTAbfE%2FCm5tbQMJjlZQ3WKa7pRl7GVOsyw8PLmxUn%2Bn1hvqcki8gXDVk7x3rOyaqB2tPSnTjFolvYegeCzbCWi%2BRNscZaHKAb6oznacXvsU6wATSSkaDsD6buXEEsUR%2FDcyLVNDPkcpdMvwVLQHe%2BllRfFPCBlMt3Lbd4lOD0yLIkdekfzthBzdKV8M%2BBefvu7btc9EDqTJIzldbrjgiNKhvzfnDTHDqRo5b82E41QO8wqdzCyQY6pgF17UnKgq7Nc%2FVXaOAlyrX4%2FxSlWOELS06af4dgcaa9gh9GRE9pFUMc1ffP7U1df%2B1FH6vO9pHDuBwZA9piZ2fxUCJDyPuVTspyGT0zNpDxWgo8upk6sp%2FTc851LXEB7OZS6x92rUUBHGHdEAef0r%2F6nJLnYjOELrRY31GfISHqywyFGuWS33p5OqUD88lztBY2hMtaAkoJRaemq2YTojHU67mqju00&X-Amz-Signature=cf4084347df245d7597d14cf9e4825f1fcffca0394fb6a020d7b6b8edfbd80e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

