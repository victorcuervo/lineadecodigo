---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPUYM5A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHFTdgeBD4KyYq5da8rrNHUS6y95Dmfvav3QmdHiRsgAiAMwghOJmLD%2FY8VWRNbotEevONpPot%2FtP4mPR%2FuHpwCUSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMkMCrivzDDu82KZEoKtwDUtlS%2Fg9kVjwOD9%2BZRRTJwIcgcoxIRyymTzZbS60q1TpHVQdbE7JiVoLap%2FbYHYmarWCeVhlJy6pB9iX4U01%2BHWBIcPSxGLnAw5hva7%2B8M7UnOe71qb5fcmcOQlFWXFdsSjE3dbNoXuM3qJALe6U0ydVpix6KoBzHa4I%2BXqEZtXeo4bC1Pjj9Un%2F7NSrBmn7aGiduPS3tHPoGgLy0%2B%2FxKWXcwNZ3bY3UGZECLsT7qjuig6UrooKBPS22%2FikSzu%2FXkvIR0nXkpRzQRgvlWz5gEO2O1e1tEruk9tJ6k9qTplng1EQ0TjiMeygO%2B4P7v2jVYUbMJMAuBfTkZOIS7kKqdICg4BA%2FiYzKdcCi9%2B3xZoZ%2FFlfJJTEsCn6WUQlCslbjfEod7aZFjAReASzKi1BQYJG9wrvztCnoUGPXATNVAj3fFLvQFSBKKddIjqO84yBrMzljMtf7dZaDxnW00lRre1LidU94YcrNjnXlcWVNEHCPZh4ipVWe3hl5ZrIjr0xOsThcu%2F4VEJVJCYWcuR36HO%2BkPAGaRrh%2FgCKW5q2h1taCwQimGSzHH3qvgkS%2FVsVzrONzSzwdDiubpIXIRH6IbuB2bohoos3O%2F8NXPpNZmAnpG8bRQszKiLDfAfk4w4NvGyQY6pgEKvfQs91xXwDsqsl8ioFYWx84wU9NFAvxb26yr%2F0YF4U3AK7y5UHBMFx%2FRYRYSjjnDrVsCU8m6U1JUjL%2Fuxx%2F%2BtIGjvb2rKGG0w%2B5faWx9W3OFF7ApE6jhmPos8ODmaEtj7ani%2F4PB1JQbDNrkGWv4VwCkIj%2B3db0OBUIBqlHfS0fiZDPuW71OF0qhvRznMx0IPUIIUO9GxvHymX5W7eKtUVpb39iw&X-Amz-Signature=e8966f21fd0f101390b5206eb1f344567aad7339621f0d99073852a2f5dfdd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

