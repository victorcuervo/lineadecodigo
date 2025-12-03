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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LUANNS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCIPNd0T7Af7LB5NnROT20P3ocOSNSSfblDko5rXyDwzAIgIyleOWJmxD7uDbsr9OAkQg2FVE41kLMQvhZzbtxWhSsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDA6li4E7IYfLrzTooircA%2Bk9hbMxlICHE%2FZCslKy9O2neGUHLR5Zn%2F7G%2FreA%2FAstxLPjMGEU63y5cxwL8H5zRcMqjTJ4YhbmYtss%2BvNPTXkfq9tV0l%2FJZfxATzIdrrEAdLB1JXo6EO%2BNL0cUJ2wPLhgORlk4BYLTheHmkMU%2FxyKgaatz2yMjw16opZixvSYYCLzmKjIJXbZ76gZ%2BIWyDpnBIltDNbm33VMfJbo4U6jNijGeb9n65PNCNzJxUOYxT8vrMwpXX8%2BmdoWBw7IPn12i61Hk9gtCbk%2B5wkTzrnORd81FD%2B5xYaBZKwesEUQNGGLFSK8aCXzG9cnPWbdBDOeLNDg88EMq3iJ6FkqvGKsmmPhmXC3lmOwFAsu%2BcHn%2FsulGP%2FM6ycnWpkuGz%2BqPe85Fc%2BnN62jj0i0TJvjmCIWzCeagMIMzxqL%2Fabjf1xYc6VbwdpizaaIJ7r%2BSu0c8UClFYu9MxSYtw6O3LfvxV1y1Ab8o83sbpAGNwn9X5ir1Fui4N5Oz1lSCWE%2Fhn07v4JHSioVnnYaef%2BD2sh%2B5FjsstUcu13rYwNeVZ43lwLG8GQOnwUOotwk2woy7GXwzTO9mNBQyeaAglowd%2FW3AzKxxs1fDfUSLw0BUlTN3uaLdcnTAMYpAaLFZ3Lk77MN25v8kGOqUBkwb9iuPjmZYAwl7zGnOx4%2FgBXUS1YqltrFa%2BpLDttsaEL%2F0n5l93zPQ3qP83hXVvUX953DZ%2Faw74Q6nD2Dc1WN4AMlnP4XnJADsgj7oSGc8i0blowpRW1hSj6LfWsPGWz6wBwBBFSZhztt5ooVy35%2B%2FHaWzApcBlpkrexKv7GMiFwF9eqvT%2B8%2F5EjwcAPwnsjNvywx6pE95E2AoAqnqN1tLeFS6P&X-Amz-Signature=e7f24a63fd1d10c7e4c22cc0723a3f5d4dc8097154b3acf3a22ed342d8252bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

