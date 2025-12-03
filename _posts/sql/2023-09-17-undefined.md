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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQGL6EF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDqhCR4JIQ77H8Qbo8Tfj%2BAj%2BOtf%2B2j6IJpfOEx5seLgAiEA0KF3mu%2FuiTF81IK6RV%2BiW959JGagNtmkdZbTB%2Bp2cAkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF9Bu6fDlGUxt84fuircAz3B4dnf%2Bkuv0zZ9N1pTC1kqO%2BaiEIE25kTAjicaDfuRAm44JVtRIE2dz5PtmpUQtFP9AUi33LKhZsSArWZ3O6cERXD4aGTjfl4rlgIoTglaBh3a4%2Bbs5OGTami5RCWbAEDHfJQYyAw4BfhNpb6ixdBgAvF7Tfkp7GoVQsm%2BZrG5aOidV01n9A7ffPVtXDD3LEoVBDXmb%2F9jnfOOoTvkp%2Be2kCSAPA2SlBEqBWT13cPtzuHqomudSBBJrxktsjSx64rrYMF%2BS2rRtkLDVqiqTcm7aKnQqhKY%2FslOiv2tDVoMhX3l9KvICsxaS20bUG%2BCMTZXW73CkWYGKQfgylBnfOKiXsnKD0nx7Njf0ridpCBlvG35GQ1DgRRWsS%2FpnYNERVFyYqWhI7SFraURNZ%2Bv9stQWG6wbrq27qLc%2BZS%2FvDe6KW7mTeYgZ81hQMctXrcT6rcWxSqTYFVVtomAiNlswqosAMt70W8%2BGd0xbiIZdiug48KxImBqn7Ur3lfKWhluuGMh5STvBfxjDDW3cfr5HgR1lztTj2En3HLYl9l1m%2B16bWT0p%2BXc4f3KlnMjOWwnMQ3v5hKSYmIr0wW8czftzdH0EzuP%2FDloVJpK4%2FL9PbbhwUAhZUBYcYyBw6dkMLnBwckGOqUBB%2BvsiW2FNq6PsPV7xYP2xftk1JY3YQCjD6qwlAc0W9MQZR%2BpV0h8noi0%2FYygWmFb%2BHZCcYL5%2Bq6%2FJ0yrPOZXNXimLXym%2Bbjd1epivZxoYo2NpIcDewefkxAIQSc3%2F24%2F8RHW368x07s%2F7wmnwyuXEgwcS4a45xnf4uvwa37QhXKPo9qxohNkLbZNv%2BuWlj1X5GXeua%2FIjImuqRQEAysOdrv%2BmWoe&X-Amz-Signature=8805f03fd5ce561721cc2e97456b9621d2dc7df275480abc2df0ef5af54ea364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

