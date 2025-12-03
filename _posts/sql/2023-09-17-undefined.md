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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637PGWCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDIL4qWScuDyuLtxhgWe0o9c5INLnej9m8pM5r9hQUaUwIgU0TLKrSbHjzvWD60sFgKqp1Vl%2BdQ%2FuXEHCkIhjAWslcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLNdSqjUz0EMQt1RiircAx7OgaO3MPRJrwVmIlpMg96DCjrQjHN7EximzGHZj%2FDgFtTDoNbmbUrJ8HVxc12ArnByzLKR2MrQEV72psku4pT7xRwM2Ol%2Bxxhf88D4VGFalcDlxiOkbiw63E4dCejdFHEkP%2FcwXQDlS85dXU4Ck8yNFlCZF13w1FKa88d3UdWBKD9ftrPkFBzInHmUPxOLQf1Ch8z4YI35wWAp%2Fnj80UvrvfcuJJXmEBL%2Btqd1n8niy3eV0FtsWxndK48d5cBYdYklN7sAeJAkV2%2BcxK65JfOlz9YszXewEpZAJvg%2BaJi1z3XkZ%2FF3p69tLOm8P4TCAfZ7si8XDFQDiTKVGuOGAo8wt2Wl8wiet3tI8wlAhATjlX2z%2BauEvkzF%2BX%2FJM2fH1UkbcFX5CK3esx40MhYPw6tKAfYMo95A3JNubM7fZHvgx9hLcdN3cHmlJ60LCeWOjh6l0nQBpNF1yP0ZPkWsUDzmAzzkL6BKW9FGr3V8Z7OcrL8R31HdG60hwY%2Bo1K9LRiVWIcNDn8SxDStiy%2FLMS%2Bh3Z0bf0o%2Byg3vt1xS31P4nHYIOvtkNKQyzo1Q4ieo2yAUaHsEbtXUzPUscbBnWuaj971KFEm4xB%2FIJ%2Bw89F4hydGhxRNYo7YBkovWhMOzUv8kGOqUBBtJML9Izb7NaeYZL7PmVo4teUf1urKCUV5DjWwl5ernjt%2BRijlPenTs6JW1xxW2vMxCEWnp7cysnvtHpDEIVaBaUdpi0mrIjcmEKBuLRpOmeM4tDnYp3JPh4dj3IjoPpvdidKQCJaIcxETAz6F0Xv%2BMmUViKQNjaq%2FjlRQrNnvlvy13YcUYvc9J5miLsJcp7eUdO28L1ORODyYvbc7XvLePted2k&X-Amz-Signature=ef7fc3bd35c462af98d6b75636ef47ac1f650fda2c7c228a42d10498957b7cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

