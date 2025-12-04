---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORE6AM2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDa4F%2FVYPWe0xk76BBtHXVOfLOYCVMscpOPma1KEYK%2BjwIgczckNJLvevV5Syra0GGhFk3oIoVGs2k6xxMojZcMLHkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIDFzDx1fWAnQsOczCrcA0IgGT5o%2F43BPahNdrvbxzEOHhEUh1bWQRUu9dVe%2BvQw5JMmgjK6%2B350t8BO77OZlC3bg4NDTW8szWf%2Flycbepy%2BKCBg8QZnCzfmKwjnBr7eIPYY%2BKsZsMMQaNbwEMk4AY9%2BwrLEQyhaMawhCpqwKTu0TAP%2B7NTpfqilggi9L0y%2Fm38UCsTWfvR1j%2BUwqH956PvHxJi7UKCQJVlzusLepTKG4PeEP7ICppCkWp4QUhZ5XVyDOw7dbvx7lZ1O22mHer%2BwDG7ex9jV0qWHMgKS2CX7toTbmonUpYG%2BgzexR7IU3K%2Bu9hl1MTphO4PAcMlJsZ2tx0Wrzeqrn7ZVzJgXyJpIZovH%2BSZzzOynHOdnBWurk1o1qZA35rxzGATitKpSTOK248EQo2YXMGcPLbWwSRpm2aOrsEvX0818IZ5MPzCNz4%2B5FkgbZMiI3Z1GTw3nnVK8mbJp8Uprey9afOwopYNLFAtHObH2bTKbjWmSP8HquEpcuiXOKAB1SFMzvLYfAEI6BRzmNoW8p6dlHrDq0cEOy11ouKYGRVdPzMCqmxfwRD1xWSKBanAcDE80kOJQTnbTIXyvFHKVEwt82VgEiVtPK3%2BYbE9c3eZwuHmN%2BoONK8LW%2FbwPI5rH4VByMNvoxMkGOqUBdlf36Z%2FBnl2soLLq5zh%2Ff0rrFebEIlYwfbPa92cG3tUuLWKCou2LxWuPIcfLL%2FA1L8pI2sc%2FgEHiT%2FRteuPSDSvoCKevPtSo7v4MLIkXes2GYOJ%2BCAFx3oqrkzslhKUnqEzZvpgaTBddsnEAmlrBHwVzB%2FL2VXbGtIpaB2mWD5jpJtc4oK1RT5Rugvy4qiziqRrdvAB%2F7f91ePwJcc6u3N3yydZm&X-Amz-Signature=b62c4051b1dfcfa46f3b6ea706fcde12e211ca629f1a52206ded01425fd8565b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

