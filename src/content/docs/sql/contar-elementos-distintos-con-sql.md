---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLKTXPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD3x48SqYvyenJy3N8WiOLQtuOJ3%2BTMNUCqmMRgFkN51AIgY87jIYRWJ3ElZBjRclhjkYeo9iRzVIYmCkZ9WeJK3Y0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEckkDf29nRjVgmhcSrcAxTntILcjFvbEf8S8AvkbstSNDrwXgXIIgyW2ToKGBMUsrE2cr%2FS2yb8EBnjbaCBAHtYnRoGqOclQhbs1aPUWga%2Fw%2B2nVi8eA5ZdqkO706x0QpRtpGhZV9A3FIZve2mUx9Ry9BafC7ZHqzD2QmSNm0QAPDrI7ZlftQ57seVfm402dh2jh09J3lXjAE4pw92dnRWF9kZeaTiMKE3y7uzIrbZ7n4hK0LiE5H2PJy%2FQclqO8i2g6E10mB%2BhNCbvcMBmdB0qX490g6qh577MVblDZ5twZZRZwS8wctbqSC7PEDCgnFfx6uJXyKzBo%2FB4Nzbpt0SO8z3lgWC%2BstbaIUUK1R6JxA6zBdJNirqicgYL8%2BITnrXIm%2B4haoMnML9rlcC0lFUAlNORnek%2BRMvEW4pxcAEoNBLJmU2AZ0VXOVxFiu6SXJ5hfPl028kyUMrc8Vn0jtyGxH019HWFkPBTz%2Bo%2F%2Bp635ckzFXaG%2BsuUxYSs89iay9Y14IwjePEL7So0RsPVWdvTWsHQNZl6A52sfJ2PXqyk8%2BpuWUHnZhTPrD%2BqrWhaSD%2Bl8ygHMzDEKZraEQDSS0hZMGeby1%2F7CYcrS1vTkT2k0V2uGsEV1c7bw88T2wT8uVwftiAMAJMNpEQ2MJeGxckGOqUBVvZaj2yN9ums9CFR3RE11EhBdmyGNVCGGrrgdximx5KQjxDGj4CW%2BXrepkHu5gIx1FkDvmGR7YIWuxG9Nx1gG%2Bezg6E620%2B4EHlJxq%2BEQ3u3TCrzYr0G36C%2Br08X3yd4XbFGPiW2sb1iu5M45a1eRUiwZR%2BM%2B3IOFrVZgRvaXhZGrWhLyB2wG7hkWnsnDj%2BXo4ap6AXogdFk5neUhVQ8MwPf%2BztI&X-Amz-Signature=60d7b76037f6f25d76d3ae3dfad32979bf7fde664cae9be50d8ac7e2e1aa7eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

