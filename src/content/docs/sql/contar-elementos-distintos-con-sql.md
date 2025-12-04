---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55Q7BZF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCAif4ycK0fPZ1YQrf1d%2BLTRBxT6EQsle3tdltrZdnQGgIgbHDvSy747FaN9Ve2WhA1JX0l8O9%2B44gAZfEFLJabpwAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDL%2BN1TdNsgasS0ICZSrcA8OxsGCGDid6mUyBHOf9Ci2G2JylhR3MJqVrQD1%2FG9qEe0U5b%2BDj%2BU4Z5PioTO60a5hqe1rQNtTn4eOvXvVeelXQMOTrG%2Bg9lNNz2BioIvwwgMspbmPclKIXNYx5dQr4eZp3SU1%2BcgIlq7s3pBl9CXfWraSTgNpp55%2Fw6Je7blDrGjk%2BDSltXDrqd32qgbr1519GADfjrfED7n%2BKcnk2NJSrQlFsRZw9klgzH0S01%2FKSpIbzkbrggjTQUV2MYOpTPd4kSfxaEyCLSYFuf%2Bd9lUTLNdi7lNdl5x7ldToMvCo6SRjVYaU3Hy1CP5FUD01Z%2Fg0DQ%2F5A2x6DqmjhaS2rcJ%2F8JdlNlq1M5dp2mm%2B%2Bgb%2BjsFHUqQfRLotzCyWaZi7OJVYXvlIN5J6OT2hwAMdXOXruYLrLvK09ymkaeIqPyyk5t1P1OvLtQGt83xIROxspWFNoVq5m4Q9IjcWcjv3rS5jxR9Um13RY8Wma3NigOzrIBG9IToElwFHfGG1pYGWUjyJbl2bjXesOBTyNlYwT6CkSOqNs6kzA2WDl8jyiAPJy72ctb6DAFwPl6IFhSev52H%2FohEk5Y7GddkZDdnq1i93%2BtYM4NZ019gOOMEoYtG8dxLzOsFGxNz0WG4irMJTJxckGOqUBCOfjge%2FT1y0wVn%2BYf%2B%2BMg8gIJwVAp8D4CDBHTXjfWpKyvtraXhfRNwcehigEb9J7JA0sE5GjzuiwiVIbQDtWw5K%2FExmTtX0cXTXciXIvB6W8P6xBaUsL0sosxHm4IE3it%2BxcoDyTkLPCIgRGtzbNi9Urs%2BgHDvVdl%2Bypg7itgNo3%2BSUJVrj%2Fu1bqdFP1hcoJG3FPDV58MU6jr3voeA7nIDBZYOFg&X-Amz-Signature=a490354d9b58f6151ae8ca2718165291acd7df2b673650ebcad7a6793587055f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

