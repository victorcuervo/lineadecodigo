---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAN7RSM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEFP5CUJWRAKzKbQOvLKvsnkbxPpNMfj4cxJKFVAYinDAiEAgSLm6sAvfFmDq5VMZIfkVwkufYBhSQJN7EAZd5TLjFkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNLpdNRwAYvKJlUCaCrcAzzIxx6CvbUf47cq5LWxLS5UDo%2Bl%2BjaP37c6wutdPbunlYA1ezovfQofp9ANlxEDDzRv%2FYNrjfZfOwOCrWiPGU1Py0NSBpNyckI5m%2FvD2tZUtWvGkSS35g%2F7v6kuDn6vGOQoecQlT%2FAT6cwFWQ%2FGp%2BcqpnVV5QuoXPOSzANSgfjlB%2BhDT9Iujw4bNqb1%2BVoTL2r%2BSgagT8MpcKPU8iYVnJMdx9Abj%2Bo3HT4ik%2BvbhsHDLFxU1hQoR069NuTBp78i%2Fex7jNwppujrl8Ol%2Bf5y398UJtc7D%2BsMP9jh%2Bc07R1z2p9r8%2FMUul5hDn7w7I6IVv%2BouckkINhKyPGdpPrmWSrSCgiu5%2FJ6wvKyMlMloy3AaWIBdVgqJtrIMMONYv6zoXS66d446CcT2eJZZWUYvUpkGnS1hrkYMO3NNIw3RUtt%2Fi7NWwaZAyLKkEl3OL56kg%2BjcgsnMADT%2BGr9wngFAs1lNELiApSjjQq28YQXCBzoEFvhub3nAx0KQq4tBWn9PwgNcWUjoXBStkdpO0pGoanTkQPtC4CX8nP8uGiyf%2BWvFQsW%2BEqj8gV%2F7fK%2BlIHzxIf1PchhsSWH5Y1K3TGWHc%2BxMzBa%2BarG%2Fxboprnt03lm8TCWLU7eOA9ZJ1FqnMJ6GxckGOqUBRx3g5KGYfeG4VCm3wzXMDHECl0lMvh%2Ffyctfn4p22Uv6MFosgIWzXxW0dHEV9O6SG004xXMrD%2FQ8F4FoPuoNvLkWPAZbnY%2FEmghUC9TPE0fyxBeEaJQHSfTI6ooit6XlN9p8G9%2FdY1ulHhE%2FafYzdzFUpKFDxEKOqDIgqj4tfvEIZ14rB71s2V02yl%2FqH2J%2F6yeCKQrNuq1chZIlJAthGNXgU1NU&X-Amz-Signature=05b8f0524de30131361ddff2453a6af36055d52e046d749f99bcc9dd0ec459f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

