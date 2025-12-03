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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAI4JNA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDPpbByzbCrbU7SSATvWhiWSRFmz0x5U2QCNaYcVxALoQIhANVR6CKCbdSpHf4LS479mCmIo6L5pe4BJidjAAuals6HKv8DCC4QABoMNjM3NDIzMTgzODA1Igxy3acjxTjiEohPL7cq3AMh3vPS8POua250Z%2FcriGZQpPRF9vGLH5SrWWOde%2F4fdZZxlYFMiuDUdTwcmUYwNtnxrXiy86IpLGw6o6HfTey7TlgSDuK6boIEEM0da6xOVj%2BvlszYQ42YfUkgHwnYktoFBHusNrUH0nuk6JsImq%2F7aFf%2Foba6QL8zMBJRmyjdkJKHW6OB5wPhKXSTOghkk8fzuOX1QwuQIBBPNALQN%2F129jkOLhHKpsZ5HywjW0d77lOrAfjjuvrU%2F%2BqhB8VD8lvH0CorjGI2Ptw%2BuT6AOLTcUaJd8BNeE%2FC8ixHYyVcXWyHMBY%2Bfo%2FFEsp2g9fMAC64zDt8o3YilR0Is7rRyLJev86Vi3x7ybLpTb3%2FN4MgD01soV495r4%2BXVmSM5DUmz3hRHkz%2FI1CG1Y%2BbLsaoK1Yr6yrRC0GNxaB24VjdQvbWr5caI2PQwseTAkJHGZ7xTpxhDIGyetzLWtlL1J00HwaHNW3QfwmcQ%2FPDy%2BOUi96Qbd19WtbzNrtsFn0hYfD2%2B%2BB28kIPpJmVBkIV12xHdwRwIP%2FakPT7ID%2F3HhNKQ7aIpysNQ5BejlJz87vSCI%2BXmFo%2Fg8UCiqmc92bCoWTfe7eloW9YwWGaeObJXlQSRIIyUMnDTztqRE7%2BT3SygjCF6sDJBjqkAVfReuT1GXzuyfv1LEu7ULDavLSp1zBiYcYzU%2FYs5ZL1US9YANasHzv6XmDW3a5ULDnZUQ2QTFFaSOZhAx8%2FtNye%2FJfMXMD2XgcRciNd6cqIe9lWgo648P6oLn6R8sj4SBhBjPShNLspwbO4SHb4yByffBv0zH7jTenRTlgBjdaEK3AzZimwlNy47s6msN70kHdHJHYr1Kv40%2Bn%2FDr3zKcNxjQ8r&X-Amz-Signature=5293d3dcd635a963c44ef737aaba46783213ed0b814361b0a6f3336acfa486e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

