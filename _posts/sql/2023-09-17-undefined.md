---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37V7QDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEOLqHzy4Dzp0rsjok9aPWPKjXGjVbpoOhj3AXNw2cHOAiEAvo%2BvdDPX0suCpH%2Bdt3pHpzNsP5lMMMyt16CFHicnCVgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCgDhb8AKDTz2MNyqyrcAx8vFaaqI8p1MNKdVgHN2lLds1BdShemJj3HgZk0X5r8JuiVc4EwQRKiIR8o4cohgAdMcu25crh8zwsho9vUbv6vkMXWfQTSNI5KO%2FYstsNMe1yNu6HFx2Ry1YPFhIE9fEGeh0PGtmwfZ446JnhMYtAlAuoPYPJy%2BiZWgl0vx4jw52GEWloNbT%2FPnLnuCLejf%2BTOUh3JpNy%2FCHoHWF66%2FDeaqvbIvL3at6dpZ3Y4c9itmIjVgkAcRxqI4Ns6E0Mfq%2F%2Fo8zXs0ognd3pE1A2lIE4F4qFttWmXgX2cDbNrWROM3m19dCoMJUDnuCM6zMf%2FRFezIJ3TFF7DGNGVOvGA3dakGc5TTWuCha5MlccqPy29IqeuMUQliBrrjshYZx13xV1CoSLRD33LUgGC3cbA9YPElKia77UERE1vdIS5Xu%2F6zS1HjQEK83vJFEMpl8PD1SZIh1LJJCWudhwqnorJZGNXEfDkYlmGb3w3tKpPan4vyINDneIE7NwqPiryKDeyVDon1MxD8hDUEto8298dD31KLk66g8%2BxOxV%2FiE2F3VHKPkKtHJ3mVPgoBT8IibCTsz9e0t37zeZEIpYSfQ0fq%2B4lKo%2FL2PP8QR7kRiUhNbT0XhsdG%2FWD4vtInQtMMIjWv8kGOqUBVcjNs3EAXZr3EnQEOQO6IVRTjaDIL52%2BBPdBTIrKA0GBLf7aWxzC%2BMcAkY5lqOyLzGFv48jH81qbDXlmpjerzcqboL2%2FQrijRk7nrP0OsWLgnrW4nbUwyGF5g%2F9NhWo%2BhgggA9Ebqn2x%2FgYuJrkPTb6OLrKd8johl%2BtsmJuOD%2F2UC94zsbrmLBffokPTOSg%2FYbWZGKAHzFj%2BzQJdqOPNhl7wPCvO&X-Amz-Signature=969647752d5b3341f56661e841d1baf5453e2206615d810699f5e7d095ced6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

