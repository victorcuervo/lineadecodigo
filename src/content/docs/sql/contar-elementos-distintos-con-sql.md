---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLU3DPV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC8yypZ%2FK%2BW5tEnKpbTKCq%2BC2pmXdGXuEOnI8AiY0mIfgIhAOUyC4vcbrih9czQ3Xer%2F0ZXnrU4EnZxjeAsXHFFIkFHKv8DCDcQABoMNjM3NDIzMTgzODA1IgwlVcnuMBuupHT%2BVdwq3APFIwREqfTarfITLk1u78lTNgfWX6OBGu8PjepfMRTK2ChjDYk5Qbhlns81RLRovfj8uHOoUemWRoWzoZpIqJAJ3RDjr5zKSjN5KvCKEpaJQ5JqGicJ9F9iBlSF7DrLC8WvxKnK4K0GydJTBuAtXrZBBuiA%2BwHeNAyGt02XBzuSG4MU%2F4wBoipe%2FaPJoZoW8eVLjY7G3IPGN0fL6QqaB3dbbKpfIXmR2wOqm3l75ygD4bdfnWehUZ%2By5TFje9BUsS5JeoB6QbF0W5WWI9jwZ8tNoQ%2BbDPvsQNdUW07Y9LjaKwCp2hAMqfzGVS0n56naYNF9A%2FVD%2BLkUxkLfWDqtDsGHDCg4lcgttDIdo7TPTxQvTPI4pkv%2Fyl8h07YlHWEY6ebhEHaAZ1ZE0s%2BDxEHelhaXO9yl9Q4H%2F%2Fp95d5SFDgw8thWqTjWmNK431f3K%2BcJQEMvY4zIJn8SUyywMeSoyn%2BDjWHACQAqzRrwhK5n4LBpyvq1av%2FUyr6cxH3plv3vH%2BgASZ14XckddW0z5qzJ7t1gTTt7iLnCCyls4NIYtNRI4qsJaR9E7lGvTt7ALL2LPX056nvsNfiw0KbLxzqQoCtkWQLE2K2L0LHNW3hsdrWz87yuS9EOjh87wdIS1zC93MLJBjqkAYvEHXKXZbYO2j6jL39w%2BX1a7MuJNkrYXJ5xyVqbwToL3yKscoaSZZ0Y60VDBg0oJYoc7ebThDNiCxpZx2MryS57NnkCHKTKqREs8iFCuyNCdse2lJXLRrzVduL79mBhA1kEwASwJ8Gyma5z3fyvPskjLTJoNudf4Gl6DxLuR3JTn4d93%2BG5ccBF3vsi5iVeouNy0kPhBVfQL1dnQWL94UEa2cKr&X-Amz-Signature=67447e21289eafaac961db8c352b8a19c6725ec3470c2f3789dead2e84298eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

