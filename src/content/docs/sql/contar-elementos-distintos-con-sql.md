---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6XKWYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHdolKti1mmsKOUZM5dQBF4yJyHO6tAKilZKkbleCkfDAiBmit1bl%2BCTHOjIIJU65udWn3IyidiOYSIQTaN32uuFHSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMmLTO8HY0cROviLIJKtwDUVQ9IW8XCIZMb8NOgOs%2FjX6jaVMfcUBKVkP0qPV11xntZSAT4v8u53BwACXwrow1FMXolMlrQIZf8CTXbIyGCOXXc9jOinnQe9pMcabyP2Wfakvz2%2BFcy88Sklt60%2Fezg03nuzvGh068odc2A3Czvv7n8RL1xTBz5bINf86350xkxuT7jakO7rCRNIbXlD0NIuMwYaIQY%2FdRP40jL7G6NAsKPF6rJeWP1vGVogkak%2Bku1snzrtzGBYIBEmUdKAro2su0hyONeGbi8XTU8ozxSJTX7smjAz01KF9OLYA25pcRhOrpJ6qaDNhb8uFeFxOLf07i2Y8NV67ECmqAiHNbXggIyktzcng7Q%2Fd%2FFYfCqCCdsGnqpEkq6QY51kp4hxCLy6fw9aa0MuuTj5hPOpbtl5QkPY3CJnl8tdxaOPnsTPZFUIB4LZKC%2BIvlXI%2BlICTpQuVpzeUJoTuNbjPEn5OSbmWAhz4kBE0k7fm3VC%2B0lBBQ77nIJ%2BFM7m9Uds558opw%2BEXuU5dfeQV6mLx7vMxK%2FHnjZaD0jzdepabQ6ejuNvhSHlSqdQMMijR0rrAWdNVW7nkJky2NuflKhxsvU34pTnENLqPltDXX%2FW9srHlCV8kkAmn96CHQdcDK7HkwpqHGyQY6pgH6aXwrqvrncvdAQd1ZLQsUuuLMrGlHVte4aFBPf%2FD9wtwXN2ngUgP2biuFP4tB8VQBNsnjWjje3%2FA0CpNxQ0g6Hqp83B8OzeCEi4ZjX%2BOfEF2Oy3%2BXitDaFD2YSeaeCit8wAQ3IP6fo2ghvcc5b07gBn%2BUkM1mg541osDd5yDtrE63iWXnldAS6bjVxYZsalADV3hNq7PmIDhE9akY07vznWd6oBMG&X-Amz-Signature=2a584fffc1045c4889fc35a64db6ebcc6bfa415123d4620b8e3051c948a5eebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

