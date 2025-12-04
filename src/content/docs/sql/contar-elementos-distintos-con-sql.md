---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GN3HCUK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBz%2FD5e1q5u6czyaLR28ZGY0LFV31qSYSbry8O4aD5zvAiEA9tea8oLch6XwQN8bIHC3MmuaN3UxQ7GL%2FQySiwylhEUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHYsDV0Rgj%2Fj6SdrwircA%2BSK8kDLRFk3Oc2p6mNcFe3kWywIMtSD2cZS%2F55OApS99q6chEzeej3Xcc%2Bj3pbgRCzDH6H2D2HLYChVEGbP6IDuBtAP%2FHzh%2FmI5WvVm%2BKMwUQF5K6Qrexzb46SuQPngTjm1GVkuVPb52Fd37j0Ks6BOgIs8y31aYAzHk1JQXCg4uz64VQ2Qn1vzjJ0Ehw2cgHVeiMBFZKG%2BTsFk8BpHoGsmCfi2BDcohvTVk5I9Co9y4qnylMzqD%2B3dKkmYG70V%2FfwUUYY%2B7G8DhsEc8KoawDx%2FqcH7rkZ6l2G82fwSmYzlbGMUzQuGLkhMX9PWxTOA5T9UW0YXiY8q%2B6Gjo5Qphm6LVjMRkArF4tRTXAMFtztJAFofBMGrp8JBtgOsrla%2FHRSuDrrN3DvlgbCx1LmE8ss3DGBJv06DGSawsDpo3dXT7F%2BKplLfUj7fNNP9wp9W873jhlDqQSyN2RGKt6aKKi%2Fo%2BtxGmvipXT%2FLUPGpz3DAIVtgRh5qr3lgST0Q0R8CIJ0DnNbcD4SFCs%2BQGIupy81kbHRtl3p6wZfKCbFpZaz8uzYwZooMb9FyfqU1eoYaXDvix1MgmMgkAbXQGzxV%2FXU%2BQbG8XOA2fy1BOSLQpoqbzlmmKnCQ%2BQBuYe7RMKXnxckGOqUBEzL85ff5gZ0rJNwaWUT5VwZCuB5K3PTm5A%2BD7H%2F%2FkbtgkL1B0OYLe%2FBI2WJ0aZnnznN6%2BIohUSf0%2FHkFs0VQrUjxfx0qPvvuF4yhXUMK0DYZr8FhU9Ab8si0gxLmm61UpIeCjFqjcRLk10yYn3TRZZGeg7kNXgx3hQ1IgxFbXP5iBrlpZWuO8VRKTIkm31AL6xDExfE3QhML22NMyBeP2N1ShuKw&X-Amz-Signature=290bdf68714f8a9851d914b86cf8f7819609be8a0e4569fd69c0259f58d432a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

