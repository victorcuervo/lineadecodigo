---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTLRBJB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCFqoXhhsKL4MS4VdHB8DWQVMG4zL99z1ClWnstRzWNsgIgYOi6m%2Bf40kQA2hI5r0KXkwkA7O9re3bnkJN577xZZhEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOpIQ%2BgNGZhzYxSccyrcA5BIHobV%2F64rLSrHrinAL1oVXlpGzN%2FcHsdCiNXsLigrbnf6L0l2XysKjy%2F9DVdfcJ9aKccAkcAHrBlaXvX5W8y9EDrmDzqQGlj4DuTJXW6IiF%2B4mP37LId7isUhyuf9EnX%2BNS36qzv7USi9miVh03mivrrn0I0P8bEcRI7yZY00eG2RRdda3HDDuotW8NexwOZTYJV8sRcGgqKwqydAk3KjdEKyyActlhsStVgcHln9Py0gVDn3OUwHsk%2Fs1j3iEIkUOjhDuDry5vxVbZT0Rfe6dSNahIR5SxyRVYAb0xbtCahwXBxdRCA48M87lnS0Yll6pWovykNuhb%2FDvLwbh5ZUm3zP71DrtK7JPogsM%2BIDkaHj29T8mcuYDhb9XTIEEX0qpJSGtgCSM%2B3FvfefSL%2BFzwy8OjqkEQKyHAxjktIWXAWhSOtTcsd0dT7XhsPVCF%2BtAJ%2FHM25xEYMgdF4lPbhEtmU2rHEFsOb4zX3vQRf2FFljuEqRVGionbxcUKM77cBy%2FbhEgvOfmCmUTylNJ5Z%2Bb30%2ByrHzTlVOPeXjBR2FMnnFf6e0EqWqdc3HAJNUTE5SL2pT9CxOGSVdEx%2FM2vXfkZykWjjYU0R15MiZ%2Bbjs7Th%2BVRWNiBxc0BAmMIuVw8kGOqUBbNCMDRHj41Q6fpeePMJXr6XJkbCKowt8hi3jetlLutGLxCh4rJuSPKjXpDH9KbDtmjY2u3z%2FHYIorY0pe0kwu2c8hpcAETBZZ%2BaZ3LmT0HYHrEcbpO%2B7clmLiAFvsaRxrJ82n0k4oHXGpnLeb7JLf0WhCdeU53I%2FqH3F3Sq3k0cyjWhmIX3RiFPCufcQGHp5dPzyxLiii1hIvRmvL2akfps%2Bornb&X-Amz-Signature=6e6ec61c1441ea41ed7eceb0859abfecc04e25ce55574a50cdb292ea15a4cb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

