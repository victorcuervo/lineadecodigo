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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGHFYSG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD6xbAkr1R4GH%2Bb8T2tKKEJ2z9%2BVmyiEF5mxdwfGmMefgIgF5IiP9hadu2hfO63BjXKxBs%2F3puFFR8IbpGvjV6wAT4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL7rSpqh7jOmam%2FH7CrcAziJA2nym7vYm%2BOnh6x%2B%2F7iK6Nlj3jx8I85fzMA9G1%2FzANkK4lPUDH4y5476RDJhdFeZ5K5SrUy8%2BzuEyAWrhh2Il290c4L04mU%2FKRm9uc%2FNrv0iPuNlRVO63G34VB2Wh9Bo2XcFAobdw9jTSMrhVOCsODp15f77zgNP4BRHG7nw5FfdaemWHaIOFk7sqTpHTr9zTcx%2BHLUQrRT1umMPzYGhUCeyOniSs3905pjh%2FKMtUmI5M%2FlDDHqv1eYLABgrGQrDapPh3K4dDAvjcPKzM5qV8Cf2QFnJGGlhZyp2sOTpDVo5GdrJIoqiFrll0J5bD8dF5HVUEm8mDDVPxjRElT97rU7X8xtHyd7eeJPFIkWX4rIrSfTcj9Eax1b8TJdOxxcKpgyBkXFSayp3VLy3U4GJJeE1FW1kly%2BHqRitojlzIljhE4jArYCm8O2xxm0ygj2qtOLMc1zo3KgF8xkG%2FEfGwQESWeifwplTlm%2BGi6pWXqi3M73rI9p7wSZUFc4N9ijO2Bg78JQIbt%2Bb7sDVArt%2BVAX%2B9Zq%2Fsmhcj3BHPwYluti8esKXERcRTtAfuAV8yEyRhdOutc2nLlEceGllRjVMZxkQ6IH8HHwJlB9%2BlfZdsQBiSSjpeZxr7hUtMI2HwckGOqUBr3oHYQsvMbGyaztFB4CBcOQnweLOnLVEsj%2B16vOnm7Y9pjF0HjdDf4e1MQAC1Mg4mzrtI2WqqYK5lQ3WF4TGFFdFyPEg%2F6BPOp5rM8eINGZZhDHSvKWmNyVYRwic4hhuqiBeALDHzln7P13B0P6E3UUiy2TQWp61U33ETVbwu5%2BulVS4c%2FOIGA3vzFjUENuUUIxW0xgHi8Vy9pAroUmf%2F2NkzWYA&X-Amz-Signature=45e55bcc44ea40169a0466c9a683ad94c70acfb7cc862b4b3d176d948b63d15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

