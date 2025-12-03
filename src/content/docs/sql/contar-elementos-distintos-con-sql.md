---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JR5OSZJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHOx48k82y7ssDuIzyL5phh%2FQf%2FWGAJpCCTjopsBoDM8AiEAsCBDot8qV6fCtRYnEoejm3XXLFHZB1Do469Q1jRUPEsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNG9g6F2u8xkzlocQCrcAxxEbDNznDfa%2B%2BuLIZf%2F8A3CMrtyaBtju7614XNDBzRPUp3Zf4CoVqQG%2B0Oy8wRwkpuQPKcplwDLB2PT1Y5ukp3LgXprLwlT59VkXNlsrDn%2Fh%2F9LSrQKNGH%2BE1W5bfG8M5AWVNcdZDgRqY7tTBCYHZZkQSfh4l4IxHCZgYOQScqaUb%2BRZgO9VYV5%2FYhf0zI6xfm4%2FN0np9LapDrq5Hv2dHRlB21xyjxhCbVTrRa%2BXWHA3igz4FNCc9Bx7vv95xSM%2FLztW5e97XRdcwU%2FyEu1ZnJc2DzByV021KpXFFT0vquMcQxHY8vj0yhNxttlkVtQLTuTfznrYFPst0oQx5GqZG0O4Zoetr0MAP0fScMYR7C8akZU%2FGBhCZL16M9nd7gCSB1yyxnd4%2FHW6ymTOeD6Ug9h7Y4aPHlXGAU3sO9v3srTre%2FW3iJOWtQaIyMVs3%2BcbniD4oTsUIRVx7BqF2aARffso6tJzHMXL%2BwhtQVqlVO%2B4vEN2HVmNzYG3XcVn7qVoVWCnhFljBq2NZAh7L8f2%2B%2FS5XRcdLqH%2FhXJ9MrJXORFn8anmwP2hK7bm%2FzLR7b52G5gwce8gGItnr8O36schVNHGKyS0XQM4537PziMptd5hr3nkC1udhXBPMmOMJHdwskGOqUBPxKdp6v7BHFlUn%2Fswy9l9dnBOSae%2FBp%2BXxnd%2BFFdg%2FgI1Hy0N5autopR6sX18u9CaqCSuEgqThiqLetuqVDu3Ai1WDNYRiScOWh%2FtX9B6ojRZpv0SDlt%2B2lLmgEsKYqKkScYoDjz26GaQ0Y%2BkXA4%2F0uQ%2FuCPAvfoASQZgOqxbC2OtPC%2BtxcVsgusyIkvqkwpya%2BYuRL8uwMZVY%2BM%2F1CwpVIQYctr&X-Amz-Signature=8379fbe46385b59e040f3f36bff3827550e9eed98451459ed7c4b14c06a8d743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

