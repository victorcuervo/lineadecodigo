---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDPM6DG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCOVtChbquJpYyl1v%2BmL9wCREL%2FlnG1x9HeQDRUu2sSpgIgJSI7oruyWeCk84JdplBk7wCEOWEpwEdNq0IDXabEmagq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAj1ZChVjZTV4ULaKyrcAzf0%2F9i7JAc7iOLu3MAd%2FeqlC3VfwbS7S%2Bf11t6HVLdRMlvjht2iBDZn1jkIJi93z38KmfVHuIaVDfJ%2FOhpXslkZ378ZyK477bqAb1Sz%2FC%2FuIhOpT8ey15xU%2FPFdE8Ixgcs2UCSdvGTNjdIYY30bTIUlRAFrFFbSAQntccwHT%2BeRWyKfCF3Ik35rU%2B%2BQC79airqb%2B%2FQT%2BYn8FREhOnIvcthrZxE9ATtwh58mQmaoAYYZG2FVGxGsKo5kJD%2FvlLLL6yrpFAd%2F8LGhTTZAQqaVm6QcXFhQEfEu%2BzgJ5JBOCFVQ9%2BZQ1%2FYXUTPZE%2FIWGFumdOz%2FPRZxn8lpTyLXC5gtEFQyHnRUFT9XGFdio%2Bw67q1EWIpBbrfVKoT4jqfbkrHR8VivtGs9w8cxi4dfpnXfSJggsK1Nu0FDjWIVkPfzGKK8j7ifJLUTChVXhmzkW%2FkfbtbatEdqkQ%2B8pIFnhmTqiF5VNITvbqT3G24g%2Fen2Fs%2FTHNdvHjEmrqITZlSfl7e2xGao6PCsalycdeHTThZHPc0AJNwso0%2BX8oX9qT15ewkSnMKAvPJIjpHUz1U%2FdhdyGonUSCj0W7LmxYK1J66BLstpXcTbLw7xO%2BDJG3sy69pwb141QXftyJwboFHxMLXUw8kGOqUBGiDnEVK%2FM85BW%2Fp7lZWDKn%2B4S0aSP8vRwUgu77Mt1lb4y2w1icdGbXALhFrjjDbMhEorN8qLMIQRyYYcwH3c2GX3jyo9XYwhd5gZhHAuXGnu%2Bm8cjfzsLgYYmzXU05RtUNbDSk2QrhLhdjsnLCuNvAptJux%2BzHc%2FKJIUxM2qSNFIxUBiRYRZyzFKg%2FDv6ZzT7S9wK9DM9ilHo5tPxenKwSp3U9JV&X-Amz-Signature=b4c1bcbf597465a44d11284fe166853baa1086b84ec51625d16436ac0b0d68e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

