---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHS7OM6V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDfibwn45eELX3HL3162YGcGSM1sg6x5WMsHskW6rMYBAiEA1B2NWvu08q%2F7M4X5g4NCXEkmUzDrMGwIFrMngOtlg4sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDP8qWJ%2BAMtdlHFpbvircA5JPPTPbz5QP4kVavAAMCYjMDo5NL5gHY8eZWgI1RTeECe0M1cA0SSGf8siWjnyXN%2FxGprmmrmCLCYPERK%2FMwMWEaWtrNyNQq3Jakhb%2FxbM4uMYpuGCEkavsjrdE4twL3S8TfFeSNSS2DFeZK%2FIIN5I7WdFsGm8ozVOPp9pF4HBtx1BpFtjAesOOUbOA3P04E79SQViypkO%2F1JAvz7oXFfxX0iapP208PQXhHzhSKo0AMTVW1AkZCUO%2BQ801GYXs%2FCOdTrF7bwc0SVJnJK9okVqgi%2BQqM4Z%2F1vU784vgxhfwz0pwKlh%2BSqK1jD3AR2oaCVjymVsWhJAFjfsUtZB2uK6sSIqrVg5Ku%2FxqUy4zR52uJdcX5PfnQJUKChHCxOs1cAu6FUNx31euUM5j9%2Fv%2B93Pgxjei9npxAKzEsg2HhG0zK1w%2BDr8Fg65rbhmbdwn1ubYD%2FYz6UyclxwrYv9h86%2BPFL6%2FTC0BVRFSSiaPpcwSAvZ6P%2FXxnT09A6Yk1ITV3IEV8BiwI%2BLvZDPnSi3Y%2FOnHXgZEi91JxRFgK%2FOAwxzP6xIItFwNek7HTJ1SJMP4qL5oazAH16BdcJq7lDBeQ9%2Bc9uJP5VCstDHwnbwaEaOuQIqZZeIz4dEjByEcPMMboxMkGOqUBF4%2BEtDIaCdz5N0PhvAQzohDSKDyNOeUVdzpUrN37QplWgjxSwYK4Vdxs4XTxwsRPkFs74PC5SOiNvZ15T9NKacNAtEbXz6vND%2Fxk3%2BDUq0yAWd5Leq%2FIwUbTGmLQBJEtrFNmwLzP0JKX73pIu7Yx0LL%2FuSfQR8MziZDxYO82xl5vh3FHuLOX8hnzT0ofez%2BK6UCtFVPCuSNIOGZjN%2FcN2iLZSIK%2B&X-Amz-Signature=542bd80df4b8db66042a21b8803486a9278c1a43b4679b269f9c7875b3e9f3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

