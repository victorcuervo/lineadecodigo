---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMABFEDU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDdX8KlpRF7%2BDe033wYgNbWiO78%2BjM5iO1W%2F2VtmprcqwIgGKUl0SgbdKaNUjksueowqP8I8n8BEmRjTjBXrYB%2F36Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGpDZZtNtQGl1jsjjyrcA7OrHmqudMdXko2PdsRs8L3mdhvT%2BYTw8L1YJMxfKjFWauyPE%2BDWRsdw7m9OWaRHGy%2BnODlzolk%2BNoOgLMzLfCIaHN9wDk5Jb0VR9l1GXF61zrMdV8E9%2BLYQuspO7nS2s3UTSYvai45OKbPCq5TiSsM2F0BC57D914iSStaJz3e75wid7JbQGYEeuJT9Kgc7aE27ctOr7gK19bUdZpu4r%2FsBW9estFvmdv8r5lfPZ0xRhYdlVy9TdHIPwEIp6ZJnCQKuJs7nPPYcDMbNgEUHzwpd%2B9veCrHlP6YU88Znw3E6NIs6FhGDRI%2BYfdSnAC00tXY3zvoulX1S%2BpOOFvawVG3fk1tKZy6cF98nmZ6D98xgzcOAd%2B6r7qOOgYhq2E1JurfL3Od6upi8PyuPCv9xj6UmLBbBUBYxaxU3UO7taej2ZU965%2F%2FIk6abEMJdNFyyGDZgSUDRmlwmhLHr0PChtYS7Vv3ip%2F%2BMv2X5dpAAJUE17mTh3aT3ua3rmpYDgED6We2tmI4%2BB8%2FVoDDU2rnatGDOFKwGiPe%2B0KScIhZhk%2FWjrL1qwbXhQmqn0lKdz7vgxPQiFWmiFonxnWeMw2A4%2BxDh0361a9QXpqGsn%2BEDCVamuJNoSKiNhlrqEKCFMIroxMkGOqUBDal264yrZwVG8vtJBW%2F2KKRmcZ0A28381LDn5BpalQF%2FGYrhroSCwKxl3KX%2B1cqzDFANO0%2BCEL2MwaVotiOnYZCJWBTG2ix3dpZNJmQV3unF3i8X%2FtKLSi7Ry42g4y4IfS25Vpd74AuEpKnWRMsMVcX42L3dmi%2BnkCoeYb05xdvAYGxQTHpGh8IzQ1ENnJVVB1EWI%2BgmV6FKIGwvc5gIFoo9EUJN&X-Amz-Signature=f29663d4079a1ac58ed43e68e6e6148ee775f5860b655275fd01b6af75474360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

