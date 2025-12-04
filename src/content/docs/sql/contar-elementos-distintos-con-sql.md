---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMXFHSV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDnTCEdm4AJMA6anHtt7KCxZ2r4EC3TPc99UX3gI1sviAiEA2tZeQ4sXyGfWpG7E7Z3yW00gWSPp8tRxuNZmD752s90q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEjepwuce2zI8j5AdyrcA9XTw%2FS6H2r%2BrGSMHDV4rTpLxb4%2BPTivE0QLV%2BcAv6QqSe5G3bqstKFWjoElDgIvScG%2FtWttZYuNEu%2BH87wuOaPQL9EQdzDPRjp2hy769BfzHdm25jJYxuBe4CNt6dfdHhphwgAJBPL0phSxT%2FLICoSXDTovv7pdlLPqB%2BiCHzXTboY6NjraV0TwGAkdL2xdh70dRIjnicauKZolaFGgzXygCz6sK60GU7iA5uwbCyF43WJhkZhsPF24Sw7ELGYKW1SWodm9uhP6TlWV%2FBnil8dIkWadxrK%2FMZt1lA%2BEmqzr%2F6q8IYOl%2FCqPYlaIv9LAB7o3pShqu82NYW4v3eKZVuD4q3rul%2B2UICbNSIDZNYMyB7AUgjIc%2BVVAsngJuI2s%2Fv8%2BsQ0OYuoXI6Z8OsWSWufTRvOEJDT7rbZ0QkiI5OxdOUT5SJPcI4P2%2BVoMy4azOalFwZXIP6cTu2ripbedUw%2Fw4skR29Vyh0v2RFnjDPybWrCCCPuTEc2jaCebXWMCsHKjL3oBODX4h5SAS%2BG0yIz9FAdIWKGx2OeoKNt6L4v13yd%2FnOmMbZ9tlVsv%2FRUMTbvFGlXFz%2BJvcCEnw6dN5NpaBZxnm2iC86bT579rWgQ9kMjnz9v0KNdX7MpbMM3KxMkGOqUB2WV1v86p5bkDbApFiAOuGSeVtSfV%2FMzdc3eAIZMBsSZVFlFGb4i9zF60LIvVufn16Qan%2F10mEHeqPt47OH1oRbh%2FbpgWRIh8lmcvDhg%2B6DCXmKWmDwlzT9tk4oOO0jS4lcA6rZprQxjLEgHgW7V8URYUsznMhTLsV6hFC%2FapfnSvkYylIfZ%2B7a6N0FHMuW%2Bx0bhcAXP4eZju0q8OyTcr42h%2FDezZ&X-Amz-Signature=612c64e974ccadc653e03240ef47240f5cf52de2fdf9b1953e8c287d0b6a0444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

