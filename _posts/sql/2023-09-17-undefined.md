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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6NBWBZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDJVSW2lvBHXYIL%2Bn1MjG72%2BFUjJ3a0MDru4d4kcKKRbgIgP4d0LPOWnf%2FZILKquiumCbXPSKa5qa8sY2ePUQEMPpYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMvWnZXOGvkVlWC1YircA5dVLuhJMZ1UDM%2BLJIEbN%2BT5UK6DD5N9Z3LWxAEte3jbvEtSbZwHh3GlvkFpJrwstzlsR3bvWXE7gdpy6cw7fD9YlrTxqIJqssD01EcEodJ%2Fw9vqoLm6aY2t4AW%2FeBGz6SF720IOG4ZcUZl5tLwLK1vO2rJQRTUFPjaWOG55t9bTB%2FcMHMS1RxAciSpltz%2FQhc%2BCGsXNMV5k5ZXKBXQnsu7C511IXQ2pKMVKj6gIay1c3n%2B9Qh6uSuJzF2oYi86LXFuiau%2B2Ye4DxnEUTu5CTjONBsKtROkWxNTIq1zqbxOpa5TlVMa39Y9jgmBzY5%2Fz3afjmnTX0Qdob9P5HytI2lTVZPBORcBHsRrrydIXBH36YuMUpZosU1Sl2GzHh0TMkDMGp6ZvU2MayV5aAlQVjOpfehBnwsZOqZYilMzqG4JyAVZfyUrGHfWFRdZ1DPkgHxPpQ9ec%2B4s0cgBiseCFbVo4zU14vX1o0XvDh%2BzCEsK8jM9UdedQcClnqOibrtiHPdEF8xy2ROrSAWHiIagYkw7xwagL2QpoNrr317Bbvx86ELdW%2FSP8B7nLZaRU5NKvg%2F9exM8ozik%2BHtsJTeailIitTcmpgNQEkXrCeeVe601qdl8euP74v%2FbFqrn4MLzBwckGOqUBPRdXITzevMW4eGOdmr13sZ2lHZTE8JO42rqwAwlSFGb6rUPUVC172OmpHbLxEup%2BvOpHkN2DVUNJdjiAv88ez4Hhe2%2FooVmvfFOxuspox99LSgAFP9ZcKzAeikWqU1p4OMuSKn2niKoMKBLh1%2FsUmK1JyzJuP%2FZK8U%2BD5FcnMAiM5N4sD4pkWilDk2A0xTQ7vBsuKIKaksXSLDfzKewSfL%2Fwg8mn&X-Amz-Signature=55175b67d3218e92d1723ae26512c60d90a00af9aa99483304599c9074d219f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

