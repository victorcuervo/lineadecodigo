---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMZAFE6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICcK8aFHmGtBZfyNuNuc%2B%2Bov6h%2BPSN0r7uDMEjHOVLPbAiAFWEBvFUJYl5y%2BjoborcomlZuazvLuXrpLXywjl0jL7Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMR%2F3ZW%2BBQ1BJoOpKEKtwDc1cHnAMN8P4mubJt5vTPTt2AbwjZD5WofK%2FNmq4Hrc4ig4lpJvVYTu%2BaFyZnIQIF4OHstY8nBTTczHOX%2FLJJSdUWUICT%2FagXLMhGMx8QQazZofB%2B6FzXfzL%2BVPW8Y%2BbEIJjvMdWUivYll4orDa2mq80J%2B9vsr69kvet0zSb46927Q%2FPTPzVwGSoSH262lN4l0Y8v73PKm0g%2FJamCyWFjWrRqB14Le3hj7t%2BCgwZdPkG2fHEZb8GGQqUZ0AmBB2bSmB9bna3rfHKwj1HBpCPOxA7ryKCmLcrrPvu1o%2F2Ze1y%2BWrqTDHMToDOGd9%2Fo8Ve2UcQQRf0UifV5GnUo1Tw0q%2F6VDLiVfGsQmFkkHs7dCW7cQhxU1WsmMCMa7M7D02WT4agib9gNvKbC%2F5yxmwIiwYDLAVi4g%2BGnM5rWk0Tu9F%2BPn7u5h7mIelHn1jiIlUPYY%2BfPyHjJKdbrBCBsqLB8rPko0OpImm2GTVxPsjuYrYisV2gs%2BStKc6T9xhq4Egf1vFPhvvEVkg0t4kDhdHMQ2OBi0IhIubUMOJEZ%2B3SxjysOkqWefP5%2FVXxRNOp1pWybouTeQvPcY0MLS1fitURZSTnp606lBOPMgDIGaZAM2%2Flt19G%2B07tOXqr%2FGpcwl6LGyQY6pgHb9LbqW7b7D%2FLhzKSKUbT9DRZn5fwfAPQW3JbxOB0g74j25uquFy6IyEyR5qtJVR%2FnuUWuahuOExxGLw2KTB30dE1c4VDV7JIHGhueYu0h3TWw8YEkOHkoqSsA%2FYQkTpC7szqSoHVxCbf%2FI2uY%2BH4P7VxOCLAZBxYBqFkLskp40w6o9oGUn%2Fo7y%2BnAH53G8ZbTD3wn5kc789HyIbuF51TCWvk3sQvo&X-Amz-Signature=2663cf0eaa83ebfda6e789f572e877bf598c7f5b92bd473f2093d0139aa9b405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

