---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2J6AZE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDn9gHZBBVXcDLpoel2rmua9TUNhcBVnzxQjr%2FwzieFlAiEAq0NIuLyHUifjbgbwF4faFCP%2Fnz1%2BGqjsHo6W0l89Accq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGFxbka8LZ5t5A%2B%2BJCrcA7WrKpnCWrdvOS0wPAGBYIKtj1k%2BWNcVpDLhTdmdADBPqXeGS9DqznIn78xyMekcVyldDwq%2FUlRpO4MT7Xxt1T7%2BoyeQztU4bbCPJkFp76%2BTnbK%2BlfO2VeUISZIlZghomJJQ0GCfZNTY51x2ryVKbeE6fMlop1vEQbtZQFex33Vk2XvEKCFIPcvGVXfRtntOOoO2f2UODIbp%2FA5muMziVsexg1RYxddnqN%2FrN0nd%2FZJviDmJ%2FXylKr2ojwpOCUTBCqKQWTCnTgv%2Fxpipnhu1bntDLvIr4LKi0K89XXfFeOdgzS0w9CJJK%2FassBeWf9sXky1Ba3YhKo%2BxS7p3Wt5EoUgK24zBerjotHgDLWCdTEsl1ja9QOIthTT9gFkToEAMZGEH8So%2BoxA5VR7RH3y9cJl%2B3jufeHe3GxcK7F0v8ayDeOBk3SO7wDNprq1A61zzsyQ3pO7LBhhqixosG6o8INAnmHv7bJ4ZZvqRyTtS3bU3%2FwjXHWio5hEWKhwYSY%2BrayH5e46XwsWFn6Gkfom4iOCKxmS7kjDO1fmCcZgjLkSnbLGqIWKZcg4GO0gTHos6KO2jhVhbHKMYfHbUuh2Qo52SkGXX2neGmGMEMtpLGuLfkF76F0dLHDkJqF9WMIH4wskGOqUBHW46KcKpIBv0IowHrLLGDRrcSbf%2B8DmNZEshqev2Oz2P9Ubt0RtzyCE4stYrGQqfcTiN3Q8Zb8kt7oUBYIcpCJNmW347a3IaXN6nM8%2BaYWHYnsB0RBy8vbvW1WgbDFwCDFUfeFbvxMyk5rKhvvtuDZinXClEU97cYpaLNzVV8dpjICkfggjotY1fWd4nb2npFglWu5jbsO3s%2F8cpfl%2FBVzpM5xwh&X-Amz-Signature=89c1f1f5eac2618b69381f2d68970de53c8322320be7455c2cb27d7fe14cdb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

