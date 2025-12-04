---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H53AJZX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFa8xGVWNaH8f9Pym%2FBP6U%2BcFHEjlbqw2xs%2Bw6hKmRiAiEA%2BPb%2BZF3HjkefGOSWRfV%2Fkw5yv2cB89FNWxGg%2BL7rCMMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDA1kQ42AePCKOSj9VircAw%2FNC2PUdxx3iZydY%2BEtOx6s8y35mj5sKuhJunzR5kThQf1n%2FG4LTKtZrgJoWGcuJ4lRbsFO%2F3%2BmJmxUI4Q73UZ5hEOSLP8FfbdI7AgFl%2FrennhwskZIuGdjJzgoFgFf6WV62eSYfasXQNbjQJveUmvniDx6XcGc1Gyj5ZqaGpoh8ClmI9HwzTu4rijEdDbBZ629LVHorlLpb81aVm4OiZy6ThmNs9zn0ZjpkMeKFsADrwr2z1gGQv5UiNFdld6ufuCC2u2rOdkKDe%2Bq1yCHdTJ4XyBvEz2g8cDuq%2FO5GIm90Y8kBSWiqRDm9uQKYWi42QLDgVb7J54mZyQrtV756PkKDOdXFpyNYqcd5TanWFWBv%2F3wDaFlIopVgE5TMQwctH%2FmOxu%2BDb7XvASxbGBPTJccy9gfLxYHMWpOtcLvjZAf4OBDdpmESkF%2BlWYetJ1e2U62J2hqbqp72e4u1vg2chLcwstOd9%2FoRTs54%2FbE0lheuvDBJFDRXfxRoQ1HGgg7TeqdhgpVaKM21vZJTrx7APUUA2puhTeSR28pQH84iHBud5f%2BwQvc%2BpGQwXmux8p08mXeusAe%2FGiMKiZpTIdsZwlkRHlOWRh6N%2FDjtzdZwIsev1PsoQaHT7G6XwnDMIKixskGOqUBAe0XYVP8t6ZHGCPYkbKBniZPAvgPQxUxc4L2clwYVgXqlrbf6W4lSg5mxPBRaaGuWweFuYgW4ps1%2FhOFgVHQ5h6M94yOrPbjuS%2FTu%2FxA2PBwQHzktphG3XeQP4dcqIAZyz46xDDHIrCjE34J4UysvYpkWt0Vih4xpX7EvLJXIuVNIssW0gLWfLDbxPXUt62va2gii8nHNhjy%2F2eCvxcLNyTTenOO&X-Amz-Signature=cdbd2f22be4d387383aa11e28daa59938fb2aa8468483197ffda92360b3522af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

