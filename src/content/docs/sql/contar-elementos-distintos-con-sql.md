---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBE2I3F7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIA0VvZAd2kuM6SOsu%2F2i%2BzzO1ixYPMD6btEllcAHTkS%2FAiEAnC%2FjAFcmI0K2eaJpeBbd%2FtYOUVo8hQqtf32tMUW7m0sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDA5OW5x4V6HwhLlaSrcA4DmLnYiOu7XfBES%2F0ZVS7rVdJkrwgF9RenGC0U%2F1UeoR2PdsyjufHzKvRxFuVisRz5TAhspRTOlTPFekbxuoF0Q4UFd8xNyBzffpOxoxmEb0woD5iCCUfalOk%2FeaAwwLInToRznOgDF9QEfWQu2lqDEO2olySw9Yt3S%2FtEf3%2F7OVOU1fEzE4E365liA%2FBJQW3zaMJYMSrGbPsnt5BSyC1FMXTIsjwlal5Qz41JiWFHjCqYUyFEx9wnUjc6vMW%2Fg2o0f22ZAgiUHiDI4JGXqhNFuzwW21z0k9Jjjpayw41RKNKZfx1CCtIh70DKKNg2mEYgjhipclWjTvLLkvEFBMs3YXwbTEJW1CjCMbdgibr3WTBFOWQZfr4s2hnbJGUKOX5LanqX1T4%2FKbdjM4UaGJGrN8UJr4Pe1znaKMpszV3%2F1wkHa6jzzkoV6%2F%2F4Vy4Ftvi7ukHbk91gKCk4EYFjOq8aejNMBGDEst4nLje1R%2BEjCkQTM3B1MKiSBri5yXZ05aMbBhkV0O5LkVly%2Ft2lmtoXAgnAB%2BeX53SFBxAJCRVZ8sawSsrfEPsVV6UC5iatLxZa3XxwLNdPF3uMLISP5Js0NbiQlnz1kspvyOub%2Fzqv8BcBSl691Ckl1Ko7UMLjKxMkGOqUBK9qen8zL0%2FOcWIYA8j7tv5QFZKaUKeslO2DWjvzbIuW95u2cXSkW0o%2BWKi9VgaKDMZfq87pwC5ifcqnL3%2FVmpxaevEg0PSbF%2BaGqNP1yr%2Bf5g47ouUy3Y%2FOQmtQHuYu3GzNHxY2SdpPZdlFGGyJ6Z7EEy8E3oCMKhUQBVAmdqLDlF4y5YEuZZ8Uy%2FSn3%2Bgc5vjJ%2BExCg%2F%2F2t8fLfxq6YgTouWP5k&X-Amz-Signature=1be2de597249e35350d728c97fd0ce3524bfb0284cd43f8f10b5354cfd9a7e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

