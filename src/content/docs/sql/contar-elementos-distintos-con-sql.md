---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHGMRKG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDdl4VQ1HU9HWgJpm9OIaSfF8OUgwJjAWKvEB8VyKDKVAiEAnNPSJvCgP5MIHxAQ90t4j%2FILTopEjT4NCG2H53JRnBYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHx6HGvLrnvbP7ZwDyrcAxH2VjMPUwO0k6GnbX09sBs1t2pedN%2BGYSAHjQXDWcLDJouSeBLyJPeWfHpFcMk01HwARerua%2BPlP9YqQrwnrDQpakODhkWhDDq0efUJlZjFEAx3giStAq4PzlARSwlzih1KxhIb3VVdon7brubbDKe1rBkP%2BvGwvXvhHUkRs0C1UxzHz9PqzhZxnA8EzQzfHBmje7WmzHXuJTotURzCyT0ueyN%2FG9HVaV6JxkBj8Co4q9zUlAJha%2BbogbTsYzJfNn4wzlE1wwPCTMdpzhldhL25cqGbHU%2BWxSbfVCLGo8%2FMxqTtxRvY4Dz%2BeRwYFPl5F0%2By9WsKjhvpUvjAJHAHewxVY6fmT5Dcc%2BIEJVGEsibMSD3zQJguebIKVR99E70H2SLpG9wh6%2FUILXmQMfn8Jjb3CuFMguKPvI26%2F3TLYaCL1VldbMIW9P6QASM9zfSOukR0KMwNewfd3rfO4ypuRfHDcp7SMyofMxQzWh3OeU5EP7vJmyxaYp%2FQNHEKfp%2FL1rbM%2FQMROHQoz6PpGWxTDkAJKX7hW7lEz0P5MpGAYYco%2B7B5BBrg6D6TdSoOL7Xcv0ubT7V9EJ5OBi91p7qcyZg4uJABbFlqOVzCzzJbgfO8mqk0tE9l7HxmhQScMK%2FmxckGOqUBIhherH53eejkR%2FOOno6E5BLDS31lyFLBwP%2BGIIKaGl23xRVuxbw%2BsGbLYKMDtmy4Hiex2ljaq7blDzt0mRkt%2FrL5DtsCSbvz7iLuDjQwHq05Kyp656mG2DdJa%2FzEKqs7MZM0H4KC9AGhG6PZsoxioIX7EKu6%2FsTkyNBVEtaTB14L8V9vpq97ZDncgNPV6IA6E4yzfWUnK%2BqseDy8O0ctNjmXby%2Bj&X-Amz-Signature=76e64f75c687f54933e2318b8aa591f45fd48d260fab0ef663ed6a4c915ba3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

