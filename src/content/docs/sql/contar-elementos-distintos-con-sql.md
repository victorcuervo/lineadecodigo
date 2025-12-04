---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6TR4WS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD8nShaTe0zpcGOpztzeNgSzJtZbJy7RFpq8rihMph9uAIgenjCLCpwYwMTrEfUgZ%2BsXLhUL7S%2FpY8bvg5jzdPJTB4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBzbO%2B2kgmf0q%2BNV6SrcA8gFn7v1A4oTAZQUAae2Ervc0MSoS%2FTgSRc3eFweHOt369QvyGhhvlNvWQQauyolDUNi9bYZA1w904Ez%2BpTz5lx1jChyc0VVqXGUCzQjY%2FMwRHo5NOROfR6d0gbTBQWC5QATRBH6N19oaeF9T5EltYeIdnsbfowqRGgjqttfRHVgL7vipaNwgUtIewjP1jqj6e1Z3lhQcCnwAWg055tZOq7C4fKs0gfzDmJczUWzYGQUTcex%2BB7CotXcekUxz15ey%2FXnBExrAPU%2FYsuBWMgaDT7%2FVL2ZlIg1OH%2F%2F5KLYRChBvK2D0z21q7%2BSXTV0uSX3hfHUUXH1L%2Bx8gPW0H4m8Gpbom4jomOCKJi7xWsoj%2BWvdSZ8BP4O7Cf86roiDQ176vo5mD7kfFvorFh5v8i021Z0W4knMdCMaqDM2249fWYTZEZAuWJ%2BG2yShtgoERTiPRMDlrJrImKOI36fJCARPdoI1UaKJ0Z9MdiauT0ib1PPRckx405m5p3EZHHI2O6nDJS0U0pxjRAkZExlI2yJ0OhaEvNLuwX%2BoibNiNJDrsPA4Puf1z0i0f2IO66%2F7LRXJdZUwUYDbQCSAwUeQwaKLHHd%2FV40xs3P%2BjzxF5RUSi9Oddrs7NAnvEfUbLwYGMLyRxMkGOqUBokR5b4HB2gt2EmRSr65JawEWM6I39xOFzj6kMsq1q73V9HUICEyieG4SWTjqc%2BxZWTRv6mwf7TghgvMuJEwniKIi0Nz5kN0k8%2BbXBKwhz7LJRP0oOtD%2FHUld%2F94KF8v9hHUSeoSbWWGxodjs%2BbRUp1egO3uoVOyN4h6uwhuA4p9OihQbIfjEimzDB3OSjtF5gQ%2FRCWY4Jv%2FzyEB9zB0BAucnoLEn&X-Amz-Signature=5893d4297c124d798579a0ac53d7365062c9ff629acf74982b105a4adc51a648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

