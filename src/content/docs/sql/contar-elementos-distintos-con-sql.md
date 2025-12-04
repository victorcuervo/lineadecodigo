---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5HTKQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHDkOfiK6ngoCzI%2FHqqdiQZ%2FeLcInDGlwMzcVYLJTxb7AiBuxvm1yyZSMDi0ft574p5O4F5CwT9CJgwMcOn%2Fe5fY7Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMhDzlZvth3cYbLqZxKtwDWv%2B%2BPqe5%2F7%2F%2FFT8ch6niHUnPNQ9kd3qQIl%2FJRENbtdtpBNkzhQjUrgbmn5Qhswg1Up6Pb2vNu8SVVwnuVP2X0EGFfc%2B5qr%2FJI5KituhbWfZ5JfNyruClXNPFcmAEfXEf2cLETv6jzFKAZDUhjmQmoTo2oEFmgRexSZakiA%2BcCyZy9iJhSFbFM3H1Fe0Mn3j8p4GiN%2BY32%2B9pzSVES3XciuppS3zsZ9x9hnJYtZuUkGKuF8vASIDopPg69iq8ET0eTjIApsoWs336RDcG%2FpSWZ2R5DGsXW1zmL4HLb9K89vd6tSnnBnnxEa0pQKN0iwEbwxv1t0z1iqFwkzBVRB%2BGdEYOjFah7WY7MXOkfVQefPP8TGwVtxSckYRwO%2B%2FDVdShkyBb3bOeK%2Beg%2FNRZgRPNFjn7hAcLgKYLKY6ga8nxbUoKTJIcx4VoiNgE47p9dCjcTQfW%2BTnwelw3p3afJu4ad13R1SkubYpdIEFay05BBJoYbJPg7tgk6zYP256UUzFmiqBeXoKuor7S3IxkHUPioE1%2BuTYmLJxsogS%2F0VJEOaHMQFeqzlyRE200vviBP04R54J39hxinqQOt%2FjT%2BeUetmTSteZ3N%2BBWHVw%2BiiLPh1o7G633vZghyPeVl8ww9%2BbFyQY6pgHCF6tb%2BoCBxkdSfTNbPJ4z1d%2BQ5hhSyXzOibS2ug6jfWufUB1G%2FIOFfPKyCtPsiVYkGVKuz%2B%2F5SKcS1PU11ZgIQZTGB%2BIQRekd0l9Q4Uqs6GcNSZluvuEjJQDrY71my1%2Befe9Y9nvvrM0XfenZ7erVvStvJ5pu5wSnmYGfeKmpNzUuJGrRPHIQ%2BB%2BfIMHaAhvxO3qrVN8HjCjqQ4dYyIdhQQUlELvU&X-Amz-Signature=d1ac3d643b8945a6d3cdc7892a2abf8e7f9fedc370941e8b18da8fe77b030322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

