---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR4ZZ625%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDADzy169M5bCi3ug%2Ff%2BZwc5kbq8jzHOpjKipTQjoVAgwIgaaIp%2BfO4G%2B9kYBPGpj4d98Mus5OGEeHh9yaQt%2BDzca0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKcbuy3GFuKi2e37CSrcA0n7uzQDl8ph7wa0QSuLlJo1NhtwZj9QWmVfF5ay1LsHt8E%2Fi47U71BQmK3DC8tA8wEFebyLp17lmrwRjQcJtHMP%2FJwECybdAK4k7ukkRZYWxCSDotDBkCeP7gOFkWpPLpBXnq%2BKqcUwIwCAnvdeHOBbvmm2U5SNuYlypm2MXvTm7wvS%2BxnfKwTex1asg9bsQAVTDd%2BeiKxi2bsx3NcEhrwW0Y8n95nVV62ksV14tUC4LQaRFRaJ2IAnyJcBO5nM%2B9PXga0RGMNc%2F%2FDESG995mpuHqDeUuRGH8QwMj17zq%2F6AV3EW7NSFYc59voVWAQlrPt%2FFXpg4wRe3YHK5xli5k3GNxsB%2FD4FYWJPTPW%2FoaZsf0MNmdhevE3q3m0koSxC1ovTsoDLHZZr5wVA79Z7w7ofiIH2%2BI8aTFIFU6yS8niHpxclP3bZNecK2ng8DpIGpLFIbjXWkYw9cC8HZSeM%2F02TwchUGZYIGWjq7C9iSF%2Bx4Sf4SCItVhE%2FWBWry1B55DpfYbKQ5APuYZs7Fk%2FhcV5D0UKHv0iZsksXg5KQd1ayyUqyTJbQqPAtTF1v%2BqWwYUp78VCMWIrqa%2B3mXmXzwgOWaZjTqqzQ1nVVLhSLStcrVgU13stjHORWhQ9aML2RxMkGOqUBP%2FhrhUafmTlv1rYfXwPF%2B1HqRSvwECbm830SNmJPZWXCuBjKluZ6QRTS9vNgIY%2BWBA5QT55pG%2BQRTRHLqM09VERCM2cP9eTdVSoZ%2B2cLNMrUxmQo%2BupeDVi8SVnQeseiUHkeRuu0y0QvWcpDCEHyqB3trbLxcfWcnV7FSyxehPG%2BRkn4mNN1OWHOTNLVY7jNAHqgcm1PHWQ6O8a0bmm%2Fc7z95wZM&X-Amz-Signature=38adb96c3a4bd98f993a94f1d865bd531ed8a59b486f557941bc0c2a6b4594e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

