---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZBZX4I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGp6M5MiEkyncXrRoQ7zpMoCjgr6o035Nc7m3%2F6socLLAiEAlHN0ck8ex%2B7X%2FzGzsTqRDztpczlTiVeXLdX%2B4PnT78Aq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGLZSDbHWPb2FqUegSrcAxV5MZvtXEP482alNHgNFI%2BTha4xkiUqMHNzX2N%2FeGbXaWgHcd29bQpo6GJ%2Fq5yh18lQB%2FsvmZPYSXwv7RaD2XStgICZo2n4tEXUkpztbfXW2%2FHV1gSFGCy76D8NzJdlrbKb%2F2yMWNSUHv2nLC0r%2BmGFqDtPjhRw8l5d7PTcc%2B5hQ5MfhVq7b8JlLytiuL0PO8yE2G5%2Fhz2jf5EcGpyoVXI%2BjS7g0vyRlNAG%2FqemSWVc%2F3BOQX8AS%2F91y5E2jkQMCz2StCPQWutmv58gPfkWlAM3Ny2edYVrWr%2FsUXec1UPn2Yo%2BgepxqDO%2FaDQPVG15Kst4U0LKVzTuH9spjjKOfvqx5T88FBd66ugZhW1pCpa5%2Bjwa%2FE0dKdKL%2B1sUeVU0SE1ExtIHsVkq3FsDcDqXW31ImwrATr6uFkLETzuswj9WuK6QL%2FauWfAsb6Me5gEFi0BIP6Jg5hTca3W4mMMSwEjsX%2FZjTihsD8uKxFyRffzl%2B1XIOEOIVtc8Qr%2BR2kMEyvZRTVic4nZmTFVZRIOp3LsWGUiyTiGyJyRhonrf84h8q29h6hT8dK%2FN%2Fc%2BgnJguBe1vn8idnaO0MWP%2BiMk%2BlLTnGij9iAI2TtYN%2F209RD9dYRsCz8zVOjiXyTpnMLy%2FxskGOqUBMvmn7r%2Fxnk2Wz52Joej%2BRvbLhqcAofXUm%2Bt9sgB4y3zU0SRWZnkB3IpVS8GbU2cHO8mpnvxO9oagz4Po1RDnC8te2wonMjeN%2BXVOS%2FD9nmg6SKoDsdfLPQdsaeSjePE3h3FPpaecJbfgbkn%2BoT5t%2Fxh1uxb80OYEqdCujO8mnZkKVa2EhGg3fvFSjKlO3w2wXXlYPcCLwtO%2BZVHWAdDipI6BGNaD&X-Amz-Signature=91c687b461b159ced8b6fd8d9ea1c47850644b688bd7bd5ea1b3bb08d880f0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

