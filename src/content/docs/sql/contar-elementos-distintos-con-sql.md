---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK5MRXS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCS9aPpF%2FwzmmdPiJwRzd3UHplOEMzbB1vXjCRy7AEofAIhAL40Q1%2Fa5L4Rm4ngdxrFawoTHkhzHtFlJRy78fmCnFbKKv8DCDQQABoMNjM3NDIzMTgzODA1IgypBtB9MmJodD8%2Ftvgq3ANIL8rqRZaCxRRp1soT4WZ2kwdxQj2n8OS8HiY3C6X5ZuKrv07leNLpDgX23GdkSbBYykivSH8s3goG5jPBOobxHBN0dPrJcaA4CEjaJceLxCR19jn6mHInmqED7nErO0yj9ro3zMWiyoD0gPeSJcfD8wNwfmJ%2FdalUXJNLhZC7a19G8wcB7PT91jV4dfnefx5pJaO4HhrKr6DC2G6ETcQWFC%2BeqCv9zqxn1g5nlA3IKEW3ERDCv7ekuQAkzaQ5z0nFwjC1G111BDPl7nMZrID7CuCQfOPf83BHdjExpvuz2INmMo7%2FVbGJvaLyqc%2BV4oEHFagVny05NhRMaLf80iOeCrLQOJRd0b1R6291cVmtnCSypiYM1jolIyS2AmrUSEBKtJynQD0tyBLxIpCIc763fH8m2GWvfu%2B7mSZJvTtfetlVU0%2FyPcF6cVlWtbkM7blxyVdrGwj6%2BH6LyVRV2bXiodVQTCGwexZgTDIN2KthC6qdHKyO7%2BQV8l%2B5PxI%2B5bfrPvwtGHnhxA9cq5o1haL5LncdR9Q0neRVRVsAiACOB%2B1Q8KAM6faEjLJ73exVWjwE1U6%2FtpG3SPFDY8lSlPRIhUUKMkIx68LK9t7VRfKsNBrjbEEkNn8UVLIxNDDokcLJBjqkAVEnWnovXuOExFUm4YT4EQheFRlYPsXXrD1WdUOwkMJsRjuEIN6Kil1YHCMZvgSrGgjV%2F7BHRU0Mfm9InvlTA2TuvNSkH5mWQoR3quzJJmMx6vq4Bq0E67tmp%2FbMJlw7e0Lb79LIDyuXygHiO3K2UyfSsCe2L1Zg6Xo5Rs7xLwhM2KnfxqLlNe6sry4rWLWMZN8R%2F2RjhsBTp7uciJYYNf%2FjjROF&X-Amz-Signature=8b2d11fd779d8310899b30a1c7ce7b5a381cfab8c9611e6e446360074ade1e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

