---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBI6CXIV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD7Z3%2FwARsOiumGFFGYuBDWg5yjX6zahbmGWued%2FOa4tQIgMV6fDoKjne7bD%2FUknhp1d%2BlCY%2FWzVUeQgk%2FknFYOO%2Boq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLJ4JqSms4%2BkoDqlkircAx77HeGiGuVSoAL2W7qxcbc0eabniFEpAh0Ae9lZxsUw4kns%2Ff%2B12HDc4u7bjWLsCTXvHttkbujueniUpb1DtlNG8%2BX7KG9Iv2NxPzEtmP5caoW5eX0HAenEU6njE8ly84ZoUQrSPjct2EmWFVAighZbi2PJC2pRjM9ko%2BjX4GBSY%2Fl2kYyB6odc7il1CKXyAjVovO0B0YBvUO3cClNOV01QPdMxPxlOcskP1Gwr9i2UzjynMtIrmY%2F8VUFVzpj5obhA%2B6Q4k3F4g20PPZ3QDIhjjxaIHYqBk%2BpiEVVofDi1mzgcnmWQOO0XG04wg3G7YAGmwFCe8zHGQD01u%2Bznluq3FnRSXyBRkvebhUGLx7CMarMjtIbfbSUfpOygVHIi4M8rOVSbp1EFGCZP%2B3oI3McWb5H2S0OGGczciCgBdnxqvlhnYu0GdTYSLfi8E4ncyqtHqo02Nkft7xV0DLzy6a%2FItH9mbR5gUMkFBMD2hdMeGcsmuJjVYPMFPdKv4gDLK%2FRWFX30rk8GST76eu%2F3s5iq9GA5Gmk53xmvQK9ZUWnUdam9OfwDkY8SAbfoJ2qovitb%2BJpTvPX8vpJLvjK2N4XDC8Kuil3MKra2mz7ipUMWCd7YWcRthPc2oDp%2BMPSUw8kGOqUBqpbiV5pYZ3NxlyqpGF5%2F7QFfhs1zj382OFmTzpsAsUqbk0H2rnmEpkT3YbDh2b9ChR%2BIxJxqPqkvM4DAYkG9tkHCxEAg%2F55lExGPoHqunfTBmnhW709Z0DxU3BAvhFshdaeUEiiTWLaZLwG6xf%2FYdk%2F197KLjlwtvMiul5DThmyCWXRgYzxJEg1Q0t4t1fbj0FYO6MaeFow8SZ7ScAgKoev%2B56ZF&X-Amz-Signature=961f9bd6ef5d7fea884ce17de2c1e4a605ba0f14389c4c2dbb9eedf4e30bfbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

