---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643APN5U7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC9t5jjKCrMyTiSNmfR93B8Ecd2sWsa7PEwkhipNAOWSwIhAMNokRWdw4YGsBi18rNQih13dnfZ7S7Ykt6xHOuASzIfKv8DCEAQABoMNjM3NDIzMTgzODA1Igyz9NDRYIS8zcYI6mIq3AMmlrm0p%2FIhxDT8o0rp3NcXtePnZHlWQvt9Jc8y5qPAikKIDlXFm3x3aPSeAbxyTYPqYUv766IOIhSCuSjQgy%2BIyn4LQ69bV6f40Kk9tx1vACgyj7BGq7Aa49q3U4%2BDP1YpzFysrNNI8trAiQ9Q9WoyOmpHBrExrm5E%2BAivLlNhx4QqVZhsU2DsyCvm6O4J5ofyZxa2GiOLa6ZS2H9Fzdsvqzv%2F5Xo5fygnjJ%2BKFB9EFJlO%2Beq68ajnNxqKAFT143%2BR4ljH5elIW5AHIqqlW%2FgSN7NbJYVtzV%2F1aOukKAE%2FTKNnwm5yCWOTQbxzwasfwv74%2BpYT%2FszVQd%2BWD9zuy5q%2FcgYgJziVi2ZQDNvGLBGnf2zqXADjlu3VcSNheDIDLmblFOfX0w0mTiNJ7OSHI%2BGn1y1l8OTOMAco%2Fjj8V3wSk3Xph%2F00Ng%2F1WvhDxVmIwgK4dn9ed2De5%2BQku3eVTtdS9O2QFF8XCMyqpZA0ZLv1%2BaHD%2BKYCHbVAs%2B%2FGeWH%2FqbExoZhp41V6V13sHjfySpnbUcphXvW82SaqBtrM5LOSDdEDfcpyU9ghYBiAwVf4wPUL70eao2P%2FXA07dNI53IJA9FadUdqnwh%2BToqqPNCUjRqGpI06hFcLlzjI8ADCA6cTJBjqkAeI2uD3DbLp2dQ0hOAorDivjEkoBPortuZ53ceG%2BR6f2Ix5Se7hrx8bLFD1ItOXKXHPeI1ohyz2Hy%2FZuY1YgiMzt0NlY3Onky24ElUvDtD5LmUE26AFLR1Jsq95nfyuuLiUOpO64GTo1PnpuyuS%2FMzMcQcDedyuqdA53A3TkUtuBnUf%2BgQykYcEZFebOlyauGCL8XXvOq0j28xDKooZOTL7wCbXY&X-Amz-Signature=a657ae7ea402ccc355a0bf12c831a99c26219b5b94c6ba1e59b920af56c7472e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

