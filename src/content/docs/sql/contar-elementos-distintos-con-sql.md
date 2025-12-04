---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672OUWTK4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICm5fOh76KPNnBUeHkWsNWHjXkqgBMTdu144oJalmdaXAiEA80Rcsx3L9QOmCuDuDW1Lo8KxmbsG927n88vlwIJEmLwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE5YIq1PCkLCnuRNBircA2%2FjD4ZhekpOY%2BrZZdKxDHb6CiJXZl%2FGKMFTg3lPeUj%2Fxs9Uyrvli94RAycDslGDy%2B6ApP6xez42c8auNEGBggIWbP6P8Oof1JCNjzlU4WRpccbzmlNFLn0XI%2FEqnR4fyB%2FJtl8sovWnet3rXka5gQO7s6YBywGN9hYGiYAVbR5Iu5L7XMi%2Ffdq%2FpapC7i4h%2BiBhSlth7Ado9II9aaycJHNQoZr0EeMEsvwCC%2FnoXJP3yj0spj3XxgGBJPAiC2v6JEJBwkkcS2edc1ZUx5o6JK4vfDFqTIsYrLfyXqZJ%2BGllBobMOdQ8LSPgG%2B8TVjCD1PDgXyJT2HV3YrIhoaeGpgnM75t%2BMW8yNQQqBivyVhO2SuHfjmc7uT2woOfnvHqt0jeDH%2BBIYU5HRzCQxJ5KU5FfIvb75zApDO43W9JHiZHiFiWA0aqdXz9L6%2FRpFceL2MgQeCgHfreP%2BgDhEusnxnEXMh8vFz4xInSZhRqnAuiRwSCLv9Sofs9Rw4nLhuuglln2A6hOi1dr%2BsOxmQ2veI8EcrlnCtw3wOSVRkd4y8fJ9c1N9o%2FlIL6gQn4c93tysGoTQeV%2FAbRpGOyEaNuxPhCj6Df8xtwRDCZBXbM4OXm33FFJhztwxCdxU2ErMIyMyMkGOqUBQu5Ek3%2B%2BuOnDnBRSoYyXVIG1uB83xj7KpkzDFnnbbDERSq2BkqHPdQal7lZvWScZOabv86FgVApV4mO7K2b3G369L2iN39hnWOnJiy45iHuteWyQy9aL6eZL3s234AwdS4H63rMy58gaNC%2F1f2Rw9p0OZxidNpLaMbd9AFImOCm1Fre4u3RzUNPhvgnqnHbdW%2Fhv8NPutYSDvWiItQ4lY35LmA8W&X-Amz-Signature=543920b10d47668ed773c1703eee917aee5cc3eb2043a5b0f52f923d82f02a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

