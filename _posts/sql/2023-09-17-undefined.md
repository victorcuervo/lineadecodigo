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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6S6AV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNOcCylxWFzryhKcovMN%2FtnDOBqslxEqoIO7lSfnZfrgIgVF3t9DwG%2F9yvPo2hFV5QckSkq3cCLPzuuPJbF4j%2FXoEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNCfdWCnaEVJlDIsICrcA2rakGgfQMNL9gcEhAHYbEKLxdA1zGNL1o1jlDhJw9oV3EQC3r81C26GU%2FTs3jiett1pmJ2aPy83b%2Bong2w9IS8qH29O3mL%2Bd9NvXa7G%2FN7phbKlHtp%2BNh9ap0AhZeWBOKSPFzoD5gfpcoSSEM9Ks69R3absG5GwQx4te%2BPyIJHclesWOHcn7ySEmBGsJYAiTIw%2FzUJ%2BslrKOQd%2B9BzWagQUT6ZXeRxVizCvhEK63dRpnwUeVu%2FDrE9cL9vvg9%2FXlCvBY%2FT7TUagdicaKsOVuhkAgWA1czNoyFT1jroFlsyhSruZ1OgaF%2Fx2WbHgiQA3pwsIzr1m3g%2BVAMqGkhBHkia4nWLkT5PV8HmbFI09VmL43JUD25CZNeGh4BiXWg2C0ZOLjh6hc97iYUYUN7H4f9LTMOYpmZeXjM%2FpdmJvVwzwJ9Cfki4EuLX%2BrA6TbKeGm%2FpufRTXwJTnTb%2BFODNIaeqpMH3rP77mT8eGBCRtaMacMPHuDlRxijRC8QV3tZOQhyWECxhgGDLVehf%2FZVD6f6nqHfFzjGPk6l7kfKQrTsX7RNYDfGkAVCkuvuHJ6YJQujLp6eljYBB7AN8zRDPAA8NJmJoo%2F84y4iRhU%2Fq9vb0AVi2sufARP%2FOKBEEKMMXNwMkGOqUBydlI6LcrVQ%2FL%2FcbpujkU8%2B09%2B5l84GpdEnD%2BVXVNSTYFRb0U4FwbrlPQLncOqLLjpT%2BjetqgFkexThhkFGzcoeHI5PQ04Y1Ft%2FYWJXyVw5nBAedflsz6XXmHsovwCmH4AC9AgNV3UXWfvButP7eyLmeSHMRM%2BDDCO%2BKNjV5IPpXLa826WRIeikTv9jYKXh73Tc6j%2FK0a6Cv5XsyiD7fSPXJmUiuw&X-Amz-Signature=902053b4c7d414de230412c343df8ac7857093f3a6dc2800386098785acadca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

