---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYDKKCE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDiJhSvW9PIbk00%2FrholORbVMLt4icN9ZsdAwkidbFjJgIhAMr5p2L011kyA651MNdtmHTnH8u25tkDvs%2BpjavSibLcKv8DCDYQABoMNjM3NDIzMTgzODA1Igyn3AAzhR9d5n%2FiLh0q3ANOfed1tP3QO%2F2OfK6NNsAuKVpr%2B0igeu0VPue9b5F3iL0p26eA36ODVorZIgS0Lr7hZOj3sv1NDTqNkLbChNiE5qAziYFWk00yrE1eZum8iVMxorbc9du0b44iPIS6YKi6NDNIugyqhCccN4r3wIRNWL%2BNatGfTZYM3OyaiWlaoggprsoynQwCbEVuhUcRhjev0HxPKxriLwCLjRArAqsh62xUetX%2BQrV4CPwmWMUkvvzRau9fhyFUyorxEKSIvIrwk54EwIKSkoWcWyWK08GqyjQsV9waB2EcFQfiiHuiOWdbXYSxrtVA5AkWe465j9NGgPiAR4VEpDJQxdj%2FEBNxBhsLNPqbJTls0X0f7ux3T0VpUzbDB3usRKamb3h7MAXX4jpsTCHF9fCG2TqEqXa%2BTE4AJVj2GVrVniS0Z1gjtRnMtDNT0gXunSt4uQW9odf0xJQdtC%2F6oEwuSVMIhhsVN1ptKtJT1V0dwFuey%2B1xQrwnvYipaPy%2B5nP%2BgqXajZCZJCtXQf50t6RBkxM3dHKpZ0OiHbp08v4fnRdWUlY1akZ%2FmD7MqSIVb4PwkG9fkoSdDfT6kntwBHVwSrA%2Bm1ElVfaJZTnYFVfNCLiZhxscSDikgJxxwldnhB9bxTCGvcLJBjqkAcw6CGW%2BeuGlPMMlonf8dEGzK3ji%2FbDCPU6gKRdNQ3fQcuqLArSSXVs5uKV4Q7BpO4igCnVInJWAPXj89jFJ0usivKHEY5cHZtNhdEeTPpw7xEo9YpMh5GGEZ9kG%2FO5anGgUw6TuDDuroa8i3d05lgz5rNfipQbNYe5HKnawMCR8aM9Tw1ysk78%2BAv3%2B7hVUhtNqeVkRMDFzYuj7DvbKEpxU0yIW&X-Amz-Signature=18b6dafcf85cf20c18e69bb1fb449944a004a8cf2625cdd5335d51e319f9700c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

