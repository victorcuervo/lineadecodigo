---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFHODXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGKXjHnyBVMbbYFfKOXurFtK5twX6z%2FTe4jd7x9Ozuq5AiACN4U65T3gB0ERoikhmfcdYCIt%2FVxBl0K%2Ft2zewxN%2FDir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMB5bV3xKVQz9J3XgDKtwDgFiXNi5E6FrBYGyU6JEVlvZC3IQ9JZzzE411Py67WZg%2B%2BpkH6Ai7LUKs25Cx896QWZeiku7mFTw7Ar556aUfsMHCXMlZmeTUiRDbUJK9TpxJ9Z8tnY95yL3Gipl2kGIG21uXAChM7bS%2FE6I8WFLcBZ0Mpp735L3yj2JeG5UBYFHfCcPhL1KOCVli16XI9eelGu7A9Wc8UjfAxGr%2BmlhphaPw8dy6XrRkmlVPA9hc2pwbLaCkf95zX7qeB2BcKDUrd7OqXLHYQvNSoYdCZHii3MRmHtout3Do%2BOPHL1FFenGkomaEDxBlI7w4vXERbryq7iSHD0Ry%2FCNm6lWcFojvOD%2BERTzZIN3SgfNu48ifszsukInq24W9s0KBjRUsJYcXGihW%2B4iqtTGrz4T0dVJznZH1pbTWMyQbjgRT2AVsUM1Ljkdcm6VbyCyomxdFy3gayhThONgdI6kjoJcr1f%2FJf39nRwAhcOWpc1%2Fh%2FHr%2FQwnXo%2BydaXP8banFs5BdYWc4TZJtzDd63qsx8qED0r1309znSOZbuwMvURZ5T77TxmDFWMoax4pe0QsQSXuWSgcn3kTaJrMNTMm7Z%2BKZ2YUvWRisvEPkZfmpGZDi1uJYUc5twzRIznipTtDpdTswx7%2FGyQY6pgHkvJL8qg%2Fr1esh6KXvZT9Ly9v5V5hkp1smPvM7qYeZUDTa%2BHnRtsjLtIEC%2Bv%2BrVkrfkvEEvyq95hNm9hXx7u%2BEVanRImv05EJVQEaw637soKuoIuQ%2BOjDM0xZsCF22qaqGxxkSO0UCADhRd5QJHNp9Fbkuzf4FwLOL0mszkPTSjTJ3aeCJDlHkS6pmrBXWsroXIpVTd5E7%2BtvNhkcgjUaI1f9v9czP&X-Amz-Signature=fc205d2c60c9963fa9406eb35654b852c781eb75458087d24913d6e471630505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

