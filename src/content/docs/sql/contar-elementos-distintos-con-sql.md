---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KQSDQK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCeADdrcD8e%2BINdZdhBkUGZGYHJqly3wLHjY9AeJbPoOgIhANvcpCfn0cXxKs%2BVrWJ44%2FxCxbGIU6CuXiCVMeMfXJLcKv8DCDsQABoMNjM3NDIzMTgzODA1IgxiawMm%2BBNPGqM4204q3AMiyexQvxSVAI94wZHo%2BpG0NzAIEn82w5n5NfASq7wYFF2PWeVCANsqMHAhVPIFXeniKYzI63AaQ4rpu2hNkCh4lOf9ekv%2FAQkIhS9XJ8N7lqcU7LqU2ronpYDzYuxfVqkBNExYAhw8mT%2BJ0F9aMDMkL2NZaNeC0W8tkt3i2gCfqR3mhA2SoejIQwjTQSR93oOkRsDQBqHBRAgoVRcb2K48rWHhc9bnNHgDRWL9fe326EEfYjE%2Fj04DORpYn%2Fs%2B0gXWxggNhYWSgmTP2Df0cLRbsjEznq4ymx%2FQV6nl%2BlLvUM1tyUytaQE4DQ0Uj5RoQmSAAOQbbjNPxXN0XVQXvBt0IyA3LS5A8L3rmCicEhSEdDEA8fmxoZ79DLXoYbooXFyJB47KJbIFCGvfvw4GqvRYs5OrZmyGqYsACqZ3nsN1qciqToNJDdTpdMMCCBv5LIw6XkY%2BGsmvJX7Xq0vqG%2BSKtsl2DmRueIuxQKsr9eO39H8DYTnP8OiA5%2FN6SKY6TYBz59HeYFO%2Fm5hc5Dc800DEqOK%2FKSYWSaWpztKgYLvfnlwO2Hcx1h0X34%2FNwbi1X4ZsXYLZgyuNNs2L3b1TWmcYshZ0P5F700WB1S9PGanNfoLFaWeohgn8lV%2FhDzC51MPJBjqkAUSyuR9vjjg538JoAN%2FUKxlAyb8HjxPEjyr7kopG0sL2tvti16IQ1QCS7rbHO4iyDhi0eSuga9R2nyCUtAPp0OBqSNXk73lNaG5ZL60L5zt9oEKBk2HCQMrK9ruPIKNYNGwg2U%2BYQ0c8T0GintwRxCoIt7w%2Fr%2FOchYCkQ113OcFvS63can2zypkVuT0NAzeWoyC61yMbJgx5BNyzazlFfGETdxjY&X-Amz-Signature=8979889c63254747b787375584aa327dbcec96e60714a34d40b1ea8a85bb57ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

