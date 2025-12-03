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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK65NIZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAkRn%2FbC4MA0UOfj%2FFF6LBDBO28G%2BeFAIYLFn5K1%2Be3IAiEA9twRSfWocNFuT%2B7NRuhqGvr%2FUL%2BzG3%2B288S5MIs%2BbGsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDM8S60cPWQZPVqYasircA0rupXMbekzow%2BYLatakI%2BkW1Qr1yfCh020EVVdEa%2BraunbXpRKpZ36ydjzbDsMojYoVscOQRIWxsILJzVL%2FrFMlTGMrDWKuYzTrKutkdYFXvGhycha6BvLB%2FVZsCgZBEjyzPc5mGlhk5AaFl9s0Eg%2FIS%2FC%2Bb4fQ60%2FRTStglYq%2BwcDDzMlP0GEZ73RVSe212rE9izJa7WJ0O0JahQsDiPAv8TWqYCy2dJ0KaIAAbR3yOZrgHRCePtDXUjp6E1n36DzZlr8bI3sPirHmxgtsc6dDwgNdkm77kxF36DTlhs0NXpAU%2BPXRMcRaWCKIYrO7kKdakrs1N5NSErNmlbP8h7QB1k63xnj9R7Wk21xlhcPv9FOcPyfo11K4KceHhWwi6aDkoTkaX0uLKo1%2FnRdFJR4xVHM6uBPApWpVIOYMibVaOooJ6nimLlSBI3BxsAyx13VigtVoUrvc9vv6B9ZFuK%2B%2FIHtZUvuTc5HGSUNx5BA3Y9qDxYUfMxx9T0Uij4cBbyGOx68DwiXk%2BIMw5690OiEis60pM9zsvHS1SkCtXmFpZQcaXLWU1giT98oQZOYjcGDtqRXRx2hVvYKTEdgwvhv%2FfUmDOOSSej1mrV%2BXljcg4deskvOgSsl2KuXFMP%2BtwMkGOqUBkvPTur8l8sQzHUDw28RtOaObvjRMU%2Fsg92qDdx0oBHMz5sx0a1CVXOG5hTOqtttBjUMpnSFgXCiDaDkcEjBcio1q4EjVNQnIg1BYCxoJgXgCqAzaISBG0nhyisSm%2FnQWAPCP32HNFo69YCHv9Pq3%2FX%2FmRB77AqV8uj%2FP8at5RoRAMeL5Ux45Nh4suo5XYkRdK0JlkS1pcUPoSs7fzTGeL3%2FzqqK0&X-Amz-Signature=30b313286001abab1dbcb481ea0171fbf2d03495a704787ba9fecffedebcaaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

