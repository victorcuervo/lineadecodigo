---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAIK6NBI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICz0qfNRo3hLMY2Hxd5IUC5B67h2FGKXP8itCErRVAxUAiBdkysSiXpTLBTeTD4F%2B7pbaMpmUYHsPPMOAgW%2BH9tBJyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0zp3hiqXiaC2MGNiKtwDKm9UX%2FgU5xLZH7cDxjrtgs%2B1%2BXw3UAkwilxpwKLJur%2FIbktT9zyEdT6FosE1oSoSxEN3XqZSEHTCTifTgmF6klbu%2BgEVmUpCUXveVD9vGQ1YpkWKkP36to9fC5pAvxj%2BJus1rMs5ACmeOmlgj4je%2BwEv5%2FEBuw20IgdEl30uLjnkPoyaJq%2F41qGffvSg18k3laKfRXJF6viMUIL5gEGBXjnVnwx3yD%2BkJI8Ioy8JPkEFXYxkWb0QAKQnrABglTsTbtVOdhvuRm2icTW0YpcX9rq%2BKDURxr4oHCEimcRYBJzNbYvxcS3HZ40zDLQbeYtbWlWKFPP1YvzVJzsnLXQXlCdddmZx0iJ0SsGZl1eGpqQ5ZYDU7%2BG0z3tJTO821z9LomRBH46SqhaA5HvbWwc81mOFP%2FUD79Wci9S6q11rlzcxiQTrEbru454BXmm1cc%2BPrzv%2F8xSfxSRsnPhybXlSrywQeBgKFz1A34r6MQqxDBMznomN05%2BNAuVqYLYGCLTAMPzlOc0KIOs4CQnn6vrN%2BwEvpNd9%2F%2Fuv51%2BfuZbBSYUGPoRyP0%2FTBgYDfV6eCGOG0EV%2B9aUbg9%2B6J%2B2dvCRzfxnnZ8wPxNlLz3AsOjjAGMvuYj677mNct58X7ZkwzvPDyQY6pgHweiVQDS677gynD5q6sg%2Bgh%2BdeUz1xqLVsdIEPVWAVARsPSdsoGH8TbvxBnHu%2BgIuR3siVmoKYQKAuMeXpLfDZ5fuFBTtbLFTdfuNB%2BJtVqsPK%2BHH07L9rB4UW%2BFqknuTnAKltjVMcfkDqY%2Bafisy2kZV3V9zw%2BR17Uw20MYkEjQ5LK5tIAgR0Qp7yScOcRY39FpxyBLVIuv4t%2FAwr7KgDKllcnFIo&X-Amz-Signature=967ad472e1eb91900ae1701ff9a0b9f3b9e840140637abc8c70542a7000c29ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

