---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLL6ZJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAfQwInBQlcgY83%2BQaL2RFeLNI1HZJvBcYcqlsdDmEmWAiBXaxuijD3VCsTMpSYQunV7LR0LqQ4O1hwTI%2FdqUTLFkyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMpr5p0hFYTyBOQOK0KtwDl59r63TZzXucuPntbb7MInshDuBkj2PzCavQ0Jg%2BarR%2FMY%2FO%2FWPsGKWFkjAIeLznvZN8hQrSfMcTQp74vxLB5YOc4t6CLXHrJuuJfL7fv44GEk74az4eiJvlxJLokH4GfSO9Es5t928lfn8UkMd4lg5uw5uf7sb5oE741HBsxmn5Iv3cddOB1FX5AbFlZHVunJmYT1jDPKVfeNVoPGDWhCxdHyz9sH3qikQ37UmVWSihXWH9u7SdrDwJ%2FceeY%2BiVwYCMqN7X29yn%2BWglVGvEII%2Fi7OyZlI1YAwfQs2jg%2By2JvBpwK%2F6Y5tmRK%2FUaVKjUXir5q%2BdXuZycqhI5yp3p9qN%2FaldB78Hu9ifxzJIEO3Wbfi%2FpotS8ISw%2BkAmZ5i4K%2Fqy%2BZOMmEPTt9B%2Bo8JAAPTlhMfifpR2XvE2Kw0fKlkUAQCSsZscdvEp%2B9k0G2YyIcbbLaSSBmfVMCICSLLACBlmzwPXKquddm9eTMOp6EG4i%2FwzIFn4tBEDeCb691T2KyisFSxVogM2ax%2B8brxUhTfnJ2oLpWN7qF27uTxmnxEaixNlX5fco%2F2lCPZewy5hFSEyfGrT7nT%2BcsDFdpIzCh%2BxqQzfHV0beYp3Sz5qKcL9eakr3Sf8hdRRkYQoww4bFyQY6pgF4hevIUqNd7MZkduBsLnE1DOg5H3yRGVMw8NEwj6hz1RkChSZ%2BhYWhBjcRtpo15RT%2BW6x409Tu4YqluYIrzTjx5oON85ti8o7iKUoMkogv%2BECGzze3ECgJr6IB2MH%2BthFPmLvxeN6aCeW%2B6IJTW%2F6DvCHVDy8ZyuuCdEfqsRJLDLgEVy8BGPCoVXyTH5X2PRyDUR5rnEBWrC7oYuI%2B8PwMhHZtanLG&X-Amz-Signature=8d98876f557ca70ecd7a31d08aed5b8b17880763718028606dccefa9da377dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

