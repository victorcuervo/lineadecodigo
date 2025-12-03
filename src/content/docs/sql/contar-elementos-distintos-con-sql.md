---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6FU3PQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHdiTZ5N6K3DI0sW9Y7O7uiyoRmiX0G4p9P4cc2%2BQIIoAiBlf2Msr%2Bmrah8WgHwITed6HbJtXZI5ZlSQhThHjthnLyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfqvExMWK6NgbqTevKtwDE5RadngsP7pL54ESFbNYMKsLpJwiNLzk4960rJDtTgTKmUQ8%2BXGJ4%2By6L5xffdCG8JF8O6q4lF702Z32nwmk%2FjToEvc8JrL%2BT%2BJHwiy40SJw6KSKPKObtQDLr8NJTSvIJc9PgGG5BIE%2BWrc95Xa5EjKko%2F0Zs8JJ9IuMhDm7F1kkjudCvBOwEyngxQNfUjKu5%2F5dKyikE%2FJR3gpg9I7Kvsxazhb8bq3rL717FgeWVhEDap6cPJPiIOBgc%2BnVxsvG%2FVMHrmGxQmg9A%2FRz0IdbE1vtLadmSvQrNJ%2BEVJRefPQzO5D2MZvqUnr5P%2FVjV4Voa9U6luDWUT%2FufPyudr7SpyVACr4mtUosv5CGYlWkKLkAp33VuLzwoGmeoT8zfi2QplfpDA7BRDs%2Bn7bumdg7P0Jy3h4WrofPbb%2BrVsckrw11%2BNOCBSGvhLBLxXspoCYWqj8hJCq2ED3K8njWjtht3qFiWTKNgAl32z6F2W4eZbQoOSfXAYqKhs7S862L72poSlHu%2FOg5O8p5%2BLjbhGWzsSUBSO6YBoYhxUFWYR0GAG5eDAC6LmbEJajO%2BMcw6ETGAsL0eMXavnuWepQctMYbbx%2FU6yynGpRb%2Flpz84w2wWKb20jigmCmkwg8e5AwxJTDyQY6pgFrQOID5qau8BVMAhDoUbkw4JsoGouFe9MbeRhm%2BMNnXGanIRpUDH0DIHA%2BcxCdJVmrSC90MezENLSW0ktdBvwRNDICIMhesd6vKthtfP6mK%2Bw%2FvniSdkgjU32C6uOo7%2FNrBFMcBNMI7tOMNZ%2FklMXRlc1%2BnJJh32w72l99FtGwc0MyfFWLh%2FfLOEyz7GoNXq7rwpe5X%2BjuRIYZGUgWrRzjw%2BQWifnJ&X-Amz-Signature=9c508b4d5799a7b11f36e5484cb531a9b574bd184a0a0da4cd7178ba0f8107b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

