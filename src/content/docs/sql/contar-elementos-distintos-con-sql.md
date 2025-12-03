---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCROGGH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFYwdvH1pB%2F9fpFF9%2FHtWkH4iUZcDICV%2FPpkMFmV1KBsAiEArNWwOAmy7PCl2hKZH2AlUuB96qpTRTXWtgHYI0oMdfUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJPAhjOKlYCd444fPyrcA9JpXu1k0RONXajjf0hQt5V4QgBqFfdwl9sawy7AP8LzzgkALfB0w9UcxR2384CtRvFduHZY6NnMWvZUztj76uIwhqyWY5LzjBqFJeLIF%2FJ1ogKX2RUT1t5UoT2v0%2B%2BgX9uqGQ1hL594nA%2FxNNcM%2Beu4fcdamKxN6h6tk1RbuddRqE3RFkVh%2FHgipM%2BiSjcdSCORh4XjxLWwlXzPDS6an9laE61LCjidIejfGB%2Bh2940z45%2FRtsqgdL1gs%2BDWJuxdtcSVd2hGGV%2BrEbiWX6F3ao6N8Cbl0fe8oKY6OqSWgZZS5iI4%2Bwabqsr6H93MJTBjMsCM4DXH5Kgc%2Fk5%2FxFDMnTpngyHbiToPwz%2Bsa14N%2FTluMB%2FFNqE090RyrrgCkqUlAGGAJTMUFMkUKfwCbIOzYhUtOI8kXMnWk72V2tz4ZC0dZ9raU7TUlHNq4cCeZ2nP4ljgeTZ7t9h9hJTlARMNhni1fF5gw59caG1dcWvmZ7IoHVFOOxOe5v5D66adN%2BwlNf5XwWBt9OYV%2BXAUwG%2FB4GDW3AX7lBM4eaIaPCPh8hlWsXebmzn5DACZNyciP7gDt3g1dxL7yss%2F%2BXO%2BbRC217mnd1wB80M6SrIwwl8hj8IpPaO73iyi3Q89aoUMKy9wskGOqUBOC%2BFtYoZMe5MWyscaqNomPF5jBxh0w38tn6C0s0Vit9Od94KbZw46AO4xY7DY3Racg4Iio%2Fm%2FpQE7udzhe5ghfK4%2FAlEmTVJZXbccBE1ysgr%2BcfqN8ea9rRyhxdv6hCMsFQAgIsPhRKOISaEllDG1KAIw55uyMbZNZysfgkP8gmhXGyNIAvx2ZLLtTJeRHvc8MafJU2bttgjy9cabIGXi%2FsZG63F&X-Amz-Signature=5471bce07e9061d077b202d369689655cebd5863311476ab082460e5dd767298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

