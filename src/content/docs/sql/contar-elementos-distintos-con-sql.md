---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRM5L5VF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAco5fpoBkjyDe6M2jj37fy91w%2Fgfi%2BrzfGca51K0wmAIhAL03O5AM%2B7M%2B5dBDsBya0L1QbWjAbYvLpwIbawvvKBzGKv8DCEcQABoMNjM3NDIzMTgzODA1Igy%2BNeprDdzjojstYHAq3AMVUHA5YKHHiwlGpo8F6%2FCxv90wIvGLayz7em4Gnzzaik%2F2NtiBsiPxDyXbKDdVuUBnEZplQYobjAuJuzbTAqREykx6gbafWYhc6ElYMHp%2B9hmkA40RGXkWT8a%2F5qsoOkJ74i2f2%2B90fDC4JZzu2FQ1Thc%2BTLYm24XO1zRn%2F%2BKykF6xM5qlVxC4bFWMqtKKfpTNVKugPFbXXqcoz9AL1be7r5kaIr2dZb27FTNugLxZCrCsV9AJ8BK8E7eppqGAg9YG%2F3r1C3baw6sqED03wOJKVLEYfX6hxvGOnBm5YwDAZCGDz1YaDqDUL34x%2BmCKupFT%2ByFoBuKkiRZFTUk4nyfrgnYOSrM48gyJwPH8uJJCfxoN1G3mSJV0l%2FDNqeunpI9JUxcr%2BP9OqyGNv2Bujb%2BSnGX96V4hS%2BLs0ILZoQ3%2FZUu2fWzdqzaX1UMnNzqJc4Qb5ArXphrW3JLOiGM9mJWniqyzU%2FuFjDPB9L7eOa3DmZAaASVveHWgsJyOoXq4JEF7%2FmwJFtoPFPVnLHRDenIr0bVIg4lN1JnAYTew8M%2FSsYAiyOexnH17Ihn9y1YrORP%2Fb7aTQSvgtw3tfh%2B2t9PEUqnURlJ9KYQGIjN0fWUeGlYMljVlAJRDrUGnCjCHosbJBjqkAUkxS1osipF7gvPZZ03BMfsIvIFxSwgsc%2BUw64sdDd0LdfSnzdhyVjp0QV5LvcKt6KbQuy837nJClOS%2Fr7sOiOokxdW0N5VQitzYBTTYil%2FlrpO1NWaaib%2FSU0zKe%2Fvit1Oo2spcyeMcNLSpjXSQL2J6JDDckBxyZWUTFDI0HZBHFHFPuT4wpiplOCpF3MPJY5SoQpm4Eo18r7Ii0G%2BZxZG4Hcz4&X-Amz-Signature=a18d93d72ff4f274649b31dfeddd2d70ee9c090746c0a2993b0a3e9534c88503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.

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

