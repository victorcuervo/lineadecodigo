---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYHIPGWL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICcOu9MzUT0%2FdbSDn2xzMEQ7OKTG7wn5%2BBYGY9TSOku4AiBCbwpU%2Fe8hF%2FMhD45QtHTVMlQR%2FN2Ay2fMaK00bZ7jZyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMeNXP%2B%2BiNGl1DNaXhKtwDdirXcitmURlrMjvwfAoW8nBgQAo42oiZdL3bkAvBctqZwXYl4O9p5SwFh%2BA5P6Vo3Cu%2BcDA9ig1Fp%2BlGvPk8Fbtub3FLD%2BFd0%2BKUp3AwH6LrMVbokH%2BUDLkVs3o7CqB%2B0Fj8vPC2HEBBiUyC6bhMfKswlMwWw1Y72gjsfZnDKaRzcKbcr9XJKY3dJFfDz2DxWl5dHKsBn48%2FG0ZkqtHQAVDtrpecB%2BziSAQ%2FhcTtI4U9trTsX%2B5Z%2FrHCrhfmZeAHc1qcj%2BLSjFjCLZ9GVtt395lIhhAuc1W%2BHRL2DY8DyT3QHSGYFtrOYUMP1leGb4%2FPu0WfLArHMtb2pcMMZapD7VhcPEDGKLVGgPkwvswjPSsvrYtvESG7efm%2BSnieMdjyKgnKemeDYufpuW86RUN%2BbhaB5YjFQQ0oWpWsbFAhE9AP3e2qPt6jaCxdJCzri8nx8AvFlKZn%2FAUNFa%2F0YbfUyBgusLzlP8FzmRSyCqIXY9grgA%2FS%2FjxDOyGIZPNOzZYe6BlUFV4QY5zVbdxcpiGAK1KjCBQcLXAWp35lCO9qCweL6KtGjUEtgbV9eo0cGMJ2o77FQ15E7whL5CrGnlG4Gici3K23uI9QWF9LnrqiyFb3omUVyJcTqFWoku8wspa%2ByQY6pgEmNa4ScY18wzT1wGCqFBTJRl5QYE5yOCSsiJtg2ei%2BpkYR8UOKzZVADN6vwcZwrJmcz6uEHd%2BpSadZ2s88J6pTuZelkeYN%2BuTngIcILwCX6GdfKkZPPoGmoW0lCf0UYucY8nq2YSQCwRdkFfFAxtqZVFLsZmGY%2FNyZHgUycgRFOUHgO4kQRJ5zOi62l3oaq%2BzrrBKZ6TYKPcb1U0i5%2F3D8xw14pX7%2B&X-Amz-Signature=e1272b0122d802d47482382df91b914d3674d3f3f8391128ab340cf02a87e037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

