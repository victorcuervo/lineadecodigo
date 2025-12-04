---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMHFEEA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDgcVwX8j3uWmE1esDVC6SfT%2BWUQYAk21FexemTSE9ekgIgETLoK64C7ni%2FMW%2BAGJBUzXZQzFec8T%2BJRRey%2F0CH8CIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKf6D3V0aN7cSv%2BE%2BSrcA92Q8iVmfWsv9YxuPpZMHMMqiFpvY9AWjjnQFo5Aid3kYFvB3guoMoV3pt%2F2SCFxlq7fLciyoPtRRHAbtmQpiSx0JhzBqFYQGfmyDA5eNcrA1%2BO6ZC2%2BP59c4jJAXdOj%2BdZKdSrbRrTXIActfCFNOtcfrOlm3p8kNuXCnUwt1hfWfyKBITQmX17lPv9SnlAwwMHjNyUCBFn%2BpA4AGbJRBZNIxi3ROU8HhH2IXcDNlajrGxqqbaFPZ6zwquscE2wrgvTY%2B1PMBJ1y%2FUsk5%2Ft87jTWmtqXInCFxBt6aoNV9hz%2FYcTXucqwBg20usFvo1ObT7PPwqrHZjlhfsuoAk7LkWHKRTqeyoFe2ibt8hxS%2BhaoRcP%2B%2BM3GKZ4wCqcGjeuhr9IEOm5QjznQ9u1im%2BAyGMqZx1J2S6U0dEUbbY5YJKwkNPQKVwxyjNr8rbG9IaeXdY852hCvHzsufpRbQlyn49aw6ClBx1lI2Zv%2BpDFKg7ytqP2nkakWVnk79PYgRM7vOsVzOcIFG5oorvyMG%2FquOnZZDd7xDO6b6svyKj8It6NRBIGmUMq%2B4Ld%2FUaunwyBw%2B7%2BsQIgijlx1Xzsn2KsLU72m%2FGTFXm603Zkyjulqk71Bh8JcCSekM0EPWMeVMM6%2BxskGOqUB5OaAEKEcbvCif6zbVtrk2LGe%2FUmbLtfObyY5y7dvUTxNHlEgI8C3TaJ88FsZImefUUrhv9wCD8Ma7Vvc1SlZbps7wOnRaf2l0%2FxncIkq4FPH2cW7nwOYBv9VAIXwJH%2FnmK4ocF6dOhpuP7833Z%2FredL4d%2B8at5dn%2BeUS7NS7x7xLof%2FOeQHI8CwNqHhGqHRs8K1nlKqeQoJ2bWmU4Bo7Sq0YeR0w&X-Amz-Signature=e234b2efb10fa9048365b926c3df37ec2be256c3ace4790b1c493cb5ce87e7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

