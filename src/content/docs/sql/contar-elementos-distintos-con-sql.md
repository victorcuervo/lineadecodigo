---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273AQ2PH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCYyZjytB8FbS%2BHYJYCKTlTjXasVZO1kbNMND5q2j4hdAIgJiFTCCSkiA3gJdAnKwmsBiAnIkNuNXK5Ptv3QlkTWyMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOfupYvqwlsihq0vqSrcA31w15dXJEfycEttMKZy%2Ftz%2FwGB9kAyimFkDeuA6xNS42XRLdQAXeh0w%2BflLaDYuUjCAYvsPFibK8IarrAbv%2FRcQ6OH8VujV7vPnrW0EaCtwJ7yuAn4N0I9Z1v1SEYAlahPgMhV2fTJQAjUqUV0qhCx%2FNMIPJAt0dEawp9WSZGDKUK%2BLYWgImloaoNez5GysUAYOwsWsgEHg8o5Ydc1%2FA2R6OLdWvoUg3IUitISRn9YBsy0lVWyHAYsQuP0sJsYXHzEnETHsIs1s83WUaCwUHsG4bNwOwlu%2BSCBIXwGuK3nO6%2BoAOn9dMnij8vhEjor%2BTFvQRIHD7crkHZXiB9poYkQsOWbOMjpIq%2F1B%2BP3rDCGgYhu5TpD6wdqWJFP0OcJzw7NxL0ZTirQAkf9tiy4uYR9cXr9CTg3vP1NT13MRvQ3%2FYNh5N7JX5ZPSYMdhN7bgUbalRlD4hpgO7CBzjMFiK%2Fjnfy%2BJ%2FkHmvDLhS1MAvJXLqopTrxRuNHfmWA1s7gNb9k57h0rBL1GGUBapU%2Fa3CzW3oaAFAmksylndVAk8xI1jLbau%2Fd2A1kyH8fvhC06t7YArEztsfyoYbV%2B%2BI5lCU2x2sv5Jd9ot%2F3MoGwH6njWgGbLblc%2F4x4TnYmz9MLjcwskGOqUBLYEQE2XlM2azyERMDSCKixlMHtlybDCsgjwkwR7nLnjCiz%2B8zfq9nozd6M5Zswnm0eDDFNBmUFMxS%2FB31F0R7oQEFS%2Fmr5sCQSV%2BChHN%2FdB%2BqvxodjD76FBkLoPHGlJYX6AQFusfPZZ99g2HCj%2BLEEg6a6oK3gTdlxKygZQynUM1i2Y3Cmf%2BGauH8CAWl5Yy3JpzNAL6gP8MIbjGmyh%2BUZ7GrMWO&X-Amz-Signature=e2ce85d81e621ff3937614e96db77c72e227d693bfdf4123b4075e206a972f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

