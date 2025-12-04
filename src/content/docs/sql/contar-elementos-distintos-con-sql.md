---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIX6FHGF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHTUrfAnhCKbCseWtvlLP9G1lw1IpZFM8nP%2B%2FPTXYPqDAiEA303fv6diYhKdXSOZc7KYT5Uu1llJk1tKayHYT8Xei0Iq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPgRuqcZB%2FN%2FGBCJqyrcAxN4XFXa4ZNjjETGF6ZZQTB7MeDaeAGPfrv8vWzbn%2F3t8MblWgzEQOwxNOPKv%2Bbhdzrc9du%2FfgR6ma2Ezo3U50%2BPAxn7xtxNYnZnv4U7d6VuwCjTdtwySGXjawPLXBoJHIXezFKPNTXbsW03VIE9JssCDrNpON2%2BFh7NKK5ovyE6%2F732jHVwdKcuSLeivgGYiPcUq39%2BMaQNm1CnzjXWaEWOeta4xWUoAN%2BUC8NTeU4owl7A1%2BeExKOLz8Nlk%2FO1p%2FODj08u%2FtAEAMYSZkW32N1IZ4AD800xopoP1ERMXu0zYphFTmGlHqGLax5UQstMxDbfukKb0caxApbszTqgv%2BV9oLjD1Ha3OGX9%2BUs0ZAY7yCkezNbjZxVuuIwhjp1WeRFGClrGXuTZWruo73D2p0%2BrSU%2BT8zDnZqHQHIfaYJCP%2BkPx5gkJJaCYaiNIwJqpAQM8u3mHyt9l0iBiCnIDsLTLLeGpyIyHv2vzhnrvoK1bDdhQrbWf1QEtsEiQILv45%2FWz9IlLyMK0JdRNRFqx0l361qqo8LB7%2B1T%2BLTZzfwT01cI4hyZOautLN6BMIT%2FExaodUVRSsyPET6lFmBhVDd9jqFJrj3hO%2BuPiXv6U1hfyjLlvMzb0Xm2Zu%2BlpMPfmxckGOqUB8j5epUKX%2BY22xD%2BdNoi3sZ4HcIO3ZDw13edGQvLhPnjLfz7x0ncTSO8QxGtU3YnZaykODBbTyngVMFojmNVCpCxZgISxlZ98YqT6s1PZP2W28tKp7kf5dkUN%2B2BaXbLiX0TRsMGbcdHvztDjLnKKdzKcaRkfnzRBaryGiY8ItuJuW1YbImw1QW1w0JoNvA0Uk35NVouah6aXwpp8vs38KZxZEHgz&X-Amz-Signature=871f34fbc89894312d3503452aefc16619b9a0291b1a4e45624d805468d5fa4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

