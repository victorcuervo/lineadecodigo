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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBW3YIM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC%2FQ3KdhEgXVK9Qt1KVw9EPE1Jx1MzF2N%2BynpMXkt1ScwIhAMxez5q6PWko0hkN8hSsFhH1ELlCrn182vAtkjzosaPyKv8DCDEQABoMNjM3NDIzMTgzODA1IgzR%2FKxeuHGzncywDu4q3AMGPPIwygwQWl80p3y8AykIs41kg%2FQi9sDuqMC3cBM5n4iBaYACYahpS9Z7iWO5Lxa8dShC5458EXPptwb8Sj%2BhyYjADf09V6CuT1I7CARCuL7dA7T6mUoSMiMiUFTUcYKjNmbP0w9OAluY8eADTZ4BdYmGWE2xidX7LYyhnZgimTNEOf%2BPMYbqFOYe54uCourGDIqbgNnc%2FqPuGKWnBMkcBuM6O8perb8k1VT5FljSV3SugV0QwRHZebPPEUesRl3a%2BtY6pXwApzruPzbMSqmwpBDH8tl9H5vUH1yy9YsB%2FmTv7qNbyD%2FpVibhftHSPH3zulsD4NJf6ZMLEdHxybnM4u6Z%2BW8sEoQiGbkIwelAneeoKQWgQKcz%2BEvVPJ%2BofATyvgjfHu80Wo4DNXpX9B9lrVGfQUWXcAUhrAzBpsmvm92Nec7BvBSte6%2BvUacnZTatu7qgLVNrzg4W8fDS2PsVm%2Fc7kQN%2FbcSmwgnDpjkZhbZVqxIeTFcFvCOUqXHCIBGdRHhvd6kaUDjfrZKNiPjVos40dOy6%2FfFQ8fNRiH0XIGZMEBaC4v%2FzBz3Ts7e%2F635iLY2p9pYfaBdbwantVInU1J%2BYdetxMVd4oa4G%2Fx9OmT381TU5M7QRQrwsmjCjwcHJBjqkAREeeoStNrRHoucPriJcglyfa9sR19BL%2BZ7zFuI0g5aC6FjD6qqGqKY8WD95KEVDiTf2SxdPIEexbAoWAL2jLN8oZwh%2ByLhOSI1UQiZfFg20VUfkLmjtfJOyLuOumLeghz0g9m2bRe%2FlCs8nWRlBkkVicGNhdm1c2Gv%2F0HNtnXqgYHwWJs%2B7mr4d3KlLOnf7BiEC%2B6Qj9h%2BFUicb1wopI9sHvU7u&X-Amz-Signature=b249aec8f4331cdc68c2b0a5376d9df406d09491e97a62ce989d7f15a272d527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

