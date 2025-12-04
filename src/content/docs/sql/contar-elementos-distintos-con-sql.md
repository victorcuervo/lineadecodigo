---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRM2H46%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHx%2FpS95DefGmsO%2BV%2F05HOKr%2FZsiyT83jTn3mUzCN%2FEMAiA%2FRGgYo4b1FS3xtZv6QrGCduYvp7PyK4i0zLw7991MByr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMimdRkD6h4g8LmUG0KtwDcjhFqOfQTCtmXi6arHWMlpw3BB2xM7txgNcpHKHjHBEPBDTmO6PVef8vDpVY77D%2FTIWBH4RfnxAeq5t9vEt9rEP1xvCuPOaKT%2FwBe0wm3h8ZGBxv9VkffrpmhpzSyHiMZH74FNaYDWae6hUTWYPAPqeU%2FY7CoVo2TGC2Pnak5jxXAWy%2BE7%2FIFeW70EG4UqcVYyqCJ4eeoyz49xqmgyY4oRn0%2Bm0y2ZMaqn8LbmYkF9jNo5jY0VWavVWfhB0EMKrMSbX7xSHlDuIukHlVGST0IbCyF63Lx4FCLE7H7fj8n0SUAON14K6hyhPcGjLeYtQrco68%2BsrqAlMfBbQ0OS5n35YueIMR%2B6inCfdyncGv%2BDuX0u08SiZMKS26vesOhpdjCxbTb%2FCmHf0Mrliv4XQCXtqgFn4n2fepst4KKP19glhqtxhGjKeZFm3hUwt2q2sP3RJc0koVgG9A%2FlDtLcVA3K57llpRjsn2zvOiqAFoAAXj6nn6t1YT%2BJhlcigZphSxPszpjQKQ5iIiIVF0zAz1Yi0pf%2BiaPfAOIz2M5015eVuGQfGaGAMPNNfgNd5l9reKZZdAL8GeDLXHhZs%2BKyJx5%2F9XLo6UDVp4vhzvyVnQUXUun2NQGRpAo1gdlLsw8JDEyQY6pgEEwNYZwGNh%2FsPB67p7ux%2BhUcmbp6Ppa56nkJn4KNQwMg%2B%2FT14tSxJAlaXJFeJPxMrITFCi9PkSknlhjDvAkuCwbNTHlN77yLwpxpFzZtm59IgySXA6BWcvEKFogOA1A34Ny4R%2FJr55CJgXRsIBuLDbDgt%2FN6TCl9%2BttBblLTGLOU2ogoOpCOrquWT%2BEOxIIJ5PEYrI0UrugaAGdMsV5xjOG%2B%2FKToKk&X-Amz-Signature=7d3eaaa301728ed7ea5b6fc36832c962cb3423c78a7fc8aa07e32357d1a66d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

