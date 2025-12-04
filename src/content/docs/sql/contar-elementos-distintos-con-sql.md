---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7S632B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ1Ae%2BMh%2FlcZ7DmZHjsDljpbowOxcbuIdxmqAeY%2BM1VAiEA27PXZeYlU%2BeGbJhKihoiCxECssiyZD%2F6BFnCrppSgkIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDN3cUl0UXHx53qUT6SrcA%2F0kNiGN7gfB6wCRMF3nVwSK2iGPGW1JMGAmnv0FBn9M5dA7tkIxSMqxBtZPUVooKWdT7oDgsZd7UiUKWRjq0%2BaDvTuACf%2FrBqVJvxhIKmtXDTtOK28Lk7wT5m8Nl2O%2Bd0B0fooj0VrMYaXMt7kdu3vJxNqDdaQ3GMcTkrbhb%2B5YAtyNK%2FsWpDe2cyb3XN98hbW9OrNt6T0y%2FyEWfq69dI8M2ZEIvsvbmh4dXE01O4XqUdgYDEgnGOfBSU3eUomLOCDgenkuYsMz16sj3U6PdYf1MGyEeplayBMIuVdQ0NtxIrvEJ27H63kj1U77j7V4tl1RK4iqoVBqO0suN1RuLYkeEKeiaYul%2F2iT6AbsawORj%2FJv7WIUJZHuxyFoavo0KKSZTPplots6JIoZpuXVlm2cR5mWa8wvwVtK%2FKeouIVtJ2y1c5EFzWmm8RzwB07FSTdEe6kqh7FuZRRlhJ7NLKYlab2ivyIKJQIr5XWhBCr5AMBHUMsFaUN2D7DilQWw3Pp4TiGEv6JJ0W2K5EID33xT3wAuqOmGazNprCTzONu6MeuRdCfz1oZT2SEfEmPfNUaAaEf393FNrFHglkq1tQQKISib4aiFVd3JTH7EUg6K9vDlV135ebIE2bLpMIPdxskGOqUB%2BoQmzd5TmLuCFzRvmBPYiKFrvaGPLYzK3lyPEHHx5zwcEywHr%2F%2BtuBLB1piEJKCnEC5osk%2BXvgcVkHuRi9rOalMd9WCifhXdJ82bufkxT%2FfkkakcNyyNahfIPbCe2QoPaWxvH2lJVOv9SRMl9MoFcsxzPSoBM0yBLF%2FdL0PiyfQDSy1RnfLxAw6sOV16TbhB5crvL%2Fi7HHiD%2Fr6c4hn52UpAo9bl&X-Amz-Signature=4f4a49adc23d924c265c4a4e35154b87c9f78325c54c75b3ea8c6d5d8c77a68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

