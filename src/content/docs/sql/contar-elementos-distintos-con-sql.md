---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCVHPEMJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIASUhrik6IU50RPhhruGe1iuXftRMIJd5brpuPkmZd71AiBleGM8YWkyMsbUL5Guzn8wg1UjLPWk0idfYHZ7gUNz%2Fyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMlZ1yzEcRZvG2pYlLKtwDxOahZgq8nRsR5jEodFU0VI2pmWFrbJh99KIXbZ3omDUqYhguPkygogW2A94OydIaq%2B7mtv6h3kTNUysbnp8pXR683y%2FZUJE6UD9nXlM2FQzDK4qTQbgUE9pGXWTv9vCedywe8Phj04pP2RgWDoKoZ9Il2EB8rFgOet29eM%2FV9se1MhPNochZ%2Bi2AYqObsacBPs7Rqlb6%2FlARlNPpL4AVJKSFtfG30eHkBS3EBNx1c1msB%2F7ES5V4uIqCVTdPJd%2F%2F0FZj0keOZlpM554y7%2FVjUTVtrOuFkqD6FIemuoBqmRaPCM5n9vceHZNTMcxO9L%2BhXVIDd5bQzptOvSqLxHV9ZDmWx%2B5gKJETrITp5zq6aDxFMusmGJq%2BVOTfSf2Mc2mbCwt8dPDfQ3ZuR2w3dBzXv4%2Bhba9ohTCYk3DoeSwSk3EjxJNAnn0ZYuOk0RUF9dEF0lTIHRTWALZWuh9VVamUzyST5MPpDcMWfc5h%2B2A%2F6cfAsIy6zv2Aksa0x4oB53yy89FS6DicWR78QV6N48pK6LMn%2BhHG%2BA0Pr0mfkZi7N%2BhW1OBX8BGLQGoNuERiHL9%2FYMagsNT7Rp7NLB9OfW3V0YFtNac3Kp702BJZO3l9b6Zk2M1IBcxUoNRpSOww5a7EyQY6pgGurF9PUmRAADXnvVPOnvh3QFYWXcn%2BUjaJSKTL5QItbms%2FMeVeFxwpJr52S323dRwNOMqaAjZN%2FrPC%2B%2BXEyldNJKNwOvXhQd%2FlcbnLMIOHlSKCVtpYXy6o8PlQX%2BIsE4cEb0xwipVWqrTAoH%2BIp1J9AZHuIWZQAvmVhGnYtllWBUU8pKQ%2FWmaMNs3oYewC794mGK0uAKwkJWBbINREgSFIZsPXQBn5&X-Amz-Signature=4b95e597568caa88c3afb9ae8ed80a5c27f682665d54a2420fbfa778c027b346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

