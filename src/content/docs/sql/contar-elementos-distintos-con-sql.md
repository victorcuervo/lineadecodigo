---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKA6VUK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDEt9RO9HAqnIeemgfK6KAT9N2ux0YHpmw9iEPtqqEjIQIhAOuq8c8ADOFfaV6niXuCFcrd0zYylZ3fA8Z%2FqwS%2BxK%2B%2FKv8DCEEQABoMNjM3NDIzMTgzODA1Igye24HyMwkje4nR8ZQq3AODEekO2VreGzMTfuOB3kQ5BaY4TBJfRhXuUk1%2BULvP87CN0myyIhukr%2BwPJpoDGrGNnhOdsqjIbaADHgJv9ZyDgnmyTLB%2BfIDFBhVtKVzZuqrhJ7tscyu382ATHk%2BO%2Bijs9Rkx2a1b%2BV8BoPNZCweiMWk%2Bjkl8ey%2BmHfrcJA9mpIrfi3rxgEX8QFV%2FmYS2sXEBWPcGz2tQV4PU8kjqnh2NJ7DKRGxcsdbO5jFI9okNjXAjS3mfvZwUsoJBCir3MIpSmZS6nA7wMvD0g4v0eZrwNPC3JCg82eHoqYUKa36FAk4yQsj5J25bU12YSUf3TUgtzsZm5BGWiTnHOJTVNp1YTRIWsSMz2cq9TVW3D8Cqz4mygi%2BZ907lwwcqe9hkkQKA45j5JIPRoHCmExZG1gxXV8%2B%2F8X4gIDO6%2BAHvIkBnf%2B9aizqs0gi3fLr2G4BPGNZQo5Wgv1D8glWwsA0smFkG%2B6x39owXqCr%2FzqW%2Bgj%2FOtQn2R%2FL%2BcxNCx9%2Bsx9Tno92yuLj%2BpjaA3Zn6T3QbOHUBtJmGOeBqemPPpf8clAhZGIuX%2F9a%2FReKDSthRGaRcot2OtrGHQHB72FCoL94%2BUhvfwShHvhRSD4uM14kXq1cHTv0fF0bulqYCMK5JtDDqhMXJBjqkAezQDcIRgAnovwSLyx2vLX%2BfzgKtPeiQzR18CzIdntblJWIy3WlbiOq4zg1wB9wYUF%2FzMsGacT35ZdenmtSxTWnbyVq0IzsLPVwqQpxKbOPfLD53C7iRF%2BuKz%2BstovDBGpkV8ZhmDMuVPV6iOoQJmLtSOOUVwXhQcj%2BHxi%2F4XlY6da9awhbrPjKZ2yhzmjRJDxfALrw2E3HuYtPUqNe8BqBcw6h3&X-Amz-Signature=e007fed4faceea2431e00837962b13651c44498a9f23294f248030735b04f335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

