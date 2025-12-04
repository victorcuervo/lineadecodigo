---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYEDKIT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGnVxfGDNIuJsfIqMHkNFDN1e4DWhORSpDT43q4LTbRaAiEA4ympn9Ma1HZWTBIrvMj8QnZD8kynQqUs14kdXvWSWKYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGhgWpfWI6Z%2F1nDELSrcAx74%2B%2B1%2B%2Bcp4KIOjiT7%2Fw37BN15QI2Yd%2B6yydJSiO9HwpWMeJeBayjBIj%2FNA%2Bg3earP8m6lf1czytS3QMnjl2eCKwGgaHLQ4ok0T%2BzsQJwHwfAvIXl1owxRelbaMpphkleoaYJqf3kf1Rr%2BoE86npsINjxniOdNujPSWIeAW82dajyldQEFtKH7Xqhz2hD8nBfiJK8z9jpXlMZBYZtwMX1ptz6O%2F6FiqyGcu13iF4X8QR1nACxKaq50LSfj8M7ji%2FMtKjYn8OCgOwxSSiZPNoCqoZs9HWCPeaflxLgYkgd7am4neW01S8ZGQTYNxaolMngnx7BswxfpTgkNf0myRrhAqmthoVbSIoImMtAAu5wF33L0zYnz%2Bg92GPzUhM2EbIfex9lzV6H%2FfRD4bcCQZ%2BfqPXeHi%2Fx1BMuGp4sTj2IXSLrnlFPVDtRGrPfHwc5lc7i6LhU84rf4B2gMQ1X%2FWBaG8MldimZsZE64xDgS7bgN8vNNN3H%2BwC11SYenA%2BCep5Tw6v9ej5fLPd79755kFONcWQR6FOCIeccc1YavInk7HNG20iBqMhmW7O1WO7DaNOq7rvI3Dn9noCr5O1vgF%2FeH92pIuT3ogmZrOKHLnBJWN71BCUj%2Byj6rjNckKMPitxMkGOqUB7oKXWOWNDj8hlVkKyyu%2FPExblKHvLVHJAOA458JUv%2FWmydCUyUUYsyEgVHVuOG0kJ7tPcIkSOgrxOAS%2FyfG3OmKAEPpeRil3DEHwNbgMAVFnqLFKHlJ0rgCW9xAP8lm6OolHQ8MWXGrbgddDqDHMJY1eVzD2PEVJSk226kqS55%2FUgzf37NBJ%2BSbDJq%2BXL%2BuQ%2BglBXscrX8X2hzYvS6l184Jv28H5&X-Amz-Signature=c9018a87aa5afcefd1423a7c493a78987f2d02d6b7ad1d9b4c390b0332c19b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

