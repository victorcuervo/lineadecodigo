---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBR55ENL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID5R5VCotEJ10nVcPTPaKDJdzKC%2FOhk1mNOwUbZxAUiaAiEAx96EBfLw8oUmIinW1%2FaXBeh6sy0VJxWFDTCwOhx3xLkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEVi2isDXMM%2Bh4876ircA8nYUaNHdLV4O6YMVJiVEDy0jPKyHMRHVy2wKsYGpSa1YWllmZW%2Fw5K9b%2BbQ%2BBSjn%2BNh2Q0aID2WTH0BGaMvHq6QMTsjgOsl%2Fy9z1n%2BSWFMwwDJnKivB7NOilDqDdOysDCEwD5TR340mOJ9WXvW41Y6uLUcDrlIVlX3HOPJtAq9da0jgs7PxqBmGDFD1IgWV6z74DB1DylFwwtKy%2FtfaP%2B4Ze3EKPisPxXiZAji%2BewxZxyO6NoZA%2FRIjwo%2FeUqwQKgSdurxdsMogBKlBPLpsNnnt85ehRjVTzrqYQL94HS5f3Cdk%2FTjp8ILyul7CPSabjvmRgCYhno5hKODaC5syxsnoDkn1lAXndPCtebmFY6s%2FrCB4idAzLMHnZEw4sVL%2BIjLxsmniBBcnCmEaF6MJWgtQ19F4f%2BW4B70iJNWvuueYzPSGXiHvNN0JRdavtmM4S9nH2LnYgfpEDwcrwHp2lpYlWIPlJp9IGBz38AXd88xYANC7Y1B45DDuVKNC8RwWuSang4LfUw01z5qq7t8NoVXU5bTbio%2BDrC9WOOQNP602a0sXWK9SXaVKD%2BIfZhkhaSuxO8fj4%2BUQYN0y4fb75E89ZoHzEwtBzfdV%2F4V44wtlsd0cy%2BJo0mZwxGVAMJWuxMkGOqUBeaM6cqmRU6Tpf5G%2FcO2vNqHR4PxKzN5PjqXLYDKO%2FhBFD1Km1qWpQgKcX7BddrSJhWW%2B9LHBQ1qDczjpfH8HP1%2FujJ7QxC3EaW3jRnYeNOnOoMYWF9mKivicSHZxKNN%2Ba7oDl9GysQoXoLb03dEopHYdnwGT%2B7bJEw1sf3jPFY3djdxKNFf5yVeOXRaKGd7fP27sSYlBsG5D9z8mB55gILZw94tI&X-Amz-Signature=60a2f46a842c10b0b5c3ee1e1111cbc77393fd98dc8fdfccc69191a1eafca3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

