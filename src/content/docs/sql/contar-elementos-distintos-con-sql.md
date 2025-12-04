---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FUYQFE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDwb0bhXZH4hBJRSmznWDXWK3VS07De%2BKylE6IjZu%2Fk1AIgHUr2Ga3Vbv3oAdoHKTF%2FeQsY4YDPDDHAVj3dno97dj8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOfqnj1KD3EvQkjPGircA60qMC5wullUp6L32riR1JeBmTWH2h5yMIdqpsBGBRaX5%2B9mI2ZP0JwMrZK5dRMObWQYmj%2BkS4vQ43a7h1f2dO%2BmLfzMzIEgqzVp7vpqRgaJmQqkpsSKkyJMNTkQC9RfUed6edqok6gheBXUniG0HD0ayPLoArTYYoW2jT52uuRYcSyVLKy4g2zwLk6Q4FHGeaWXfjH62bekEnFOEGa3vkiatvv8WwCul77EewZRBDhyZCHmwtwNPO4WnjSu68BLHQDSribZNk4agVNbSuTet8RgyOEF4T7ahFDBjW2i1Upea%2F1hBMp459CEDy%2FXLaZthmkrKUpwGX3%2BwedgMrC4CsQxop3xcly9fz9MQTCSDcvvpGtc1D5ttq3FQYRkHnjkSVxGwBSgN0Op%2B4kOa%2B3f5WwTbb2yLZoWorVd5kstO6dfxCmrmqsm5Smgp77i6ZeweiuEKm1SenSq26A0O781eUksvOTSxBjNTYu4bD0t7QfCe1h9zY7Q2ru3kFOl5jzFz3PQOxT3aPsYJTylIgEh3amotQgFZDH4KH06OL42sv0nR8p%2BOfPXXMgBL4MYV5hKCzqV6Dbq9dmmnf3PLJgBrEUPtq4kaIXBsAygBK74LvzJl3P0R4NVDParyBW8MLPmxckGOqUBpwzsJoFlyiwm7r3xerlTl4nVqa04YpmegSKAt4mt%2FG5yqrpAZaKOoLCDRIlANSqnnrkSR%2FtVuvYVpoIZBvH4fRKx3Pc13a5xwDc6dTe7SJHHCITAo4OK8RvG4NAfwVIIADOGemXlaLAgl6RRiPKrd37PhJpOvxU1EcmR8EMUvT8vLUbZGqySvKTbu6J5UENRyUUsqYwt9z9nD9Zim6rsUTbcbpUQ&X-Amz-Signature=7bd2b47e52c39e4fff3e040987b6c62ae636e433378567d73f89ef67cc73d38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

