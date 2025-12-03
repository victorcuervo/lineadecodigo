---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBKPRHO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFIyWgHzJuMYvktqODNxjNGfhv08MHFBA%2BwCEDpJ0N7wAiBgBMu2uC0IrXVzMu3EwFZnsSGdDOz4nCpaY15DFwpTKyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMhG8tNWhGwqTQ5rGgKtwDUwRorLxAUHEVZicD5KLtjrZKrD86nkA%2B8YcbgY21oPkxGj0kqXcNSVpwrz%2Fyr6GxRommXec16DlrANEElJc4KV3lxjW5NR%2BcKFI%2FfrOUSw%2BCkQdCtOI8LCibFCKp1Q6So%2FZ%2BDop5jFQY6ZykHkHXipkuU%2B%2B2CE8wlcfT%2Fgvo8t51fPBfoBmhOBXzmOLRjt9hU%2B%2FCBD45sQsYnpizXoGjTcane48mp7QUsfNII1QAUgX742ewyssuQRkU1Khma5XrOL7qB5hbjGp0hpXI57JvWMgEp00SRQuFc6V6CulG%2FNNcX7CKFPUigC5GGfcxXdR0cVUCYGOg5vSFc9NyUnoYSApIJwFTU9RDpRqCSkcX%2B1G3x2ceitbThGxnNDzgmYs1g2aTw4FTZ2j0jVRXTfQNx4pFCe%2BjOFMRJrkSMtPNReWJKWOsdRwSsX6BYVF949TdJx5vrs7Mxg4pwF%2B6C7OsJO7a3cUh0D7H9tyxwd1LHAe5XRgAKHBJUstivTLjZaF8b00puSJH9mJv8%2FZ3ueABNM9H7s4EJe4%2FEDraY3F1daipIJiU%2Bz9mLFSy9uWbp5AIBGRqrXY%2F8yh8pCAeNgW8eYDFLNlNEGMC1uDPSaSeGcBOG7g49jt9TXBw8jAwr5W%2ByQY6pgHzEJEBGGdvKaS5Rl1rD0%2BTrOWvjcH2qo21z1afwOUUE4Bhl8yZYAcCC%2F%2Bifz1uqRzeXwSkqGr1x%2BEif6MorbJGai268vMMg%2Fe94qdi12lF3R%2BgkTFm2sPXGaFDqs6bqP96uah4pygvtWrpuIMHyf%2FsvwQvmawElfPLBLQBQyh2L70VQnHWNSkYTd%2BipjzpBQkQhzebU2sNOWUew9qGaWYRp6zOBqEd&X-Amz-Signature=cf06781ef861a245100154c5444c0a4771ac006582f40a5e43daf60220cc5405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

