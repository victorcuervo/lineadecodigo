---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYE7FDF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDQU2tkdA5bEJX1C4hgmWf8qoxS3wVONMxqxWAbp8KWsgIhANH6phkeaz5andOrk8ZWIGZuu4g1LUUCBXB1eetFgOUiKv8DCDwQABoMNjM3NDIzMTgzODA1Igy%2Bwnl%2Boccyy6GsoaAq3APoOwYdN%2FpQ%2F0RyqEQQL8voJRZLwHw3gQ7eCqDOF644iaVSalFGePZ%2BqDgW52DHGg41eH9gHxXqULVbWeX6QqqQqCJgDfmxeGJTRFIeqajMXDYBujShkrsNQSfhP6uP%2FqcC5z7EkY2SFQFqq0wFG78FQO%2BGvebQqJGCAEs1bYdcmOtStkFGrNmhqAQIIEBgEq2TONZCBuJbLiFh%2Fox0LUgA88%2FXrCikXM6FPuHXv3UnBZkQ%2BY8GbayneGMPEDvM2V6vPVdKWPcI1DRL%2BrOsHEdGOTh%2FNcQA4iIg3qiF4uJ4Oaxb7%2BPi1Q7YvxK0WRTJpchZyBSRJtYNkdtH%2BeXSlDOJ6etnMrx1QAwVX2vr6uLQwjxvLMXlsiI%2FUkyHPhN8prinK3fQaf2Ozghh36tHt9VL%2FOKdkcPayYGo6Wy9ndgXD7c0RByfq%2B6MzJN9xS8GsABn9JppDJ4E4XmXfubJDOW%2BQpggzgqNc0Ivbcq2IsSXvOTWpG1Y9NzLVMXg%2BBu5aewuKqHn5RzpgSFncWDcVOU5bpqk%2FLmR40yCs%2F4CVjJ8MCAonsst4F%2FPMfvm2p%2BTxI7ZgJgsnHVU8B7IxxOSmbkJQbicGL%2BH04UFUSh4IAM2ZFhwIKXybwwZ1Iq%2BMDCy88PJBjqkAeuxB7wwBPnUrQEhV0JXMS12Zxx5GQF6XPsvoCoyrXmDxnI2nPCoMpkI1KVytMuQsD%2FOhwKxv%2FvRzTrvzqdHx1kueXTCa99KSamQkOCvHYWwMTHaXIG1DpH%2Fhd3JJpVFg0OtUxHNo5wP9%2BnNWQO9J0Bc2v%2FxAcDfI7QDmuWdCGK3w3meQuB23aRvm5j30%2FIPQBup6apT3t9zXaqw2eC0fXwwFqMr&X-Amz-Signature=39e8c0680e292e65b74549ca14002b8e05311cd19ad6236ee34858944494d3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

