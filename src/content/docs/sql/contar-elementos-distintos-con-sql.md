---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHVJFMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHW2NheNeEt9Cv9yLQbJZMnEEKUn%2BPtoH6Y1f8nLepIAAiBvyNXLJnEsuHwHR3oRs9NEFKe4Z%2Bo7B1vnUUVJA3UftCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMkL1XIPoWIPnifzyLKtwD%2B3tB7VDySE%2FIRjBY7zEIxeosFHtcvhnGREG4egTPKDo0hrRHzTbpQLexYcIj7ds4kIvHni7cf64a5yQ0cnfe8JXtClnmA22aAla8xEprHzi7Oz5mZlGLastZ2ws8do84H6VYko6LFnv9k2%2B8brmAhRglVOmDt4DFB0yjZ7QWNRHeggUzok1AK7rWa%2BJDKgBBvdjqZcTNlgoiJLx%2Fh%2BlqrRhPe3e3t87HjsZvGXZrPQ%2BX20TvsSXgQqIXV9O5gFEf5kfoMywHTM2T0cvGl1x0QXto9AkGHhbElsd9LrGqRkyWEzs%2Fcb78YzO3KeioZA425oRe7YSaS9L2pUZslPWdOoRKHkz2%2BOgVYmCXjSGrUKxAtlJuwFMZIbBLFObSCHIKtF%2BJu%2B5HlKZV7G%2B09Fs0ZwmRN9zyL0jEKbK3mR7ioced5MAnCSqRFcjNAwcusiwGNq%2BGjsAaBeV7O2CfqtocLIYpCtf2KN9SDZuloFuH04dy4b9YeOmBAjC75ivUfYtdlj2u62VTMuEx2eHzkmBP%2B1Kj5fnSI9muOrqY8JG%2BH3WVuR5mFmykviqQNMXqLalcb%2FShdIcSX9LBNHmu8xRuONbfLliLZu4iuHD7QRS1MRFGEzYIo3gUBcqizOsw9ebFyQY6pgFm06p%2ByymEA26HrbF6xB6L1299HpvKU4TrLah%2B0okRiktp1IIUajY4LLElK4MXUa4kS7o%2B%2FRsYn4%2FFLHWOO9M8Zo4mV9JYw4QKvIQXTdUh9zpbZzMnEJamL3PmJLPWjyAiV9LrFL%2FnZ6%2BFEyU0Dm%2ByX4THOPjMcFTuXqfd4iQJC2fk3Pt%2BBRYuOS5aVbf09ZvK6WX24OxF1ZEsiuaUThgd39oYkYUX&X-Amz-Signature=b8c190dc6f6d13d63bf27446c777a8a422aa061a47ca0ce43da5c9b15da54a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

