---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5BN5I7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEimoAX8VzZIh5lFfomNpEZ8Yf0UzRltvgj9fQvW6aroAiBnOk%2ByxMdosUxY887aq2MT3N2wAjv3lnmOlCfyzqBONyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMVyRU8O4%2BnRtVmP0iKtwDWCLTptmdWesixRskY3%2FaNUSyX1izQqvCjGH13hb7TnKsx4AEn8v4zIaqOfipS2xRv7dXJ5oHjpapJeQGN3au7MVSwYw%2Br%2FRWJDEvf5dK%2BsDSr7hvXSBMYykZeQ%2B99x7munPoiAuWjhBqPVHCbOQb%2F6HhS6A5%2Bm6LSdp0lAW5RAysG6Dqsqoaxpv8M2YQS%2Bd7Lm7%2FKVDOB3bqMhy5KmeNOkghlE7EW9noHLA22w5fxt8r6rxoP7HIrKiCIGcZl5Hs6GXVTWkl2pa%2FEC%2F2iiRMWcd%2B8DxcpWYzh%2BIQfgqe8xgJJQckUBhfheKWMSr2KhpOzJDoJwUq%2FIOpCY8zopEeFlUfCayhebxZssyGglqOJPevdOmOiTfVgNHR7dcSudZacevUS5A%2BMsZ0BvGtmCavFHytBO8%2FwzfcC02Rzif7KkHegw5oHbiLhzGzJWRyDzkptQL6%2BdLxR43sQprE9BJa76pdNjgmv7HJPCSrEb0qw3fRFiYarJAPUOL%2FKgQmvneoNlXOLvaKDmgijb2sBvOagDp30UtYcEWzWKtWUohgsMHeVsThfWHljm%2BOytAsJvQBPrF8tzZMKaMiJQU29hNX590aPjRxkuqwp%2BTrhdVsGU%2F8a50C%2BKilSgoSo%2Bww%2BNTDyQY6pgHADKgFxxB4xzAcB4gDyk3z9mwxakeawGzgikvRI%2BVEMouFXu3UxZdCyXC6K%2BBRamSvYdBp5XPTaw6OZLFArAUAfnsGRAeO6XJnhEvIl0P%2FTJ%2B9u8FNAC8tfr3cIPgGV%2BLLeAk0G9uqBXFJF9yUJfvoIvVWDzBHvS9oMqDM6ABChBvQw%2FeJfOm2lIlVeuUYDSvf9cmoEbDEt2ytYogJi5Qd1qoPgF7e&X-Amz-Signature=046ccf4a940dfd4e2c77ad5d2e05c1f34b414e86d90ef70c6c28fb84c27a2e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

