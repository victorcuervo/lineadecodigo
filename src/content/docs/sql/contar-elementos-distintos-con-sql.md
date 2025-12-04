---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZ4CY4E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDeQQCDZIzCz9lpCvsdyPTmZ53jVpeHzqoAZIw0k%2FQtmAIhAIDbFsn16jylziXvuzmUNVqzofrXMkgBL5PNrzDRmVfaKv8DCEUQABoMNjM3NDIzMTgzODA1IgxtZyjKogJygoH3jYoq3AM%2F4zNQCieAoFytaWOUb%2FBusOxXfUbNUbGMJNej66HZp1CaJN1dqaoAjCwWYxc%2FTwF2NxAuPyqqICZGyZxW9uRF6YF9xmplnR1RaMqp47dWCOCl8hDS3ezXs0ooZ3Tqju3Kxu9%2F5G1e0c1NOC%2FZrHsTlPzcYfP%2F7LiuEoGLvbXDY9XVVumNiqNdebQA842MEsIfPtRUejIos6aqi6dxnhtZ406jZ1QGuObWfCd6XbRx7JhF7K%2BxfiOgBNoU2xbjw0YR%2FdSVbyCGcPgT4O5yG6qdtsN8kCZDGFwpiN69W%2FTFvtsbuh17845xeDHOBB0VtgaEMZKTYvVHBew3NKCq7e%2F6pIivY%2BTZy2v2u1gmBFSoJlCTPyoPGLRcmfXxh%2FfSltDg1S99c0gt9zh0jeF5Hhua9Yv0WMB4oRlCDRrbhhvLe2zrZ1Yj6OfO3V21RLx1Xv6qr36seDgIwbiB12BWdmMobo%2B0zcHKtY7XZl4zTuMYlA6HFBKTWUcxXSjrM3kj1KspvQye8vXP%2FQlZdUZ6gI4M8%2Bi%2FHXJbIrjKPeYibz3G8OVPPlOBVEvSGTY1ibsMsAMq48cCNHB9x9jb3XzITJCjEAgq6SF6ANRBuWHGig7hlkTPEHU4BBycfAkh9TDS58XJBjqkAStM6hvE5BxCrUcT%2BHG%2FAh9YcycbD2ViHnFMtWXLfGobaTkv3VWHjzWKdh5LST9kwggayyvJBDZC96%2BewpLwvyzbBdEheOppwQ2Cc24qDDFYpsVfSVqUgo5iiqzCs5hXJurdB%2Ffep1QjKEenjFfUfIz9T4VAq8TW1mlhd8y8t6D3zaLXUfVclo9R0aRqWCL%2FySSjBpCSGFou0uCar75Ps1RxXeHr&X-Amz-Signature=7e22f061686569f20a72757dc5d52c91c4e8cec4bf89413081b38735e809c1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

