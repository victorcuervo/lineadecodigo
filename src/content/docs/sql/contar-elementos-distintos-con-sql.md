---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNJCUJW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCGsllJzpPrCs4ek85TAnizf9vxFDi1WUobzx1%2BmBPC2wIhAIyB%2Bx7G4fvNB8d%2FsrW0KT%2BaPD62LyHw08H5RbClIkzUKv8DCD0QABoMNjM3NDIzMTgzODA1Igxnxc%2BBfAWP4L5Vi3Mq3ANSP5VHHKdodDqjnUhmBwqc2cBcijiKFJOo%2Bka%2BtT0MeckiWwhgw02nsdSjBAQgfc1iidVM9ApomNuivrkmlGcpfJ12wk51bDqqpyJWM%2BykrLwxIGYH2QOYYq7%2Bl9VuTCryCKhaa2%2FPFAMesPfHldSwYqm%2Fmnyy8W6Vhb31X3pS8DFudwhivkyXpfYelntn%2BEAJz%2BSZu3wBWlDR4WkU2PnWjQBvYRVN%2Bm1wRVP5Ftg7beyj6RmQRV472OgxHnn%2B%2BYGxKvd%2Fi%2FIfGqrYFV1Hz3dQ6EM7COnhftGhuYRRv%2FK5fmcuPmM3mU01intaAxuLP170tQHNYA9B0xKhMpA%2B%2FYGQ4mXCjC70T%2BsD3wVakyH5wWO4j%2FbevMfSZw7703IpQg3RFFpFYjAUSgKcH2Z%2FcP9%2FEYStG4cdEZYw1gejNinXOE3wmDGib0tuOwBrtYKSEjaFIZQKruJFQpyUzxBxcAnHBPGx7yWF53Xt2w%2FvIxlTi3VTF1k%2B%2BpMx5cPr87Dv%2BSyandnPF45EsfLDKCXDPprjqgEQC2UBdaxEv0YAMRi1WNa6SlrhpOw1fEYqzMGoGdhtLBXNlztFf3aP5Z7y2irQSIu4UDJuD0NO8cm3p2k%2B3c4SG599sv%2FyCtkX3jCDkcTJBjqkAS%2FEuK7SD6rwocivNkrbAf3jFRkwkdXBKIyKUBI9IzXlSz%2BNUR4DSoVmxkOmKjuN70vlhjilIe4B3sT7NY3yiCla6k3qqnaMF5TSyqqg7OLrySFzlA8Y4zXeGg4Jhxu8Xydo3uxiKMneqiL8iTtgK6HBOABHl6wbVl6Q6btbLmTJsFPSJx3ds2edKwwYt6aIOK6J0DQePilCENtJYEbKxRA90a%2Be&X-Amz-Signature=54803cf67791cbfdce8529657f314788e6c4ec6b647c700a88c4a8cb62ed62ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

