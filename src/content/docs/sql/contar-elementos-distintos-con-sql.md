---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHTG6W6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAGUAGVtoqeIpEPLIoEgqZDxCkdNnC5q5%2F7IEIm9%2Fwd5AiEAxeaHltdtFeFKowbq7ZBDSKXnfXP5fTjbP%2F1YBMCLdXoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObJ2Zwi1qMijNTTkSrcA7No8LouvNOAazkGyOij6z6QmW9yNiCGMw7ZsLwRe5Dlrv45MvZ8AGePrv2gY43DBIRG1HOlbkv%2B%2F3z8ATpbF%2F3z1ux8eHtV2kQl%2FveR9A9V734a9RxzOGj9BEl7I1ASmbaj5AM9sj5xPVtOYs35SE23EXnHtkhY9NqfD7LQktLsnGJSUYgFpuZ8ABGA%2F2OZvESbPYNSkUB%2BkQ89XzBCUJWptDOozKlgteHNEC6KiJ%2FEgKPKLzt5%2Fiz7ssRYfE32tXqNfSmzXPWKVVV7kzURbqJHg6KjNKmmXtag9RXp%2BDAgzqMK6uWTn7WET7%2FyvosJiBazSRR1PzmOQ%2BCJokoef2bas5mimsUgCSqGvnftrJTknfjSLHn5AGPwNZLiVOjbzSfKdtPD6PPGrTE%2F8wunFXC0JlwjsJXXxReJTEGSoviUeroOF%2FVUp%2BoWPCxrXjZa%2FKKLNlFSwfLBSUsBPQrta2ZDtKLt16TuftnALUfA3oD2v08q2kjFvAwPryXTT%2Fye6k%2BS9icbEhAKdhGJrktaw3ds7Ldq20El3CmxP2utr432XwRlabYwfkiFwaO7CJ75kWPnwJUqyCOsfT5e2rKwzXC31m6X4M4iaTt9oxGviHhIacVJyspcnCB%2BFt9fMMGDxskGOqUBfGHOIAP%2BWa%2BfZIzLJybP1MJdqx%2FoxMk6guUFujtQmrH1QCd2cJmqBWD7%2B0QzqCBbqRJajYleDDE6AMn8a2iXWmXM4BgRQ3xY6NopPUtazZUeyipi%2BL0sP6jx3ekcdfMI%2BZqQvlu2yxNi2CHLkcILkm78FoD2ihjbjsWhUsCitCvj6ZKod3IPhFtbDzvww5bLZSmrRzhPoz5Lf%2FW6Iny4foGUkKST&X-Amz-Signature=4fbce845800f7834763b817828bf9ebd9c00cb2227a8950295809bc5c3c95e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

