---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FKKWDK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB9cNoRZTW2%2FC14vNx7kMn%2BN1j1y4%2FuYMZkBafLyDit1AiEA2WAUkRMFJGZrh%2FusQ42bXSoYXQgLQVeMo8HgiJuv7ykq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDM130ewrefNVFH93OyrcA%2FGAzxkAMws8coLCpv%2FUSVRwq2bHwv6%2BbeVsxFJE9y7nRUPVkWlNJYDCsuaJ7mxTmwwij8J%2Fjtj6hhuXCNt30%2Ftl11aRDQAcTTN5QFoLpNs3MJ2%2F2zzfG4GkxxMew1HDbsDqjylp52yLYXrIxztHs9xsPNs4tQrBSoQin99ABOMxddI71B3Ui7l3Jm31SPcbn8pnlEAAP52USvUM1Vpf6EXU7nujFxyN0oTMoRA9UQ9CR3SZG3P5pKlbSixVKGii%2FYQTZH9tXCDs2IPja96am0T16G%2BcNcfuIHl%2BbDv8%2FvQNy4ADvHCAKBR7S42En0%2Brou19h0RY1KVRZLhRI%2B7IRPpy7BLShtOgduvpPQ2ivIUmV3ae2%2Fs%2F8oTSsIeLTYPHLLSElICrHCDF8pVNIpMkkIyO2WjA8GEPsi%2FpG7%2FHios21w6xnopTNcYuOrDYkdWyeKLbZfJhvUG8jb4yJRT4JHCbzZHFdxu9BzvQKASMu781hay6UPEQhwtMWuKJc%2B3vQQdDuTyN43htVtMTOo7zp2ZcLXnscdvi3By6J8CRC6t%2FXp7X5X6s1WXVZuEtWkME2FgJhOuWmS6ahv75HwMqGFqs%2F03kcAExEcFwGwMTtyZZJNqYtBOVSirnTBT4MIe1w8kGOqUBJXvZsTBmSK4F2TWFpeldgsPusDzzoIej%2Bu0%2FwXKUBcUNPk37HRKGK8umr0ZrCiOmtoyBGUL0P8X%2BqvHNhyw5kLDBtX2a7ohcd7XslmgbSFsWu7kYpLLwxDLcKCLI2MK21eb3hOkcGoP33aBgIemM%2B47nyiFFBDXvaiGghqKt2Xow5X9taSJkoVC1LjCs3gy4l4B9%2B7AjwcQmTER9K6yx1DqT1o1c&X-Amz-Signature=657bc696f2452245b680b5d567403250092009b24379312b34b1660ab5fc29d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

