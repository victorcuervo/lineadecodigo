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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Z5HRAU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEZx4jy%2Bgr9LymsCRbNYdNPTy5j%2Fa00XuwMkYqGTzjnvAiEAhZ4Vn0nRPpjGtJehfXeV2iMtRMIrhZrDsgCK4GfuW3Uq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKQFoApK%2FJaQRv6DRSrcA1djrwrpLQElSYehnXiU6EyOYAfz0HhK7XTDDJRbposuTDth%2BNh9Na8DQ49Vm%2BjYg7uDgT4vfAbjc4xHqg%2BLJZgCM8AI90gJe0n%2BfLGIGPwyY7hYQaqoj9M79fxyX1uFxofGw3zVoovbmsIj7Lu89PCeAsegTgo%2Fl9BFcnTRUTPR5Ien0Iot8i%2FuTnDJv624YSJihHpxsULimUGCmQWIf1P8v0ObTEHupWo1Ph7D9iTlRV8PsZpvDwdkBuIFav%2Bi81M%2F2Ek2xmpwKgesm2aXB5ws%2F0b%2Fwiyk9ZARLdywHf1RNJFgsrsh1GihF606VpHIzf1TJpAgqCOlr%2BJJ5pO5W3ZHjeK2yC%2FjccAKq4PB5D6aehjvmz9alibnVwHFoPlDcFGr7XdPwk8aAuN2ffdVGYHUWxPZFPaF5WD7%2FtqK5%2F0pZsMWX83EkuGthzt84K3DfcEmcMJSKxLzU5hd%2BYKnkLDXUYMyJw8MwukFDtV4UnCnBYNjZvdib3ZIN7NhTrt65xypHhVW5SPy3MXtNvjZLIu6LathJUoK07GyARHkdMQIXH2gIPFl75ljR9LTgO%2Fel26y%2FZM39BGr3lCdXyH0Du%2Fxa9TIF%2BLaUIMBXbGOveu4Y%2Bzux0rdcB%2FgzPFbMNKmwckGOqUBos%2FXBBoQnWgA%2BLt8ofd8oA3FMHSrMQXNOHq%2BcxVlzdq9Q7Y%2BoBmIraetwz6RGkh6mlQOP4r8KVyhv63Ukle8618Mzxy8mxmCh765knQrQuV6Zdkl4j9PkebOlCrT1%2BRiI4lFnFmMBhy%2BannUgmx2OgJDZm5hqShZEq3SLZAZq%2FupyWCtKtalpcxYeMr%2FaQ0h17z%2FgYwPH9KiI5uoPPoWH7ZoC4xJ&X-Amz-Signature=aa75fd67d9d511ebb66f0190106af4cbd8da143c0463fa28904c7b4fee934775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

