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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDOSQH6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGai41b49Gfk8U8SO7hUQm6eA8Fw7KfvHwV7oFP5cNIaAiBAv6j771S7H%2BujGhlY3eRaM5DPjcFv7lbLALamyx6drSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMljyNsweTD%2BbE%2FAoOKtwDRMK1GNAFekfvogznHPNjmJMPv80he7IJvGYe0Jx32TZ950q0022kGCGkCOJOJO8jW8bPRJHwZJYDh1aPbDSkv3pipF8QEt0Wq7%2F86gB%2BRVSPGWkHjs3fHluiQmCe0I%2FI93PzHeu253SOAuGCKvPDaWe1rcwPlkvw8oFtFYI%2Bt3wWhgSBXktVWHDdS93hhbUIqApSfuPZKNCMy%2FbbkYKethxrSjP7ZUZr5a50iuAp%2FTk%2BfsSHi1K0nO6%2FX9ix6C7BzkzlMQ9plWzWx524kIFyg73ANbqDXyp0DX5EMpsLcZsRQWfrSq%2F%2FBG1HE1S8sOOilkExB%2BtBU9EBzvnmCrkVZC5PE4w1jPpcOmT6%2FbvlShxdQU937%2BSgyRx0xUAY%2FdbpzlK1hyvUWPrr%2FOBL4Wvo8zgveWpdeWXEUnSyPW7IhaCa0P%2B%2F%2Fiy5GW%2BiIQ%2BCOSboPjv6SfICe%2BBlVx7nNlIMeip3ubv8Dg72pPJ4oyFK3p5S24hh%2FCUT1EJzSDlIex1GoGaJ1X4wjKHe%2BE63dh7UYjf7A9BCb4hkI5GZmg63in9CP3MN%2B4ob4LbiA7qYwuusQ%2Bgp1f%2FoYJ59zWj0HtKPqLfCJmdzahF70wikUmgn4bS3hxWb6QHWO7r1b1sw2NS%2FyQY6pgEaQbRM91GKH%2FxlFAQOvpCmOH6%2F237aHKw9gf0zi58EEcIKOgDT8jikEqjIb3oxJKt7ofpQnn9AJ%2F2hJBwsp1Df7vySCIkUxN0L152K8%2Fc92j%2FuaMrz6aVlz0AIz0mDv6qk6AfcsK8XFzGhgB5rzybBMehJi8mwUK8WXe3U9JuKEctaHMeoVcAjUvWvL7auSNYS%2F4lbWqkmZ%2FREgDVJFyjvkuGFIGzz&X-Amz-Signature=be9283ccb4414737c10e658ae45c87c6a2c525f9eef3d3eb4eb2dfba298ab68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

