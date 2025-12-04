---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL774R6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEKykTu%2Fu%2FHBbGt8uHAfwU7ZkcxQei1B09t3cD7NAQP6AiBRjlEojN52yamB5hZ3R%2BlhmRAs0nG%2FhL16HccCNIaAair%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMkX48yDGie0%2Fkt5VfKtwDMjj0ySU1fwBsLZ6zYJH8OhXOkAUZSHXsnA8dBzUxmINi37sYBnp0jL9HHo8wDL0KcAcm1H8DY%2FVrF8YU0%2FBSphmDa%2Fkk3%2BorJ5eDd3RI4ZA9YmJBnLVHFARXvQNI7fWSXeG8dsF8bU8x3MREc5MqQb8XSnLDDuP6S8VlP9zeE7Y9uJXq7pepI8PrJH7xQZOeIo1vOwb%2BDULtocooO%2BOnSQJGp6nds5QuTnXCIdMax6%2FtYtzXqIHpFfJTuDO5GiAIFtmhMBcFiuRz3WyhYMuod5XXV9%2FAwAyxsFj7391uOlXbkvuEvtEatPftae5Y4vdUNVRDrRvUUA3MZytCCH45LqLC8tzJ3Gg5JWHHiZGeA%2BDbOVtI3K67iRdz9BJBQSQrGqmn%2BZ%2Fp06EI1h7TKOcCACuwswsYpWGAxHe9YrnHdADk%2FRESm%2BoYdcC1JhET7cSn7eBY7RIjvBMgDHyzhccE%2FjtNJpS2WOrXYB6wbT2%2B90FE5Mo4B6cbz5f%2BIG8jeF%2FRYhtpuBAI5wb3y%2BmslHuEI89ryUHzB%2FEVRDBzxSzDP1SQ1oWKKf%2Fee1PxEXuzBqL6Ev4dX1fop8kz7dEXHY2v5Dl62iE0bT8jTznpMPH5IMOvzGVCjrQHDDHPBGgwua7EyQY6pgGZLdo9ViHOlZJqfhZzOQDtzCsv%2Bnup2WREFOrLggu0fQfstt4pnk5iZknlXQvWiy6P2xloHHsAnbSH55loRPCujQ6Br%2B3xZET2G7IcM%2Fs6WidcPm8U6fr2DX92lREnbIvPG8HgmCJCiD9nURlPHNLB6ZqNUHoeLMaYBbeaniaQhBs49NUfMX3jMSLnR87ER3P3ZGGwmfTxpDTf9C7wT%2Fe2p%2F1Azcew&X-Amz-Signature=00a8317634ade4aab4e6a50c83c0f4d1bf56519843415a5a01ed12bd6f769d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

