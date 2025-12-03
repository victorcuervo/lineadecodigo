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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DELQY62%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCf%2Bn3kKO0FkEDv6o%2FalRgoUp2GVawpz1UMAsH6U9RDQAIhAL5djs4QZz6DOWPoedxYojKmR0W28cTuBQaJkbrl2Lz3Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx3uLJpagn2s5PDE40q3AMtyO5kmzbwVpZ92ydyCDdO11w6ajMqrDVYTJGzkPJMvWsyavtaz6MbH0YgSpYl77zhl3uIDLrm4gdCnsIHrw2N6K7FQgGy29ZJGFsa8T1EBumxnmq0YijN%2F9rqpz2uaWxqOw%2F7Y3vyynu33wrCaBD5Vqlaj%2BaKCga5ZKTjgyiESz7kfHDdg0s0Ff%2BDD0j%2FQeVVdgdpPTYkiHuskTO%2B4Cqvl4EYIsb31wWfDWDNelEXhF3HJ0IN8KCBZIjVvwcABD8F%2BiOn0Ezf09VsK7JIfmAxX%2By001e29359pTtuTx2tSUUQF8W5PF6UFn2uKbMVg%2FRlJOPkW7HphjTii05WqXDCEfRjU%2FIuRBjYv4WqdRD6jai4SuW6m%2FkOSxaupzIj84qLZ7ibYyaI1%2F9ABmC7YrwE5bFjKM4jIa5LTmpETGWKqQjLz2qvuEkTmHydeVw2dwYumpJqnzmr8V8YZpcAweWvaP4vhVrGCup9l9FmAiDSh6SkJzEh7xsLlkMou%2Fok7yJjW1958dJYbMD40MWicNPz4IhYOSIWBuDmBgYTy3eiZpZ1whAOA0TypTYFzkttqwXh2whbRrI7nvLtQRK0fG%2FmFHpIVrCRs%2BdKGQh7JLRArEJtF6GVW%2Bl45JTnYDDv1b%2FJBjqkARyhB2c9PwETr%2B2%2Bh7rQs8h0vUyJW5%2FXLtbQgUEzMoBlpI%2Fj4Cy1RcP7%2BUWMCl34HKCw6kdapEPvkx7IeWoG4xqzVTpDZwKTNuao%2FQFkABdF4DRmThTa8UN%2Fj9gSVMCqS1A4pDcVLU%2BzC7ttzxBMGfJdSxgVBQcGyQq%2BeBYSLbWCqbzcXtalf0vj6kvwmkgX9LaXMLuHZd8KBpTog285Z9TxPVli&X-Amz-Signature=ed6952c8adf42ed6a5b5f4bccf8db1a89e1c11273ccb06b960ea1e5984b7dda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

