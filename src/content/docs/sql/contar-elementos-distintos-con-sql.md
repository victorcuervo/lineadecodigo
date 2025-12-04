---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIFXXXX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBA%2FU3S3HXmYX%2FxkV293NYuDRyRi4k%2BSZ3%2FHFSmZ%2F3QEAiEA06yuK0xDKQJesrOTBghLpwyFmgDO5uf4KtIJquqrHqwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDlROI6yx4L%2BxdLiqSrcA%2B%2FUQ0O6MzLLiZeGGAYvIH1MGO7S6oUz7xUFa8X%2BE8NEbfe8O%2FcFoElEe%2BhoRd5VSaOuO%2BkZagdY5mSAniwP07tUWeJpo4a%2Fh8avnFEKLlz2My%2BmTt6q0%2BXR45%2BYJG3ALV9uPhv9vBqfzSEa2k7AbBjQ%2FzVlphp4aAiUPdMyVh0BxKGEk2Nz%2FhMoY0wfi2gPmiZPe%2Bvu79I6PAsKhPuKUGc5AVlwo1RCm5DTPdiHrKWol%2FIcS6l2cqpZIemR%2FojIZv7VRZQ09HV1wDy8cXy5dL9tHbA7DixgI%2B8cupZv1FQ2VlxPHogOsnEDnnEg9TqUxF%2FWQJva9YclC8dvNWTPBVT8XWX8C4fTZy3BcgWIf4%2B6Fnw%2BkOIu4NasOv2Yoi8x1Rj1GJ0ZmSIaueq8kexa%2BmiLp5rC7V9zXN6xLPfSMdP9OvPWjzK1uhBMiJJnuamtlebtW7F0ah94%2BUrHEnp%2BzP%2FCKPs37Bulg0c6nGpwVesaMNE%2BL9nWpZnhm2EdpCz8g8dhEB%2FML1AAo8cpkrncBQ7y08Nxg6WRyZ%2BWMI4flf70cC%2BHfgF1Z1Uk9kfyaXVec90wTzaOPtO7YpfpZygfPC9nHAUOR31zhdtOo8emRB0rs7hW6YIGDTwt9L6hMKfzw8kGOqUBmHQoM5FJ%2BnmuhB6qe4kiOocISjbB5OOqqRmsYf%2FicDMUoYhOBCsT9JMpsgsHEMiUOaQUqVh2lLcl4%2F9oaKYL2M3mNZMvqtY%2FgL9i3SskBW32SOzy%2BbBuvGPoMdJ9BOD0yNpAsf2hnKvTw3u9CQcfiS5rnzoCPL1HMgfH5WfZFQ3jdwelXCSz%2F6v%2BLKmj1eSUh80pyhGLF517WZQQW%2Fa5CfX71cXb&X-Amz-Signature=f537f5eac99401c2468b777913cb2792615edb1bcf8c58604f5f9be30701ad01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

