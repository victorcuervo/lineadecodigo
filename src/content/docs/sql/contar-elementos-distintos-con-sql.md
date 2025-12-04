---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3IIEN4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHBf94ooqe%2BiLeuaYNMnikKPvNnQKjoIthZRCAY0N94KAiBaU16UiFys9Vfj63mO%2BFbdVAbEGM4NSCH%2Fhh6GL%2BPPFyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxUeo3ueJqkBscxLRKtwDt9RLicm8OQv1Ecb81j4Z8fgzMB3NjxEVzFPTDJcvbs5jPRGdyF1U9Dzwl5Ulft4gjskGbqBn3uHwV7OX8RVLXZQm5WEN8zaRbJe%2B%2BsMT1mvrpxCXbO0INsA9okZku7Ciar%2Fvdn9FAzp6yL17%2F9weqS5V8npWRMIPYOmh5USGeQCm9hjPP6o3pu%2BbtCzFsV%2BiPpmKeqPZnnVIczePLS6MCN0AVMCF42DGukqwt%2FjtgjtWjknB4l2s%2BGI2o9gwZZ35zksvgy5uDA9MJGUvhoPdKgKlUok1iANaPCMosDispG1jYvVIvC4tRn6tvjq6D41eryYYoU61V%2BzIPTh7XN9v0lOg75iL2Y78Gt%2BuiIp0PMGIVnrcfvDKmGUMJ8xrV0lfIUKPHRS2BicVxjUa8DoRFNjfKSSL49PaHISzDTuI3fmnC3OnIat6z9yRY9CJ8cIQwbf1M%2FYXSd3OfJ8EGyk9%2FfEYb6dtGrFLomX48HmW5rW0ScWCYbFygWo0tOgSp1%2B%2BpXskIYciLXasTyzlTllwT9Sf5uWqlyI8aTQa5iwwnzSeWzqDMASn8oswAN12lw5ySV4LQ%2FJcKEVokkdNUr%2BGyQT%2FNo%2FA4HxMF8o5aTyv0Swui43BieGDu%2FCotNQw%2Fa3EyQY6pgH%2Blh0UwEkkt3FFSQcNDfR0XbTV2DOegNrLw3j3I2%2BMTgqtVFlyPNYw7oqeCOZozWLfF%2Fv09nQXNCkc48j6Z900uUi9KP9u4X8CHalU%2BNCT10ykCz9TqmG7Ktom1TIKRooDcLVSh%2F5%2BrInb4ONVHFlXdcNdPTedxpjcJ4%2BoYkTs8jWhAw1ZrPR0mw964NisbwW%2BrdYZgLVWGDx%2B17kJ3UCm3T%2Fh355O&X-Amz-Signature=ca78c9d7b2a0a5eccf704b5aa8dae709fc8098b0a5112eb704bb2715500e23f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

