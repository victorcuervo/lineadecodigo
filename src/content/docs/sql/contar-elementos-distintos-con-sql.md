---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YY53MJM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDyenjr6pKtDmvjR5wYWwXqN%2FGtwujuT%2BWTeYaEFB1KhAIhAKkDhCrhe1FBgX3YrCkiRnHToUdRylgWNx9rMW2n9%2FGIKv8DCEgQABoMNjM3NDIzMTgzODA1IgzVuH%2FOpH8Cahbj16kq3AP7bZH%2FfawXbw6JOtuSLNiMgKsXCWQnE%2FBj5%2FTDX6OYW0EuUxZZfqF0IS3v%2BQWM2XQB0uF1J9YFWxqtalJoQJKkc1AoHVG%2FwwqPNWjiX6%2FlUu%2FlfvH%2BigN%2BA1LNavtPNILI2m9aUJOETZ1soJlVxu0AnF%2F0j65MY9My1DYpA1ELLjTAn0gSvKiSbLvm%2F6xxvIQkoQwoqy%2B3%2BdeLIHcCamd2rffd612wcuHqxCZmfslJLZXC3QBirrqzrrQ3M3NZ7%2BD6I2%2BTsOETwXx2wy5sk4iy5kvX5lZWvNb3sUSdAvbUTIcNbViuyv4fwd5iUGOtgxwCA47yZPV9JBAWwjBohi7r7Q3avIU1ew54m81o9YSkE7JlpOVL81zGWxvb0pUsq%2BkD1ppu9RewWFcB7HkPYnPv%2BY7VEf3AvXV2UwBClO2vqW06yuTeAeuxc1rQq65SOntAJEwE7jhHxPYzTI6%2Fy2a9tCWnyb14qUHJ7hNMRsDbkPKtf7VJvm40Ogl3x5zkxwWse%2FHE%2FrDNbVJO92aCJlcxNb1PKaHgXhPFNtoiuYwx0WxJeztNFnBMmEU%2FfoXZVGUSaHnobJqPBijeM76k%2Fgk9EH4eRNcGsOACRHMQ7G%2BEmosir%2FPZX1mVRFP2%2FjDOvsbJBjqkAbV6Q%2FevlUx3dDaxkbtNjIuTDafQHIQ7%2BoRNWv8MSL0j4ahcasbFSNUTkE%2FbVnHlNXvsJbHAiqz%2By5twtlrr%2B2hPq6aW0qb8W6yt9pYWrKgsrXpcmrQApZ%2BwFX8%2F09eTnuhUlDOdJecep569drrH0WG01GqneF%2BQtjl3S%2BsHeK6AbOUDSW4gBPsoQ4ZbqDMK1HU3nA4SpstfF7PqsWM%2FbzQ5Qp2X&X-Amz-Signature=3131cecd3e85cba9a2094f6977a273b2c59cb23b5e6f8848c8f7ac1174e2fbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

