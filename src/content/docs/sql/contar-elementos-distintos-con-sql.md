---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDQ2A7T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCzzk4akabrKiNW4%2F19DHPfV1WBTH7N%2BQ2JIjxKabrRggIgHD%2FflFcekXY4Xq5PQC83UJZMXzZ1bZijT%2F01d97jn%2B4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIFKUS%2BgSiA9rnOdgyrcA7PrnkjH191rF9YFwhqDevXPCCvhrpiChhtZco7KP8Kq8%2F7FBrKRTxLxpMmaLxczr8%2FsCIH9BJLQ3GUaXDJnVA6nhhUZjjIVrYDbejP0y3OFXSpETMVQDKbwN6r5UUa75FCtPrvD8rg%2F%2BKwlPBCkAQgTB4qIcB4XvlTiRDHngKoMUv9%2BtPoOn6t3zjHOFoR%2F%2Fqrylwv9tc2lH%2BhNLJyNB763eHlCz%2FS32DomadMRBbMMg4MO2oe0qoh66JPKZ2AbAXhvQjarPlaOhBzcY%2FeHE%2F2wCAKE5J5PCMqJicazNX%2B2Kfq6uf5gD%2B7S0nUIJ4vEsmd4fQKcfPusLtvJUxZMJmd8oWx30p1VWQS9EZpJGo1WjsJL9w0jRdBcgtOEVcKjBraZIIL0c43%2BRAQ94AOG452%2FhzsUPInKm8oFonCu8DdeHCO0IzDcsBctn82EYarjXCWzXzfMdVF46WnnAzRssoFFgXm6CcyC6pCFuHQYgYUPUb4XTtOvhA55bMHDdD3FtphbAM60xsHHHGovL1gCpIUiZ4kYWDMB54N5hb4E9UmsGmDSqHflvxaqs%2BvvBlUyBVCzASv2HfuBvAJTEK49%2Flv2WtfmjvheQuNOgt4Rz3%2F7lmB8cYQ7bhKUE1%2BvMOPmxckGOqUBxNS2VH8Drz1Yv7SgzDXi5a4ir2bV3%2FzWTiprBSLdaZvsQfHvL6738st1npe5zWs%2BdCKbDWBk5H89108LmaoDBxVPrXuXVJGH4%2F%2FxqJK%2BX0qgol%2BQ2sLJoPd95V5K46CvjAf7R9xLjGX2%2BVV1r03AlaAZM0wkjajMDAyqLWpMKQggjWr73ljopTUSoBBYsLjsqOTSWL788EGYkCHtRjzvFfiUyIxA&X-Amz-Signature=f755630816f02d00cd8a265cc423c660bcb9adc05b1ca8574e25937f6596ab8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

