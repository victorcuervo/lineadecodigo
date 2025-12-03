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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URWTF5AJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEZW7Zh3gVrNgnfcQjCv%2FsH58Z8ga7hAvqfkMsY7LTIlAiEAwYySR2WWCquXKXKODb6jXZ29OPv1iGiUywjpGt%2FAi1Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNZOgcxz1GCgGGFrzSrcA0mGULM%2BJLBVFGAp8%2BNoKg%2BuScAH84jkgzqls5dn8O%2FE%2FHj360oJkxe9RQZ%2FBr4aLKirK8A%2FlNujuE1PBiyZnjkabrEzVT91JVQKyYufqZLHdnI3MTtOjaePllNyyF2gzityU9TEY%2FYUnso46Wn%2BH5LPoARCPScDxL7MZiOZZE6oG0CENsCVk2sGwmEBGtigZPLrhCjNIWjVO%2BOG5asCHoO3SfYJmgqF3ATAZ%2FfyETbjtOI5C8aem39Mas4llbcZdax71VqAQTzv%2BL%2F2qMgmpWewYn5ykZiVpqYQFwfFJGc7IvEwit4l0q6Jp0YPBiX2%2FIPpn508EoeCZiBRDweC5D91clogKmibBh%2Bg%2BT75Uf1Vc%2BGnpEBZ26Lqrgsv3lPHjXENNVBNRIqAodadbEmypne2lNSJ2gp6a5TyKqEaFWcwhDuuOwxbbjtd04%2Fo5EswHPIDyDNj3m2AG7Scfqs5m%2Fwl%2BxtW82U2LKVNeFPfuJsBBqXRf%2FdiaMexRCYV3Ue7nu%2BdnOW532t1PVJ4eMuNGIle403sd6H0E5Yv%2FhGKA2S84iIanJgT0lyncpqO%2BTujqK9e6CFWB0P34pEdpeBMXdLPFKYJZuekzGu4O6i%2BzLAffDZzt1XQ4SVoQijMMNvawckGOqUBnIXor5g2ypLMt3NDwkat88Aijk9qVJAuDRjjuJhgmzSrfZXQqj29mRGINmHp7mWnZrG0l%2FQpGqNh%2FeTaazlygyZwecTPWQCjvU6iBTpLJmVuoPcPG14uRrPK85iCuvgEeOkNVVQEte5pIpOBbJL5h%2BFpr0eLncMs7r8eneyfCKzr5NLmZ%2FwhbSprtl4be7jSzFMOBIUpKjcGwWAQa76eLv5YNk3B&X-Amz-Signature=0798ee79d55290fc807b4e876a584b808da0554e7123e4d8afd4939feda4dd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

