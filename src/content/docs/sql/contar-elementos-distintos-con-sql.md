---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGBV363%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFzvsnkLIK0fiBCEH8GFSW8YOBYISYPguckP6wCYNwBnAiEAsY6bJUMu7eu%2FHkVNVZckqtVJ2hoXYXDB%2ByzLovgesAAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDPeMixVCLPLAhGtUyrcA0CAsXcQQtK4kVRvJHYImxlt3%2FtyNurpEVkfG3LljaTJBQhTJ72odAvsTLqikoxy6Spmul%2BC8IDihq7%2BqIq9H%2FAQKjxg%2FzNMZqsCKf8dFwWdb%2FGoqUdE7ECgZP9PXFTgUHA6xgATs0Sh6De3hmBsvFgq6nh7VDXij9c2VW13WYsHYybeRzMRacMAkssghaOx89ligks4iCQtYiDxiOjIcar5h1ncFeHaoAq%2ByO7QxdchQeHRoZIRzErjlqzuLlulOsPduVTHEPBMkX%2BpGlcZBUCSm73Y%2B9ozxDYvLlGs6v6%2FeqaBubl7QCZuyXYphdxLdN4oTg58yyDWMboH6CLH5oMe6j3NETG2EbB2xnOQ2Wzv%2FmQ3H%2Ftv0KziVkSr0yacrffCMKpiWkfBSg10IoJisapXDMFoRIyUhCLvQrWOmMgh1rTleJsaY%2FERQ4rTHLvkM88RvmauMUrLL1OYc76m4RWWEoG5S7YQ6SYBQ1gz5j0I8NvG6%2FQs4%2FD9ilDnTZbThBgvKpV%2FrLVZtMrnQVI0yaRWiYSmphHtgXm%2Bkzhbcip28m21LowDR0EoR%2FlqCfQ5hl%2BuAfkN7rFCF6Pd5SP7gMRr9sr1tY1W3%2F3uEa9LQL3Ds0yXuR8bNBzU2AsXMMS%2BwskGOqUBcaxqhcizoc1wn1GigxogM8TulengW%2Bc2G6o8BUJg2jA2c5Uhf0brhohACfu8Kqx5ZP4HFpk2vtsx33C8lYcxI0UGvMg0bW0usNvtXFNsGj%2BOY%2FGjZf9mLyvjOnZIg6aWKgdTzKX28vsfNhsWHy02kmAPu5Lo2T6R8eFg%2BtckHpel4eiAr6RgrNZj%2FFTneXDvF1HEZtnGdI59cOcBYe3cCUqsDKJH&X-Amz-Signature=9956b07e9deb85920f638098426ecde6b16f7922b8a92b5acfe7d399e7c26942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

