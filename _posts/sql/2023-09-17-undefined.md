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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPKEDBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEdDSh9VfzgoxUxVgaGMyEVqujnMzWKPCTW2k5PbBrTvAiEA2%2FZgYviLgrEFvVRrMT6hMB5i7rZqD9VwiG8MLF1iqBoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDP9NCOGMnTY5JNKRNyrcA2xI3Yyx7VTeIGac0e%2B2HMAzEejgRmkQ7d1LedPhhvqM7VnCapZlaySCN2O9Ftg3eXTKHycr3e1%2FB%2FhfHVft4Z2exPw%2BUj6oLRTVo1JXNAw%2BpPT0wqdN18TzMkVNSVCOjalse4FCQCnJVw7%2BBDvVQMu%2F%2FLtAAPD3lvkKbWIu9rLD%2BqqJaMv7CfGZdwC%2Br6b9SUYQq3t4yTmRLCfYUf9JZBV%2F3YzSQZjCeEwTUQvGKLWpnEjXgCHqPh913uaJQ1o5zKFf38pRhH%2B5TGL6KDI8w%2BbNrMVul5pt0OSviVFfwhag%2FyqFfsRtdtSGkveEKJM1It6%2BaUIijyyuhKeEA5u3JcfQK1x9AvGDEdL%2BQYDLeR25XN0aLNKAba92mojg5ynxo%2FYaQZnfX74SkP18SKTTUTIyl4662MNahvrFdMQZL2GlY0GKF2lzvoHgf8cPa8pwVOUO3h%2BkNI4rDopkUXAVWbrL02WYjaiMb9%2B0hdCYuXEdLFOes42MJNQ4BuL5IXt7sRe%2FEt2%2BAVsqveoH2pX7NU6JhczjR6DPe%2FIMg6dskRrOSax9totNuTWuMiCBXgf3vAalo%2BKiO1U8tkdwXPTuulqn0Ey%2B9y30wDGpXiEkNeGklNcfN9g0V%2BxpOT7NMJ%2F%2FvckGOqUBSUvQR2XrAsSCzVDXCpt2FgaBvfCy7LEgmH4kjI%2By7UMXM6tUeBvcJDTe7AqbiYBcwqAS%2BgsexV2eXcCsPM2Nx7uDTIusJGRuEvPNImMnjoqP6H93qK0Y5257ww0rrjwLP3ip4KvmiBbAkDUPyCMcTA0cQkMBUTnSaJgtDmOYpPf4lb3oZ1UTx5YrBjrWaB5hZ9uiRx2mxX0CX24qI5gUiS8IQBq2&X-Amz-Signature=a27a73858e5f1bee480ee6d0abfd56310a8da45b005ff03dd023d62409e693d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

